import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="d-flex flex-column vh-100">
			<Navbar />
			<div className="d-flex flex-column flex-fill">
				<Outlet />
			</div>
		</div>
	);
}
export default App;
