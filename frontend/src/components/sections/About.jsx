import { motion } from 'framer-motion';

const About = () => {
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

  const programmingLanguages = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'C++', level: 75 },
  ];

  const webDevelopment = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Laravel', level: 75 },
    { name: 'TailwindCSS', level: 88 },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgMmgydjJoLTJ2LTJ6bTAtMmgydjJoLTJ2LTJ6bTAgMmgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 cinematic-text-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto cinematic-gradient rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-purple-500/30"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-4 rounded-full border-2 border-blue-500/30"
              />
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50">
                <img
                  src="/profile.jpg"
                  alt="Elias Kemal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-2xl">🎓</span>
                <p className="text-lg">Computer Science student</p>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-2xl">💻</span>
                <p className="text-lg">Interested in Software Engineering & Web Development</p>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-2xl">🚀</span>
                <p className="text-lg">Focused on building real-world projects</p>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-2xl">🌱</span>
                <p className="text-lg">Currently improving DSA & Full-Stack skills</p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6 pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">🛠️ Skills & Technologies</h3>
              
              {/* Programming Languages */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-purple-400 mb-3">Programming Languages</h4>
                {programmingLanguages.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                        className="h-full cinematic-gradient rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Web Development */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-purple-400 mb-3">Web Development</h4>
                {webDevelopment.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                        className="h-full cinematic-gradient rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
