const AboutSection = ({ sectionId }: { sectionId: string }) => {
	return (
		<section id={sectionId} className="bg-dark-green section-padding">
			<div className="container">
				<div className="max-w-2xl space-y-8">
					<p className="font-niramit text-lg md:text-2xl lg:text-3xl text-primary-green leading-relaxed">
						En Clínica Multidisciplinaria Libélula ofrecemos servicios
						terapéuticos de calidad con un enfoque integral y colaborativo,
						acompañando a niños, adolescentes y familias en su desarrollo con
						intervenciones adaptadas a cada necesidad.
					</p>

					<p className="font-poppins text-base md:text-lg lg:text-xl text-white leading-relaxed">
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
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
