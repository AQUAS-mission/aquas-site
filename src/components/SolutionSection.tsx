import { useEffect, useRef } from 'react';
import { Brain, Waves, Zap, Target } from 'lucide-react';

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
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
      title: "AI-Powered Detection",
      description: "Advanced machine learning models analyze water conditions to predict bloom severity and species identification with 95% accuracy."
    },
    {
      icon: <Waves className="w-10 h-10 text-primary" />,
      title: "Autonomous Fleet",
      description: "Low-profile USVs deployed strategically across water bodies, providing real-time monitoring and immediate response capabilities."
    },
    {
      icon: <Target className="w-10 h-10 text-accent" />,
      title: "Targeted Intervention",
      description: "Precision deployment of treatment solutions directly to bloom sites, minimizing environmental impact while maximizing effectiveness."
    },
    {
      icon: <Zap className="w-10 h-10 text-destructive" />,
      title: "Rapid Response",
      description: "Peak season deployment ensures maximum coverage when algal blooms are most likely to occur, preventing crisis escalation."
    }
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
            Intelligent Ocean Protection
            <span className="block text-primary mt-2">with AQUAS Technology</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Our revolutionary system combines artificial intelligence, autonomous robotics, 
            and precision environmental intervention to detect, track, and neutralize 
            harmful algal blooms before they become disasters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-3xl shadow-float hover:shadow-ocean transition-smooth border border-border/10"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-surface-foreground text-lg mb-2">Predictive Monitoring</h4>
                    <p className="text-muted-foreground leading-relaxed">ML models analyze environmental data to predict bloom likelihood</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-surface-foreground text-lg mb-2">Fleet Deployment</h4>
                    <p className="text-muted-foreground leading-relaxed">USVs autonomously navigate to high-risk areas for continuous sensing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-surface-foreground text-lg mb-2">Targeted Treatment</h4>
                    <p className="text-muted-foreground leading-relaxed">Immediate intervention with precision treatment at bloom locations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-64 h-64 mx-auto ocean-gradient rounded-full flex items-center justify-center shadow-ocean">
                <div className="text-white text-center">
                  <Waves className="w-20 h-20 mx-auto mb-3" />
                  <div className="text-lg font-semibold">AQUAS</div>
                  <div className="text-sm opacity-90">Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;