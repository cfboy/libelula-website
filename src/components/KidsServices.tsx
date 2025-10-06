import kidsTherapyImage from "../assets/KidsTherapyImage.png";
import { ReactComponent as LibelulaIcon } from "../assets/libelula-icon.svg";

const KidsServices = ({ sectionId }: { sectionId: string }) => {
	const services = [
		"Terapia del habla y lenguaje",
		"Terapia psicológica individual y familiar",
		"Estimulación temprana (6 a 36 meses)",
		"Terapias socioemocionales (manejo de emociones, conducta, integración sensorial)",
	];

	return (
		<section id={sectionId} className="bg-light-blue section-padding">
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Kids therapy image with floating elements */}
					<div className="relative">
						<div className="relative overflow-hidden rounded-2xl">
							<img
								src={kidsTherapyImage}
								alt="Terapias para niños y adolescentes"
								className="w-full"
							/>
						</div>
					</div>

					{/* Services content */}
					<div className="space-y-8">
						<h2 className="font-niramit text-3xl lg:text-5xl font-bold text-dark-green leading-tight">
							Terapias para niños y adolescentes
						</h2>

						<ul className="space-y-6">
							{services.map((service) => (
								<li key={service} className="flex items-start gap-4">
									<span>
										<LibelulaIcon className="w-8 h-8 text-white" />
									</span>
									<span className="font-poppins text-lg font-semibold text-black leading-relaxed">
										{service}
									</span>
								</li>
							))}
						</ul>

						<div className="flex justify-center md:justify-start">
							<a href="#contact" className="btn btn-primary">
								Agendar consulta
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default KidsServices;
