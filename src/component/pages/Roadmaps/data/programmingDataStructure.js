import { Code2, Braces } from "lucide-react";
import { 
  Terminal,
  Shield,
  Cloud,
  Server,
  Lock,
  Award,
  CheckCircle2
} from "lucide-react";

export const programmingDSARoadmap = {
  title: "Programming & Data Structures",
  subtitle:
    "A structured roadmap to master programming fundamentals and data structures—building strong problem-solving skills from basics to advanced algorithmic thinking.",

  steps: [
    {
      phase: "Phase 1",
      title: "Programming Foundations",
      duration: "4–6 Weeks",
      icon: Terminal,
      checkIcon: CheckCircle2,
      color: "from-primary to-primary/80",
      skills: [
        "Programming Basics",
        "C Language Fundamentals",
        "Variables & Control Flow",
        "Basic Problem Solving"
      ]
    },

    {
      phase: "Phase 2",
      title: "Core Programming Concepts",
      duration: "6–8 Weeks",
      icon: Shield,
      checkIcon: CheckCircle2,
      color: "from-primary/90 to-primary/70",
      skills: [
        "C++ Programming",
        "Functions & Pointers",
        "Object-Oriented Concepts",
        "Memory Management"
      ]
    },

    {
      phase: "Phase 3",
      title: "Python & Practical Coding",
      duration: "8–10 Weeks",
      icon: Cloud,
      checkIcon: CheckCircle2,
      color: "from-primary/80 to-primary/60",
      skills: [
        "Python Fundamentals",
        "Data Handling in Python",
        "Problem Solving with Python",
        "Scripting Basics"
      ]
    },

    {
      phase: "Phase 4",
      title: "Data Structures Core",
      duration: "6–8 Weeks",
      icon: Server,
      checkIcon: CheckCircle2,
      color: "from-primary/70 to-primary/50",
      skills: [
        "Arrays & Strings",
        "Linked Lists",
        "Stacks & Queues",
        "Recursion Techniques"
      ]
    },

    {
      phase: "Phase 5",
      title: "Advanced Data Structures & Algorithms",
      duration: "8–10 Weeks",
      icon: Lock,
      checkIcon: CheckCircle2,
      color: "from-primary/60 to-primary/40",
      skills: [
        "Trees & Graphs",
        "Searching & Sorting",
        "Dynamic Programming",
        "Algorithm Optimization"
      ]
    },

    {
      phase: "Phase 6",
      title: "Problem-Solving Mastery",
      duration: "Ongoing",
      icon: Award,
      checkIcon: CheckCircle2,
      color: "from-primary/50 to-primary/30",
      skills: [
        "Competitive Programming",
        "Interview Preparation",
        "Code Optimization",
        "Continuous Practice"
      ]
    }
  ]
};

export const programmingDataStructure = {
  badge: {
    text: "Programming & Data Structures Roadmap",
    icon: Code2,
  },

  title: {
    line1: "Your Path to",
    highlight: "Strong Programming Foundations",
  },

  description:
    "Structured roadmap to master programming fundamentals using C, C++, and Python along with core Data Structures & Algorithms. Build logical thinking, problem-solving skills, and coding confidence for any tech career.",

  trust: {
    count: "80,000+",
    text: "students trust our programming roadmap",
  },

  stats: [
    { value: "80K+", label: "Students Trained" },
    { value: "98%", label: "Coding Confidence Boost" },
    { value: "200+", label: "Practice Problems" },
    { value: "24/7", label: "Learner Community Support" },
  ],

  form: {
    heading: "Get Your Free Programming & DSA Roadmap PDF",
    subHeading:
      "Master C, C++, Python and Data Structures step by step",
    buttonText: "Download Programming Roadmap",
    footerText: "No spam. Only pure learning content.",
  },

  preview: {
    title: "PROGRAMMING",
    subTitle: "& DATA STRUCTURES",
    brand: "Quantum Training",
    icon: Braces,
  },
};
