"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const publications = [
  {
    id: 1,
    title: "Attention-Based Multi-Modal Fusion for Enhanced Medical Image Classification",
    journal: "IEEE Transactions on Medical Imaging",
    year: 2022,
    abstract:
      "This paper presents a novel attention-based multi-modal fusion approach for medical image classification that combines visual features with clinical metadata to improve diagnostic accuracy.",
    link: "https://example.com/publication1",
    tags: ["Computer Vision", "Medical AI", "Multi-Modal Learning"],
  },
  {
    id: 2,
    title: "Efficient Transformer Architectures for Resource-Constrained NLP Applications",
    journal: "ACL Conference Proceedings",
    year: 2021,
    abstract:
      "We propose a series of optimizations to transformer architectures that reduce computational requirements while maintaining performance, enabling deployment on edge devices.",
    link: "https://example.com/publication2",
    tags: ["NLP", "Transformers", "Edge AI"],
  },
]

const blogs = [
  {
    id: 1,
    title: "Demystifying Attention Mechanisms in Transformers",
    date: "March 15, 2023",
    excerpt:
      "A deep dive into how attention mechanisms work in transformer models, with visualizations and code examples to build intuition about this powerful concept.",
    link: "https://medium.com/@williamsmith/demystifying-attention",
    tags: ["NLP", "Transformers", "Deep Learning"],
    readTime: "12 min read",
  },
  {
    id: 2,
    title: "Building Ethical AI Systems: A Practical Guide",
    date: "January 10, 2023",
    excerpt:
      "Practical strategies for addressing bias, ensuring fairness, and implementing transparency in AI systems, with real-world case studies and implementation examples.",
    link: "https://medium.com/@williamsmith/ethical-ai",
    tags: ["AI Ethics", "Responsible AI", "Fairness"],
    readTime: "15 min read",
  },
  {
    id: 3,
    title: "From Research to Production: Deploying ML Models at Scale",
    date: "November 5, 2022",
    excerpt:
      "A comprehensive guide to the challenges and solutions for deploying machine learning models in production environments, covering monitoring, versioning, and scaling.",
    link: "https://medium.com/@williamsmith/ml-production",
    tags: ["MLOps", "Production ML", "Deployment"],
    readTime: "18 min read",
  },
  {
    id: 4,
    title: "Reinforcement Learning for Robotics: Lessons Learned",
    date: "August 22, 2022",
    excerpt:
      "Insights from implementing reinforcement learning algorithms for robotic control tasks, including practical tips for simulation-to-real transfer and reward shaping.",
    link: "https://medium.com/@williamsmith/rl-robotics",
    tags: ["Reinforcement Learning", "Robotics", "Sim2Real"],
    readTime: "14 min read",
  },
]

export default function Publications() {
  return (
    <section id="publications" className="py-16 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Publications & Blogs</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Research papers and articles sharing insights on AI technologies and applications
          </p>
        </motion.div>

        <Tabs defaultValue="blogs" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="blogs">Blog Posts</TabsTrigger>
            <TabsTrigger value="publications">Research Papers</TabsTrigger>
          </TabsList>

          <TabsContent value="blogs" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{blog.title}</CardTitle>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{blog.date}</span>
                        <span className="mx-2">•</span>
                        <span>{blog.readTime}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{blog.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {blog.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild size="sm">
                        <Link href={blog.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Read Article
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="publications" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {publications.map((publication, index) => (
                <motion.div
                  key={publication.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{publication.title}</CardTitle>
                      <div className="text-sm text-muted-foreground">
                        {publication.journal}, {publication.year}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{publication.abstract}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {publication.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild size="sm">
                        <Link href={publication.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Publication
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
