
import {
  Terminal,
  Shield,
  Cloud,
  Server,
  Lock,
  Award,
  CheckCircle2
} from "lucide-react";

export const cybersecurity = {
  badge: {
    text: "Cybersecurity Career Roadmap",
    icon: Shield,
  },

  title: {
    line1: "Your Path to",
    highlight: "Cybersecurity Expert",
  },

  description:
    "Step-by-step roadmap from beginner to advanced cybersecurity professional. Learn ethical hacking, SOC operations, cloud security, and industry-recognized certifications.",

  trust: {
    count: "50,000+",
    text: "engineers trust our cybersecurity roadmap",
  },

  stats: [
    { value: "50K+", label: "Engineers Trained" },
    { value: "95%", label: "Success Rate" },
    { value: "100+", label: "Hiring Partners" },
    { value: "24/7", label: "Security Community Support" },
  ],

  form: {
    heading: "Get Your Free Cybersecurity Roadmap PDF",
    subHeading: "Start your cybersecurity journey with a clear roadmap",
    buttonText: "Download Cybersecurity Roadmap",
    footerText: "No spam. Only cybersecurity career updates.",
  },

  preview: {
    title: "CYBERSECURITY",
    subTitle: "ROADMAP",
    brand: "Quantum Training",
    icon: Shield,
  },
};


export const cybersecurityRoadmap = {
  title: "Cybersecurity",
  subtitle: "A complete roadmap to become a cybersecurity professional—from fundamentals to advanced security engineering.",

  steps: [
    {
      phase: "Phase 1",
      title: "Fundamentals",
      duration: "4–6 Weeks",
      icon: Terminal,
      checkIcon: CheckCircle2,
      color: "from-primary to-primary/80",
      skills: [
        "Linux Basics",
        "Networking Essentials",
        "Command Line Usage",
        "Git & Version Control"
      ]
    },

    {
      phase: "Phase 2",
      title: "Core Security Concepts",
      duration: "6–8 Weeks",
      icon: Shield,
      checkIcon: CheckCircle2,
      color: "from-primary/90 to-primary/70",
      skills: [
        "Security Fundamentals",
        "Cryptography Introduction",
        "Access & Identity Management",
        "Security Standards & Models"
      ]
    },

    {
      phase: "Phase 3",
      title: "Cloud Security Foundation",
      duration: "8–10 Weeks",
      icon: Cloud,
      checkIcon: CheckCircle2,
      color: "from-primary/80 to-primary/60",
      skills: [
        "AWS Basics",
        "Azure Fundamentals",
        "GCP Essentials",
        "Cloud Security Controls"
      ]
    },

    {
      phase: "Phase 4",
      title: "Infrastructure & Automation",
      duration: "6–8 Weeks",
      icon: Server,
      checkIcon: CheckCircle2,
      color: "from-primary/70 to-primary/50",
      skills: [
        "Infrastructure as Code",
        "Terraform / Ansible",
        "Docker Containers",
        "Kubernetes Basics"
      ]
    },

    {
      phase: "Phase 5",
      title: "Advanced Cybersecurity",
      duration: "8–10 Weeks",
      icon: Lock,
      checkIcon: CheckCircle2,
      color: "from-primary/60 to-primary/40",
      skills: [
        "Penetration Testing",
        "Threat Analysis",
        "Incident Response",
        "Security Operations (SOC)"
      ]
    },

    {
      phase: "Phase 6",
      title: "Professional Level",
      duration: "Ongoing",
      icon: Award,
      checkIcon: CheckCircle2,
      color: "from-primary/50 to-primary/30",
      skills: [
        "Security Architecture",
        "Compliance & Audit",
        "Team & Leadership Skills",
        "Continuous Upskilling"
      ]
    }
  ]
};
