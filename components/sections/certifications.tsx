"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    date: "December 2022",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aws-a73hlAxUHf6QqlZmBuRbqHtk6pnZl1.png",
    link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
    description:
      "Validates expertise in designing, implementing, and maintaining machine learning solutions for business problems on the AWS platform.",
  },
  {
    id: 2,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "August 2021",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tensorflow-jDOAZhFkPj7jkL5AnKv44Seex5ARTr.png",
    link: "https://www.tensorflow.org/certificate",
    description:
      "Demonstrates proficiency in using TensorFlow to implement machine learning models for various applications including computer vision, NLP, and time series forecasting.",
  },
  {
    id: 3,
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "March 2021",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deep-pnm4X4Fkj1qdt5wiJIrP5CPPdhG76f.png",
    link: "https://www.coursera.org/specializations/deep-learning",
    description:
      "Comprehensive program covering neural networks, improving deep neural networks, structuring ML projects, CNNs, and sequence models.",
  },
  {
    id: 4,
    title: "Professional Certificate in AI Ethics",
    issuer: "edX & Harvard University",
    date: "January 2023",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pro-F7TluxNQUG0iPs9gbDKWiPG9cy9tkX.png",
    link: "https://www.edx.org",
    description:
      "Focuses on ethical considerations in AI development, including fairness, accountability, transparency, and responsible AI deployment.",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Certifications</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Professional certifications and specialized training in AI and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="flex flex-col h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 rounded-full overflow-hidden bg-white p-2">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.issuer}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild size="sm" variant="outline">
                    <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Verify Certificate
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
