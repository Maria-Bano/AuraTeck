import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import mariaPortrait from '@/assets/maria-portrait.jpg';
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="about" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div ref={ref} className="grid md:grid-cols-2 gap-12 items-center" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div className="order-2 md:order-1 space-y-6" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Who am I?
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I build intelligent, user-centric digital solutions by combining AI, Machine Learning, 
                NLP, and Python development with clean, functional design.
              </p>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
                <p>
                  Bachelor's in Artificial Intelligence with a focus on Machine Learning, Natural Language Processing, and practical software development.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Experience</h3>
                <p>
                  As an AI/ML Engineer, I specialize in end-to-end development, from data preprocessing 
                  and model training to deployment using Flask, PythonAnywhere, and Docker. I collaborate 
                  closely with UI/UX teams to create seamless, user-friendly applications that bring 
                  intelligent solutions to life.
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-semibold">Name:</span>
                  <span>Maria Bano</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-semibold">Email:</span>
                  <a href="mailto:mariabano.official@gmail.com" className="hover:text-primary transition-smooth">
                    mariabano.official@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-semibold">GitHub:</span>
                  <a href="https://github.com/Maria-Bano" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-smooth">
                    github.com/Maria-Bano
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="order-1 md:order-2 flex justify-center" variants={itemVariants}>
            <div className="relative">
              {/* Rotating border effect */}
              <motion.div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-xl opacity-50" animate={{
              rotate: 360
            }} transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }} />
              
              {/* Floating animation */}
              <motion.div animate={{
              y: [0, -20, 0]
            }} transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="relative">
                <motion.img src={mariaPortrait} alt="Maria Bano - AI/ML Engineer" className="relative rounded-2xl shadow-card w-full max-w-md object-cover aspect-square border-2 border-primary/30" whileHover={{
                scale: 1.05
              }} transition={{
                duration: 0.3
              }} />
              </motion.div>

              {/* Animated accent circles */}
              <motion.div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/20 blur-2xl" animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }} transition={{
              duration: 3,
              repeat: Infinity
            }} />
              <motion.div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/20 blur-2xl" animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }} transition={{
              duration: 4,
              repeat: Infinity
            }} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default About;