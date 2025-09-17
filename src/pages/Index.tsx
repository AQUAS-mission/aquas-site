import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/problemSection";
import SolutionSection from "@/components/SolutionSection";
import HowAquasWorksSection from "@/components/HowAquasWorksSection";
import ContactSection from "@/components/ContactSection";
// import { useScrollSnap } from "@/hooks/use-scroll-snap";

const Index = () => {
	// Uncomment this to enable JavaScript-based scroll snapping instead of CSS
	// const { snapToSection } = useScrollSnap({
	// 	threshold: 0.4, // Snap when 40% close to section center
	// 	snapDuration: 600, // 600ms snap animation
	// 	enabled: true // Enable/disable scroll snap
	// });

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
