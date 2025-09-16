import { useEffect, useRef } from "react";
import { AlertTriangle, DollarSign, Heart } from "lucide-react";

const ProblemSection = () => {
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

	const stats = [
		{
			icon: <DollarSign className="w-5 h-5 text-accent" />,
			title: "Economic Impact",
			value: "$2.7B",
			description:
				"Florida's 2018 red tide caused $2.7B in losses. HABs cost $50M annually in fisheries, tourism, and public health damages across the U.S.",
		},
		{
			icon: <Heart className="w-5 h-5 text-destructive" />,
			title: "Health Crisis",
			value: "200+",
			description:
				"Toxin-producing microalgae species release harmful compounds like microcystins and brevetoxins that threaten human and marine health.",
		},
		{
			icon: <AlertTriangle className="w-5 h-5 text-primary" />,
			title: "Dead Zones",
			value: "400+",
			description:
				"Oceanic dead zones cover 245,000 km² worldwide. The Gulf of Mexico alone sees seasonal hypoxic zones reaching 14,000 km² annually.",
		},
	];

	return (
		<section
			id="problem"
			ref={sectionRef}
			className="bg-surface fade-in"
			style={{
				minHeight: "calc(100vh - 80px)", // Account for navbar height
				maxHeight: "calc(100vh - 80px)",
			}}
		>
			<div className="container mx-auto container-padding h-full flex flex-col pt-12 pb-4">
				{/* Header - Fixed top section */}
				<div className="text-center mb-6">
					<h2
						className="font-heading font-bold text-foreground leading-tight mb-3"
						style={{
							fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
						}}
					>
						The Growing Threat of
						<span className="block text-destructive mt-1">
							Harmful Algal Blooms
						</span>
					</h2>
					<p
						className="text-muted-foreground max-w-4xl mx-auto leading-relaxed"
						style={{
							fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
						}}
					>
						Algal blooms are rapidly expanding across New York's
						waterways, affecting city parks, water treatment plants,
						fisheries, and ports. Current manned sampling methods
						are laborious, costly, and cannot scale to monitor HABs
						at the scope over which they are occurring.
					</p>
				</div>

				{/* Stats Grid - Flexible middle section */}
				<div className="grid lg:grid-cols-3 gap-4 lg:gap-6 flex-1 min-h-0 mb-4">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-6 rounded-2xl transition-smooth text-center flex flex-col hover:bg-white/20 hover:scale-[1.02] hover:shadow-xl"
						>
							{/* Icon and title inline */}
							<div className="flex items-center justify-center gap-2 mb-3">
								{stat.icon}
								<h3
									className="font-semibold text-foreground"
									style={{
										fontSize:
											"clamp(0.9rem, 1.5vw, 1.125rem)",
									}}
								>
									{stat.title}
								</h3>
							</div>

							<div
								className="font-bold mb-3 text-primary font-heading"
								style={{
									fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
								}}
							>
								{stat.value}
							</div>

							<p
								className="text-muted-foreground leading-relaxed flex-1"
								style={{
									fontSize: "clamp(0.7rem, 1.1vw, 0.85rem)",
								}}
							>
								{stat.description}
							</p>
						</div>
					))}
				</div>

				{/* Bottom Callout - Fixed bottom section */}
				<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-6 rounded-2xl text-center hover:bg-white/20 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
					<h3
						className="font-heading font-bold mb-2 text-foreground"
						style={{
							fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
						}}
					>
						Current manned sampling is failing us
					</h3>
					<p
						className="text-muted-foreground max-w-3xl mx-auto leading-relaxed"
						style={{
							fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)",
						}}
					>
						Traditional manned shipboard surveys are laborious,
						costly, and temporally biased. They cannot be scaled to
						monitor HABs at the global scope over which they are
						occurring. We need an autonomous approach that can
						provide daily monitoring at a low cost.
					</p>
				</div>
			</div>
		</section>
	);
};

export default ProblemSection;
