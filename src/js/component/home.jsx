import React from "react";
// 4. Importar comoponente 
import Nav from './nav.jsx'
import Jumbotron from './jumbotron.jsx'
import Button from './button.jsx'
import Card from './card.jsx'
// 5. Utilizar el componente

//create your first component
const Home = () => {
	return (
		<>
			<Nav />
			<Jumbotron />
			<h1 className="text-center mt-5">Hola Bienvenidos a React Js ;) 123</h1>
			<Button />
			<Card nombre='ganadores del oscar' description='mira los ganadores de los oscar 2024' />			
			<Card nombre='Los mejores animes de akira toriyama' description='descubre el top 10 d eanimes del creador de dragon ball' />			
			<Card nombre='coldplay - yellow' description='version en vivo estadio azteca' />			
		</>
	);
};

export default Home;
