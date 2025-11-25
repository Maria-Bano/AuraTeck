import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Database } from 'lucide-react';
import AnimatedSkillBar from './AnimatedSkillBar';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    <section id="skills" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Animated wave pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 20px)',
          backgroundSize: '200% 200%'
        }}
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
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technical skills across the AI/ML development lifecycle
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-card p-8 rounded-2xl shadow-card border border-border relative gradient-border hover-3d"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <motion.div 
                className="flex items-center gap-4 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="p-3 bg-primary/10 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {category.title}
                </h3>
              </motion.div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <AnimatedSkillBar
                    key={skillIdx}
                    name={skill.name}
                    level={skill.level}
                    delay={idx * 0.2 + skillIdx * 0.1}
                  />
                ))}
              </div>

              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
