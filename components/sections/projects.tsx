"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "MedVision AI",
    description:
      "An end-to-end computer vision system for early detection of diabetic retinopathy from retinal images, achieving 94% accuracy and reducing diagnosis time by 60%.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MedVision.jpg-lSKpo0KaOtakqVYOhGLeVQWgzl7JfL.jpeg",
    tags: ["Computer Vision", "PyTorch", "Medical AI", "Transfer Learning"],
    github: "https://github.com/WilliamSmith110/medvision-ai",
    demo: "https://www.medvisiongroup.com",
    approach:
      "Implemented a custom CNN architecture based on EfficientNet-B4 with attention mechanisms. Used a dataset of 35,000 labeled retinal images and applied extensive data augmentation to improve model generalization.",
    result:
      "Deployed in 3 hospitals for clinical validation, processing over 500 images daily with 94% accuracy, reducing diagnosis time from 30 minutes to 12 minutes per patient.",
  },
  {
    id: 2,
    title: "NLP Document Analyzer",
    description:
      "A natural language processing system that automatically extracts, categorizes, and summarizes key information from legal documents, improving processing efficiency by 78%.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nlp.jpg-LyAbiP4G6vZQ56YQT6StpjjFDAjw9a.jpeg",
    tags: ["NLP", "BERT", "Transformers", "Document Processing"],
    github: "https://github.com/WilliamSmith110/nlp-document-analyzer",
    demo: "https://www.lexalytics.com/nlp-demo",
    approach:
      "Fine-tuned BERT models on 50,000 legal documents with custom named entity recognition and document classification components. Implemented a hierarchical attention network for document summarization.",
    result:
      "Reduced document processing time from 4 hours to 52 minutes per document. Deployed as an API service processing 10,000+ documents monthly for law firms.",
  },
  {
    id: 3,
    title: "SmartGrid RL",
    description:
      "A reinforcement learning system for optimizing energy distribution in smart grids, reducing energy waste by 23% and improving grid stability during peak demand.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smart_grid-4WpMz5dNAsbCqkAwTOQUc6Ph0ca5Cj.webp",
    tags: ["Reinforcement Learning", "Energy Optimization", "PyTorch", "Time Series"],
    github: "https://github.com/WilliamSmith110/smartgrid-rl",
    demo: "https://www.megger.com",
    approach:
      "Developed a multi-agent reinforcement learning framework using PPO algorithm with custom reward functions. Created a realistic simulation environment using 3 years of energy consumption data from 5 metropolitan areas.",
    result:
      "Reduced energy waste by 23% in pilot deployment covering 50,000 households. Improved grid stability during peak demand periods by 35%, preventing 3 potential blackouts during testing.",
  },
  {
    id: 4,
    title: "MultiModal Sentiment Analysis",
    description:
      "An advanced sentiment analysis system that combines text, audio, and visual cues to accurately detect emotions and sentiment in customer service interactions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sentiment.jpg-b8uWY2NWfS7w8wvcX49lpnTwm1HVim.jpeg",
    tags: ["Multimodal ML", "Sentiment Analysis", "Transformers", "Audio Processing"],
    github: "https://github.com/WilliamSmith110/multimodal-sentiment",
    demo: "https://welcome.pendo.io/listen-demo",
    approach:
      "Built a fusion architecture combining BERT for text, ResNet for facial expressions, and 1D-CNN for audio features. Trained on a custom dataset of 25,000 customer service interactions with human-annotated sentiment labels.",
    result:
      "Achieved 87% accuracy in sentiment detection, 15% higher than text-only methods. Deployed as a real-time analysis tool for call centers, analyzing 5,000+ customer interactions daily.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold">AI Projects</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            End-to-end AI solutions addressing real-world problems with measurable impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && <Badge variant="outline">+{project.tags.length - 3}</Badge>}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Problem & Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Approach</h4>
                      <p className="text-sm text-muted-foreground">{project.approach}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Result</h4>
                      <p className="text-sm text-muted-foreground">{project.result}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
