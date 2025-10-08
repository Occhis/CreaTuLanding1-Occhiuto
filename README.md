# React + Vite

# Pre-Entrega 1

- Crear el proyecto utilizando Vite JS
- Crear el componente ItemListContainer y pasarle una prop "greeting"
- Crear NavBar con un menu de navegación con: Logo, categorias, y CartWidget
- Creat CartWidget con una imagen/icono/emoji del carrito de compras

# Pre-Entrega 2

 - Instalar react-router (npm i react-router)
 - Configurar en el componente App la navegación con los componentes: BrowserRouter, Routes, Route
 - Genera links con el componente Link para poder navegar: tanto en NavBar como en Item (ver detalle)
 - Crear ItemDetailContainer, mostrando los detalles de un producto
 - Crear Item, que representa la Card de cada producto dentro del listado
 - En ItemDetailContainer, leer la URL con useParams(), obtener el ID y buscar un unico producto con ese ID
 - EN ItemListContainer, leer la URL con useParams(), obtener la cteogria y buscar un listado de productos segun esa categoria
 - IMPORTANTE: Tanto ItemDetail como ItemList, deben leer los datos de forma asíncrona ( useEffect - useState )

# Comandos GIT

- git init
- git add .
- git commit -m "Primer entrega"
- git branch -M "main"
- git remote add origin (url-repo)
- git push -u origin main