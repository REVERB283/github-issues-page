import React from "react";

const ListIssues = ({ issues }) => {
	const checkOpenIssues = () => issues.filter((issue) => issue.state === "open").length;

	return (
		<div className="col-sm-12 col-md-11 list-group">
			<div className="list-group-item text-dark p-3 fw-bold list-group-item-dark">
				<span className="me-2">⊙ {checkOpenIssues()} Open</span>
				<span className="ms-3">✓ {issues.length - checkOpenIssues()} Closed</span>
			</div>
			{issues.map((issue) => (
				<div className="list-group-item text-dark px-3 py-2" key={issue.id}>
					<div className="fw-bold fs-5 text-wrap" style={{ width: "70%" }}>
						<span className={issue.state === "open" ? "text-success" : "text-dark"}>⊙</span> {issue.title}
					</div>
					<div className="fs-6">
						#{issue.number} opened by {issue.user.login}
					</div>
				</div>
			))}
		</div>
	);
};

export default ListIssues;
