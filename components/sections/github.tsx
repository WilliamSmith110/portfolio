"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"

const repositories = [
  {
    id: 1,
    name: "transformer-explainer",
    description:
      "An interactive visualization tool for understanding transformer architectures, with step-by-step explanations of attention mechanisms and positional encoding.",
    stars: 342,
    language: "Python",
    url: "https://github.com/WilliamSmith110/transformer-explainer",
  },
  {
    id: 2,
    name: "medical-vision-toolkit",
    description:
      "A comprehensive toolkit for medical image analysis, including pre-trained models, data augmentation techniques, and evaluation metrics specific to medical imaging.",
    stars: 287,
    language: "Python",
    url: "https://github.com/WilliamSmith110/medical-vision-toolkit",
  },
  {
    id: 3,
    name: "rl-environment-suite",
    description:
      "A collection of customizable reinforcement learning environments for robotics, autonomous systems, and game AI with detailed documentation and tutorials.",
    stars: 215,
    language: "Python",
    url: "https://github.com/WilliamSmith110/rl-environment-suite",
  },
  {
    id: 4,
    name: "nlp-annotation-tool",
    description:
      "An open-source tool for efficient text annotation, supporting named entity recognition, sentiment analysis, and document classification tasks.",
    stars: 176,
    language: "TypeScript",
    url: "https://github.com/WilliamSmith110/nlp-annotation-tool",
  },
]

export default function GitHubSection() {
  return (
    <section id="github" className="py-16 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold">GitHub Repositories</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Open-source projects and contributions with detailed documentation and examples
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <Github className="mr-2 h-4 w-4" />
                      {repo.name}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="mr-1 h-4 w-4" />
                      {repo.stars}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{repo.language}</div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{repo.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild size="sm">
                    <Link href={repo.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Repository
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <Link href="https://github.com/WilliamSmith110" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Repositories
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
