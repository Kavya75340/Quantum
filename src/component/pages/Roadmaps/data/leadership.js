import { Users, ClipboardList } from "lucide-react";
import { 
  Terminal,
  Shield,
  Cloud,
  Server,
  Lock,
  Award,
  CheckCircle2
} from "lucide-react";

export const leadershipProjectMgmtRoadmap = {
  title: "Leadership & Project Management",
  subtitle:
    "A structured roadmap to develop strong leadership and project management capabilities—focused on execution, team alignment, and successful delivery.",

  steps: [
    {
      phase: "Phase 1",
      title: "Leadership Fundamentals",
      duration: "4–6 Weeks",
      icon: Terminal,
      checkIcon: CheckCircle2,
      color: "gradient-primary-1",
      skills: [
        "Leadership Mindset",
        "Communication Skills",
        "Time Management",
        "Professional Ethics"
      ]
    },

    {
      phase: "Phase 2",
      title: "Project Management Basics",
      duration: "6–8 Weeks",
      icon: Shield,
      checkIcon: CheckCircle2,
      color: "gradient-primary-2",
      skills: [
        "Project Lifecycle",
        "Scope & Planning",
        "Risk Identification",
        "Documentation & Reporting"
      ]
    },

    {
      phase: "Phase 3",
      title: "Agile & Execution Models",
      duration: "8–10 Weeks",
      icon: Cloud,
      checkIcon: CheckCircle2,
      color: "gradient-primary-3",
      skills: [
        "Agile & Scrum",
        "Sprint Planning",
        "Stakeholder Management",
        "Performance Tracking"
      ]
    },

    {
      phase: "Phase 4",
      title: "Team & Delivery Management",
      duration: "6–8 Weeks",
      icon: Server,
      checkIcon: CheckCircle2,
      color: "gradient-primary-4",
      skills: [
        "Team Building",
        "Conflict Resolution",
        "Resource Allocation",
        "Quality Assurance"
      ]
    },

    {
      phase: "Phase 5",
      title: "Strategic & Risk Leadership",
      duration: "8–10 Weeks",
      icon: Lock,
      checkIcon: CheckCircle2,
      color: "gradient-primary-5",
      skills: [
        "Strategic Planning",
        "Risk Mitigation",
        "Decision Making",
        "Change Management"
      ]
    },

    {
      phase: "Phase 6",
      title: "Executive & Growth Readiness",
      duration: "Ongoing",
      icon: Award,
      checkIcon: CheckCircle2,
      color: "gradient-primary-6",
      skills: [
        "Executive Communication",
        "Business Alignment",
        "Mentoring & Coaching",
        "Continuous Improvement"
      ]
    }
  ]
};

export const leadership = {
  badge: {
    text: "Leadership & Project Management Roadmap",
    icon: Users,
  },

  title: {
    line1: "Your Path to",
    highlight: "Leadership Excellence",
  },

  description:
    "Complete roadmap to grow from an individual contributor to a confident leader and project manager. Master planning, execution, stakeholder management, and team leadership skills.",

  trust: {
    count: "60,000+",
    text: "professionals trust our leadership roadmap",
  },

  stats: [
    { value: "60K+", label: "Leaders Trained" },
    { value: "96%", label: "Project Success Rate" },
    { value: "120+", label: "Enterprise Partners" },
    { value: "24/7", label: "Leadership Community" },
  ],

  form: {
    heading: "Get Your Free Leadership & PM Roadmap PDF",
    subHeading:
      "Lead teams, deliver projects, and grow your impact",
    buttonText: "Download Leadership Roadmap",
    footerText: "No spam. Practical leadership insights only.",
  },

  preview: {
    title: "LEADERSHIP",
    subTitle: "& PROJECT MANAGEMENT",
    brand: "Quantum Training",
    icon: ClipboardList,
  },
};