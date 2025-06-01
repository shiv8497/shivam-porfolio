import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with enhanced feedback
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      // Reset form with animation
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'shivamoffical7722@gmail.com',
      href: 'mailto:shivamoffical7722@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7722938497',
      href: 'tel:+917722938497',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bhopal, India',
      href: '#',
      description: 'Available for remote work'
    }
  ];

  const features = [
    { icon: MessageCircle, title: 'Quick Response', desc: 'I respond within 24 hours' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Available across time zones' },
    { icon: Award, title: 'Quality Work', desc: '100% satisfaction guaranteed' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-xl float"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-500 rounded-full opacity-20 blur-xl float stagger-3"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl float stagger-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 slide-up">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto slide-up stagger-2">
            Ready to start your next project? Let's discuss how we can work together to bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="slide-left stagger-3">
            <h3 className="text-2xl font-bold text-white mb-8 text-reveal">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.href}
                  className={`flex items-start space-x-4 p-6 rounded-xl glass hover-lift hover-glow transition-all duration-300 group stagger-${index + 1}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 hover-glow">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">{info.title}</h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{info.value}</p>
                    <p className="text-sm text-gray-400 mt-1">{info.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Features section */}
            <div className="glass p-6 rounded-xl hover-glow">
              <h4 className="text-lg font-semibold text-white mb-6">Why Work With Me?</h4>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className={`flex items-center space-x-3 stagger-${index + 1}`}>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center hover-scale">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{feature.title}</p>
                      <p className="text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <Card className="slide-right stagger-4 bg-white/10 backdrop-blur-lg border-white/20 hover-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white text-reveal">Send Message</CardTitle>
              <p className="text-gray-300">Fill out the form below and I'll get back to you soon!</p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`bg-white/10 border-white/20 text-white placeholder:text-gray-300 transition-all duration-300 ${
                        focusedField === 'name' ? 'border-purple-400 hover-glow' : ''
                      }`}
                    />
                  </div>
                  <div className="relative">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`bg-white/10 border-white/20 text-white placeholder:text-gray-300 transition-all duration-300 ${
                        focusedField === 'email' ? 'border-purple-400 hover-glow' : ''
                      }`}
                    />
                  </div>
                </div>

                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`bg-white/10 border-white/20 text-white placeholder:text-gray-300 transition-all duration-300 ${
                    focusedField === 'subject' ? 'border-purple-400 hover-glow' : ''
                  }`}
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-gray-300 resize-none transition-all duration-300 ${
                    focusedField === 'message' ? 'border-purple-400 hover-glow' : ''
                  }`}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover-scale hover-glow magnetic ripple disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional call-to-action */}
      </div>
    </section>
  );
};

export default Contact;
