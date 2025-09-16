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
			className="section-spacing bg-background fade-in"
		>
			<div className="container mx-auto container-padding">
				<div className="text-center mb-20">
					<h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-tight">
						Autonomous Water Quality Monitoring
						<span className="block text-primary mt-2">
							with AQUAS Technology
						</span>
					</h2>
					<p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
						Our modular system combines autonomous robotics,
						environmental sensing, and targeted treatment to monitor
						and mitigate algal blooms across New York's waterways,
						driving community-centric water quality management
						solutions.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-card p-8 rounded-3xl shadow-float hover:shadow-ocean transition-smooth border border-border/10"
						>
							<div className="mb-6">{feature.icon}</div>
							<h3 className="text-xl font-semibold mb-4 text-card-foreground">
								{feature.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>

				<div className="bg-surface p-12 md:p-16 rounded-3xl border border-border/10 shadow-ocean">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-surface-foreground">
								How AQUAS Works
							</h3>
							<div className="space-y-8">
								<div className="flex items-start space-x-4">
									<div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
										1
									</div>
									<div>
										<h4 className="font-semibold text-surface-foreground text-lg mb-2">
											Environmental Sensing
										</h4>
										<p className="text-muted-foreground leading-relaxed">
											Sensor buoy collects real-time water
											quality data (TDS, TDO, Temperature,
											pH, Turbidity) with power-optimized
											duty cycles
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
										2
									</div>
									<div>
										<h4 className="font-semibold text-surface-foreground text-lg mb-2">
											Water Sampling
										</h4>
										<p className="text-muted-foreground leading-relaxed">
											Autonomous system collects HAB-rich
											samples for ground-truth diagnosis
											and rapid ML model training
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
										3
									</div>
									<div>
										<h4 className="font-semibold text-surface-foreground text-lg mb-2">
											Targeted Treatment
										</h4>
										<p className="text-muted-foreground leading-relaxed">
											Novel algaecide deployment system
											provides immediate intervention with
											precision treatment at bloom
											locations
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center">
							<div className="w-80 h-80 mx-auto rounded-3xl overflow-hidden shadow-ocean">
								<video
									className="w-full h-full object-cover"
									autoPlay
									loop
									muted
									playsInline
								>
									<source
										src="/path-to-your-video.mp4"
										type="video/mp4"
									/>
									Your browser does not support the video tag.
								</video>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SolutionSection;
