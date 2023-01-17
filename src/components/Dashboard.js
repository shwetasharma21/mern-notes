function Dashboard() {
	const notes = [
		{
			title: "Note 1",
			description:
				"Hi Hello Welcome Hi Hello Welcome Hi Hello Welcome Hi Hello Welcome Hi Hello Welcome Hi Hello Welcome Hi Hello Welcome Hi Hello Welcome Hi Hello Welcome Hi Hello Welcome Hi Hello Welcome Hi Hello Welcome Hi Hello Welcome heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
			createdAt: new Date(),
		},
		{ title: "Note 2", description: "Hi Hello Welcome", createdAt: new Date() },
		{ title: "Note 3", description: "Hi Hello Welcome", createdAt: new Date() },
		{ title: "Note 4", description: "Hi Hello Welcome", createdAt: new Date() },
		{ title: "Note 5", description: "Hi Hello Welcome", createdAt: new Date() },
		{ title: "Note 6", description: "Hi Hello Welcome", createdAt: new Date() },
		{ title: "Note 7", description: "Hi Hello Welcome", createdAt: new Date() },
		{ title: "Note 8", description: "Hi Hello Welcome", createdAt: new Date() },
		{ title: "Note 9", description: "Hi Hello Welcome", createdAt: new Date() },
	];
	return (
		<div className="container d-flex flex-column flex-fill p-1">
			<div className="row d-flex flex-fill">
				<div className="col-6 col-md-4 d-flex flex-column flex-fill p-1">
					<div className="card d-flex flex-column flex-fill">
						<h3 className="card-header">Notes ({notes.length})</h3>
						<ul
							className="card-body p-0 flex-fill list-group list-group-flush overflow-scroll"
							style={{ height: 0 }}
						>
							{notes.map((note, index) => (
								<li className="d-flex flex-column list-group-item" key={index}>
									<h5>{note.title}</h5>
									<p className="m-0 text-truncate">{note.description}</p>
									<small className="text-end">
										{note.createdAt.toLocaleString("en-US", {
											day: "numeric",
											month: "short",
											year: "numeric",
											hour: "numeric",
											minute: "2-digit",
											hour12: true,
										})}
									</small>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="col-6 col-md-8 d-flex flex-column flex-fill p-1">
					<div className="card d-flex flex-column flex-fill">
						<h3 className="card-header">Content Area</h3>
						<div className="card-body d-flex flex-column flex-fill"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Dashboard;
