function Login() {
	return (
		<div className="bg-secondary flex-fill">
			<div className="card">
				<h5 className="card-header">Login</h5>
				<div className="card-body">
					<form>
						<div className="mb-3">
							<label for="exampleInputEmail1" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
							<div id="emailHelp" className="form-text">
								We'll never share your email with anyone else.
							</div>
						</div>
						<div className="mb-3">
							<label for="exampleInputPassword1" className="form-label">
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
							/>
						</div>
						<div className="mb-3 form-check">
							<input
								type="checkbox"
								className="form-check-input"
								id="exampleCheck1"
							/>
							<label className="form-check-label" for="exampleCheck1">
								Check me out
							</label>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
					<div>
						<span>New User?</span>
						<button className="btn btn-link">Register</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Login;
