import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="bg-primary-green sticky top-0 z-50 shadow-sm">
			<div className="container">
				<div className="flex items-center justify-between py-4">
					{/* Logo */}
					<div className="flex-shrink-0">
						<img src={logo} alt="Clínica Libélula" className="h-12 w-auto" />
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-8">
						<a
							href="#hero"
							className="font-poppins font-bold text-dark-green hover:text-dark-blue transition-colors"
						>
							Inicio
						</a>
						<a
							href="#about"
							className="font-poppins text-dark-green hover:text-dark-blue transition-colors"
						>
							Sobre nosotros
						</a>
						<a
							href="#kids-services"
							className="font-poppins text-dark-green hover:text-dark-blue transition-colors"
						>
							Nuestros servicios
						</a>
						<a
							href="#contact"
							className="font-poppins text-dark-green hover:text-dark-blue transition-colors"
						>
							Contáctanos
						</a>
						<a href="#contacto" className="btn btn-primary">
							Agendar consulta
						</a>
					</div>

					{/* Mobile menu button */}
					<div className="lg:hidden">
						<button
							type="button"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-dark-green hover:text-dark-blue focus:outline-none focus:text-dark-blue"
							aria-label="Toggle menu"
						>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="lg:hidden pb-4">
						<div className="flex flex-col space-y-4">
							<button
								type="button"
								className="font-poppins font-bold text-dark-green hover:text-dark-blue transition-colors text-left"
								onClick={() => {
									setIsMenuOpen(false);
									window.location.hash = "#inicio";
								}}
							>
								Inicio
							</button>
							<button
								type="button"
								className="font-poppins text-dark-green hover:text-dark-blue transition-colors text-left"
								onClick={() => {
									setIsMenuOpen(false);
									window.location.hash = "#sobre-nosotros";
								}}
							>
								Sobre nosotros
							</button>
							<button
								type="button"
								className="font-poppins text-dark-green hover:text-dark-blue transition-colors text-left"
								onClick={() => {
									setIsMenuOpen(false);
									window.location.hash = "#services";
								}}
							>
								Nuestros servicios
							</button>
							<button
								type="button"
								className="font-poppins text-dark-green hover:text-dark-blue transition-colors text-left"
								onClick={() => {
									setIsMenuOpen(false);
									window.location.hash = "#contacto";
								}}
							>
								Contáctanos
							</button>
							<button
								type="button"
								className="btn btn-primary w-fit"
								onClick={() => {
									setIsMenuOpen(false);
									window.location.hash = "#contacto";
								}}
							>
								Agendar consulta
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
