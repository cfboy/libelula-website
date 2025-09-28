import FBIcon from "../assets/fb-icon.svg";
import IGIcon from "../assets/ig-icon.svg";
import logo from "../assets/logo.svg";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const navLinks = [
		{ href: "#inicio", label: "Inicio" },
		{ href: "#sobre-nosotros", label: "Sobre nosotros" },
		{ href: "#services", label: "Nuestros servicios" },
		{ href: "#contacto", label: "Contáctanos" },
		{ href: "#contacto", label: "Agendar consulta" },
	];

	return (
		<footer className="bg-white section-padding border-t border-gray-200">
			<div className="container">
				<div className="space-y-12">
					{/* Main Footer Content */}
					<div className="grid md:grid-flow-row-dense grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-4">
						{/* Logo */}
						<div className="flex justify-center lg:justify-start lg:justify-self-start">
							<img src={logo} alt="Clínica Libélula" className="h-16 w-auto" />
						</div>

						{/* Navigation Links */}
						<div className="flex text-center justify-center w-full">
							<nav className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
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
								<img src={FBIcon} alt="Facebook" className="w-10 h-10" />
								<img src={IGIcon} alt="Instagram" className="w-10 h-10" />
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
