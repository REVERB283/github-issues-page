import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchIssues(pageNumber) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [issues, setIssues] = useState([]);

	useEffect(() => {
		setLoading(true);
		setError(false);
		axios({ method: "GET", url: "https://api.github.com/repos/facebook/react/issues", params: { page: pageNumber } })
			.then((response) => {
				setIssues((prevIssues) => [...prevIssues, ...response.data]);
				setLoading(false);
			})
			.catch(() => setError(true));
	}, [pageNumber]);

	return { issues, loading, error };
}
