import adultsServicesImage from "../assets/AdultsServicesImage.png";
import { ReactComponent as LibelulaIcon } from "../assets/libelula-icon.svg";

const AdultsServices = ({ sectionId }: { sectionId: string }) => {
	const services = [
		"Terapia del habla y lenguaje (trastornos de voz, afasia, deglución).",
		"Terapia psicológica individual, de pareja y familiar",
		"Orientación vocacional y consejería educativa",
	];

	return (
		<section id={sectionId} className="bg-light-green section-padding">
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Services content */}
					<div className="space-y-8">
						<h2 className="font-niramit text-3xl lg:text-5xl font-bold text-dark-green leading-tight">
							Servicios para personas adultas
						</h2>

						<ul className="space-y-6">
							{services.map((service) => (
								<li
									key={`adult-service-${service}`}
									className="flex items-start gap-4"
								>
									<LibelulaIcon className="w-8 h-8 text-secondary-green" />
									<span className="font-poppins text-lg font-semibold text-black leading-relaxed">
										{service}
									</span>
								</li>
							))}
						</ul>

						<a href="#contact" className="btn btn-primary">
							Agendar consulta
						</a>
					</div>

					{/* Adults services image */}
					<div className="relative">
						<div className="grid grid-cols- gap-4 h-[400px] lg:h-[500px]">
							{/* Top right - main image */}
							<div className="rounded-xl overflow-hidden">
								<img
									src={adultsServicesImage}
									alt="Servicios para personas adultas"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AdultsServices;
