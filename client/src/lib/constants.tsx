import { 
  Rocket, 
  Shield, 
  Smartphone, 
  TrendingUp, 
  Settings, 
  Headphones,
  Zap,
  Users,
  Database,
  Cloud
} from "lucide-react";

export const APP_NAME = "WebApp Pro";

export const NAVIGATION_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const FEATURES = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with modern technologies for optimal performance and speed. Experience instant loading times and smooth interactions.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    hoverBgColor: "group-hover:bg-blue-600"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, secure authentication, and compliance with industry standards.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    hoverBgColor: "group-hover:bg-purple-600"
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design that works perfectly across all devices. Optimized for mobile, tablet, and desktop experiences.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    hoverBgColor: "group-hover:bg-cyan-600"
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Comprehensive analytics dashboard with real-time insights, detailed reports, and actionable metrics.",
    color: "text-green-600",
    bgColor: "bg-green-100",
    hoverBgColor: "group-hover:bg-green-600"
  },
  {
    icon: Settings,
    title: "Easy Integration",
    description: "Seamless integration with popular tools and services. RESTful APIs and webhooks for custom workflows.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    hoverBgColor: "group-hover:bg-orange-600"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support with dedicated account managers and comprehensive documentation.",
    color: "text-red-600",
    bgColor: "bg-red-100",
    hoverBgColor: "group-hover:bg-red-600"
  }
];

export const STATS = [
  { value: "2000+", label: "JEE/NEET Qualified" },
  { value: "50+", label: "Expert Faculty" },
  { value: "96%", label: "Success Rate" }
];

export const SERVICES = [
  {
    icon: "FaGraduationCap",
    title: "JEE Coaching",
    description: "Comprehensive JEE Main & Advanced preparation with expert faculty from top institutes."
  },
  {
    icon: "FaUserMd", 
    title: "NEET Coaching",
    description: "Complete NEET preparation with medical entrance exam specialists and proven strategies."
  },
  {
    icon: "FaHome",
    title: "Residential Programs",
    description: "Modern hostel facilities with 24/7 academic support and mentoring in Baramati."
  }
];

export const COMPANY_VALUES = [
  {
    title: "Academic Excellence",
    description: "Top-tier faculty from premier institutes ensuring quality education.",
    color: "bg-blue-600"
  },
  {
    title: "Student Success", 
    description: "Every student's success is our commitment and measure of achievement.",
    color: "bg-purple-600"
  },
  {
    title: "Modern Infrastructure",
    description: "State-of-the-art facilities and technology-enabled learning environment.",
    color: "bg-cyan-600"
  }
];

export const CONTACT_INFO = {
  address: "Tachyon Academy, Near Vidya Vikas Circle, Baramati, Maharashtra 413102",
  phone: "+91 98765 43210",
  email: "admissions@tachyonbaramati.com"
};

export const SOCIAL_LINKS = [
  { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://linkedin.com/company/tachyon-baramati" },
  { name: "Twitter", icon: "fab fa-twitter", url: "https://twitter.com/tachyonbaramati" },
  { name: "YouTube", icon: "fab fa-youtube", url: "https://youtube.com/tachyonbaramati" },
  { name: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com/tachyonbaramati" }
];
