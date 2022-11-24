import React from "react";

function IssueLables({ labels }) {
	return (
		<>
			{labels.map((label) => (
				<span className="badge rounded-pill text-dark mx-1" key={label.id} style={{ background: `#${label.color}` }}>
					{label.name}
				</span>
			))}
		</>
	);
}

export default IssueLables;
