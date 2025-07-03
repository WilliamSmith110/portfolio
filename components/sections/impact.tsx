"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, Globe, Users, Trophy, Star } from "lucide-react"

const impactItems = [
  {
    id: 1,
    title: "Healthcare AI Deployment",
    description:
      "Deployed a medical imaging AI system in 5 hospitals, analyzing over 50,000 scans monthly and reducing diagnosis time by 60%, directly impacting patient care outcomes.",
    icon: <Globe className="h-6 w-6" />,
    achievement: "Production Impact",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "1st Place - Kaggle Medical AI Challenge",
    description:
      "Achieved 1st place in the Medical Image Segmentation Challenge, with a solution that improved accuracy by 15% over previous state-of-the-art approaches.",
    icon: <Trophy className="h-6 w-6" />,
    achievement: "1st Place",
    color: "from-yellow-500 to-orange-500",
    badge: "🏆",
  },
  {
    id: 3,
    title: "AI Education Initiative",
    description:
      "Created an open-source AI curriculum used by 15+ universities, reaching over 5,000 students and making advanced AI concepts accessible to diverse learners.",
    icon: <Users className="h-6 w-6" />,
    achievement: "Community Impact",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Environmental Impact Achievement",
    description:
      "Developed an energy optimization system for industrial facilities that reduced carbon emissions by 25,000 tons annually across 12 manufacturing plants.",
    icon: <BarChart className="h-6 w-6" />,
    achievement: "Sustainability Award",
    color: "from-purple-500 to-pink-500",
    badge: "🌱",
  },
]

const achievements = [
  {
    title: "1st Place in CodeFest Hackathon",
    subtitle: "MedVision AI System",
    organization: "TechCorp Technologies",
    date: "September 2023",
    description:
      "Developed an innovative medical imaging system for early disease detection, showcasing technical excellence and problem-solving skills.",
    badge: "🏆",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "1st Place in AI Innovation Challenge",
    subtitle: "SmartGrid RL Project",
    organization: "Energy Solutions Inc",
    date: "February 2024",
    description:
      "Created an advanced reinforcement learning system for energy optimization with significant environmental impact.",
    badge: "🥇",
    color: "from-blue-400 to-purple-500",
  },
]

export default function Impact() {
  return (
    <section id="impact" className="py-16 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Real-World Impact</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Recognition and awards that showcase my technical expertise, innovation, and competitive programming
            capabilities.
          </p>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card className="h-full overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5`} />
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="text-4xl"
                        >
                          {achievement.badge}
                        </motion.div>
                        <div>
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <p className="text-primary font-medium">{achievement.subtitle}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Star className="w-3 h-3 mr-1" />
                        1st Place
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <span>🏢 {achievement.organization}</span>
                      <span>📅 {achievement.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <Card className="h-full overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5`} />
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-full p-3 bg-primary/10 text-primary"
                      >
                        {item.icon}
                      </motion.div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                    {item.badge && (
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl"
                      >
                        {item.badge}
                      </motion.div>
                    )}
                  </div>
                  <Badge variant="outline" className="w-fit mt-2">
                    {item.achievement}
                  </Badge>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
