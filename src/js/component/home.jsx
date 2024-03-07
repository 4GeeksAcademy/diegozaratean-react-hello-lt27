import React from "react";
// 4. Importar comoponente 
import Nav from './nav.jsx'


// 5. Utilizar el componente

//create your first component
const Home = () => {
	return (
		<>
			<Nav />
			<h1 className="text-center mt-5">Hola Bienvenidos a React Js ;) 123</h1>
		</>
	);
};

export default Home;
