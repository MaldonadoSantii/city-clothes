const Productos = [   
    {
    "id": 1,
    "titulo": " Buzo Essential GRAY" , 
    "descripcion": "Tiene mangas largas, una capucha ajustable con cordón y bolsillos en la parte delantera." ,
    "precio":1000 , 
    "pictureUrl":"../src/assets/essential1.webp", 
    "category":"Essential"
    },
    {
    "id": 2, 
    "titulo": " Buzo Essential BROWN" ,
    "descripcion": "Tiene mangas largas, una capucha ajustable con cordón y bolsillos en la parte delantera." ,
    "precio": 1500,
    "pictureUrl":"../src/assets/essential2.webp",
    "category":"Essential"
    },
    {
    "id": 3,
    "titulo": " Buzo Essential WHITE" , 
    "descripcion": "Tiene mangas largas, una capucha ajustable con cordón y bolsillos en la parte delantera." ,
    "precio": 2000, 
    "pictureUrl":"../src/assets/essential3.webp",
    "category":"Essential"
    },
    {
    "id": 4, 
    "titulo": " Buzo Stussy PINK" , 
    "descripcion": "Tiene mangas largas, una capucha ajustable con cordón y bolsillos en la parte delantera." , 
    "precio": 2500, 
    "pictureUrl":"../src/assets/stussy2.webp",
    "category":"Stussy"
    },
    {
    "id": 5,
    "titulo": " Buzo Stussy BLACK" , 
    "descripcion": "Tiene mangas largas, una capucha ajustable con cordón y bolsillos en la parte delantera." , 
    "precio": 3000,
    "pictureUrl":"../src/assets/stussy1.webp",
    "category":"Stussy"
    },
    {
    "id": 6,
    "titulo": " Buzo Stussy WHITE" ,
    "descripcion": "Tiene mangas largas, una capucha ajustable con cordón y bolsillos en la parte delantera." ,
    "precio": 3500,
    "pictureUrl":"../src/assets/stussy3.webp",
    "category":"Stussy"
    }
    ]


    export const getProductos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Productos);
            }, 500)
        })
    }
    
    export const getUnProducto = (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Convert idItem to number
                const id = parseInt(id, 6);
                const producto = Productos.find((item) => item.id === id);
                resolve(producto);
            }, 500);
        });
    };
    
    
    export const getProdByCat = (category) => {
        return new Promise(resolve => {
            setTimeout(() => {
                const productosCategoria = Productos.filter(item => item.categoria === category);
                resolve(productosCategoria);
            }, 500)
        })
    }