import heroSectionImage from "../assets/HeroSectionImage.png";

const HeroSection = ({ sectionId }: { sectionId: string }) => {
	return (
		<section id={sectionId} className="bg-primary-green section-padding">
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Hero Text */}
					<div className="space-y-8">
						<div className="space-y-6">
							<h1 className="font-niramit text-4xl lg:text-6xl font-bold text-black leading-tight">
								Servicios terapéuticos integrales a tu alcance
							</h1>
							<p className="font-poppins text-lg lg:text-xl text-dark-green leading-relaxed">
								Acompañamos a niños, adolescentes y familias en su proceso de
								desarrollo con terapias integrales, accesibles y llenas de
								empatía.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 px-12 md:px-0">
							<a href="#kids-services" className="btn btn-outline">
								Conoce nuestros servicios
							</a>
							<a href="#contact" className="btn btn-primary">
								Agenda tu consulta hoy
							</a>
						</div>
					</div>

					{/* Hero Images */}
					<div className="relative">
						<div className="grid grid-cols-1 gap-4 h-[500px] lg:h-[600px]">
							{/* Blurred background elements */}
							<div className="bg-secondary-green blur-md rounded-xl opacity-60"></div>
							{/* Main hero image */}
							<div className="col-span-2 rounded-xl overflow-hidden">
								<img
									src={heroSectionImage}
									alt="Servicios terapéuticos para niños y familias"
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

export default HeroSection;
