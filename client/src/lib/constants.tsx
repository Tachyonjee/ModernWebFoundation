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
  { value: "10K+", label: "Active Users" },
  { value: "500+", label: "Projects Completed" },
  { value: "99.9%", label: "Client Satisfaction" }
];

export const SERVICES = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies."
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Actionable insights from your business data."
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Strategic technology consulting and digital transformation."
  }
];

export const COMPANY_VALUES = [
  {
    title: "Innovation First",
    description: "Embracing latest technologies and methodologies.",
    color: "bg-blue-600"
  },
  {
    title: "Client Success",
    description: "Your success is our primary measure of achievement.",
    color: "bg-purple-600"
  },
  {
    title: "Quality Delivery",
    description: "Exceptional quality in every project we undertake.",
    color: "bg-cyan-600"
  }
];

export const CONTACT_INFO = {
  address: "123 Business Street, Suite 100, San Francisco, CA 94105",
  phone: "+1 (555) 123-4567",
  email: "hello@webapp-pro.com"
};

export const SOCIAL_LINKS = [
  { name: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
  { name: "Twitter", icon: "fab fa-twitter", url: "#" },
  { name: "GitHub", icon: "fab fa-github", url: "#" },
  { name: "Instagram", icon: "fab fa-instagram", url: "#" }
];
