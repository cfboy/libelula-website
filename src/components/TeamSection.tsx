const TeamSection = ({ sectionId }: { sectionId: string }) => {
	const teamRoles = [
		{ id: "psicologos", name: "Psicólogos", bgColor: "bg-primary-green" },
		{
			id: "patologos",
			name: "Patólogos del habla-lenguaje",
			bgColor: "bg-secondary-green",
		},
		{
			id: "terapeutas-habla",
			name: "Terapeutas del habla-lenguaje",
			bgColor: "bg-light-green",
		},
		{
			id: "terapeutas-ocupacionales",
			name: "Terapeutas ocupacionales",
			bgColor: "bg-light-blue",
		},
		{
			id: "asistentes",
			name: "Asistentes administrativos",
			bgColor: "bg-secondary-green",
		},
	];

	return (
		<section id={sectionId} className="bg-white section-padding">
			<div className="container">
				<div className="text-left space-y-12">
					<p className="font-niramit text-2xl lg:text-3xl text-dark-green leading-relaxed max-w-4xl">
						<span>Contamos con un </span>
						<span className="font-bold">
							equipo interdisciplinario de profesionales especializados
						</span>
						<span>
							{" "}
							que trabajan de manera colaborativa, adaptando cada intervención a
							las necesidades únicas de cada persona.
						</span>
					</p>

					<div className="">
						{teamRoles.map((role) => (
							<div
								key={role.id}
								className={`${role.bgColor} w-full md:w-fit rounded-2xl px-8 py-6 hover:transform hover:scale-105 transition-all duration-300`}
							>
								<h3 className="font-poppins text-2xl lg:text-4xl font-extrabold text-dark-green text-center">
									{role.name}
								</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
