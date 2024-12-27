'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'

type Service = {
    websiteType: string;
    averagePrice: string | number;
    description: string;
    keyFeatures: string[];
    image: string;
  };
  
  const services: Service[] = [
    {
      "websiteType": "Basic WordPress Website",
      "averagePrice": 12500,
      "description": "Establish a strong and affordable online presence for your small business or personal brand. This package provides a user-friendly website to showcase your services, share information, and connect with your audience.",
      "keyFeatures": [
        "Professionally designed 5-6 page website tailored to your branding.",
        "Easy-to-manage content through the WordPress platform.",
        "Mobile-friendly design to ensure a seamless experience on all devices.",
        "Integrated contact form to facilitate inquiries from potential customers."
      ],
      "image": "/img/services/wordpress.png"
    },
    {
      "websiteType": "WordPress E-commerce Website",
      "averagePrice": 35000,
      "description": "Start selling online quickly and efficiently with a robust WordPress e-commerce store powered by WooCommerce. This solution provides the essential tools to manage your products, process payments, and fulfill orders.",
      "keyFeatures": [
        "Fully functional online store setup with WooCommerce integration.",
        "Secure integration with popular payment gateways to accept online payments.",
        "Attractive product pages with detailed descriptions, images, and variations.",
        "Basic inventory management to track stock levels."
      ],
      "image": "/img/services/WooCommerce.png"
    },
    {
      "websiteType": "Custom E-commerce Website",
      "averagePrice": 70000,
      "description": "Build a unique and scalable online store tailored to your specific business needs and growth ambitions. This solution offers advanced features and customizations for a superior customer experience and efficient operations.",
      "keyFeatures": [
        "Bespoke website design reflecting your brand identity.",
        "Advanced features like multi-vendor support to expand your product offerings.",
        "Comprehensive analytics dashboard to gain insights into customer behavior and sales performance.",
        "Secure and reliable checkout process to build customer trust.",
        "Seamless integration with your existing business systems (CRM, ERP, etc.)."
      ],
      "image": "/img/services/Ecommerce.png"
    },
    {
      "websiteType": "Portfolio Website",
      "averagePrice": 11000,
      "description": "Showcase your talent and expertise with a visually stunning portfolio website. This platform allows artists, designers, and professionals to present their work in a compelling and organized manner.",
      "keyFeatures": [
        "Visually appealing gallery to effectively display your projects.",
        "Responsive design ensuring optimal viewing on all devices.",
        "Easy-to-use contact form for potential clients to reach out.",
        "Optimized for search engines (SEO) to increase visibility."
      ],
      "image": "/img/services/portfolio.png"
    },
    {
      "websiteType": "Blogging Website",
      "averagePrice": 7500,
      "description": "Share your thoughts, insights, and expertise with the world through a dedicated blogging platform. This service provides the tools you need to create engaging content and build an online community.",
      "keyFeatures": [
        "User-friendly Content Management System (CMS) for easy content creation and management.",
        "Integrated commenting system to foster interaction with your audience.",
        "Essential SEO plugins to improve search engine rankings.",
        "Integration with social media platforms to amplify your reach."
      ],
      "image": "/img/services/Blogging.png"
    },
    {
      "websiteType": "Corporate Website",
      "averagePrice": 32500,
      "description": "Establish a professional and credible online presence for your business with a comprehensive corporate website. This solution effectively communicates your brand values, services, and expertise to potential clients and partners.",
      "keyFeatures": [
        "Well-structured multi-page design to present your business information effectively.",
        "Integration with analytics tools to track website performance and user behavior.",
        "Customizable forms for lead generation and data collection.",
        "Option for integration with your Customer Relationship Management (CRM) system."
      ],
      "image": "/img/services/corporate.png"
    },
    {
      "websiteType": "Educational Website",
      "averagePrice": 55000,
      "description": "Create an engaging and effective online learning environment for your students or course participants. This platform provides the tools necessary to deliver high-quality educational content and track student progress.",
      "keyFeatures": [
        "Integration with Learning Management Systems (LMS) for course delivery.",
        "Capabilities for hosting video lectures and educational materials.",
        "Tools for managing courses, assignments, and student grades.",
        "Secure user login and progress tracking to monitor student engagement."
      ],
      "image": "/img/services/Educational.png"
    },
    {
      "websiteType": "Custom Web Application",
      "averagePrice": 125000,
      "description": "Solve unique business challenges with a tailor-made web application designed to streamline your processes and improve efficiency. This solution offers advanced functionality and scalability to meet your specific needs.",
      "keyFeatures": [
        "Integration with third-party APIs to connect with other services.",
        "Intuitive admin dashboard for managing application settings and data.",
        "Custom-built features to address your specific business requirements.",
        "Role-based access control for secure management of user permissions."
      ],
      "image": "/img/services/webapplication.png"
    },
    {
      "websiteType": "Landing Page Website",
      "averagePrice": "5000 – 10000",
      "description": "Drive conversions and achieve your marketing goals with a focused and impactful landing page. This single-page website is designed to capture leads, promote specific products, or announce special offers.",
      "keyFeatures": [
        "Compelling call-to-action buttons to encourage desired user behavior.",
        "Integrated forms to capture valuable lead information.",
        "Clean and minimalistic design to maximize focus and conversion rates."
      ],
      "image": "/img/services/landingpage.png"
    },
    {
      "websiteType": "Event Management Website",
      "averagePrice": "20000 – 40000",
      "description": "Streamline your event planning and promotion with a dedicated event management website. This platform allows you to manage registrations, sell tickets, and keep attendees informed.",
      "keyFeatures": [
        "Interactive event calendar to display dates and schedules.",
        "Integrated ticket booking system for seamless registration and sales.",
        "Secure payment gateway integration for processing ticket purchases.",
        "RSVP functionality to track attendance."
      ],
      "image": "/img/services/eventmanagement.png"
    },
    {
      "websiteType": "News/Media Website",
      "averagePrice": "40000 – 80000",
      "description": "Establish a dynamic online platform for publishing news, articles, and video content, reaching a broad audience and fostering engagement.",
      "keyFeatures": [
        "Robust and flexible content management system (CMS) for easy publishing and updates of news articles and multimedia.",
        "Option for user subscription models to generate recurring revenue and build a loyal audience.",
        "Strategic placement for advertisements to monetize your content."
      ],
      "image": "/img/services/newsmedia.png"
    },
    {
      "websiteType": "Travel/Tourism Website",
      "averagePrice": "35000 – 70000",
      "description": "Empower travel agencies and tourism businesses with a platform to showcase destinations, manage bookings, and facilitate seamless travel experiences for their clients.",
      "keyFeatures": [
        "Integrated booking system for flights, accommodations, and tours.",
        "Visually appealing destination showcase with rich media.",
        "Secure payment integration for online transactions.",
        "Itinerary management tools for organizing travel plans."
      ],
      "image": "/img/services/traveltourism.png"
    },
    {
      "websiteType": "Healthcare/Clinic Website",
      "averagePrice": "25000 – 60000",
      "description": "Provide patients with easy access to information and services through a professional healthcare website, facilitating appointment booking and communication.",
      "keyFeatures": [
        "Online appointment booking system for patient convenience.",
        "Dedicated doctor profiles highlighting expertise and credentials.",
        "Secure contact forms for inquiries and communication.",
        "Integration with a health blog to share valuable information and engage patients."
      ],
      "image": "/img/services/healthcare.png"
    },
    {
      "websiteType": "Real Estate Website",
      "averagePrice": "50000 – 90000",
      "description": "Elevate your real estate business with a platform designed to showcase properties effectively, connect with potential buyers, and streamline the sales process.",
      "keyFeatures": [
        "Comprehensive property listings with detailed information and high-quality images.",
        "Interactive location map integration for easy property discovery.",
        "Advanced search filters to help users find their ideal property.",
        "Lead capture forms to connect with interested buyers and sellers."
      ],
      "image": "/img/services/realstate.png"
    },
    {
      "websiteType": "Membership Website",
      "averagePrice": "50000 – 100000",
      "description": "Build a thriving online community and offer exclusive content or services to registered members through a dedicated membership platform.",
      "keyFeatures": [
        "Secure user registration and profile management.",
        "Flexible subscription plan options to cater to different needs.",
        "Content restriction features to manage access for different membership levels.",
        "Seamless payment integration for recurring subscriptions."
      ],
      "image": "/img/services/membership.png"
    },
    {
      "websiteType": "Restaurant/Food Delivery Website",
      "averagePrice": "25000 – 60000",
      "description": "Enhance your restaurant's reach and customer convenience by offering online menus, ordering, and reservation capabilities through a dedicated website.",
      "keyFeatures": [
        "Attractive menu display with detailed descriptions and images.",
        "Online table booking system for reservations.",
        "Integration with food delivery platforms for expanded reach.",
        "Secure payment gateway for online order processing."
      ],
      "image": "/img/services/Restaurant.png"
    },
    {
      "websiteType": "Job Portal Website",
      "averagePrice": "75000 – 150000",
      "description": "Connect job seekers with recruiters through a feature-rich job portal, streamlining the hiring process and facilitating career opportunities.",
      "keyFeatures": [
        "Comprehensive job listings with search and filtering options.",
        "User registration and profile management for job seekers and recruiters.",
        "Resume upload and management functionality for applicants.",
        "Dedicated admin panel for managing users and job postings.",
        "Payment features for recruiters to post premium job listings."
      ],
      "image": "/img/services/jobsportal.png"
    },
    {
      "websiteType": "Forum/Community Website",
      "averagePrice": "30000 – 60000",
      "description": "Foster discussions and build online communities around shared interests with a dedicated forum website, providing a platform for interaction and knowledge sharing.",
      "keyFeatures": [
        "Personalized user profiles to encourage interaction and identity.",
        "Organized discussion boards with categories and topics.",
        "Moderation tools to ensure a positive and productive environment.",
        "Notification system to keep users informed of new discussions and replies."
      ],
      "image": "/img/services/forum.png"
    },
    {
      "websiteType": "Crowdfunding Website",
      "averagePrice": "80000 – 150000",
      "description": "Facilitate fundraising and donation drives for various causes and projects through a secure and engaging crowdfunding platform.",
      "keyFeatures": [
        "Secure donation and payment processing system.",
        "Visually appealing project showcase with progress tracking.",
        "Social sharing tools to amplify reach and encourage support."
      ],
      "image": "/img/services/crowdfunding.png"
    },
    {
      "websiteType": "Multilingual Website",
      "averagePrice": "40000 – 80000",
      "description": "Expand your reach to a global audience by offering your website in multiple languages, ensuring accessibility and engagement for diverse users.",
      "keyFeatures": [
        "Implementation of multilingual plugins for seamless content translation.",
        "Localization features to adapt content to different regional preferences.",
        "SEO optimization strategies for targeting different language markets."
      ],
      "image": "/img/services/multilingual.png"
    }
  ]; 
export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleService = (websiteType: string) => {
    setExpandedService(expandedService === websiteType ? null : websiteType)
  }

  return (
    <section id="services" className="py-20 px-4 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center font-serif text-foreground">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.websiteType}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-background/80 dark:bg-background/60 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <img
                      src={service.image}
                      alt={service.websiteType}
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{service.websiteType}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-primary">
                      ₹{typeof service.averagePrice === 'number' 
                          ? service.averagePrice.toLocaleString()
                          : service.averagePrice}
                    </div>
                    {expandedService === service.websiteType && (
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {service.keyFeatures.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    onClick={() => toggleService(service.websiteType)}
                    className="w-full text-foreground hover:text-primary hover:bg-primary/10"
                  >
                    {expandedService === service.websiteType ? (
                      <>Hide Features <ChevronUp className="ml-2 h-4 w-4" /></>
                    ) : (
                      <>View Features <ChevronDown className="ml-2 h-4 w-4" /></>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
  