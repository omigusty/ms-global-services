import {
  Building2,
  TrendingUp,
  Users,
  RefreshCcw,
  Scale,
  Briefcase,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function InvestmentBanking() {
  const services = [
    { icon: Building2, title: "Mergers & Acquisitions Advisory" },
    { icon: TrendingUp, title: "Fundraising & Capital Structuring" },
    { icon: Users, title: "Private Equity & Venture Capital Liaison" },
    { icon: RefreshCcw, title: "Debt Advisory & Restructuring" },
    { icon: Scale, title: "Regulatory Compliance" },
    { icon: Briefcase, title: "Bank Account & Licensing Consultancy" },
  ];

  return (
    <section id="investment-banking" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading + Tagline */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investment Banking & Banking Consultancy
          </h2>
          <p className="text-xl text-[#D7B459] font-semibold">
            Empowering Enterprises with Financial Expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-[#D7B459]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-[#D7B459]" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="#contact">
            <Button className="bg-[#D7B459] hover:bg-[#D7B459]/90 text-white">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
