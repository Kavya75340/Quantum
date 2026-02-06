import { Cloud, ServerCog } from "lucide-react";
import { 
  Terminal,
  Shield,
  Server,
  Lock,
  Award,
  CheckCircle2
} from "lucide-react";

export const cloudDevOpsRoadmap = {
  title: "Cloud & DevOps Engineer",
  subtitle:
    "A complete, industry-aligned roadmap to become a Cloud and DevOps engineer—from core infrastructure basics to scalable, production-ready systems.",

  steps: [
    {
      phase: "Phase 1",
      title: "IT & Linux Foundations",
      duration: "4–6 Weeks",
      icon: Terminal,
      checkIcon: CheckCircle2,
      color: "from-primary to-primary/80",
      skills: [
        "Linux Fundamentals",
        "Networking Basics",
        "Command Line Skills",
        "Git & Version Control"
      ]
    },

    {
      phase: "Phase 2",
      title: "Cloud Computing Core",
      duration: "6–8 Weeks",
      icon: Cloud,
      checkIcon: CheckCircle2,
      color: "from-primary/90 to-primary/70",
      skills: [
        "AWS Core Services",
        "Azure / GCP Basics",
        "Cloud Architecture Concepts",
        "Identity & Access Management"
      ]
    },

    {
      phase: "Phase 3",
      title: "DevOps & CI/CD",
      duration: "8–10 Weeks",
      icon: Shield,
      checkIcon: CheckCircle2,
      color: "from-primary/80 to-primary/60",
      skills: [
        "CI/CD Pipelines",
        "Jenkins / GitHub Actions",
        "Infrastructure Automation",
        "Monitoring & Logging"
      ]
    },

    {
      phase: "Phase 4",
      title: "Containers & Orchestration",
      duration: "6–8 Weeks",
      icon: Server,
      checkIcon: CheckCircle2,
      color: "from-primary/70 to-primary/50",
      skills: [
        "Docker Containers",
        "Kubernetes Basics",
        "Container Networking",
        "Helm & Deployment Strategies"
      ]
    },

    {
      phase: "Phase 5",
      title: "Security & Reliability",
      duration: "8–10 Weeks",
      icon: Lock,
      checkIcon: CheckCircle2,
      color: "from-primary/60 to-primary/40",
      skills: [
        "Cloud Security Best Practices",
        "DevSecOps",
        "High Availability & DR",
        "Performance Optimization"
      ]
    },

    {
      phase: "Phase 6",
      title: "Professional & Scale",
      duration: "Ongoing",
      icon: Award,
      checkIcon: CheckCircle2,
      color: "from-primary/50 to-primary/30",
      skills: [
        "System Design",
        "Cost Optimization",
        "Team Collaboration",
        "Continuous Learning"
      ]
    }
  ]
};

export const cloudEngineering = {
  badge: {
    text: "Cloud Engineering & DevOps Roadmap",
    icon: Cloud,
  },

  title: {
    line1: "Your Path to",
    highlight: "Cloud & DevOps Engineer",
  },

  description:
    "Step-by-step roadmap from beginner to advanced cloud and DevOps engineer. Master AWS, Docker, Kubernetes, CI/CD pipelines, and scalable cloud infrastructure.",

  trust: {
    count: "60,000+",
    text: "engineers trust our cloud & devops roadmap",
  },

  stats: [
    { value: "60K+", label: "Engineers Trained" },
    { value: "96%", label: "Placement Success Rate" },
    { value: "120+", label: "Hiring Partners" },
    { value: "24/7", label: "Cloud & DevOps Support" },
  ],

  form: {
    heading: "Get Your Free Cloud & DevOps Roadmap PDF",
    subHeading: "Build scalable systems with a clear learning roadmap",
    buttonText: "Download Cloud & DevOps Roadmap",
    footerText: "No spam. Only cloud & DevOps career insights.",
  },

  preview: {
    title: "CLOUD & DEVOPS",
    subTitle: "ROADMAP",
    brand: "Quantum Training",
    icon: ServerCog,
  },
};
