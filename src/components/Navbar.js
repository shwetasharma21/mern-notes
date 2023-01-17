import { useNavigate, NavLink } from "react-router-dom";

function Navbar() {
	const navigate = useNavigate();
	const handleLoginClick = () => {
		console.log("clicked");
		return navigate("/login");
	};
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container-fluid">
					<NavLink className="navbar-brand" to="/">
						Notes
					</NavLink>

					<ul className="navbar-nav me-auto ">
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/dashboard">
								Home
							</NavLink>
						</li>
					</ul>
					<button className="btn btn-outline-light" onClick={handleLoginClick}>
						Login
					</button>
				</div>
			</nav>
		</div>
	);
}
export default Navbar;
