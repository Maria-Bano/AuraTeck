import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const projects = [
    {
      title: 'News Category Classification System',
      description: 'Advanced NLP model using LinearSVC and TF-IDF for accurate news categorization with Flask API deployment.',
      technologies: ['Python', 'NLP', 'Flask', 'scikit-learn', 'TF-IDF'],
      link: 'https://github.com/Maria-Bano',
    },
    {
      title: 'ML-Powered Web Application',
      description: 'Full-stack Flask application with integrated ML models, deployed on PythonAnywhere with real-time predictions.',
      technologies: ['Flask', 'Python', 'ML', 'PythonAnywhere', 'REST API'],
      link: 'https://github.com/Maria-Bano',
    },
    {
      title: 'UI/UX Component Designs',
      description: 'Modern, responsive layouts for chat interfaces, dashboards, and portfolio websites with focus on user experience.',
      technologies: ['UI/UX', 'React', 'Tailwind CSS', 'Design Systems'],
      link: 'https://github.com/Maria-Bano',
    },
    {
      title: 'Data Automation Scripts',
      description: 'Intelligent Python scripts for data cleaning, preprocessing, and workflow automation to enhance productivity.',
      technologies: ['Python', 'Pandas', 'Automation', 'Data Processing'],
      link: 'https://github.com/Maria-Bano',
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing real-world applications of AI/ML and software development
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              onHoverStart={() => setHoveredCard(idx)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="bg-card border-border relative overflow-hidden h-full gradient-border hover-lift cursor-pointer">
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent"
                  animate={{ opacity: hoveredCard === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Ken Burns effect background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                  animate={hoveredCard === idx ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.6 }}
                />

                <CardHeader className="relative z-10">
                  <motion.div
                    animate={hoveredCard === idx ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardTitle className="text-2xl font-display group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                  </motion.div>
                  <CardDescription className="text-muted-foreground mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <motion.div
                        key={techIdx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: idx * 0.15 + techIdx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 cursor-default"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full group border-primary/50 hover:bg-primary hover:text-primary-foreground relative overflow-hidden"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          className="absolute inset-0 bg-primary"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center justify-center">
                          <Github className="w-4 h-4 mr-2" />
                          View Project
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>

                {/* Animated corner accent */}
                {hoveredCard === idx && (
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <motion.path
                        d="M 100 0 L 100 100 L 0 0 Z"
                        fill="url(#project-gradient)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <defs>
                        <linearGradient id="project-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
