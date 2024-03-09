import React from "react";
// 4. Importar comoponente 
import Nav from './nav.jsx'
import Jumbotron from './jumbotron.jsx'
import Button from './button.jsx'

// 5. Utilizar el componente

//create your first component
const Home = () => {
	return (
		<>
			<Nav />
			<Jumbotron />
			<h1 className="text-center mt-5">Hola Bienvenidos a React Js ;) 123</h1>
			<Button />
		</>
	);
};

export default Home;
