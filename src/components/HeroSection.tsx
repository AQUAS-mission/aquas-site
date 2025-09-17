import { useEffect, useRef, useState } from "react";

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

const HeroSection = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const [showScrollIndicator, setShowScrollIndicator] = useState(true);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		// Fade out scroll indicator after 5 seconds
		const timer = setTimeout(() => {
			setShowScrollIndicator(false);
		}, 5000);

		// Fade out when user starts scrolling
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setShowScrollIndicator(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			clearTimeout(timer);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			const rect = section.getBoundingClientRect();
			const scrollTop = window.pageYOffset;
			const sectionTop = scrollTop + rect.top;

			// Account for navbar height
			const targetPosition = sectionTop - 80;

			// Use responsive scroll with shorter duration
			responsiveScrollTo(targetPosition, 500);
		}
	};

	return (
		<section
			id="hero"
			ref={sectionRef}
			className="relative min-h-screen flex items-center overflow-hidden fade-in scroll-snap-section"
		>
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<img
					src="/frontView.jpeg"
					alt="AQUAS Ocean Monitoring"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
			</div>

			{/* Content */}
			<div className="relative z-10 container mx-auto container-padding">
				<div className="max-w-4xl">
					<h1
						className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tight"
						style={{
							textShadow:
								"0 6px 12px rgba(0, 0, 0, 0.8), 0 3px 6px rgba(0, 0, 0, 0.5)",
						}}
					>
						<span className="block text-foreground">AQUAS</span>
					</h1>

					<h2
						className="text-2xl md:text-3xl lg:text-4xl font-medium mb-12 text-secondary leading-relaxed"
						style={{
							textShadow:
								"0 4px 8px rgba(0, 0, 0, 0.7), 0 2px 4px rgba(0, 0, 0, 0.4)",
						}}
					>
						Autonomous HAB Detection and Cleaning
					</h2>

					<div className="flex flex-col sm:flex-row gap-6">
						<button
							onClick={() => scrollToSection("solution")}
							className="btn-ocean"
						>
							Discover Our Technology
						</button>
						<button
							onClick={() => scrollToSection("contact")}
							className="bg-white/10 backdrop-blur-md border border-white/20 text-foreground px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] hover:shadow-xl"
						>
							Join Our Mission
						</button>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div
				className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 text-foreground/60 animate-bounce transition-opacity duration-1000 ${
					showScrollIndicator ? "opacity-100" : "opacity-0"
				}`}
			>
				<div className="flex flex-col items-center">
					<span
						className="text-sm mb-3 font-medium"
						style={{
							textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
						}}
					>
						Scroll Down
					</span>
					<div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-foreground/40 rounded-full mt-2"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
