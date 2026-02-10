import { Cpu, Wifi } from "lucide-react";
import { 
  Terminal,
  Shield,
  Cloud,
  Server,
  Lock,
  Award,
  CheckCircle2
} from "lucide-react";

export const embeddedIoTRoadmap = {
  title: "Embedded IoT Engineer",
  subtitle:
    "A practical, industry-oriented roadmap to become an Embedded IoT engineer—covering hardware fundamentals, firmware development, connectivity, and scalable IoT systems.",

  steps: [
    {
      phase: "Phase 1",
      title: "Embedded & Electronics Basics",
      duration: "4–6 Weeks",
      icon: Terminal,
      checkIcon: CheckCircle2,
      color: "gradient-primary-1",
      skills: [
        "C Programming",
        "Basic Electronics",
        "Microcontroller Fundamentals",
        "Digital & Analog Concepts"
      ]
    },

    {
      phase: "Phase 2",
      title: "Embedded Systems Core",
      duration: "6–8 Weeks",
      icon: Server,
      checkIcon: CheckCircle2,
      color: "gradient-primary-2",
      skills: [
        "Embedded C & C++",
        "Memory & Interrupts",
        "Peripheral Interfaces (UART, SPI, I2C)",
        "Debugging Techniques"
      ]
    },

    {
      phase: "Phase 3",
      title: "RTOS & Firmware Design",
      duration: "8–10 Weeks",
      icon: Shield,
      checkIcon: CheckCircle2,
      color: "gradient-primary-3",
      skills: [
        "RTOS Fundamentals",
        "Task Scheduling",
        "Inter-Process Communication",
        "Low-Power Design"
      ]
    },

    {
      phase: "Phase 4",
      title: "IoT Connectivity & Protocols",
      duration: "6–8 Weeks",
      icon: Cloud,
      checkIcon: CheckCircle2,
      color: "gradient-primary-4",
      skills: [
        "Wi-Fi / Bluetooth / LoRa",
        "MQTT & HTTP",
        "Sensor Integration",
        "Edge Device Communication"
      ]
    },

    {
      phase: "Phase 5",
      title: "IoT Security & Cloud Integration",
      duration: "8–10 Weeks",
      icon: Lock,
      checkIcon: CheckCircle2,
      color: "gradient-primary-5",
      skills: [
        "Device Security",
        "Secure Boot & OTA",
        "IoT Cloud Platforms",
        "Data Ingestion Pipelines"
      ]
    },

    {
      phase: "Phase 6",
      title: "Industry & Product Readiness",
      duration: "Ongoing",
      icon: Award,
      checkIcon: CheckCircle2,
      color: "gradient-primary-6",
      skills: [
        "System Architecture",
        "Testing & Validation",
        "Manufacturing Readiness",
        "Continuous Innovation"
      ]
    }
  ]
};

export const embedded = {
  badge: {
    text: "Embedded IoT Software Roadmap",
    icon: Cpu,
  },

  title: {
    line1: "Your Path to",
    highlight: "Embedded IoT Engineer",
  },

  description:
    "Complete roadmap to build a career in Embedded and IoT Software development. Learn microcontrollers, embedded C/C++, RTOS, IoT protocols, firmware development, and real-world hardware integration.",

  trust: {
    count: "45,000+",
    text: "engineers trust our embedded IoT roadmap",
  },

  stats: [
    { value: "45K+", label: "Engineers Trained" },
    { value: "94%", label: "Placement Success" },
    { value: "90+", label: "Hardware & Industry Partners" },
    { value: "24/7", label: "Embedded Community Support" },
  ],

  form: {
    heading: "Get Your Free Embedded IoT Roadmap PDF",
    subHeading:
      "Build smart devices with reliable embedded software",
    buttonText: "Download Embedded IoT Roadmap",
    footerText: "No spam. Pure engineering content only.",
  },

  preview: {
    title: "EMBEDDED",
    subTitle: "IoT SOFTWARE",
    brand: "Quantum Training",
    icon: Wifi,
  },
};
