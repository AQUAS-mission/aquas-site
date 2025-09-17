import { useEffect, useCallback } from "react";

interface ScrollSnapOptions {
	threshold?: number; // How close to a section before snapping (0-1)
	snapDuration?: number; // Duration of snap animation in ms
	enabled?: boolean; // Whether scroll snap is enabled
	navbarHeight?: number; // Height of navbar to offset scroll position
}

// Very gentle easing function
const easeOutQuart = (t: number): number => {
	return 1 - Math.pow(1 - t, 4);
};

// Subtle smooth scroll function
const gentleScrollTo = (targetPosition: number, duration: number = 600) => {
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;

	// Don't snap if the distance is very small
	if (Math.abs(distance) < 20) return;

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

export const useScrollSnap = (options: ScrollSnapOptions = {}) => {
	const {
		threshold = 0.15, // Much smaller threshold - only snap when very close
		snapDuration = 600, // Shorter, more responsive duration
		enabled = true,
		navbarHeight = 80,
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

				// Use gentle scroll
				gentleScrollTo(targetPosition, snapDuration);
			}
		},
		[navbarHeight, snapDuration]
	);

	useEffect(() => {
		if (!enabled) return;

		let isSnapping = false;
		let snapTimeout: NodeJS.Timeout;
		let lastScrollTime = 0;
		let scrollVelocity = 0;
		let lastScrollPosition = window.pageYOffset;

		const handleScroll = () => {
			if (isSnapping) return;

			const now = performance.now();
			const currentScrollPosition = window.pageYOffset;

			// Calculate scroll velocity
			if (now - lastScrollTime > 0) {
				scrollVelocity =
					Math.abs(currentScrollPosition - lastScrollPosition) /
					(now - lastScrollTime);
			}

			lastScrollTime = now;
			lastScrollPosition = currentScrollPosition;

			// Clear existing timeout
			clearTimeout(snapTimeout);

			// Only consider snapping if scroll velocity is very low (user has nearly stopped)
			snapTimeout = setTimeout(() => {
				// Don't snap if user is still scrolling fast
				if (scrollVelocity > 0.3) return;

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

					// Much stricter visibility and proximity requirements
					const isNearTop = rect.top > -100 && rect.top < 100; // Very close to top
					const isVeryClose = distance < viewportHeight * threshold; // Much smaller threshold

					if (
						isNearTop &&
						isVeryClose &&
						distance < closestDistance
					) {
						closestDistance = distance;
						closestSection = section;
					}
				});

				// Only snap if we're REALLY close (within 50px)
				if (closestSection && closestDistance < 50) {
					const sectionId = closestSection.getAttribute("id");
					if (sectionId) {
						isSnapping = true;
						snapToSection(sectionId);

						// Shorter reset time
						setTimeout(() => {
							isSnapping = false;
						}, snapDuration + 100);
					}
				}
			}, 800); // Longer delay - only snap when user has really stopped
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
