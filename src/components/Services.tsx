import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Brain, Code2, Rocket, Server, Palette } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section id="services" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            My Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive AI/ML solutions tailored to your needs
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="bg-card border-border relative overflow-hidden cursor-pointer h-full gradient-border hover-lift">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <CardHeader className="relative z-10">
                  <motion.div 
                    className="p-3 bg-primary/10 rounded-lg w-fit mb-4 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                    
                    {hoveredIndex === idx && (
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        style={{ border: '2px solid hsl(var(--primary))' }}
                      />
                    )}
                  </motion.div>
                  
                  <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>

                {/* Connection lines effect */}
                {hoveredIndex === idx && (
                  <motion.svg
                    className="absolute inset-0 pointer-events-none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <motion.rect
                      x="2"
                      y="2"
                      width="calc(100% - 4px)"
                      height="calc(100% - 4px)"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -8 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      rx="12"
                    />
                  </motion.svg>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
