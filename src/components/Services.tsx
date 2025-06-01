
import { Code, Palette, Video, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript.',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Loading', 'Custom Solutions'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching visual designs that communicate your brand message effectively across all platforms.',
      features: ['Brand Identity', 'Logo Design', 'Print Design', 'Digital Graphics'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services to create engaging content that captivates your audience.',
      features: ['Motion Graphics', 'Color Grading', 'Audio Sync', 'Social Media Videos'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to grow your online presence and reach your target audience.',
      features: ['Social Media Marketing', 'Content Strategy', 'SEO Services', 'Analytics & Reporting'],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-200 to-transparent rounded-full opacity-30 float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-cyan-200 to-transparent rounded-full opacity-30 float stagger-3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 slide-up">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto slide-up stagger-2">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group hover-lift hover-glow tilt slide-up stagger-${index + 1} border-0 overflow-hidden relative bg-white/80 backdrop-blur-sm`}
            >
              {/* Animated background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>
              
              {/* Decorative corner element */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500`}></div>

              <CardHeader className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 hover-glow`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 text-reveal">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-all duration-300 stagger-${featureIndex + 1}`}>
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-4 text-center text-purple-600 font-semibold border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 hover-scale magnetic ripple relative overflow-hidden group/btn`}>
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-16 slide-up stagger-5">
          <Card className="inline-block p-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover-lift hover-glow">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="mb-6 opacity-90">Let's discuss how we can bring your vision to life</p>
            <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover-scale magnetic ripple transition-all duration-300">
              Get Started Today
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
