import { useEffect, useRef, useState } from "react";
import {
	Mail,
	MapPin,
	Trees,
	Droplets,
	Fish,
	Anchor,
	Microscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: "",
		company: "",
		email: "",
		position: "",
		message: "",
	});

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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Basic validation
		if (!formData.name || !formData.email || !formData.message) {
			toast({
				title: "Please fill required fields",
				description: "Name, email, and message are required.",
				variant: "destructive",
			});
			return;
		}

		// Show loading toast
		toast({
			title: "Sending message...",
			description: "Please wait while we send your message.",
		});

		// Send email using EmailJS
		emailjs
			.send(
				"aquasmission",
				"aquas-contact-template",
				{
					title: "AQUAS Contact Form - New Message",
					name: formData.name,
					company: formData.company,
					email: formData.email,
					time: new Date().toLocaleString(),
					message: formData.message,
				},
				"3tweu6KWrcy77aVwp"
			)
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
				toast({
					title: "Message sent successfully!",
					description: "We'll get back to you within 24 hours.",
				});

				// Reset form
				setFormData({
					name: "",
					company: "",
					email: "",
					position: "",
					message: "",
				});
			})
			.catch((error) => {
				console.log("FAILED...", error);
				toast({
					title: "Failed to send message",
					description:
						"Please try again or contact us directly at aquasmission@gmail.com",
					variant: "destructive",
				});
			});
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section
			id="contact"
			ref={sectionRef}
			className="section-spacing bg-surface fade-in scroll-snap-section"
		>
			<div className="container mx-auto container-padding">
				<div className="text-center mb-20">
					<h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-surface-foreground leading-tight">
						Partner with <span className="text-primary">AQUAS</span>{" "}
						to
						<span className="block text-secondary mt-2">
							clean up and preserve your waterways.
						</span>
					</h2>
				</div>

				<div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
					{/* Contact Information */}
					<div className="space-y-12">
						<div className="bg-primary/20 p-8 rounded-2xl border border-primary/30">
							<h3 className="font-heading text-3xl font-bold mb-8 text-surface-foreground">
								Get in Touch
							</h3>
							<div className="space-y-6">
								<div className="flex items-center space-x-6">
									<div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
										<Mail className="w-6 h-6 text-primary-foreground" />
									</div>
									<div>
										<div className="text-surface-foreground font-semibold text-lg">
											Email
										</div>
										<div className="text-surface-foreground/70 text-lg">
											aquasmission@gmail.com
										</div>
									</div>
								</div>

								<div className="flex items-center space-x-6">
									<div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
										<MapPin className="w-6 h-6 text-accent-foreground" />
									</div>
									<div>
										<div className="text-surface-foreground font-semibold text-lg">
											Location
										</div>
										<div className="text-surface-foreground/70 text-lg">
											Columbia University, New York
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-primary/20 p-8 rounded-2xl border border-primary/30">
							<h4 className="text-xl font-semibold mb-6 text-surface-foreground">
								Ideal Partners
							</h4>
							<ul className="space-y-4 text-surface-foreground/80 text-lg">
								<li className="flex items-center space-x-3">
									<Trees className="w-5 h-5 text-primary" />
									<span>
										City Parks and environmental agencies
									</span>
								</li>
								<li className="flex items-center space-x-3">
									<Droplets className="w-5 h-5 text-secondary" />
									<span>
										Water treatment and desalination plants
									</span>
								</li>
								<li className="flex items-center space-x-3">
									<Fish className="w-5 h-5 text-accent" />
									<span>
										Commercial and recreational fisheries
									</span>
								</li>
								<li className="flex items-center space-x-3">
									<Anchor className="w-5 h-5 text-destructive" />
									<span>Port authorities</span>
								</li>
								<li className="flex items-center space-x-3">
									<Microscope className="w-5 h-5 text-primary" />
									<span>
										Algaecide and water treatment
										researchers
									</span>
								</li>
							</ul>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-primary/20 p-10 rounded-3xl shadow-ocean border border-primary/30">
						<h3 className="font-heading text-3xl font-bold mb-8 text-surface-foreground">
							Send us a Message
						</h3>

						<form onSubmit={handleSubmit} className="space-y-8">
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<Label
										htmlFor="name"
										className="text-surface-foreground text-lg font-medium"
									>
										Name *
									</Label>
									<Input
										id="name"
										name="name"
										value={formData.name}
										onChange={handleInputChange}
										placeholder="Your full name"
										required
										className="mt-2 h-12 text-lg"
									/>
								</div>
								<div>
									<Label
										htmlFor="company"
										className="text-surface-foreground text-lg font-medium"
									>
										Company
									</Label>
									<Input
										id="company"
										name="company"
										value={formData.company}
										onChange={handleInputChange}
										placeholder="Your organization"
										className="mt-2 h-12 text-lg"
									/>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<Label
										htmlFor="email"
										className="text-surface-foreground text-lg font-medium"
									>
										Email *
									</Label>
									<Input
										id="email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleInputChange}
										placeholder="your.email@company.com"
										required
										className="mt-2 h-12 text-lg"
									/>
								</div>
								<div>
									<Label
										htmlFor="position"
										className="text-surface-foreground text-lg font-medium"
									>
										Position
									</Label>
									<Input
										id="position"
										name="position"
										value={formData.position}
										onChange={handleInputChange}
										placeholder="Your role"
										className="mt-2 h-12 text-lg"
									/>
								</div>
							</div>

							<div>
								<Label
									htmlFor="message"
									className="text-surface-foreground text-lg font-medium"
								>
									Message *
								</Label>
								<Textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									placeholder="Tell us about your project, challenges, or how you'd like to collaborate..."
									rows={6}
									required
									className="mt-2 text-lg"
								/>
							</div>

							<Button
								type="submit"
								className="w-full btn-ocean text-xl py-6"
							>
								Send Message
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
