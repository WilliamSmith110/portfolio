# William Smith
**AI Engineer & ML Specialist**  
Building Intelligent Systems for Tomorrow  
Email: william@example.com | LinkedIn: linkedin.com/in/williamsmith | GitHub: github.com/williamsmith

---

## About Me
AI Engineer with expertise in machine learning and deep learning architectures. Passionate about developing innovative solutions that address complex real-world problems through artificial intelligence. Specializes in natural language processing, computer vision, and reinforcement learning, with a focus on creating scalable and efficient AI systems.

---

## Education
**Master of Science in Computer Science** (Specialization: AI & ML)  
*Stanford University* (2018 - 2020)  
GPA: 3.9/4.0  
Thesis: "Attention-Based Multi-Modal Fusion for Medical Image Classification"  

**Bachelor of Science in Computer Science & Mathematics** (Honors)  
*MIT* (2014 - 2018)  
GPA: 3.8/4.0; Magna Cum Laude  
Senior Thesis: "Optimization Algorithms for Large-Scale Machine Learning"  

---

## Work Experience
### Senior AI Engineer
**TechCorp AI Solutions**, San Francisco, CA (2020 - Present)  
- Led development of medical imaging AI system deployed in 5+ hospitals, processing 50,000+ scans monthly  
- Architected ML pipelines with PyTorch, Docker, AWS, reducing deployment time by 70%  
- Managed cross-functional teams and delivered 12+ production AI models  
- Established MLOps best practices, improving model reliability and monitoring  
- Published 3 papers in top conferences (CVPR, ICCV, NeurIPS)  

### Machine Learning Engineer
**DataSense Inc.**, Palo Alto, CA (2018 - 2020)  
- Built NLP models improving document processing accuracy by 87%  
- Developed real-time fraud detection with 99.2% accuracy  
- Implemented computer vision solutions reducing defect rates by 35%  

### AI Research Intern
**Google DeepMind**, Mountain View, CA (Summer 2019)  
- Developed RL algorithms for robotic manipulation improving sample efficiency by 40%  
- Created simulation environments with MuJoCo and PyBullet  

---

## Projects
### MedVision AI
- End-to-end visual system for early detection of diabetic retinopathy, achieving 94% accuracy and reducing diagnosis time by 60%.

### NLP Document Analyzer
- Automates extraction and summarization of legal documents, reducing processing time by 78%, deployed as an API processing 10,000+ documents/month.

### SmartGrid RL
- Reinforcement learning system optimizing energy distribution, reducing waste by 23%, deployed in 50,000 households.

### MultiModal Sentiment Analysis
- Combines text, audio, and video for sentiment detection, achieving 87% accuracy, deployed in call centers analyzing 5,000 interactions daily.

---

## Technical Skills
**Languages:** Python (Expert), R (Advanced), SQL (Advanced), JavaScript (Advanced), C++ (Intermediate), Java, MATLAB  
**Frameworks & Libraries:** PyTorch, TensorFlow, Scikit-learn, Hugging Face, FastAPI, React, Node.js  
**Tools & Platforms:** Docker, AWS, GCP, Kubernetes, Git, MongoDB, Redis, CI/CD pipelines  
**Specializations:** Deep Learning, NLP, Computer Vision, Reinforcement Learning, MLOps, Data Engineering, Data Analysis

---

## Certifications
- AWS Machine Learning Specialty (2022)
- TensorFlow Developer Certificate (2021)
- Deep Learning Specialization - DeepLearning.AI (2021)
- AI Ethics - Harvard/edX (2023)

---

## Publications & Blog Posts
- "Attention-Based Multi-Modal Fusion for Medical Image Classification" (IEEE TMI, 2022)  
- "Efficient Transformer Architectures for Resource-Constrained NLP" (ACL, 2021)

---

## Awards & Recognition
- 1st Place, CodeFest Hackathon (MedVision AI System), 2023  
- 1st Place, AI Innovation Challenge (SmartGrid RL), 2024  
- Kaggle Medical AI Challenge Winner  
- Sustainability Award for energy system optimization

---

## Contact
Email: william@example.com  
LinkedIn: linkedin.com/in/williamsmith  
GitHub: github.com/williamsmith

# My Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 CI/CD Pipeline with Docker

This project includes a complete CI/CD pipeline using GitHub Actions and Docker for automated building, testing, and deployment.

### 🐳 Docker Setup

The project uses a multi-stage Docker build optimized for static export with nginx:

```bash
# Build the Docker image locally
docker build -t portfolio .

# Run the container
docker run -p 80:80 portfolio

# Access your portfolio at http://localhost
```

### 🔧 GitHub Actions CI/CD

The CI/CD pipeline includes:

1. **Test Job**: Lints code and builds the application
2. **Build & Push Job**: Creates Docker image and pushes to Docker Hub
3. **Deploy Job**: Provides deployment instructions

#### Setup Requirements

1. **Docker Hub Account**: Create an account at [Docker Hub](https://hub.docker.com/)

2. **GitHub Secrets**: Add these secrets to your GitHub repository:
   - `DOCKERHUB_USERNAME`: Your Docker Hub username
   - `DOCKERHUB_TOKEN`: Your Docker Hub access token

   To add secrets:
   - Go to your GitHub repo → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add the secrets above

3. **Docker Hub Token**: Generate a token at Docker Hub:
   - Go to Docker Hub → Account Settings → Security
   - Click "New Access Token"
   - Copy the token and add it to GitHub secrets

#### Pipeline Triggers

- **Push to `main`**: Runs full CI/CD (test → build → push → deploy)
- **Push to `develop`**: Runs tests only
- **Pull Request to `main`**: Runs tests only

#### Docker Image

The pipeline creates and pushes Docker images to:
- `williamsmith/portfolio:latest` (main branch)
- `williamsmith/portfolio:develop` (develop branch)
- `williamsmith/portfolio:sha-{commit}` (specific commits)

### 🚀 Deployment

After the pipeline runs successfully, you can deploy your portfolio:

```bash
# Pull the latest image
docker pull williamsmith/portfolio:latest

# Run the container
docker run -d -p 80:80 --name portfolio williamsmith/portfolio:latest

# Or with custom port
docker run -d -p 8080:80 --name portfolio williamsmith/portfolio:latest
```

### 📁 Project Structure

```
my_portfolio/
├── .github/workflows/ci-cd.yml  # GitHub Actions pipeline
├── Dockerfile                   # Multi-stage Docker build
├── nginx.conf                   # Nginx configuration
├── .dockerignore               # Docker build exclusions
├── next.config.mjs             # Next.js configuration (static export)
└── ...                         # Other project files
```

### 🔍 Monitoring

- **Health Check**: Visit `/health` endpoint for container health
- **Logs**: Check nginx logs for debugging
- **GitHub Actions**: Monitor pipeline status in Actions tab

### 🛠️ Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Test Docker build locally
docker build -t portfolio .
docker run -p 80:80 portfolio
```

---

## 🎨 Features

- **Responsive Design**: Works on all devices
- **Dark/Light Mode**: Toggle between themes
- **Modern UI**: Built with Tailwind CSS and Radix UI
- **Performance Optimized**: Static export with nginx
- **SEO Friendly**: Optimized meta tags and structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Package Manager**: pnpm
- **Container**: Docker with nginx
- **CI/CD**: GitHub Actions

## 📝 License

This project is open source and available under the [MIT License](LICENSE).