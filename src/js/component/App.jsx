import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import "/workspaces/react-hello-fs86-simpleCounter-cguirao/src/styles/App.css";


const App = () => {
	const [count,setCount]=useState(0);
	useEffect(
		()=>{
			const interval = setInterval(() => {
				setCount((count) => count + 1); 
			  }, 1000);
			  
			  return () => clearInterval(interval);
			}, [count]); 
		
			const formatDigit = (digit) => Math.floor(digit) || 0;

			let unidades = formatDigit(count % 10);
			let decenas = formatDigit((count % 100) / 10);
			let centenas = formatDigit((count % 1000) / 100);
			let millares = formatDigit((count % 10000) / 1000);
			let decenasDeMillares = formatDigit((count % 100000) / 10000);

	return (

		<div className="container">
			<div className="counter">
				<FontAwesomeIcon className="icon-timer" icon={faClock} />
				<span className="decenMillar">{decenasDeMillares}</span>
				<span className="millares">{millares}</span>
				<span className="centenas">{centenas}</span>
				<span className="decenas">{decenas}</span>
				<span className="unidades">{unidades}</span>
			</div>
		</div>		
	);
};

export default App;
