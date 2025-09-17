import { useState, useEffect } from "react";
import { Ship } from "lucide-react";

// Gentle easing function
const easeOutQuart = (t: number): number => {
	return 1 - Math.pow(1 - t, 4);
};

// Responsive smooth scroll function
const responsiveScrollTo = (targetPosition: number, duration: number = 500) => {
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
	const startTime = performance.now();

	const animateScroll = (currentTime: number) => {
		const elapsed = currentTime - startTime;
		const progress = Math.min(elapsed / duration, 1);
		const easedProgress = easeOutQuart(progress);

		window.scrollTo(0, startPosition + distance * easedProgress);

		if (progress < 1) {
			requestAnimationFrame(animateScroll);
		}
	};

	requestAnimationFrame(animateScroll);
};

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			const rect = section.getBoundingClientRect();
			const scrollTop = window.pageYOffset;
			const sectionTop = scrollTop + rect.top;

			// Don't offset hero section, but offset others for navbar height
			const targetPosition =
				sectionId === "hero" ? sectionTop : sectionTop - 80; // 80px navbar height

			// Use responsive scroll with shorter duration
			responsiveScrollTo(targetPosition, 500);
		}
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto container-padding py-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<Ship className="w-8 h-8 text-primary" />
						<div className="text-3xl font-heading font-bold text-foreground tracking-tight">
							AQUAS
						</div>
					</div>

					<div className="hidden md:flex space-x-12">
						<button
							onClick={() => scrollToSection("hero")}
							className="text-foreground/80 hover:text-foreground transition-colors font-medium"
						>
							Home
						</button>
						<button
							onClick={() => scrollToSection("problem")}
							className="text-foreground/80 hover:text-foreground transition-colors font-medium"
						>
							Problem
						</button>
						<button
							onClick={() => scrollToSection("solution")}
							className="text-foreground/80 hover:text-foreground transition-colors font-medium"
						>
							Solution
						</button>
						<button
							onClick={() => scrollToSection("contact")}
							className="text-foreground/80 hover:text-foreground transition-colors font-medium"
						>
							Contact
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
