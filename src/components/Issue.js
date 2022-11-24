import IssueLables from "./IssueLables";

function Issue({ issue }) {
	return (
		<>
			<div className="d-flex">
				<div className="fw-bold fs-5 text-wrap" style={{ width: "70%" }}>
					<span className={issue.state === "open" ? "text-success" : "text-dark"}>⊙</span> {issue.title}
					<IssueLables labels={issue.labels} />
				</div>
				<div className="fs-6 ms-auto d-none d-md-block">
					<span className="me-5">{issue.assignee && <img src={issue.assignee.avatar_url} alt={issue.assignee.login} style={{ width: "20px", borderRadius: "50%" }} />}</span>
					<span className="ms-5">
						{issue.comments > 0 && (
							<>
								<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="mx-2 v-align-middle">
									<path
										fill-rule="evenodd"
										d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
									></path>
								</svg>
								{issue.comments}
							</>
						)}
					</span>
				</div>
			</div>
			<div className="fs-6">
				#{issue.number} opened by {issue.user.login}
			</div>
		</>
	);
}

export default Issue;
