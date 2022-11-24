import React, { useCallback, useRef, useState } from "react";
import useFetchIssues from "../hooks/useFetchIssues";
import Issue from "./Issue";

function ListIssues() {
	const observer = useRef();
	const [pageNumber, setPageNumber] = useState(1);
	const { issues, loading, error } = useFetchIssues(pageNumber);

	const lastIssueElementRef = useCallback(
		(element) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					setPageNumber((page) => page + 1);
				}
			});

			if (element) observer.current.observe(element);
		},
		[loading]
	);

	const checkOpenIssues = () => issues.filter((issue) => issue.state === "open").length;

	return (
		<div className="col-sm-12">
			<div className="list-group">
				<div className="list-group-item text-dark p-3 fw-bold list-group-item-dark">
					<span className="me-2">⊙ {checkOpenIssues()} Open</span>
					<span className="ms-3">✓ {issues.length - checkOpenIssues()} Closed</span>
				</div>
				{issues.map((issue, index) => {
					if (index === issues.length - 1)
						return (
							<div className="list-group-item list-group-item-action text-dark px-3 py-2" key={issue.id} ref={lastIssueElementRef}>
								<Issue key={issue.id} issue={issue} />
							</div>
						);
					else
						return (
							<div className="list-group-item list-group-item-action text-dark px-3 py-2" key={issue.id}>
								<Issue key={issue.id} issue={issue} />
							</div>
						);
				})}
				<div className={`my-3 text-center alert alert-info ${loading ? "" : "d-none"}`}>Loading...</div>
				<div className={`my-3 text-center alert alert-danger ${error ? "" : "d-none"}`}>Error! Something went wrong</div>
			</div>
		</div>
	);
}

export default ListIssues;
