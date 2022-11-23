import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ListIssues from "./components/ListIssues";

function App() {
	const [issues, setIssues] = useState([]);

	useEffect(() => {
		axios.get("https://api.github.com/repos/facebook/react/issues").then((response) => setIssues(response.data));
	}, []);

	return (
		<div className="container">
			<div className="row my-5 d-flex justify-content-center">
				<ListIssues issues={issues}></ListIssues>
			</div>
		</div>
	);
}

export default App;
