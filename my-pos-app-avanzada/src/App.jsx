import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, serverTimestamp } from 'firebase/firestore';
// El CSS ahora está incrustado al final del componente para evitar problemas de ruta.

// --- Funciones Auxiliares de Firebase y Configuración ---
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// Configuración de Firebase: Estos son los datos REALES de tu proyecto de Firebase que proporcionaste.
const defaultFirebaseConfig = {
    apiKey: "AIzaSyAt5grQ4yMiIG8THJnlKImAt2j5amPcZ_s",
    authDomain: "my-pos-app-avanzada.firebaseapp.com",
    projectId: "my-pos-app-avanzada",
    storageBucket: "my-pos-app-avanzada.firebasestorage.app",
    messagingSenderId: "19454132579",
    appId: "1:19454132579:web:fcc31bdf2e251143269356",
    measurementId: "G-XR8S634QPM"
};

const firebaseConfig = typeof __firebase_config !== 'undefined' && Object.keys(JSON.parse(__firebase_config)).length > 0
    ? JSON.parse(__firebase_config)
    : defaultFirebaseConfig;

const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

let firebaseAppInstance;
let dbInstance;
let authInstance;

// Inicialización de Firebase (se ejecuta una vez y establece las instancias globales)
const initFirebase = () => {
    if (!firebaseAppInstance) {
        try {
            firebaseAppInstance = initializeApp(firebaseConfig);
            dbInstance = getFirestore(firebaseAppInstance);
            authInstance = getAuth(firebaseAppInstance);
            console.log("Firebase inicializado con éxito.");
        } catch (error) {
            console.error("Error al inicializar Firebase. Asegúrate de que firebaseConfig sea válido:", error);
            // Podrías mostrar un error en la UI aquí si la inicialización falla
        }
    }
};

// --- Componente Principal de la Aplicación ---
const App = () => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState('invitado'); // 'invitado', 'empleado', 'admin'
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState('dashboard');

    // Estados para Gestión de Productos
    const [products, setProducts] = useState([]);
    const [newProductName, setNewProductName] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newProductStock, setNewProductStock] = useState('');
    const [editingProduct, setEditingProduct] = useState(null);

    // Estados para Gestión de Pedidos y Mesas
    const [tables, setTables] = useState([
        { id: 'mesa-1', name: 'Mesa 1', status: 'free' },
        { id: 'mesa-2', name: 'Mesa 2', status: 'occupied' },
        { id: 'mesa-3', name: 'Mesa 3', status: 'cleaning' },
        { id: 'mesa-4', name: 'Mesa 4', status: 'free' },
    ]);
    const [selectedTable, setSelectedTable] = useState(null);
    const [currentOrder, setCurrentOrder] = useState([]); // [{ product, quantity }]
    const [productSearchTerm, setProductSearchTerm] = useState('');

    // --- Efecto de Inicialización de Firebase y Autenticación ---
    useEffect(() => {
        initFirebase(); // Asegura que Firebase esté inicializado

        // Solo intentar autenticar si authInstance ha sido inicializada con éxito
        if (authInstance) {
            const unsubscribeAuth = onAuthStateChanged(authInstance, async (currentUser) => {
                if (currentUser) {
                    setUser(currentUser);
                    // Lógica de roles: Ejemplo simple. En un sistema real, los roles
                    // se obtendrían de Firestore o de Custom Claims de Firebase Auth.
                    if (currentUser.uid === 'admin-uid-ejemplo') { // Reemplaza con un UID de administrador real
                        setRole('admin');
                    } else {
                        setRole('empleado');
                    }
                } else {
                    setUser(null);
                    setRole('invitado');
                    try {
                        if (initialAuthToken) {
                            await signInWithCustomToken(authInstance, initialAuthToken);
                        } else {
                            await signInAnonymously(authInstance);
                        }
                    } catch (error) {
                        console.error("Error al autenticar:", error);
                    }
                }
                setLoading(false);
            });
            return () => unsubscribeAuth();
        } else {
            setLoading(false); // Si Firebase Auth no se inicializó, terminar la carga.
            console.error("Firebase Auth no está inicializado. No se pudo configurar onAuthStateChanged.");
        }
    }, []); // Dependencia vacía para que se ejecute solo una vez al montar

    // --- Efecto para Cargar Productos de Firestore (en tiempo real) ---
    useEffect(() => {
        // Solo intentar cargar productos si dbInstance y user están listos
        if (dbInstance && user) {
            const productsCollectionRef = collection(dbInstance, `artifacts/${appId}/users/${user.uid}/products`);
            const q = query(productsCollectionRef);

            const unsubscribeProducts = onSnapshot(q, (snapshot) => {
                const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsData);
            }, (error) => {
                console.error("Error al obtener productos:", error);
            });

            return () => unsubscribeProducts();
        }
    }, [dbInstance, user, appId]); // Dependencias para re-ejecutar si dbInstance, user o appId cambian

    // --- Manejadores de Autenticación ---
    const handleLogout = async () => {
        if (authInstance) {
            try {
                await signOut(authInstance);
                setUser(null);
                setRole('invitado');
                setCurrentPage('dashboard');
            } catch (error) {
                console.error("Error al cerrar sesión:", error);
            }
        }
    };

    // --- Funciones de Gestión de Productos (CRUD) ---
    const addProduct = async () => {
        if (!newProductName || !newProductPrice || !newProductStock || !user || !dbInstance) return;
        try {
            const productsCollectionRef = collection(dbInstance, `artifacts/${appId}/users/${user.uid}/products`);
            await addDoc(productsCollectionRef, {
                name: newProductName,
                price: parseFloat(newProductPrice),
                stock: parseInt(newProductStock, 10),
                createdAt: serverTimestamp(),
            });
            setNewProductName('');
            setNewProductPrice('');
            setNewProductStock('');
        } catch (error) {
            console.error("Error al añadir producto:", error);
            alert("Error al añadir el producto. Verifique la consola para más detalles.");
        }
    };

    const updateProduct = async (productId) => {
        if (!editingProduct || !user || !dbInstance) return;
        try {
            const productDocRef = doc(dbInstance, `artifacts/${appId}/users/${user.uid}/products`, productId);
            await updateDoc(productDocRef, {
                name: editingProduct.name,
                price: parseFloat(editingProduct.price),
                stock: parseInt(editingProduct.stock, 10),
            });
            setEditingProduct(null);
        } catch (error) {
            console.error("Error al actualizar producto:", error);
            alert("Error al actualizar el producto. Verifique la consola para más detalles.");
        }
    };

    const deleteProduct = async (productId) => {
        if (!user || !dbInstance) return;
        try {
            const productDocRef = doc(dbInstance, `artifacts/${appId}/users/${user.uid}/products`, productId);
            await deleteDoc(productDocRef);
        } catch (error) {
            console.error("Error al eliminar producto:", error);
            alert("Error al eliminar el producto. Verifique la consola para más detalles.");
        }
    };

    // --- Funciones de Gestión de Pedidos ---
    const addToOrder = (product) => {
        setCurrentOrder(prevOrder => {
            const existingItem = prevOrder.find(item => item.product.id === product.id);
            if (existingItem) {
                return prevOrder.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevOrder, { product, quantity: 1 }];
            }
        });
    };

    const updateOrderQuantity = (productId, delta) => {
        setCurrentOrder(prevOrder => {
            const updatedOrder = prevOrder.map(item =>
                item.product.id === productId
                    ? { ...item, quantity: item.quantity + delta }
                    : item
            ).filter(item => item.quantity > 0); // Eliminar si la cantidad llega a 0
            return updatedOrder;
        });
    };

    const removeFromOrder = (productId) => {
        setCurrentOrder(prevOrder => prevOrder.filter(item => item.product.id !== productId));
    };

    const calculateOrderTotal = () => {
        return currentOrder.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    };

    const finalizeOrder = () => {
        if (currentOrder.length === 0) {
            alert('El pedido está vacío. Añade productos antes de finalizar.');
            return;
        }
        if (!selectedTable) {
            alert('Por favor, selecciona una mesa para este pedido.');
            return;
        }

        const orderDetails = currentOrder.map(item =>
            `${item.product.name} (x${item.quantity}) - $${(item.product.price * item.quantity).toFixed(2)}`
        ).join('\n');

        const confirmation = window.confirm(
            `Confirmar pedido para ${selectedTable.name}:\n\n` +
            `${orderDetails}\n\n` +
            `Total: $${calculateOrderTotal().toFixed(2)}\n\n` +
            `¿Deseas finalizar este pedido?`
        );

        if (confirmation) {
            // Aquí iría la lógica para guardar el pedido en Firestore
            // y actualizar el estado de la mesa si fuera necesario.
            alert(`Pedido para ${selectedTable.name} finalizado con éxito! Total: $${calculateOrderTotal().toFixed(2)}`);
            setCurrentOrder([]); // Limpiar el pedido
            setSelectedTable(null); // Deseleccionar la mesa
            setCurrentPage('dashboard'); // Volver al dashboard o a mesas
        }
    };

    // --- Funciones de Gestión de Mesas ---
    const handleTableSelect = (tableId) => {
        const table = tables.find(t => t.id === tableId);
        setSelectedTable(table);
        setCurrentPage('orderReception'); // Navegar a recepción de pedidos al seleccionar mesa
    };

    // Filtrar productos para la búsqueda
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(productSearchTerm.toLowerCase())
    );

    // --- Renderizado Condicional de Páginas ---
    const renderPage = () => {
        if (loading) {
            return (
                <div className="loading-container">
                    <p>Cargando aplicación...</p>
                </div>
            );
        }

        if (!user) {
            return (
                <div className="error-container">
                    <h2>Acceso Requerido</h2>
                    <p>No se pudo autenticar al usuario. Intente recargar la página.</p>
                </div>
            );
        }

        const currentUserId = user.uid; // Puedes usar esto en algún lugar si lo necesitas

        switch (currentPage) {
            case 'dashboard':
                return (
                    <div className="page-content">
                        <h2 className="page-title">Dashboard</h2>
                        <div className="dashboard-grid">
                            <div className="dashboard-card blue">
                                <h3>Recepción de Pedidos</h3>
                                <p>Gestiona y registra nuevos pedidos.</p>
                                <button className="dashboard-card-button" onClick={() => setCurrentPage('orderReception')}>
                                    Ir a Pedidos
                                </button>
                            </div>
                            <div className="dashboard-card green">
                                <h3>Visualización de Mesas</h3>
                                <p>Consulta el estado de las mesas y su ocupación.</p>
                                <button className="dashboard-card-button" onClick={() => setCurrentPage('tableOverview')}>
                                    Ir a Mesas
                                </button>
                            </div>
                            <div className="dashboard-card purple">
                                <h3>Gestión de Productos</h3>
                                <p>Administra tu inventario y productos disponibles.</p>
                                <button className="dashboard-card-button" onClick={() => setCurrentPage('productManagement')}>
                                    Ir a Productos
                                </button>
                            </div>
                            <div className="dashboard-card yellow">
                                <h3>Reportes de Ventas</h3>
                                <p>Análisis detallado de tus ventas.</p>
                                <p className="coming-soon-text">Próximamente...</p>
                            </div>
                            <div className="dashboard-card red">
                                <h3>Contabilidad y Nómina</h3>
                                <p>Control financiero y de personal.</p>
                                <p className="coming-soon-text">Próximamente...</p>
                            </div>
                            <div className="dashboard-card teal">
                                <h3>Facturación y Pagos</h3>
                                <p>Procesa pagos y genera facturas.</p>
                                <p className="coming-soon-text">Próximamente...</p>
                            </div>
                        </div>
                    </div>
                );

            case 'productManagement':
                // Solo administradores pueden gestionar productos en este ejemplo
                if (role !== 'admin') {
                    return (
                        <div className="page-content">
                            <h2 className="page-title">Acceso Denegado</h2>
                            <p>No tienes permiso para acceder a esta sección.</p>
                        </div>
                    );
                }
                return (
                    <div className="page-content">
                        <h2 className="page-title">Gestión de Productos</h2>

                        {/* Formulario para Añadir/Editar Producto */}
                        <div className="add-product-form">
                            <h3>{editingProduct ? 'Editar Producto' : 'Añadir Nuevo Producto'}</h3>
                            <div className="form-group">
                                <label htmlFor="productName" className="form-label">Nombre del Producto</label>
                                <input
                                    id="productName"
                                    type="text"
                                    className="form-input"
                                    placeholder="Nombre del Producto"
                                    value={editingProduct ? editingProduct.name : newProductName}
                                    onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, name: e.target.value }) : setNewProductName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="productPrice" className="form-label">Precio</label>
                                <input
                                    id="productPrice"
                                    type="number"
                                    className="form-input"
                                    placeholder="Precio"
                                    value={editingProduct ? editingProduct.price : newProductPrice}
                                    onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, price: e.target.value }) : setNewProductPrice(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="productStock" className="form-label">Stock</label>
                                <input
                                    id="productStock"
                                    type="number"
                                    className="form-input"
                                    placeholder="Stock"
                                    value={editingProduct ? editingProduct.stock : newProductStock}
                                    onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, stock: e.target.value }) : setNewProductStock(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    className="primary-button"
                                    onClick={editingProduct ? () => updateProduct(editingProduct.id) : addProduct}
                                >
                                    {editingProduct ? 'Guardar Cambios' : 'Añadir Producto'}
                                </button>
                                {editingProduct && (
                                    <button
                                        className="secondary-button"
                                        style={{ marginLeft: '10px' }}
                                        onClick={() => setEditingProduct(null)}
                                    >
                                        Cancelar
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Lista de Productos */}
                        <h3>Productos en Inventario</h3>
                        {products.length === 0 ? (
                            <p>No hay productos en el inventario.</p>
                        ) : (
                            <div className="product-grid">
                                {products.map((product) => (
                                    <div key={product.id} className="product-item">
                                        <h3>{product.name}</h3>
                                        <p>Precio: <span className="price">${product.price.toFixed(2)}</span></p>
                                        <p>Stock: {product.stock}</p>
                                        <div className="product-actions">
                                            <button className="edit-button" onClick={() => setEditingProduct(product)}>Editar</button>
                                            <button className="delete-button" onClick={() => deleteProduct(product.id)}>Eliminar</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );

            case 'orderReception':
                return (
                    <div className="page-content">
                        <h2 className="page-title">Recepción de Pedidos</h2>

                        <div className="order-reception-layout">
                            {/* Panel de Selección de Productos */}
                            <div className="product-selection-panel">
                                <h3>Seleccionar Productos</h3>
                                <input
                                    type="text"
                                    className="product-search"
                                    placeholder="Buscar producto..."
                                    value={productSearchTerm}
                                    onChange={(e) => setProductSearchTerm(e.target.value)}
                                />
                                <div className="order-product-list">
                                    {filteredProducts.length === 0 ? (
                                        <p>No se encontraron productos.</p>
                                    ) : (
                                        filteredProducts.map(product => (
                                            <div
                                                key={product.id}
                                                className={`order-product-card ${currentOrder.some(item => item.product.id === product.id) ? 'selected' : ''}`}
                                                onClick={() => addToOrder(product)}
                                            >
                                                <img src={product.image || `https://placehold.co/80x80/CCCCCC/666666?text=${product.name.substring(0,4)}`} alt={product.name} />
                                                <h4>{product.name}</h4>
                                                <p className="price">${product.price.toFixed(2)}</p>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* Panel de Resumen del Pedido */}
                            <div className="order-summary-panel">
                                <h3>Resumen del Pedido</h3>
                                {selectedTable && <p>Mesa seleccionada: <strong>{selectedTable.name}</strong></p>}
                                <ul className="order-items-list">
                                    {currentOrder.length === 0 ? (
                                        <li>El pedido está vacío.</li>
                                    ) : (
                                        currentOrder.map(item => (
                                            <li key={item.product.id} className="order-item">
                                                <span>{item.product.name} (x{item.quantity})</span>
                                                <div className="item-quantity-control">
                                                    <button className="quantity-button" onClick={() => updateOrderQuantity(item.product.id, -1)}>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button className="quantity-button" onClick={() => updateOrderQuantity(item.product.id, 1)}>+</button>
                                                    <span style={{ minWidth: '60px', textAlign: 'right' }}>${(item.product.price * item.quantity).toFixed(2)}</span>
                                                    <button className="remove-item-button" onClick={() => removeFromOrder(item.product.id)}>Eliminar</button>
                                                </div>
                                            </li>
                                        ))
                                    )}
                                </ul>
                                <div className="order-summary-total">
                                    Total: ${calculateOrderTotal().toFixed(2)}
                                </div>
                                <button className="checkout-order-button" onClick={finalizeOrder}>
                                    Finalizar Pedido
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 'tableOverview':
                return (
                    <div className="page-content">
                        <h2 className="page-title">Visualización de Mesas</h2>
                        <div className="tables-grid">
                            {tables.map(table => (
                                <div
                                    key={table.id}
                                    className={`table-card ${table.status} ${selectedTable && selectedTable.id === table.id ? 'selected' : ''}`}
                                    onClick={() => handleTableSelect(table.id)}
                                >
                                    <h3>{table.name}</h3>
                                    <p>Estado: {table.status === 'free' ? 'Libre' : table.status === 'occupied' ? 'Ocupada' : 'Limpieza'}
                                        <span className={`status-indicator ${table.status}`}></span>
                                    </p>
                                </div>
                            ))}
                        </div>
                        {selectedTable && (
                            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                <p>Has seleccionado {selectedTable.name}. Haz clic en "Pedidos" para iniciar un nuevo pedido para esta mesa.</p>
                            </div>
                        )}
                    </div>
                );

            default:
                return (
                    <div className="page-content">
                        <h2 className="page-title">Página No Encontrada</h2>
                        <p>La página que intentas acceder no existe.</p>
                    </div>
                );
        }
    };

    return (
        <div>
            {/* CSS incrustado aquí */}
            <style>
                {`
                    /* --- Fuentes y Estilos Globales --- */
                    body {
                        font-family: 'Inter', sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f0f2f5; /* Fondo general más suave */
                        color: #333;
                        line-height: 1.6;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                    }

                    .container {
                        max-width: 1200px;
                        margin: 20px auto;
                        padding: 0 15px;
                        flex-grow: 1;
                        width: 100%; /* Asegura que ocupe todo el ancho disponible */
                        box-sizing: border-box; /* Incluye padding y border en el ancho total */
                    }

                    /* --- Header --- */
                    header {
                        background-color: #2c3e50; /* Azul oscuro */
                        color: white;
                        padding: 15px 0;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }

                    .header-content {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 15px;
                    }

                    .header-title {
                        margin: 0;
                        font-size: 2.2em;
                        font-weight: 700;
                    }

                    .nav-menu {
                        display: flex;
                        gap: 25px;
                        align-items: center;
                    }

                    .nav-button {
                        background: none;
                        border: none;
                        color: white;
                        padding: 8px 12px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 1.05em;
                        font-weight: 500;
                        transition: background-color 0.3s ease, color 0.3s ease;
                    }

                    .nav-button:hover {
                        background-color: #34495e; /* Un tono más claro del azul oscuro */
                        color: #ecf0f1;
                    }

                    .nav-button.active {
                        background-color: #3498db; /* Azul de énfasis */
                        font-weight: 600;
                    }

                    .user-info {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        background-color: #34495e; /* Gris más oscuro para info de usuario */
                        border-radius: 20px;
                        padding: 5px 12px;
                        font-size: 0.85em;
                        color: #ecf0f1;
                    }

                    .user-info span:first-child {
                        color: #bdc3c7;
                    }

                    .user-info span:last-child {
                        font-weight: 600;
                    }

                    .logout-button {
                        background-color: #e74c3c; /* Rojo para cerrar sesión */
                        color: white;
                        padding: 8px 15px;
                        border-radius: 20px;
                        font-weight: 600;
                        transition: background-color 0.3s ease, box-shadow 0.3s ease;
                        border: none;
                        cursor: pointer;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    }

                    .logout-button:hover {
                        background-color: #c0392b;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                    }

                    /* --- Loader y Error --- */
                    .loading-container, .error-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: calc(100vh - 100px); /* Ajusta por la altura del header/footer */
                        font-size: 1.5em;
                        color: #555;
                        text-align: center;
                    }

                    .error-container h2 {
                        color: #e74c3c;
                    }

                    /* --- Layout de la Página --- */
                    .page-content {
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
                        margin-bottom: 20px;
                    }

                    .page-title {
                        font-size: 2em;
                        font-weight: 700;
                        color: #2c3e50;
                        margin-bottom: 25px;
                        padding-bottom: 10px;
                        border-bottom: 2px solid #ecf0f1;
                    }

                    /* --- Dashboard --- */
                    .dashboard-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 25px;
                    }

                    .dashboard-card {
                        padding: 25px;
                        border-radius: 10px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                        color: white;
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }

                    .dashboard-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
                    }

                    .dashboard-card.blue { background-color: #3498db; }
                    .dashboard-card.green { background-color: #2ecc71; }
                    .dashboard-card.purple { background-color: #9b59b6; }
                    .dashboard-card.yellow { background-color: #f1c40f; }
                    .dashboard-card.red { background-color: #e74c3c; }
                    .dashboard-card.teal { background-color: #1abc9c; }

                    .dashboard-card h3 {
                        margin-top: 0;
                        font-size: 1.5em;
                        font-weight: 600;
                        margin-bottom: 10px;
                    }

                    .dashboard-card p {
                        font-size: 1em;
                        margin-bottom: 15px;
                    }

                    .dashboard-card-button {
                        background-color: rgba(255, 255, 255, 0.2);
                        border: 1px solid rgba(255, 255, 255, 0.5);
                        color: white;
                        padding: 10px 20px;
                        border-radius: 20px;
                        cursor: pointer;
                        font-weight: 600;
                        transition: background-color 0.3s ease, border-color 0.3s ease;
                    }

                    .dashboard-card-button:hover {
                        background-color: rgba(255, 255, 255, 0.4);
                        border-color: white;
                    }

                    .coming-soon-text {
                        font-size: 0.9em;
                        opacity: 0.8;
                        margin-top: 10px;
                    }

                    /* --- Formularios y Controles (General) --- */
                    .form-group {
                        margin-bottom: 15px;
                    }

                    .form-label {
                        display: block;
                        margin-bottom: 5px;
                        font-weight: 600;
                        color: #555;
                    }

                    .form-input, .form-select {
                        width: calc(100% - 22px); /* Ajusta por padding y border */
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        font-size: 1em;
                        transition: border-color 0.3s ease, box-shadow 0.3s ease;
                    }

                    .form-input:focus, .form-select:focus {
                        border-color: #3498db;
                        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
                        outline: none;
                    }

                    .primary-button {
                        background-color: #3498db;
                        color: white;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 1em;
                        font-weight: 600;
                        transition: background-color 0.3s ease, transform 0.2s ease;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    }

                    .primary-button:hover {
                        background-color: #2980b9;
                        transform: translateY(-1px);
                    }

                    .secondary-button {
                        background-color: #95a5a6;
                        color: white;
                        padding: 8px 15px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 0.9em;
                        transition: background-color 0.3s ease;
                    }

                    .secondary-button:hover {
                        background-color: #7f8c8d;
                    }

                    /* --- Product Management --- */
                    .product-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 20px;
                        margin-top: 20px;
                    }

                    .product-item {
                        background-color: #fcfcfc;
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                        padding: 15px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
                        display: flex;
                        flex-direction: column;
                    }

                    .product-item h3 {
                        margin-top: 0;
                        color: #3498db;
                        font-size: 1.2em;
                        font-weight: 600;
                    }

                    .product-item p {
                        margin: 5px 0;
                        font-size: 0.95em;
                        color: #555;
                    }

                    .product-item .price {
                        font-weight: 700;
                        color: #2ecc71;
                        font-size: 1.1em;
                    }

                    .product-actions {
                        margin-top: 15px;
                        display: flex;
                        gap: 10px;
                        justify-content: flex-end;
                    }

                    .edit-button {
                        background-color: #f39c12; /* Naranja */
                        color: white;
                        border: none;
                        padding: 8px 12px;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    .edit-button:hover {
                        background-color: #e67e22;
                    }

                    .delete-button {
                        background-color: #e74c3c; /* Rojo */
                        color: white;
                        border: none;
                        padding: 8px 12px;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    .delete-button:hover {
                        background-color: #c0392b;
                    }

                    .add-product-form {
                        background-color: #f9f9f9;
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                        padding: 20px;
                        margin-bottom: 30px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    }

                    .add-product-form h3 {
                        font-size: 1.5em;
                        color: #2c3e50;
                        margin-top: 0;
                        margin-bottom: 20px;
                        padding-bottom: 10px;
                        border-bottom: 1px solid #e0e0e0;
                    }

                    /* --- Order Reception --- */
                    .order-reception-layout {
                        display: flex;
                        gap: 20px;
                        flex-wrap: wrap; /* Para responsividad */
                    }

                    .product-selection-panel {
                        flex: 2;
                        min-width: 300px;
                        background-color: #f9f9f9;
                        border-radius: 8px;
                        padding: 20px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    }

                    .order-summary-panel {
                        flex: 1;
                        min-width: 280px;
                        background-color: #f9f9f9;
                        border-radius: 8px;
                        padding: 20px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                        position: sticky;
                        top: 20px;
                        align-self: flex-start;
                    }

                    .product-search {
                        width: calc(100% - 22px);
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        margin-bottom: 15px;
                    }

                    .order-product-list {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                        gap: 15px;
                        margin-top: 15px;
                        max-height: 400px; /* Para scroll si hay muchos productos */
                        overflow-y: auto;
                        padding-right: 5px;
                    }

                    .order-product-card {
                        background-color: #ecf0f1; /* Fondo claro */
                        border: 1px solid #bdc3c7;
                        border-radius: 8px;
                        padding: 10px;
                        text-align: center;
                        cursor: pointer;
                        transition: background-color 0.2s ease, transform 0.2s ease;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }

                    .order-product-card:hover {
                        background-color: #dfe6e9;
                        transform: translateY(-2px);
                    }

                    .order-product-card.selected {
                        border: 2px solid #3498db;
                        background-color: #d6eaf8; /* Más azulado si está seleccionado */
                    }

                    .order-product-card img {
                        max-width: 100%;
                        height: 80px;
                        object-fit: contain;
                        margin-bottom: 5px;
                        border-radius: 4px;
                    }

                    .order-product-card h4 {
                        margin: 5px 0;
                        font-size: 0.95em;
                        color: #2c3e50;
                    }

                    .order-product-card .price {
                        font-weight: 700;
                        color: #2ecc71;
                        font-size: 1em;
                    }

                    .order-items-list {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        max-height: 300px;
                        overflow-y: auto;
                        border-bottom: 1px dashed #e0e0e0;
                        padding-bottom: 15px;
                        margin-bottom: 15px;
                    }

                    .order-item {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 8px 0;
                        border-bottom: 1px solid #f0f2f5;
                    }

                    .order-item:last-child {
                        border-bottom: none;
                    }

                    .item-quantity-control {
                        display: flex;
                        align-items: center;
                        gap: 5px;
                    }

                    .quantity-button {
                        background-color: #3498db;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        width: 25px;
                        height: 25px;
                        cursor: pointer;
                        font-weight: 600;
                        font-size: 1em;
                        transition: background-color 0.2s ease;
                    }

                    .quantity-button:hover {
                        background-color: #2980b9;
                    }

                    .remove-item-button {
                        background-color: #e74c3c;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        padding: 4px 8px;
                        cursor: pointer;
                        font-size: 0.8em;
                        transition: background-color 0.2s ease;
                    }

                    .remove-item-button:hover {
                        background-color: #c0392b;
                    }

                    .order-summary-total {
                        font-size: 1.8em;
                        font-weight: 700;
                        text-align: right;
                        margin-top: 15px;
                        color: #2c3e50;
                    }

                    .checkout-order-button {
                        background-color: #2ecc71;
                        color: white;
                        padding: 12px 20px;
                        border: none;
                        border-radius: 5px;
                        width: 100%;
                        cursor: pointer;
                        font-size: 1.1em;
                        font-weight: 600;
                        margin-top: 20px;
                        transition: background-color 0.3s ease;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    }

                    .checkout-order-button:hover {
                        background-color: #27ae60;
                    }

                    /* --- Table Overview --- */
                    .tables-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                        gap: 20px;
                    }

                    .table-card {
                        background-color: #fcfcfc;
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                        padding: 15px;
                        text-align: center;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
                        cursor: pointer;
                        transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease;
                    }

                    .table-card:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }

                    .table-card.free {
                        border-color: #2ecc71;
                        background-color: #e6ffe6; /* Muy verde claro */
                    }

                    .table-card.occupied {
                        border-color: #e74c3c;
                        background-color: #ffe6e6; /* Muy rojo claro */
                    }

                    .table-card.cleaning {
                        border-color: #f39c12;
                        background-color: #fff8e6; /* Muy amarillo claro */
                    }

                    .table-card.selected {
                        border: 3px solid #3498db;
                        background-color: #d6eaf8; /* Azul claro si está seleccionada */
                    }

                    .table-card h3 {
                        margin-top: 0;
                        font-size: 1.3em;
                        font-weight: 600;
                        color: #2c3e50;
                    }

                    .table-card p {
                        margin: 5px 0 0;
                        font-size: 0.9em;
                        color: #555;
                    }

                    .table-card.free h3 { color: #2ecc71; }
                    .table-card.occupied h3 { color: #e74c3c; }
                    .table-card.cleaning h3 { color: #f39c12; }

                    .status-indicator {
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        margin-left: 5px;
                    }

                    .status-indicator.free { background-color: #2ecc71; }
                    .status-indicator.occupied { background-color: #e74c3c; }
                    .status-indicator.cleaning { background-color: #f39c12; }

                    /* --- Footer --- */
                    footer {
                        background-color: #2c3e50;
                        color: white;
                        text-align: center;
                        padding: 15px 0;
                        margin-top: auto;
                        box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
                        font-size: 0.9em;
                    }

                    /* --- Responsividad --- */
                    @media (max-width: 768px) {
                        .header-content {
                            flex-direction: column;
                            gap: 10px;
                        }
                        .nav-menu {
                            flex-wrap: wrap;
                            justify-content: center;
                            gap: 10px;
                        }
                        .header-title {
                            font-size: 1.8em;
                        }
                        .user-info {
                            margin-top: 10px;
                        }

                        .app-layout, .order-reception-layout {
                            flex-direction: column;
                        }

                        .products-section, .order-section, .product-selection-panel, .order-summary-panel {
                            min-width: unset;
                            width: 100%;
                        }

                        .order-section, .order-summary-panel {
                            position: static;
                            top: unset;
                            align-self: unset;
                        }

                        .product-list, .order-product-list, .product-grid, .tables-grid {
                            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                        }
                    }

                    @media (max-width: 480px) {
                        .container {
                            margin: 10px auto;
                            padding: 0 10px;
                        }
                        .page-title {
                            font-size: 1.6em;
                        }
                        .dashboard-grid, .product-list, .order-product-list, .product-grid, .tables-grid {
                            grid-template-columns: 1fr; /* Una columna en pantallas muy pequeñas */
                        }
                        .dashboard-card, .product-item, .order-product-card, .table-card {
                            padding: 15px;
                        }
                    }
                `}
            </style>
            {/* Cabecera de la aplicación */}
            <header className="header">
                <div className="header-content">
                    <h1 className="header-title">Yimi POS Avanzado</h1>
                    <nav className="nav-menu">
                        <button className={`nav-button ${currentPage === 'dashboard' ? 'active' : ''}`} onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
                        <button className={`nav-button ${currentPage === 'orderReception' ? 'active' : ''}`} onClick={() => setCurrentPage('orderReception')}>Pedidos</button>
                        <button className={`nav-button ${currentPage === 'tableOverview' ? 'active' : ''}`} onClick={() => setCurrentPage('tableOverview')}>Mesas</button>
                        <button className={`nav-button ${currentPage === 'productManagement' ? 'active' : ''}`} onClick={() => setCurrentPage('productManagement')}>Productos</button>

                        <div className="user-info">
                            <span>Usuario:</span>
                            <span>{user?.uid.substring(0, 8) || 'N/A'}...</span> {/* Mostrar un fragmento del UID */}
                        </div>
                        <div className="user-info">
                            <span>Rol:</span>
                            <span>{role}</span>
                        </div>
                        {user && (
                            <button className="logout-button" onClick={handleLogout}>
                                Cerrar Sesión
                            </button>
                        )}
                    </nav>
                </div>
            </header>

            {/* Contenido principal */}
            <main className="container">
                {renderPage()}
            </main>

            {/* Pie de página */}
            <footer>
                <p>&copy; 2023 Yimi POS Avanzado. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default App;
