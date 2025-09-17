import { useEffect, useCallback } from "react";

interface ScrollSnapOptions {
	threshold?: number; // How close to a section before snapping (0-1)
	snapDuration?: number; // Duration of snap animation in ms
	enabled?: boolean; // Whether scroll snap is enabled
	navbarHeight?: number; // Height of navbar to offset scroll position
}

export const useScrollSnap = (options: ScrollSnapOptions = {}) => {
	const {
		threshold = 0.5, // Increased threshold for gentler snapping
		snapDuration = 1000, // Longer duration for smoother animation
		enabled = true,
		navbarHeight = 80, // Default navbar height
	} = options;

	const snapToSection = useCallback(
		(sectionId: string) => {
			const section = document.getElementById(sectionId);
			if (section) {
				const rect = section.getBoundingClientRect();
				const scrollTop = window.pageYOffset;
				const sectionTop = scrollTop + rect.top;

				// Don't offset hero section, but offset others for navbar
				const targetPosition =
					sectionId === "hero"
						? sectionTop
						: sectionTop - navbarHeight;

				window.scrollTo({
					top: targetPosition,
					behavior: "smooth",
				});
			}
		},
		[navbarHeight]
	);

	useEffect(() => {
		if (!enabled) return;

		let isSnapping = false;
		let snapTimeout: NodeJS.Timeout;

		const handleScroll = () => {
			if (isSnapping) return;

			// Clear existing timeout
			clearTimeout(snapTimeout);

			// Set a timeout to check if we should snap after scrolling stops
			snapTimeout = setTimeout(() => {
				const sections = document.querySelectorAll(
					".scroll-snap-section"
				);
				const viewportHeight = window.innerHeight;
				const scrollTop = window.pageYOffset;

				let closestSection: Element | null = null;
				let closestDistance = Infinity;

				sections.forEach((section) => {
					const rect = section.getBoundingClientRect();
					const sectionTop = scrollTop + rect.top;
					const sectionId = section.getAttribute("id");

					// Adjust for navbar height (except hero)
					const adjustedSectionTop =
						sectionId === "hero"
							? sectionTop
							: sectionTop - navbarHeight;

					const distance = Math.abs(scrollTop - adjustedSectionTop);

					// Check if section is partially visible and within threshold
					const isVisible =
						rect.top < viewportHeight && rect.bottom > 0;
					const isCloseEnough = distance < viewportHeight * threshold;

					if (
						isVisible &&
						isCloseEnough &&
						distance < closestDistance
					) {
						closestDistance = distance;
						closestSection = section;
					}
				});

				// Snap to the closest section if found
				if (closestSection) {
					const sectionId = closestSection.getAttribute("id");
					if (sectionId) {
						isSnapping = true;
						snapToSection(sectionId);

						// Reset snapping flag after animation
						setTimeout(() => {
							isSnapping = false;
						}, snapDuration);
					}
				}
			}, 300); // Increased delay for gentler behavior
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(snapTimeout);
		};
	}, [enabled, threshold, snapDuration, snapToSection, navbarHeight]);

	return {
		snapToSection,
		enabled,
	};
};
