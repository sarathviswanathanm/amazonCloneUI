// import React from "react";
// import "./LeftPanel.css";
// function LeftPanel() {
// 	return (
// 		<div className="leftPanel">
// 			<div className="leftPanel_container">
// 				<div className="leftPanel_filter">
// 					<span className="filter_Title">Brands</span>
// 					<label>
// 						<input type="checkbox" name="" id="" /> Apple
// 					</label>
// 					<label>
// 						<input type="checkbox" name="" id="" /> Samsung
// 					</label>
// 					<label>
// 						<input type="checkbox" name="" id="" /> OnePlus
// 					</label>
// 					<label>
// 						<input type="checkbox" name="" id="" /> Google
// 					</label>
// 					<label>
// 						<input type="checkbox" name="" id="" /> Redmi
// 					</label>
// 					<label>
// 						<input type="checkbox" name="" id="" /> Realme
// 					</label>
// 					<label>
// 						<input type="checkbox" name="" id="" /> Oppo
// 					</label>
// 					<label>
// 						<input type="checkbox" name="" id="" /> Vivo
// 					</label>
// 					<label>
// 						<input type="checkbox" name="" id="" /> POCO
// 					</label>
// 					<label>
// 						<input type="checkbox" name="" id="" /> Mi
// 					</label>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default LeftPanel;

import React from "react";
import "./LeftPanel.css";
function LeftPanel() {
	return (
		<div className="leftPanel">
			<div
				className="offcanvas offcanvas-start"
				tabIndex="-1"
				id="offcanvasExample"
				aria-labelledby="offcanvasExampleLabel"
				aria-expanded="false"
			>
				<div className="offcanvas-header">
					<button
						type="button"
						className="btn-close text-reset"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body">
					<div className="leftPanel_filter">
						<span className="filter_Title">Brands</span>
						<label>
							<input type="checkbox" name="" id="" /> Apple{" "}
						</label>
						<label>
							<input type="checkbox" name="" id="" /> Samsung{" "}
						</label>
						<label>
							<input type="checkbox" name="" id="" /> OnePlus{" "}
						</label>
						<label>
							<input type="checkbox" name="" id="" /> Google{" "}
						</label>
						<label>
							<input type="checkbox" name="" id="" /> Redmi{" "}
						</label>
						<label>
							<input type="checkbox" name="" id="" /> Realme{" "}
						</label>
						<label>
							<input type="checkbox" name="" id="" /> Oppo{" "}
						</label>
						<label>
							<input type="checkbox" name="" id="" /> Vivo{" "}
						</label>
						<label>
							<input type="checkbox" name="" id="" /> POCO{" "}
						</label>
						<label>
							<input type="checkbox" name="" id="" /> Mi{" "}
						</label>
					</div>
				</div>
			</div>

			<nav className="navbar navbar-expand-sm navbar-light bg-white">
				<div className="x">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasExample"
						aria-controls="offcanvasExample"
						aria-expanded="false"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<div className="leftPanel_filter">
							<span className="filter_Title">Brands</span>
							<label>
								<input type="checkbox" name="" id="" /> Apple{" "}
							</label>
							<label>
								<input type="checkbox" name="" id="" /> Samsung{" "}
							</label>
							<label>
								<input type="checkbox" name="" id="" /> OnePlus{" "}
							</label>
							<label>
								<input type="checkbox" name="" id="" /> Google{" "}
							</label>
							<label>
								<input type="checkbox" name="" id="" /> Redmi{" "}
							</label>
							<label>
								<input type="checkbox" name="" id="" /> Realme{" "}
							</label>
							<label>
								<input type="checkbox" name="" id="" /> Oppo{" "}
							</label>
							<label>
								<input type="checkbox" name="" id="" /> Vivo{" "}
							</label>
							<label>
								<input type="checkbox" name="" id="" /> POCO{" "}
							</label>
							<label>
								<input type="checkbox" name="" id="" /> Mi{" "}
							</label>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default LeftPanel;
