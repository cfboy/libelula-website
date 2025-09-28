import { ReactComponent as QuoteIcon } from "../assets/quote-icon.svg";

const Testimonials = ({ sectionId }: { sectionId: string }) => {
	const testimonials = [
		{
			id: "testimonial-1",
			text: "El equipo de Libélula ha sido un gran apoyo para mi hijo. Hemos visto avances significativos en su comunicación y confianza. 100% recomendados.",
			bgColor: "bg-secondary-green",
			iconColor: "text-white",
		},
		{
			id: "testimonial-2",
			text: "Profesionales dedicados y atentos. Siempre están disponibles para orientar y trabajar en conjunto con la familia y la escuela.",
			bgColor: "bg-gray-100",
			iconColor: "text-secondary-green",
		},
		{
			id: "testimonial-3",
			text: "Gracias a la clínica, mi hija ha recibido las terapias que necesitaba y hemos sentido un acompañamiento genuino en todo el proceso.",
			bgColor: "bg-dark-blue",
			iconColor: "text-light-blue",
		},
	];

	return (
		<section id={sectionId} className="bg-primary-green section-padding pt-0">
			<div className="container">
				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className={`${testimonial.bgColor} rounded-2xl p-8 space-y-6 hover:transform hover:scale-105 transition-all duration-300`}
						>
							<QuoteIcon className={`${testimonial.iconColor} w-20 h-20`} />
							<p
								className={`font-poppins text-lg leading-relaxed ${
									testimonial.bgColor === "bg-dark-blue"
										? "text-white"
										: "text-gray-text"
								}`}
							>
								{testimonial.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
