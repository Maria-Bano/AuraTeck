import { Brain, Code2, Rocket, Server, Palette } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'ML & NLP Model Development',
      description: 'Custom machine learning models for classification, sentiment analysis, text processing, and more.',
    },
    {
      icon: Code2,
      title: 'End-to-End AI Applications',
      description: 'Building complete ML-powered web applications from concept to deployment.',
    },
    {
      icon: Rocket,
      title: 'Model Deployment & Optimization',
      description: 'Deploying models to production, optimizing performance, and fixing environment issues.',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Clean, modular API creation using Flask and FastAPI with best practices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Enhancement Support',
      description: 'Designing and refining user flows to create intuitive, engaging interfaces.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            My Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive AI/ML solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="bg-card border-border hover:border-primary/50 transition-smooth hover:shadow-glow group animate-slide-up cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-display">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
