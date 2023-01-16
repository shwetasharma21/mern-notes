import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<div className="d-flex flex-column justify-content-center align-items-center vh-100">
			<h1>Oops</h1>
			<p>Sorry, an unexpected error has occurred</p>
			<i>{error.statusText || error.message}</i>
		</div>
	);
};

export default ErrorPage;
