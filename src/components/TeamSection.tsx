import teamImage from "../assets/team.jpg";

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
	];

	return (
		<section id={sectionId} className="bg-white section-padding">
			<div className="container">
				<div className="flex flex-col md:flex-row gap-4">
					<div className="text-left space-y-12">
						<p className="font-niramit text-lg md:text-2xl lg:text-3xl text-dark-green leading-relaxed max-w-4xl">
							<span>Contamos con un </span>
							<span className="font-bold">
								equipo interdisciplinario de profesionales especializados
							</span>
							<span>
								{" "}
								que trabajan de manera colaborativa, adaptando cada intervención
								a las necesidades únicas de cada persona.
							</span>
						</p>

						<div className="">
							{teamRoles.map((role) => (
								<div
									key={role.id}
									className={`${role.bgColor} w-full md:w-fit rounded-2xl px-6 py-4 md:px-8 md:py-6 hover:transform hover:scale-105 transition-all duration-300`}
								>
									<h3 className="font-poppins text-lg md:text-2xl lg:text-4xl font-extrabold text-dark-green text-center">
										{role.name}
									</h3>
								</div>
							))}
						</div>
					</div>
					<div className="rounded-2xl flex items-center justify-center">
						<img
							src={teamImage}
							className="object-cover md:max-w-md rounded-2xl"
							alt="Equipo de Libélula"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
