import { motion } from 'framer-motion';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const projects = [
    {
      title: 'Academy Assistant For The Visually Impaired',
      description: 'Multilingual speech recognition system supporting Afaan Oromo, Amharic, and English with real-time voice commands and form filling automation.',
      tags: ['Python', 'Speech Recognition', 'AI'],
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop',
      color: 'from-purple-500 to-pink-500',
      url: 'https://github.com/eliaskemal/Academy-Assistant-For-The-Visually-Impaired',
    },
    {
      title: 'Task Management App',
      description: 'A modern collaborative task management app with drag-and-drop functionality.',
      tags: ['TypeScript', 'React', 'Drag & Drop'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      color: 'from-blue-500 to-cyan-500',
      url: 'https://github.com/eliaskemal/task-management-app',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB.',
      tags: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop',
      color: 'from-green-500 to-emerald-500',
      url: 'https://github.com/eliaskemal/ecommerce-platform',
    },
    {
      title: 'Rasa Bot',
      description: 'Conversational AI chatbot built with Rasa framework.',
      tags: ['Python', 'Rasa', 'NLP', 'HTML'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      color: 'from-orange-500 to-red-500',
      url: 'https://github.com/eliaskemal/rasa-bot',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgMmgydjJoLTJ2LTJ6bTAtMmgydjJoLTJ2LTJ6bTAgMmgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 cinematic-text-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 mx-auto cinematic-gradient rounded-full" />
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing creativity and technical excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                {/* Project Image */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                    <span>View on GitHub</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
