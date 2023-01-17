import { useState } from "react";

function Login() {
	const [isLoginSelected, setIsLoginSelected] = useState(false);
	const getLoginUI = () => {
		return (
			<div className="card">
				<h5 className="card-header">Login</h5>
				<div className="card-body">
					<form>
						<div className="form-floating mb-3">
							<input
								type="email"
								className="form-control"
								id="login-email"
								aria-describedby="emailHelp"
								placeholder=" "
							/>
							<label htmlFor="login-email" className="form-label">
								Email address
							</label>
						</div>
						<div className="form-floating mb-3">
							<input
								type="password"
								className="form-control"
								id="login-pass"
								placeholder=" "
							/>
							<label htmlFor="login-pass" className="form-label">
								Password
							</label>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
					<div>
						<span>New User?</span>
						<button
							className="btn btn-link"
							onClick={() => setIsLoginSelected(false)}
						>
							Register
						</button>
					</div>
				</div>
			</div>
		);
	};

	const getRegisterUI = () => {
		return (
			<div className="card">
				<h5 className="card-header">Register</h5>
				<div className="card-body">
					<form>
						<div className="form-floating mb-3">
							<input
								type="email"
								className="form-control"
								id="register-email"
								aria-describedby="emailHelp"
								placeholder=" "
							/>
							<label htmlFor="register-email" className="form-label">
								Email address
							</label>
						</div>
						<div className="form-floating mb-3">
							<input
								type="password"
								className="form-control"
								id="register-pass"
								placeholder=" "
							/>
							<label htmlFor="register-pass" className="form-label">
								Password
							</label>
						</div>
						<div className="form-floating mb-3">
							<input
								type="password"
								className="form-control"
								id="register-cpass"
								placeholder=" "
							/>
							<label htmlFor="register-cpass" className="form-label">
								Confirm Password
							</label>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
					<div>
						<span>New User?</span>
						<button
							className="btn btn-link"
							onClick={() => setIsLoginSelected(true)}
						>
							Login
						</button>
					</div>
				</div>
			</div>
		);
	};
	return (
		<div className="d-flex flex-column justify-content-center flex-fill container">
			<div className="row">
				<div className="col col-md-6 mx-auto">
					{isLoginSelected ? getLoginUI() : getRegisterUI()}
				</div>
			</div>
		</div>
	);
}
export default Login;
