import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/problemSection";
import SolutionSection from "@/components/SolutionSection";
import HowAquasWorksSection from "@/components/HowAquasWorksSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<HeroSection />
			<ProblemSection />
			<SolutionSection />
			<HowAquasWorksSection />
			<ContactSection />
		</div>
	);
};

export default Index;
