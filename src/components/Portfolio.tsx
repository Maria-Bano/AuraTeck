import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
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
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing real-world applications of AI/ML and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="bg-card border-border hover:border-primary/50 transition-smooth hover:shadow-glow group animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-display group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <Badge
                      key={techIdx}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground border-primary/50"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
