import { useEffect, useRef } from "react";
import { Brain, Waves, Zap, Target } from "lucide-react";

const SolutionSection = () => {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			},
			{ threshold: 0.2 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const features = [
		{
			icon: <Brain className="w-10 h-10 text-secondary" />,
			title: "Environmental Sensing",
			description:
				"Deployment-ready sensor buoy with 5 calibrated environmental sensors (TDS, TDO, Temperature, pH, Turbidity) and power-optimized microcontrollers.",
		},
		{
			icon: <Waves className="w-10 h-10 text-primary" />,
			title: "Water Sampling System",
			description:
				"Autonomous water sampling with solenoid-controlled flow to collect HAB-rich samples for ground-truth diagnosis and rapid ML model training.",
		},
		{
			icon: <Target className="w-10 h-10 text-accent" />,
			title: "Dispersal System",
			description:
				"Novel algaecide deployment system for targeted treatment of harmful algal blooms, minimizing environmental impact while maximizing effectiveness.",
		},
		{
			icon: <Zap className="w-10 h-10 text-destructive" />,
			title: "Autonomous Navigation",
			description:
				"LiDAR and computer vision obstacle detection and avoidance, with real-time data transmission to our host site for continuous monitoring.",
		},
	];

	return (
		<section
			id="solution"
			ref={sectionRef}
			className="bg-background fade-in"
			style={{
				minHeight: "calc(100vh - 80px)", // Account for navbar height
				maxHeight: "calc(100vh - 80px)",
			}}
		>
			<div className="container mx-auto container-padding h-full flex flex-col pt-12 pb-4">
				{/* Header - Fixed top section */}
				<div className="text-center mb-8">
					<h2
						className="font-heading font-bold text-foreground leading-tight mb-4"
						style={{
							fontSize: "clamp(2rem, 4vw, 3.5rem)",
						}}
					>
						Autonomous Water Quality Monitoring
						<span className="block text-primary mt-2">
							with AQUAS Technology
						</span>
					</h2>
					<p
						className="text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
						style={{
							fontSize: "clamp(0.9rem, 1.8vw, 1.25rem)",
						}}
					>
						Our modular system combines autonomous robotics,
						environmental sensing, and targeted treatment to monitor
						and mitigate algal blooms across New York's waterways,
						driving community-centric water quality management
						solutions.
					</p>
				</div>

				{/* Features Grid - Flexible middle section */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 flex-1 min-h-0">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-card p-4 lg:p-6 rounded-2xl shadow-float hover:shadow-ocean transition-smooth border border-border/10 flex flex-col"
						>
							<div className="mb-4">{feature.icon}</div>
							<h3
								className="font-semibold mb-3 text-card-foreground"
								style={{
									fontSize: "clamp(0.95rem, 1.6vw, 1.125rem)",
								}}
							>
								{feature.title}
							</h3>
							<p
								className="text-muted-foreground leading-relaxed flex-1"
								style={{
									fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)",
								}}
							>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SolutionSection;
