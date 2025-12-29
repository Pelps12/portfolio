
export interface ResumeItem {
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  points: string[];
  link?: string;
}

export interface ResumeData {
  education: ResumeItem[];
  experience: ResumeItem[];
  projects: ResumeItem[];
}

export const softwareResume: ResumeData = {
  education: [
    {
      title: "University of Texas at Dallas",
      subtitle: "MS in Computer Engineering",
      date: "August 2024 -- August 2026",
      points: ["GPA: 3.78/4.0"]
    },
    {
      title: "University of Texas at Dallas",
      subtitle: "BS in Computer Engineering",
      date: "August 2020 -- May 2024",
      points: ["GPA: 3.68/4.0"]
    }
  ],
  experience: [
    {
      title: "Research Systems Engineer (ML/Internal Tools)",
      subtitle: "University of Texas at Dallas",
      date: "June 2025 - Present",
      points: [
        "Developed automated Python pipelines to orchestrate synthesis workflows, reducing research iteration cycles by 30%.",
        "Engineered custom Docker environments to standardize tooling and deployment across high-performance clusters.",
        "Collaborated with researchers to define performance metrics and optimize model inference latency by 15%."
      ]
    },
    {
      title: "Software Engineer Intern",
      subtitle: "7-Eleven",
      location: "Irving, TX",
      date: "June 2023 - August 2023",
      points: [
        "Enhanced internal admin tools using ReactJS, with pinned table functionality to improve workflow for 50+ operators.",
        "Standardized backend API documentation by implementing JSDocs, significantly improving developer onboarding speed.",
        "Refactored authentication logic to integrate updated AWS Active Directory (AD) groups across the legacy portal codebase."
      ]
    },
    {
      title: "Software Engineer Intern",
      subtitle: "Amazon Web Services",
      location: "Remote",
      date: "May 2022 - August 2022",
      points: [
        "Designed and built an internal resource tagging tool for the Insights Data team, reducing on-call operational load.",
        "Authored a comprehensive technical design document detailing AWS cost estimates, architecture, and security implications."
      ]
    }
  ],
  projects: [
    {
        title: "Jonze: Campus Organization Management SaaS",
        subtitle: "github.com/Pelps12/jonze",
        link: "https://github.com/Pelps12/jonze",
        date: "",
        points: [
            "Architected a member tracking platform for student organizations, enabling leaders to manage recruitment data.",
            "Built a dynamic form builder, allowing student leaders to define custom schema validations for new member applications.",
            "Developed a high-performance REST API using Hono and OpenAPI, allowing organizations to embed event calendars into external sites.",
            "Designed complex SQL queries and a tabular UI, empowering leaders to filter, visualize, and extract custom member data."
        ]
    },
    {
        title: "Kazala: Event Ticketing System",
        subtitle: "github.com/asuutd/website",
        link: "https://github.com/asuutd/website",
        date: "",
        points: [
            "Led a 4-person engineering team to ship a platform that processed over $70k in gross transaction volume for events.",
            "Designed the end-to-end attendee check-in flow, building a custom QR Code Scanner that reduced entry friction for thousands of students.",
            "Engineered a reservation locking system to resolve high-concurrency ticket purchase race conditions."
        ]
    },
    {
        title: "Sakpa: Services Marketplace (iOS & Web)",
        subtitle: "github.com/Pelps12/black-needle-app",
        link: "https://github.com/Pelps12/black-needle-app",
        date: "",
        points: [
            "Owned the full mobile product lifecycle, launching a React Native app with Push Notifications and Deep Linking.",
            "Navigated the strict App Store review process, successfully resolving complex user authentication and login compliance issues.",
            "Engineered a real-time negotiation system using Ably/WebSockets and deployed the backend on Kubernetes."
        ]
    },
    {
        title: "Embedded Linux/Hardware Co-Design (AES-128)",
        subtitle: "",
        date: "",
        points: [
            "Engineered a full-stack hardware/software system on a Cyclone V SoC, running Embedded Linux.",
            "Developed C-based userspace drivers to interface with memory-mapped FPGA hardware via an AXI bridge.",
            "Solved critical Endianness mismatches (ARM vs. Network byte order) through custom low-level bit-packing algorithms."
        ]
    }
  ]
};

export const hardwareResume: ResumeData = {
  education: [
    {
      title: "University of Texas at Dallas",
      subtitle: "MS in Computer Engineering",
      date: "August 2024 -- August 2026",
      points: ["GPA: 3.78/4.0"]
    },
    {
      title: "University of Texas at Dallas",
      subtitle: "BS in Computer Engineering",
      date: "August 2020 -- May 2024",
      points: ["GPA: 3.68/4.0"]
    }
  ],
  experience: [
    {
      title: "FPGA Machine Learning/AI Research",
      subtitle: "University of Texas at Dallas",
      location: "Richardson, TX",
      date: "June 2025 - Present",
      points: [
        "Authored Python automation scripts for Vivado, accelerating FPGA synthesis workflows and reducing build times by 30%",
        "Optimized Xilinx DPU configurations by experimenting with channel parallelism on ZCU102 platforms, reducing model inference latency by 15% for hyperspectral imaging applications.",
        "Built custom Docker environments enable GPU accelerated Vitis AI Quantization on high performance clusters",
        "Trained a custom UNET3 architecture on hyperspectral datasets and successfully deployed the INT8 models on ZCU102"
      ]
    },
    {
      title: "Full Stack Developer Intern",
      subtitle: "7-Eleven",
      location: "Irving, TX",
      date: "June 2023 - August 2023",
      points: [
        "Enhanced admin portal user experience by implementing pinned functionality to internal tables in ReactJS",
        "Implemented updated AWS Activity Directory (AD) groups throughout the entire admin portal codebase",
        "Improved code readability and developer experience by introducing JSDOCs to backend API codebase"
      ]
    },
    {
      title: "Software Development Engineer",
      subtitle: "Amazon Web Services",
      location: "Remote",
      date: "May 2022 - August 2022",
      points: [
        "Wrote a design document detailing the AWS tools and billing estimates for a tagging support tool",
        "Developed the tagging support as an internal tool for on-call Insights Data team members"
      ]
    }
  ],
  projects: [
    {
        title: "AES-128 Hardware/Software Co-Design on Cyclone V SoC",
        subtitle: "",
        date: "December 2025",
        points: [
            "Generated optimized RTL from a SystemC AES-128 model using NEC CyberWorkBench High-Level Synthesis (HLS), targeting a Cyclone V SoC.",
            "Integrated the IP via a Lightweight AXI bridge, developing C drivers to handle Little/Big Endian conversion and HW/SW synchronization.",
            "Synthesized design utilizing 14,375 ALMs (45%), validating encryption accuracy against a software golden reference."
        ]
    },
    {
        title: "VLSI Physical Design with Custom Standard Cell Library",
        subtitle: "",
        date: "November 2025 - December 2025",
        points: [
            "Developed a custom 65nm standard cell library in Virtuoso, optimizing cell height to 3.38 μm and achieving an inverter fall delay of 34.6 ps.",
            "Characterized D-Flip-Flop timing in HSPICE, achieving a 283 ps Clock-to-Q delay.",
            "Executed RTL-to-GDSII flow for the >100k-cell MSDAP Memory System in Innovus, achieving DRC/LVS clean layout and closing timing via PrimeTime."
        ]
    },
    {
        title: "Mini Stereo Digital Audio Processor (MSDAP) ASIC",
        subtitle: "",
        date: "January 2025 - May 2025",
        points: [
            "Designed a stereo audio processor architecture with S2P/P2S converters and ALU subsystems for serial data stream processing.",
            "Implemented a robust dual-clock domain system (26.88MHz System Clock / 768kHz Data Clock) to handle synchronization and serialization.",
            "Performed logic synthesis, placement, and routing using Cadence Genus and Innovus to meet timing constraints across both clock domains."
        ]
    },
    {
        title: "Ethernet UDP IP Core",
        subtitle: "",
        date: "July 2025 - September 2025",
        points: [
            "Implemented a 100 Mbps RMII Ethernet UDP/IP core on a Spartan-7 FPGA, utilizing asynchronous AXI FIFOs for 50MHz/100MHz clock crossing.",
            "Developed a modular Python testbench using cocotb and scapy to verify MAC, IP, and UDP layer protocol compliance.",
            "Validated the design on-hardware by establishing active network communication between the FPGA and a host PC."
        ]
    },
    {
        title: "Custom Computer with Edge-Triggered Interrupt Controller",
        subtitle: "",
        date: "September 2024 - May 2025",
        points: [
            "Developed a custom ISA CPU and an ARM-based 32-source, 8-level priority asynchronous interrupt controller in SystemVerilog.",
            "Integrated memory-mapped I2C peripherals and verified 100MHz operation on-hardware using Xilinx Integrated Logic Analyzers (ILA)."
        ]
    },
    {
        title: "I2C Peripheral",
        subtitle: "",
        date: "September 2024 - November 2024",
        points: [
            "Designed a custom SystemVerilog I2C slave using FSMs for address matching, data transfer sequencing, and start/stop detection.",
            "Synthesized design on FPGA and validated signal integrity and protocol adherence via oscilloscope debugging."
        ]
    }
  ]
};
