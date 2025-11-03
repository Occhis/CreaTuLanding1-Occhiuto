
export const products = [
    {
        id: 1,
        name: "Tomorrowland Entrada",
        price: 69.99,
        category: "Recitales",
        description: "Entrada para el festival Tomorrowland",
        image: "/images/tomorrowland.jpg",
        stock: 10
    },
    {
        id: 2,
        name: "Shambala Entrada",
        price: 59.99,
        category: "Recitales",
        description: "Entrada para el festival Shambala",
        image: "/images/shambala.webp",
        stock: 5
    },
    {
        id: 3,
        name: "Reloj Deportivo",
        price: 89.99,
        category: "accesorios",
        description: "Reloj resistente al agua con GPS",
        image: "/images/galaxy8.jpg",
        stock: 8
    },
    {
        id: 4,
        name: "Auriculares Bluetooth",
        price: 79.99,
        category: "electronica",
        description: "Auriculares con cancelación de ruido",
        image: "/images/auriculares.webp",
        stock: 12
    },
    {
        id: 5,
        name: "Smartphone",
        price: 499.99,
        category: "electronica",
        description: "Teléfono inteligente de última generación",
        image: "/images/iphone.webp",
        stock: 3
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)));
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 1000);
    });
};