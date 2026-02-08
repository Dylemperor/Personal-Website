export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {/* Add your about text here */}
            I'm a passionate developer who loves building beautiful and functional
            web applications. I enjoy working with modern technologies and creating
            solutions that make a difference.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {/* Add more about text here */}
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source projects, or playing video games.
          </p>
        </div>
      </div>
    </section>
  )
}
