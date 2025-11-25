import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link
    const mailtoLink = `mailto:mariabano.official@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    
    // Simulate sending delay for animation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email application will open with the message.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, currentColor 25%, currentColor 26%, transparent 27%, transparent 74%, currentColor 75%, currentColor 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, currentColor 25%, currentColor 26%, transparent 27%, transparent 74%, currentColor 75%, currentColor 76%, transparent 77%, transparent)',
            backgroundSize: '55px 55px'
          }}
          animate={{ backgroundPosition: ['0px 0px', '55px 55px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's collaborate on your next AI/ML project
            </p>
          </motion.div>

          <motion.div 
            className="bg-card p-8 rounded-2xl shadow-card border border-border relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  <motion.span
                    animate={focusedField === 'name' ? { color: 'hsl(var(--primary))' } : {}}
                  >
                    Name
                  </motion.span>
                </label>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="bg-background border-border focus:border-primary transition-all"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  <motion.span
                    animate={focusedField === 'email' ? { color: 'hsl(var(--primary))' } : {}}
                  >
                    Email
                  </motion.span>
                </label>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="bg-background border-border focus:border-primary transition-all"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  <motion.span
                    animate={focusedField === 'message' ? { color: 'hsl(var(--primary))' } : {}}
                  >
                    Message
                  </motion.span>
                </label>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="bg-background border-border focus:border-primary resize-none transition-all"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow relative overflow-hidden"
                >
                  {isSubmitting && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </Button>
              </motion.div>
            </form>

            <motion.div 
              className="mt-8 pt-8 border-t border-border space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="flex items-center gap-3 text-muted-foreground"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Mail className="w-5 h-5 text-primary" />
                </motion.div>
                <a
                  href="mailto:mariabano.official@gmail.com"
                  className="hover:text-primary transition-smooth"
                >
                  mariabano.official@gmail.com
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 text-muted-foreground"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Github className="w-5 h-5 text-primary" />
                </motion.div>
                <a
                  href="https://github.com/Maria-Bano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth"
                >
                  github.com/Maria-Bano
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
