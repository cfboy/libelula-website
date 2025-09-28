const FounderSection = () => {
	return (
		<section className="bg-dark-blue section-padding">
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Founder Photo */}
					<div className="flex h-full justify-center">
						<div className="flex relative w-full justify-center">
							<div className="w-full h-full rounded-2xl overflow-hidden bg-gray-200">
								{/* Placeholder for founder photo - replace with actual image */}
								<div className="w-full h-full bg-gradient-to-br from-primary-green to-secondary-green flex items-center justify-center">
									<div className="text-center text-dark-green"></div>
								</div>
							</div>
						</div>
					</div>

					{/* Founder Info */}
					<div className="space-y-8">
						<h2 className="font-niramit text-3xl lg:text-4xl font-bold text-white">
							Nuestra fundadora
						</h2>

						<div className="space-y-6 font-poppins text-white leading-relaxed">
							<p>
								La Clínica Multidisciplinaria Libélula es dirigida por su
								fundadora y presidenta,
								<strong> Yelenna M. Marrero Fernández</strong>, quien cuenta con
								una sólida formación académica y una amplia experiencia en el
								campo de la terapia del habla y lenguaje en Puerto Rico.
							</p>

							<p>
								Inició sus estudios universitarios en la Universidad de Puerto
								Rico, Recinto de Bayamón, en el programa de Sistemas de Oficina
								(2006). Más adelante, se trasladó al programa K3 y
								posteriormente ingresó al Bachillerato en Terapia del
								Habla-Lenguaje en la Universidad Carlos Albizu, Recinto de San
								Juan, de donde se graduó en 2008.
							</p>

							<p>
								Ese mismo año comenzó a ejercer como profesional, y en 2010
								completó un Certificado Graduado en Deficiencias del Desarrollo
								e Intervención Temprana en el Recinto de Ciencias Médicas de la
								Universidad de Puerto Rico. En agosto de ese mismo año inició su
								Maestría en Patología del Habla-Lenguaje en la Universidad
								Carlos Albizu, continuando su preparación académica y clínica.
							</p>

							<p>
								Con más de una década de experiencia liderando servicios
								terapéuticos en la isla, Yelenna ha consolidado un modelo de
								atención integral, donde el niño y su familia son el eje central
								del proceso. Su visión se centra en crear un espacio
								colaborativo en el que diversos profesionales trabajen de manera
								conjunta para promover el progreso, la inclusión y el bienestar
								de cada participante.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FounderSection;
