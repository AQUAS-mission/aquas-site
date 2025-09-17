import { useEffect, useRef } from "react";

const HowAquasWorksSection = () => {
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

	return (
		<section
			id="how-aquas-works"
			ref={sectionRef}
			className="bg-surface fade-in"
			style={{
				minHeight: "calc(100vh - 80px)", // Account for navbar height
				maxHeight: "calc(100vh - 80px)",
			}}
		>
			<div className="container mx-auto container-padding h-full flex flex-col pt-12 pb-4">
				<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 lg:p-12 rounded-3xl shadow-ocean flex-1 min-h-0">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
						<div className="flex flex-col justify-center">
							<h3
								className="font-heading font-bold mb-6 lg:mb-8 text-surface-foreground"
								style={{
									fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
								}}
							>
								How AQUAS Works
							</h3>
							<div className="space-y-6 lg:space-y-8">
								<div className="flex items-start space-x-4">
									<div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
										1
									</div>
									<div>
										<h4
											className="font-semibold text-surface-foreground mb-2"
											style={{
												fontSize:
													"clamp(0.95rem, 1.6vw, 1.125rem)",
											}}
										>
											Environmental Sensing
										</h4>
										<p
											className="text-muted-foreground leading-relaxed"
											style={{
												fontSize:
													"clamp(0.8rem, 1.3vw, 0.95rem)",
											}}
										>
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
										<h4
											className="font-semibold text-surface-foreground mb-2"
											style={{
												fontSize:
													"clamp(0.95rem, 1.6vw, 1.125rem)",
											}}
										>
											Water Sampling
										</h4>
										<p
											className="text-muted-foreground leading-relaxed"
											style={{
												fontSize:
													"clamp(0.8rem, 1.3vw, 0.95rem)",
											}}
										>
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
										<h4
											className="font-semibold text-surface-foreground mb-2"
											style={{
												fontSize:
													"clamp(0.95rem, 1.6vw, 1.125rem)",
											}}
										>
											Targeted Treatment
										</h4>
										<p
											className="text-muted-foreground leading-relaxed"
											style={{
												fontSize:
													"clamp(0.8rem, 1.3vw, 0.95rem)",
											}}
										>
											Novel algaecide deployment system
											provides immediate intervention with
											precision treatment at bloom
											locations
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center flex items-center justify-center">
							<div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto rounded-3xl overflow-hidden shadow-ocean">
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

export default HowAquasWorksSection;
