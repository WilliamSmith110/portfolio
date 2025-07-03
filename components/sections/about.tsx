"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/3 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/William_Smith.jpg-t7DvyUVTSP3ygDV8lAFYtUHSWHflhH.jpeg"
                alt="William Smith"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </motion.div>
          </div>
          <div className="md:w-2/3">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-4">
                <p>
                  AI Engineer with expertise in machine learning and deep learning architectures. Passionate about
                  developing innovative solutions that address complex real-world problems through artificial
                  intelligence.
                </p>
                <p>
                  I specialize in natural language processing, computer vision, and reinforcement learning, with a focus
                  on creating scalable and efficient AI systems that deliver measurable impact.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <Button asChild variant="outline" size="sm">
                  <Link href="https://github.com/WilliamSmith110" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://linkedin.com/in/WilliamSmith110" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="mailto:william@example.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/resume.pdf" target="_blank" download>
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 mt-12"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary/20 pl-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <p className="font-semibold text-lg">Master of Science in Computer Science</p>
                      <p className="text-primary font-medium">
                        Specialization: Artificial Intelligence & Machine Learning
                      </p>
                      <p className="text-sm text-muted-foreground">Stanford University</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 md:mt-0">2018 - 2020</p>
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm">
                      <strong>GPA:</strong> 3.9/4.0
                    </p>
                    <p className="text-sm">
                      <strong>Thesis:</strong> "Attention-Based Multi-Modal Fusion for Medical Image Classification"
                    </p>
                    <p className="text-sm">
                      <strong>Relevant Coursework:</strong> Deep Learning, Computer Vision, Natural Language Processing,
                      Reinforcement Learning, Statistical Learning Theory
                    </p>
                    <p className="text-sm">
                      <strong>Research Focus:</strong> Medical AI applications and interpretable machine learning models
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-primary/20 pl-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <p className="font-semibold text-lg">Bachelor of Science in Computer Science & Mathematics</p>
                      <p className="text-primary font-medium">Double Major with Honors</p>
                      <p className="text-sm text-muted-foreground">Massachusetts Institute of Technology (MIT)</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 md:mt-0">2014 - 2018</p>
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm">
                      <strong>GPA:</strong> 3.8/4.0, Magna Cum Laude
                    </p>
                    <p className="text-sm">
                      <strong>Senior Thesis:</strong> "Optimization Algorithms for Large-Scale Machine Learning"
                    </p>
                    <p className="text-sm">
                      <strong>Activities:</strong> MIT AI Club President, Teaching Assistant for Introduction to
                      Algorithms
                    </p>
                    <p className="text-sm">
                      <strong>Awards:</strong> Dean's List (6 semesters), Outstanding Student in Computer Science
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary/20 pl-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <p className="font-semibold text-lg">Senior AI Engineer</p>
                      <p className="text-primary font-medium">TechCorp AI Solutions</p>
                      <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 md:mt-0">2020 - Present</p>
                  </div>
                  <div className="mt-2 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Leading AI research and development for healthcare and enterprise solutions
                    </p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>
                        • Led development of medical imaging AI system deployed in 5+ hospitals, processing 50,000+
                        scans monthly
                      </li>
                      <li>
                        • Architected and implemented end-to-end ML pipelines using PyTorch, Docker, and AWS, reducing
                        model deployment time by 70%
                      </li>
                      <li>
                        • Managed cross-functional team of 8 engineers and data scientists, delivering 12+ production AI
                        models
                      </li>
                      <li>
                        • Established MLOps best practices and CI/CD pipelines, improving model reliability and
                        monitoring
                      </li>
                      <li>• Published 3 research papers in top-tier conferences (CVPR, ICCV, NeurIPS)</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-primary/20 pl-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <p className="font-semibold text-lg">Machine Learning Engineer</p>
                      <p className="text-primary font-medium">DataSense Inc.</p>
                      <p className="text-sm text-muted-foreground">Palo Alto, CA</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 md:mt-0">2018 - 2020</p>
                  </div>
                  <div className="mt-2 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Developed machine learning solutions for enterprise clients in finance and healthcare
                    </p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>
                        • Built and deployed NLP models for document processing, achieving 87% accuracy improvement over
                        baseline
                      </li>
                      <li>
                        • Developed real-time fraud detection system processing 1M+ transactions daily with 99.2%
                        accuracy
                      </li>
                      <li>
                        • Implemented computer vision solutions for quality control in manufacturing, reducing defect
                        rates by 35%
                      </li>
                      <li>
                        • Collaborated with product teams to integrate ML models into customer-facing applications
                      </li>
                      <li>
                        • Mentored 3 junior engineers and conducted technical interviews for ML engineering positions
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-primary/20 pl-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <p className="font-semibold text-lg">AI Research Intern</p>
                      <p className="text-primary font-medium">Google DeepMind</p>
                      <p className="text-sm text-muted-foreground">Mountain View, CA</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 md:mt-0">Summer 2019</p>
                  </div>
                  <div className="mt-2 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Research internship focusing on reinforcement learning for robotics applications
                    </p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>
                        • Developed novel RL algorithms for robotic manipulation tasks, improving sample efficiency by
                        40%
                      </li>
                      <li>
                        • Implemented simulation environments using MuJoCo and PyBullet for training robotic agents
                      </li>
                      <li>• Contributed to open-source RL library used by 500+ researchers worldwide</li>
                      <li>• Presented research findings at internal DeepMind symposium and external conferences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
