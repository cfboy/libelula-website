import FBIcon from "../assets/fb-icon.svg";
import IGIcon from "../assets/ig-icon.svg";
import logo from "../assets/logo.svg";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const navLinks = [
		{ href: "#hero", label: "Inicio" },
		{ href: "#about", label: "Sobre nosotros" },
		{ href: "#kids-services", label: "Nuestros servicios" },
		{ href: "#contact", label: "Contáctanos" },
	];

	return (
		<footer className="bg-white section-padding border-t border-gray-200 !pb-12">
			<div className="container">
				<div className="space-y-12">
					{/* Main Footer Content */}
					<div className="flex flex-col md:flex-row gap-8 md:gap-4">
						{/* Logo */}
						<div className="flex justify-center lg:justify-start lg:justify-self-start">
							<img
								src={logo}
								alt="Clínica Libélula"
								className="h-16 md:h-24 w-auto"
							/>
						</div>

						{/* Navigation Links */}
						<div className="flex text-center justify-center w-full">
							<nav className="flex flex-col md:flex-row justify-center gap-4">
								{navLinks.map((link) => (
									<a
										key={`footer-link-${link.href}`}
										href={link.href}
										className="flex flex-shrink-0 items-center justify-center font-poppins text-gray-text hover:text-dark-green transition-colors underline"
									>
										{link.label}
									</a>
								))}
							</nav>
						</div>

						{/* Social Links */}
						<div className="text-center lg:text-right space-y-4 lg:justify-self-end">
							<p className="font-poppins font-medium text-dark-green">
								¡Síguenos!
							</p>
							<div className="flex justify-center lg:justify-end gap-6">
								<a
									href="https://www.facebook.com/share/1BAVLSb4TD/?mibextid=wwXIfr"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Facebook"
									className="btn-icon"
								>
									<img src={FBIcon} alt="Facebook" className="w-10 h-10" />
								</a>
								<a
									href="https://www.instagram.com/clinicalibelulapr?igsh=MXFhcm42bnRpODRjMA=="
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Instagram"
									className="btn-icon"
								>
									<img src={IGIcon} alt="Instagram" className="w-10 h-10" />
								</a>
							</div>
						</div>
					</div>

					{/* Copyright */}
					<div className="border-t border-gray-200 pt-8 text-center">
						<p className="font-poppins text-light-gray">
							©Clínica Multidisciplinaria Libélula, {currentYear}. Todos los
							derechos reservados
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
