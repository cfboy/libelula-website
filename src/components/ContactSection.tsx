// Import background images
import contactBgDesktop from "../assets/Contact background desktop.png";
import contactBgMobile from "../assets/Contact background mobile.png";
import whatsapp from "../assets/whatsapp.png";

const ContactSection = ({ sectionId }: { sectionId: string }) => {
	return (
		<section
			id={sectionId}
			className="section-padding relative overflow-hidden"
			style={{
				backgroundImage: `url(${contactBgMobile})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			{/* Desktop background image overlay */}
			<div
				className="absolute inset-0 hidden lg:block"
				style={{
					backgroundImage: `url(${contactBgDesktop})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			></div>

			{/* Background overlay for better text readability */}
			<div className="absolute inset-0 bg-light-blue/80"></div>

			<div className="container relative z-10">
				<div className="grid lg:grid-cols-3 gap-2 md:gap-12 items-start">
					{/* Contact Info */}
					<div className="flex flex-col items-center md:items-start backdrop-blur-sm rounded-2xl p-6 h-full space-y-8">
						<div className="space-y-12">
							<h2 className="font-niramit text-3xl lg:text-5xl font-bold text-dark-green leading-tight text-center md:text-left">
								¡Coordina tu consulta hoy!
							</h2>

							<a href="#contact-form" className="btn btn-primary inline-block">
								Completa el siguiente formulario
							</a>
						</div>
					</div>

					{/* Contact Details */}
					{/* Phone Numbers */}
					<div className="flex flex-col items-center md:items-start backdrop-blur-sm rounded-2xl p-6 space-y-4 h-full">
						<h3 className="font-poppins text-xl font-medium text-dark-green">
							Teléfonos
						</h3>

						<div className="space-y-2">
							<p className="font-poppins text-lg font-bold text-black">
								787-936-1396
							</p>
							<p className="font-poppins text-lg font-bold text-black">
								787-449-4092
							</p>
						</div>

						<div className="flex items-center gap-2">
							<span className="font-poppins text-dark-green">Llamadas o</span>
							<img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
							<span className="font-poppins text-dark-green">WhatsApp</span>
						</div>
					</div>

					{/* Email */}
					<div className="flex flex-col items-center md:items-start backdrop-blur-sm rounded-2xl p-6 space-y-4 h-full">
						<h3 className="font-poppins text-xl font-medium text-dark-green">
							Correo electrónico
						</h3>

						<p className="font-poppins text-lg font-bold text-black">
							clinicalibelula@gmail.com
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
