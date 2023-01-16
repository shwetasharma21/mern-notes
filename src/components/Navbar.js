function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						Notes
					</a>
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link" aria-current="page" href="/">
									Home
								</a>
							</li>
						</ul>
						<button className="btn btn-outline-light">Login</button>
					</div>
				</div>
			</nav>
		</div>
	);
}
export default Navbar;
