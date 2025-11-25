import mariaPortrait from '@/assets/maria-portrait.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6 animate-fade-in">
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
                  Bachelor's in Artificial Intelligence (BS-AI) with a focus on Machine Learning, 
                  Natural Language Processing, and practical software development.
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
                  <a 
                    href="https://github.com/Maria-Bano" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-smooth"
                  >
                    github.com/Maria-Bano
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={mariaPortrait}
                alt="Maria Bano - AI/ML Engineer"
                className="relative rounded-2xl shadow-card w-full max-w-md object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
