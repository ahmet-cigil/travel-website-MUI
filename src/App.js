import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import SearchAppBar from "./components/AppBar";

function App() {
	return (
		<Router>
			<SearchAppBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<Tour />} />
			</Routes>
		</Router>
	);
}

export default App;
