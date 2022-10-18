import Header from "./components/Header";
import TrackRoadmap from "./components/TrackRoadmap";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
	const [escolheuTrilha, setEscolheuTrilha] = useState(false);
	const [trilhaEscolhida, setTrilhaEscolhida] = useState("");

	return (
		<div className="App">
			<Header />
			<div className="App-body">
				<p>Escolha sua trilha:</p>
				<div>
					<button onClick={() => {setEscolheuTrilha(true); setTrilhaEscolhida("front-end")}}>Front-end</button>
					<button onClick={() => {setEscolheuTrilha(true); setTrilhaEscolhida("back-end")}}>Back-end</button>
					<button onClick={() => {setEscolheuTrilha(true); setTrilhaEscolhida("devops")}}>DevOps</button>
				</div>
				{ escolheuTrilha ? <TrackRoadmap trilha={trilhaEscolhida} /> : null }
				<Footer />
			</div>
		</div>
	);
}

export default App;
