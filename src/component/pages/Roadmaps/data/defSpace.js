import { Radar, Satellite } from "lucide-react";

import { 
  Terminal,
  Shield,
  Cloud,
  Server,
  Lock,
  Award,
  CheckCircle2
} from "lucide-react";

export const defSpaceInfraRoadmap = {
  title: "DefSpace IT Infrastructure Professional",
  subtitle:
    "A mission-ready roadmap to build a career in defense and space IT infrastructure—covering secure systems, resilient networks, and high-availability environments.",

  steps: [
    {
      phase: "Phase 1",
      title: "System & Networking Foundations",
      duration: "4–6 Weeks",
      icon: Terminal,
      checkIcon: CheckCircle2,
      color: "gradient-primary-1",
      skills: [
        "Linux & Windows Server Basics",
        "Networking Fundamentals",
        "Command Line Operations",
        "IT Documentation Practices"
      ]
    },

    {
      phase: "Phase 2",
      title: "Core Infrastructure Technologies",
      duration: "6–8 Weeks",
      icon: Server,
      checkIcon: CheckCircle2,
      color: "gradient-primary-2",
      skills: [
        "Server Management",
        "Virtualization (VMware / Hyper-V)",
        "Storage Systems",
        "Data Center Concepts"
      ]
    },

    {
      phase: "Phase 3",
      title: "Secure Networks & Systems",
      duration: "8–10 Weeks",
      icon: Shield,
      checkIcon: CheckCircle2,
      color: "gradient-primary-3",
      skills: [
        "Network Security",
        "Firewalls & IDS/IPS",
        "Access Control Systems",
        "Defense-Grade Security Policies"
      ]
    },

    {
      phase: "Phase 4",
      title: "Cloud & Hybrid Infrastructure",
      duration: "6–8 Weeks",
      icon: Cloud,
      checkIcon: CheckCircle2,
      color: "gradient-primary-4",
      skills: [
        "Private & Hybrid Cloud",
        "Government Cloud Standards",
        "Secure Cloud Integration",
        "Infrastructure Monitoring"
      ]
    },

    {
      phase: "Phase 5",
      title: "Resilience & Operations",
      duration: "8–10 Weeks",
      icon: Lock,
      checkIcon: CheckCircle2,
      color: "gradient-primary-5",
      skills: [
        "High Availability Systems",
        "Disaster Recovery",
        "Incident Response",
        "Operational Continuity"
      ]
    },

    {
      phase: "Phase 6",
      title: "Mission-Critical Leadership",
      duration: "Ongoing",
      icon: Award,
      checkIcon: CheckCircle2,
      color: "gradient-primary-6",
      skills: [
        "Infrastructure Architecture",
        "Risk & Compliance",
        "Defense IT Governance",
        "Continuous Modernization"
      ]
    }
  ]
};

export const defSpace = {
  badge: {
    text: "Defence & Space IT Infra Roadmap",
    icon: Radar,
  },

  title: {
    line1: "Your Path to",
    highlight: "DefSpace IT Infra Professional",
  },

  description:
    "Structured roadmap to build a career in Defence and Space IT infrastructure. Learn secure networks, satellite systems support, cloud infra, DevSecOps, and mission-critical systems.",

  trust: {
    count: "25,000+",
    text: "engineers trust our defence & space roadmap",
  },

  stats: [
    { value: "25K+", label: "Infra Engineers Trained" },
    { value: "92%", label: "Mission Readiness Rate" },
    { value: "60+", label: "Defence & Space Partners" },
    { value: "24/7", label: "Critical Systems Support" },
  ],

  form: {
    heading: "Get Your Free DefSpace IT Infra Roadmap PDF",
    subHeading:
      "Build and manage secure, mission-critical defence & space infrastructure",
    buttonText: "Download DefSpace Infra Roadmap",
    footerText: "No spam. Defence-grade privacy guaranteed.",
  },

  preview: {
    title: "DEFENCE & SPACE",
    subTitle: "IT INFRA ROADMAP",
    brand: "Quantum Training",
    icon: Satellite,
  },
};
