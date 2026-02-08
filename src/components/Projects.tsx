import React from 'react'

export default function Projects() {
  // Example project structure - you can customize this
  const projects = [
    {
      title: 'Hidden Gemz',
      description: 'A website for a local business to showcase their products and services at locations who host them on their TV screens, all powered by Hidden Gemz.',
      technologies: ['React', 'C#', 'MySQL', '.NET Core'],
      link: 'https://hiddengemz.tv',
    },
    {
      title: 'Project 2',
      description: 'A brief description of your project goes here.',
      technologies: ['Next.js', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'A brief description of your project goes here.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      link: '#',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
