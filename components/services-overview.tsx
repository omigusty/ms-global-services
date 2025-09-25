"use client";
import { Building2, Calculator, TrendingUp, BarChart3 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";

export function ServicesOverview() {
  const services = {
    formation: {
      icon: Building2,
      title: "Company Formation & Strategic Business Setup",
      description:
        "Seamless business incorporation in UAE mainland and freezones with comprehensive strategic planning.",
      features: [
        "Business Incorporation",
        "Strategic Planning",
        "Regulatory Approvals",
        "Market Entry Strategy",
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    audit: {
      icon: Calculator,
      title: "Audit & Tax Consultancy",
      description:
        "Precise audit and tax solutions in line with UAE and international standards for complete compliance.",
      features: [
        "VAT Filing & Compliance",
        "Corporate Tax Filing",
        "Audit Services",
        "Global Audit Solutions",
      ],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=500&fit=crop",
    },
    banking: {
      icon: TrendingUp,
      title: "Investment Banking & Financial Advisory",
      description:
        "Strategic capital solutions and market insights to unlock value for corporates and startups.",
      features: [
        "Venture Capital & PE",
        "Business Financing",
        "Banking Consultancy",
        "Risk Management",
      ],
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    markets: {
      icon: BarChart3,
      title: "Capital Markets Consultancy",
      description:
        "Seamless access to Indian and international stock markets for listing and capital-raising.",
      features: [
        "IPO Planning",
        "QIP & QIB Services",
        "Preferential Placement",
        "Merchant Banking",
      ],
      image:
        "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-balance">
            Our Services
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 text-pretty">
            From ideation to IPO—and everything in between. Our end-to-end
            services empower your business at every stage of growth.
          </p>

          {/* <Button className="mt-4 md:mt-6 bg-[#D7B459] hover:bg-[#C4A347] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md text-sm sm:text-base">
            Explore More
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button> */}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="formation" className="w-full">
          <TabsList className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-wrap gap-1 sm:gap-2 lg:gap-3 bg-transparent mb-16 md:mb-20 w-full max-w-4xl lg:max-w-none mx-auto">
            {Object.entries(services).map(([key, service]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-2.5 rounded-lg border border-gray-200 text-gray-700 hover:text-gray-900 hover:border-gray-300 data-[state=active]:border-[#C4A347] data-[state=active]:bg-[#C4A347] data-[state=active]:text-white text-[10px] sm:text-xs lg:text-sm text-center min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3rem] leading-tight transition-all duration-200 overflow-hidden"
              >
                <service.icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-pretty leading-tight font-medium truncate">
                  {service.title}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(services).map(([key, service]) => (
            <TabsContent
              key={key}
              value={key}
              className="bg-white border border-gray-200 shadow-md p-4 sm:p-6 md:p-8 rounded-2xl"
            >
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start lg:items-center">
                <div className="flex-1 w-full">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 text-balance">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-pretty leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs sm:text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-[#D7B459] rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-pretty">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* <Button className="bg-[#D7B459] hover:bg-[#C4A347] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md text-sm sm:text-base w-full sm:w-auto">
                    Let&apos;s Chat
                  </Button> */}
                </div>

                <div className="flex-1 flex justify-center w-full lg:w-auto">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="rounded-xl object-cover w-full max-w-sm sm:max-w-md lg:max-w-sm h-48 sm:h-64 lg:h-auto"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
