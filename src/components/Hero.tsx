import React from 'react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
            Hi, I'm{' '}
            <span className="text-primary-600 dark:text-primary-400">
              Dylan Cowell
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {/* Add your tagline here - e.g., "Full Stack Developer", "Software Engineer", etc. */}
            Welcome to my portfolio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-slate-800 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
