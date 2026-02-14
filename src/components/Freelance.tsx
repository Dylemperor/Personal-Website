
export default function Freelance() {
  const services = [
    {
      title: 'Custom Web Development',
      description: 'Full-stack web applications built with modern technologies like React, Node.js, and more.',
      icon: '💻',
    },
    {
      title: 'Website Redesign',
      description: 'Transform your existing website into a modern, responsive, and user-friendly experience.',
      icon: '🎨',
    },
    {
      title: 'Portfolio Websites',
      description: 'Beautiful, professional portfolio sites to showcase your work and attract clients.',
      icon: '📄',
    },
    {
      title: 'API Development',
      description: 'RESTful APIs and backend services to power your applications.',
      icon: '⚙️',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support for your websites.',
      icon: '🔧',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Consultation',
      description: 'We discuss your project requirements, goals, and timeline.',
    },
    {
      step: '2',
      title: 'Proposal',
      description: 'I provide a detailed proposal with timeline and pricing.',
    },
    {
      step: '3',
      title: 'Development',
      description: 'I build your project with regular updates and feedback sessions.',
    },
    {
      step: '4',
      title: 'Launch',
      description: 'Final testing, deployment, and handover of your completed project.',
    },
  ]

  return (
    <section
      id="freelance"
      className="py-20 bg-white dark:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Freelance Web Development
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Need a professional website or web application? I build custom solutions
            tailored to your business needs. Let's bring your vision to life.
          </p>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Services I Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white dark:from-slate-700 dark:to-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life. Get in touch
            for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </a>
            <a
              href="mailto:dylanacowelll@gmail.com"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
