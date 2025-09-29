import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import AdultsServices from "./components/AdultsServices";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FounderSection from "./components/FounderSection";
import HeroSection from "./components/HeroSection";
import KidsServices from "./components/KidsServices";
import Navbar from "./components/Navbar";
import ServiceTypes from "./components/ServiceTypes";
import Spinner from "./components/Spinner";
import TeamSection from "./components/TeamSection";
import Testimonials from "./components/Testimonials";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate loading (replace with real loading logic if needed)
		const timer = setTimeout(() => setLoading(false), 1200);
		return () => clearTimeout(timer);
	}, []);

	if (loading) return <Spinner />;
	return (
		<div className="App">
			<Navbar />
			<HeroSection sectionId="hero" />
			<AboutSection sectionId="about" />
			<KidsServices sectionId="kids-services" />
			<AdultsServices sectionId="adults-services" />
			<ServiceTypes sectionId="service-types" />
			<Testimonials sectionId="testimonials" />
			<TeamSection sectionId="team" />
			<FounderSection />
			<ContactSection sectionId="contact" />
			<Footer />
		</div>
	);
}

export default App;
