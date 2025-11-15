// components/ServicesSection.jsx
import {
  ShoppingCart,
  ShoppingBag,
  Store,
  Globe,
  Instagram,
  Facebook,
  LayoutDashboard,
  Video,
  TrendingUp,
  Megaphone,
  GraduationCap,
  Infinity,
  UserCheck,
  Wrench,
  Headphones,
  ChartNoAxesColumnIncreasing,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Bai_Jamjuree } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // jo weights chahiye add karo
});

const servicesData = [
  {
    category: "Multi-Platform Selling",
    count: 7,
    items: [
      {
        title: "Amazon Seller Setup",
        description: "Get your store registered and optimized for fast sales.",
        icon: ShoppingCart,
      },
      {
        title: "Flipkart Seller Account",
        description:
          "We list your products and manage ads for better visibility.",
        icon: ShoppingBag,
      },
      {
        title: "Meesho Seller Growth",
        description:
          "Boost your Meesho account with viral kitchen and home products.",
        icon: Store,
      },
      {
        title: "Shopify Store Creation",
        description:
          "We build your own custom-branded Shopify store with domain and design.",
        icon: Globe,
      },
      {
        title: "Instagram Business Page",
        description:
          "Professionally designed bio, highlights, and post strategy for branding.",
        icon: Instagram,
      },
      {
        title: "Facebook Page Integration",
        description:
          "Connect your store with Facebook & Instagram for ad automation.",
        icon: Facebook,
      },
      {
        title: "Multi-Channel Dashboard",
        description:
          "Manage Amazon, Flipkart, and Meesho orders from one place.",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    category: "Marketing & Training Support",
    count: 7,
    items: [
      {
        title: "Video & Reels Automation",
        description:
          "AI-generated product videos for Instagram and Meesho ads.",
        icon: Video,
      },
      {
        title: "Content Strategy",
        description:
          "Trending captions, hashtags, and creatives designed to go viral.",
        icon: TrendingUp,
      },
      {
        title: "Ad Campaign Setup",
        description: "Complete ad support for Meesho, Flipkart, and Meta Ads.",
        icon: Megaphone,
      },
      {
        title: "E-Commerce Masterclass",
        description:
          "Live sessions covering listing, ads, product selection & scaling tips.",
        icon: GraduationCap,
      },
      {
        title: "Lifetime Training Access",
        description: "Recorded sessions, PDFs, and future updates included.",
        icon: Infinity,
      },
      {
        title: "1-on-1 Mentorship",
        description: "Get personal guidance from Ecom Saksham & team.",
        icon: UserCheck,
      },
      {
        title: "Free Tools Access",
        description:
          "Canva Pro templates, SEO keyword sheets, and automation checklists.",
        icon: Wrench,
      },
    ],
  },
  {
    category: "Trust, Transparency & Growth",
    count: 4,
    items: [
      {
        title: "Dedicated Support Team",
        description: "For GST, listings, dispatch, and client assistance.",
        icon: Headphones,
      },
      {
        title: "Daily Report Updates",
        description: "Track orders, returns, and profit margins in real time.",
        icon: ChartNoAxesColumnIncreasing,
      },
      {
        title: "Legal & Compliance Help",
        description: "Business deed, invoice setup, and tax filing support.",
        icon: ShieldCheck,
      },
      {
        title: "Goal-Oriented Growth",
        description:
          "Our mission – help you reach ₹50,000-₹1,00,000 monthly profit.",
        icon: Target,
      },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4 ${baiJamjuree.className}`}
          >
            Our Complete E-Commerce Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Everything you need to succeed in online business
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="border-2 border-amber-200 rounded-xl p-6 sm:p-8 bg-gradient-to-br from-white to-amber-50"
            >
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 mr-4 px-3 py-1 text-xs sm:text-sm bg-amber-500 text-white">
                  {service.count} Services
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {service.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {service.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex space-x-3 sm:space-x-4 p-4 rounded-lg bg-white hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-md">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
