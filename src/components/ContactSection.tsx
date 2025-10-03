import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import contactBgDesktop from "../assets/ContactBackgroundDesktop.png";
import whatsapp from "../assets/whatsapp.png";

const ContactSection = ({ sectionId }: { sectionId: string }) => {
	const [copied, setCopied] = useState<string | null>(null);

	const handleCopy = (value: string) => {
		navigator.clipboard.writeText(value);
		setCopied(value);
		setTimeout(() => setCopied(null), 1500);
	};

	const phoneNumbers = ["787-936-1396", "787-449-4092"];
	const email = "clinicalibelula@gmail.com";

	return (
		<section
			id={sectionId}
			className="section-padding relative overflow-hidden bg-cover bg-center"
			style={{
				backgroundImage: `url(${contactBgDesktop})`,
			}}
		>
			<div className="container relative z-10">
				<div className="grid lg:grid-cols-3 gap-2 md:gap-12 items-start">
					{/* Contact Info */}
					<div className="flex flex-col gap-4 items-center md:items-start backdrop-blur-sm rounded-2xl p-6 px-2 h-full space-y-8">
						<h2 className="font-niramit text-3xl lg:text-5xl font-bold text-dark-green leading-tight text-center md:text-left">
							¡Coordina tu consulta hoy!
						</h2>

						<a
							href="#contact-form"
							className="btn btn-primary inline-block text-sm"
						>
							Completa el siguiente formulario
						</a>
					</div>

					{/* Contact Details */}
					<div className="flex flex-col items-center md:items-start backdrop-blur-sm rounded-2xl p-6 px-2 space-y-4 h-full">
						<h3 className="font-poppins text-xl font-medium text-dark-green">
							Teléfonos
						</h3>
						<div className="space-y-2 w-full">
							{phoneNumbers.map((number) => (
								<div
									key={number}
									className="flex items-center justify-center md:justify-start gap-2"
								>
									<a
										href={`tel:${number.replace(/-/g, "")}`}
										className="font-poppins text-lg font-bold text-black hover:text-dark-green hover:underline transition-colors"
									>
										{number}
									</a>
									<button
										type="button"
										className="group ml-1 p-1 rounded transition-colors"
										onClick={() => handleCopy(number)}
										aria-label={`Copiar ${number}`}
									>
										{copied === number ? (
											<CopyCheckIcon className="w-5 h-5 text-green-600" />
										) : (
											<CopyIcon className="w-5 h-5 text-dark-green group-hover:scale-110" />
										)}
									</button>
								</div>
							))}
						</div>
						<div className="flex items-center gap-2">
							<span className="font-poppins text-dark-green">Llamadas o</span>
							<img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
							<span className="font-poppins text-dark-green">WhatsApp</span>
						</div>
					</div>
					{/* Email */}
					<div className="flex flex-col items-center md:items-start backdrop-blur-sm rounded-2xl p-6 px-2 space-y-4 h-full">
						<h3 className="font-poppins text-xl font-medium text-dark-green">
							Correo electrónico
						</h3>
						<div className="flex items-center gap-2">
							<a
								href={`mailto:${email}`}
								className="font-poppins md:text-lg font-bold text-black hover:text-dark-green hover:underline transition-colors break-all"
							>
								{email}
							</a>
							<button
								type="button"
								className="group rounded transition-colors"
								onClick={() => handleCopy(email)}
								aria-label="Copiar correo electrónico"
							>
								{copied === email ? (
									<CopyCheckIcon className="w-5 h-5 text-green-600" />
								) : (
									<CopyIcon className="w-5 h-5 text-dark-green group-hover:scale-110" />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
