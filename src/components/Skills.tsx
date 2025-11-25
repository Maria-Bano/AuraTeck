import { Brain, Code, Database, Rocket, Palette, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Machine Learning & Deep Learning', level: 90 },
        { name: 'Natural Language Processing', level: 85 },
        { name: 'Data Preprocessing & Feature Engineering', level: 90 },
      ],
    },
    {
      icon: Code,
      title: 'Development',
      skills: [
        { name: 'Python Programming', level: 95 },
        { name: 'Flask/FastAPI Development', level: 85 },
        { name: 'Model Deployment', level: 80 },
      ],
    },
    {
      icon: Database,
      title: 'Tools & Environment',
      skills: [
        { name: 'Environment Management', level: 85 },
        { name: 'Problem-solving & Debugging', level: 90 },
        { name: 'UI/UX Collaboration', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technical skills across the AI/ML development lifecycle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-card p-8 rounded-2xl shadow-card border border-border hover:border-primary/50 transition-smooth animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
