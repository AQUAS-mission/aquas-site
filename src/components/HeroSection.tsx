import { useEffect, useRef, useState } from "react";

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

	return (
		<section
			id="hero"
			ref={sectionRef}
			className="relative min-h-screen flex items-center overflow-hidden fade-in"
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
					<h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tight">
						<span className="block text-foreground">AQUAS</span>
					</h1>

					<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-secondary leading-relaxed">
						Autonomous Water Quality Monitoring
					</h2>

					<p className="text-xl md:text-2xl mb-12 text-foreground/80 font-light italic max-w-2xl leading-relaxed">
						Protecting New York's waterways with Columbia University
					</p>

					<div className="flex flex-col sm:flex-row gap-6">
						<button
							onClick={() =>
								document
									.getElementById("solution")
									?.scrollIntoView({ behavior: "smooth" })
							}
							className="btn-ocean"
						>
							Discover Our Technology
						</button>
						<button
							onClick={() =>
								document
									.getElementById("contact")
									?.scrollIntoView({ behavior: "smooth" })
							}
							className="btn-secondary"
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
					<span className="text-sm mb-3 font-medium">
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
