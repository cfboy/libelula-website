// Import Lucide React icons
import { MapPin, School, Video } from "lucide-react";

const ServiceTypes = ({ sectionId }: { sectionId: string }) => {
	const serviceTypes = [
		{
			icon: MapPin,
			title: "Nuestra oficina",
			description: "Ubicada en Bayamón, Puerto Rico",
			hasButton: true,
			buttonText: "Ver dirección",
		},
		{
			icon: School,
			title: "A domicilio",
			description: "En escuelas públicas y privadas",
			hasButton: false,
		},
		{
			icon: Video,
			title: "Virtuales",
			description:
				"Garantizan continuidad en los servicios cuando la asistencia presencial no es posible",
			hasButton: false,
		},
	];

	return (
		<section id={sectionId} className="bg-primary-green section-padding">
			<div className="container">
				<div className="text-center space-y-6 mb-16">
					<h2 className="font-niramit text-3xl lg:text-5xl font-bold text-dark-green leading-tight">
						Servicios accesibles que se acomodan a tus necesidades
					</h2>
					<p className="font-poppins text-lg lg:text-xl text-dark-green">
						Ofrecemos nuestros servicios de manera presencial y virtual.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{serviceTypes.map((service) => (
						<div
							key={`service-type-${service.title}`}
							className="backdrop-blur-sm rounded-2xl p-8 text-center space-y-6 hover:bg-white/20 transition-all duration-300"
						>
							<div className="flex justify-center">
								<service.icon
									className="w-16 h-16 text-dark-green"
									strokeWidth={1.5}
								/>
							</div>

							<div className="space-y-3">
								<h3 className="font-poppins text-2xl font-bold text-dark-green">
									{service.title}
								</h3>
								<p className="font-poppins text-lg text-dark-blue leading-relaxed">
									{service.description}
								</p>
							</div>

							{service.hasButton && (
								<button
									type="button"
									className="btn btn-primary"
									onClick={() => {
										// Handle address view - could open a modal or link to maps
										window.open(
											"https://maps.google.com/?q=Bayamón,Puerto Rico",
											"_blank",
										);
									}}
								>
									{service.buttonText}
								</button>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServiceTypes;
