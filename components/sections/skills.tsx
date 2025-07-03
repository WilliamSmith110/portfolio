"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const skills = {
  languages: [
    { name: "Python", level: 95 },
    { name: "R", level: 80 },
    { name: "SQL", level: 85 },
    { name: "JavaScript/TypeScript", level: 75 },
    { name: "C++", level: 65 },
    { name: "Java", level: 70 },
    { name: "MATLAB", level: 75 },
  ],
  frameworks: [
    { name: "PyTorch", level: 90 },
    { name: "TensorFlow", level: 85 },
    { name: "Scikit-learn", level: 90 },
    { name: "Hugging Face", level: 85 },
    { name: "FastAPI", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
  ],
  specializations: [
    { name: "Deep Learning", level: 90 },
    { name: "Natural Language Processing", level: 85 },
    { name: "Computer Vision", level: 90 },
    { name: "Reinforcement Learning", level: 80 },
    { name: "MLOps", level: 75 },
    { name: "Data Engineering", level: 70 },
    { name: "Model Development", level: 85 },
    { name: "Data Analysis", level: 80 },
  ],
  tools: [
    { name: "Docker", level: 85 },
    { name: "Git", level: 90 },
    { name: "AWS", level: 80 },
    { name: "GCP", level: 75 },
    { name: "Kubernetes", level: 70 },
    { name: "CI/CD", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Redis", level: 70 },
  ],
}

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "HTML/CSS", "MATLAB"],
  },
  {
    title: "Software Development",
    icon: "🛠️",
    skills: [
      "Node.js",
      "Express",
      "React",
      "Next.js",
      "SpringBoot",
      "FastAPI",
      "Flask",
      "Django",
      "MongoDB",
      "SQL",
      "Redis",
      "Docker",
      "AWS",
      "Azure",
    ],
  },
  {
    title: "AI/ML & Data Science",
    icon: "🤖",
    skills: ["TensorFlow", "MLFlow", "ZenML", "Numpy", "Pandas", "Data Analysis", "Model Development", "MLOps"],
  },
]

function getLevelLabel(level: number): string {
  if (level >= 90) return "Expert"
  if (level >= 75) return "Advanced"
  if (level >= 60) return "Intermediate"
  return "Basic"
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            A comprehensive overview of my technical expertise spanning multiple domains including AI/ML, software
            development, and various programming languages.
          </p>
        </motion.div>

        {/* Skills Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="dark:bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-primary mb-2"
                    >
                      7+
                    </motion.div>
                    <p className="text-muted-foreground">Programming Languages</p>
                  </div>
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-primary mb-2"
                    >
                      8+
                    </motion.div>
                    <p className="text-muted-foreground">AI/ML Technologies</p>
                  </div>
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-primary mb-2"
                    >
                      14+
                    </motion.div>
                    <p className="text-muted-foreground">Development Tools</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Detailed Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.languages.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{getLevelLabel(skill.level)}</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Frameworks & Libraries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.frameworks.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{getLevelLabel(skill.level)}</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Specializations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.specializations.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{getLevelLabel(skill.level)}</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{getLevelLabel(skill.level)}</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
