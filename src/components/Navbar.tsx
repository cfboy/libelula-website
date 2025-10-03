import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	return (
		<nav className="bg-primary-green sticky top-0 z-50 shadow-sm" ref={menuRef}>
			<div className="container">
				<div className="flex items-center justify-between py-4">
					{/* Logo */}
					<div className="flex-shrink-0">
						<img
							src={logo}
							alt="Clínica Libélula"
							className="h-14 md:h-16 w-full"
						/>
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
						<a href="#contact" className="btn btn-primary">
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
									window.location.hash = "#hero";
								}}
							>
								Inicio
							</button>
							<button
								type="button"
								className="font-poppins text-dark-green hover:text-dark-blue transition-colors text-left"
								onClick={() => {
									setIsMenuOpen(false);
									window.location.hash = "#about";
								}}
							>
								Sobre nosotros
							</button>
							<button
								type="button"
								className="font-poppins text-dark-green hover:text-dark-blue transition-colors text-left"
								onClick={() => {
									setIsMenuOpen(false);
									window.location.hash = "#kids-services";
								}}
							>
								Nuestros servicios
							</button>
							<button
								type="button"
								className="font-poppins text-dark-green hover:text-dark-blue transition-colors text-left"
								onClick={() => {
									setIsMenuOpen(false);
									window.location.hash = "#contact";
								}}
							>
								Contáctanos
							</button>
							<button
								type="button"
								className="btn btn-primary w-fit text-sm"
								onClick={() => {
									setIsMenuOpen(false);
									window.location.hash = "#contact";
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
