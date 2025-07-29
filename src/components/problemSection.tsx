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
			icon: <DollarSign className="w-8 h-8 text-accent" />,
			title: "Economic Impact",
			value: "$2.7 Billion",
			description:
				"In high-profile events like Florida's 2018 red tide, economic losses reached $2.7 billion statewide—$1.3 billion in Southwest Florida alone. On the West Coast, Pseudo-nitzschia blooms led to $97 million in lost crab revenue. Across the U.S., HABs cause approximately $50 million in annual damages to fisheries, tourism, and public health.",
		},
		{
			icon: <Heart className="w-8 h-8 text-destructive" />,
			title: "Health Crisis",
			value: "200+ Species",
			description:
				"Scientists have identified nearly 200 toxin-producing microalgae species globally, including dinoflagellates, cyanobacteria, and diatoms. These organisms release harmful compounds like microcystins, brevetoxins, and saxitoxins that threaten human and marine health.",
		},
		{
			icon: <AlertTriangle className="w-8 h-8 text-primary" />,
			title: "Environmental Damage",
			value: "400+ Dead Zones",
			description:
				"There are over 400 documented oceanic 'dead zones' worldwide, covering a total area of 95,000–245,000 km²—zones where algal blooms have depleted oxygen and devastated marine life. The Gulf of Mexico alone sees seasonal hypoxic zones reaching up to 14,000 km² annually.",
		},
	];

	return (
		<section
			id="problem"
			ref={sectionRef}
			className="section-spacing section-gradient fade-in"
		>
			<div className="container mx-auto container-padding">
				<div className="text-center mb-20">
					<h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-tight">
						The Growing Threat of
						<span className="block text-destructive mt-2">
							Harmful Algal Blooms
						</span>
					</h2>
					<p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
						Algal blooms are rapidly expanding across New York's
						waterways, affecting city parks, water treatment plants,
						fisheries, and ports. Current manned sampling methods
						are laborious, costly, and cannot scale to monitor HABs
						at the scope over which they are occurring.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8 mb-20">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="bg-card p-10 rounded-3xl shadow-float hover:shadow-ocean transition-smooth text-center border border-border/10"
						>
							<div className="flex justify-center mb-6">
								{stat.icon}
							</div>
							<h3 className="text-2xl font-semibold mb-4 text-card-foreground">
								{stat.title}
							</h3>
							<div className="text-4xl font-bold mb-6 text-primary font-heading">
								{stat.value}
							</div>
							<p className="text-muted-foreground leading-relaxed text-lg">
								{stat.description}
							</p>
						</div>
					))}
				</div>

				<div className="bg-surface p-12 md:p-16 rounded-3xl text-center shadow-ocean border border-border/10">
					<h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-surface-foreground">
						Current manned sampling is failing us
					</h3>
					<p className="text-surface-foreground/80 text-xl max-w-4xl mx-auto leading-relaxed font-light">
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
