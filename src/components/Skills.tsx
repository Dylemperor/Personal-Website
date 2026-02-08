import React from 'react'

export default function Skills() {
  // Example skills - customize with your actual skills
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'HTML/CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'C#', 'Express', 'REST APIs'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Wix Studio', 'AWS', 'Github', 'MySQL', 'MySQL Workbench'],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white dark:from-slate-700 dark:to-slate-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-primary-600 dark:bg-primary-700 text-white rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
