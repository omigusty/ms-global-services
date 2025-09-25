import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Business Incorporation",
    desc: "Seamless setup in UAE mainland and freezones",
  },
  {
    title: "Strategic Planning",
    desc: "Vision setting, market entry, and growth blueprints",
  },
  {
    title: "Compliance & Tax Planning",
    desc: "VAT strategies, tax optimization, and regulatory reporting",
  },
  {
    title: "Regulatory Approvals",
    desc: "Licensing, permits, and government liaison",
  },
  {
    title: "Financial Planning & Budgeting",
    desc: "Dynamic business models and capital stewardship",
  },
  {
    title: "Operational Governance",
    desc: "Robust organizational structure and compliance frameworks",
  },
  {
    title: "IT & Digital Advisory",
    desc: "Next-gen systems integration and digital transformation",
  },
  {
    title: "Market Research & Entry Strategy",
    desc: "Feasibility studies and global target market analysis",
  },
];

const overlayData = [
  {
    id: 1,
    text: "Comprehensive support",
    position:
      "top-[15px] left-[5px] sm:left-2 md:top-[20px] md:left-4 lg:left-7",
    maxWidth:
      "max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]",
    delay: "delay-0",
  },
  {
    id: 2,
    text: "UAE expertise",
    position:
      "top-[80px] sm:top-[100px] md:top-[120px] lg:top-[150px] right-[5px] sm:right-[-10px] md:right-[-15px] lg:right-[-20px]",
    maxWidth:
      "max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]",
    delay: "delay-150",
  },
  {
    id: 3,
    text: "Digital transformation",
    position:
      "top-[150px] sm:top-[180px] md:top-[220px] lg:top-[250px] left-[-15px] sm:left-[-30px] md:left-[-35px] lg:left-[-50px]",
    maxWidth:
      "max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]",
    delay: "delay-300",
  },
  {
    id: 4,
    text: "Regulatory compliance",
    position:
      "top-[280px] sm:top-[320px] md:top-[380px] lg:top-[500px] left-[5px] sm:left-[-10px] md:left-[-15px] lg:left-[-20px]",
    maxWidth:
      "max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]",
    delay: "delay-450",
  },
  {
    id: 5,
    text: "Operational support",
    position:
      "top-[220px] sm:top-[250px] md:top-[300px] lg:top-[350px] right-[-15px] sm:right-[-40px] md:right-[-45px] lg:right-[-60px]",
    maxWidth:
      "max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]",
    delay: "delay-600",
  },
  {
    id: 6,
    text: "Market entry planning",
    position:
      "top-[320px] sm:top-[360px] md:top-[420px] lg:top-[550px] right-[5px] sm:right-[-30px] md:right-[-35px] lg:right-[-40px]",
    maxWidth:
      "max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]",
    delay: "delay-750",
  },
];

function OverlayBadge({
  text,
  position,
  maxWidth,
  delay,
}: {
  text: string;
  position: string;
  maxWidth: string;
  delay: string;
}) {
  return (
    <div
      className={`
      absolute ${position} ${maxWidth} ${delay} z-20
      bg-white rounded-lg shadow-xl border border-gray-100 p-1.5 sm:p-2 md:p-2.5 lg:p-3
      animate-in fade-in slide-in-from-bottom-4 duration-700
      hover:scale-105 hover:shadow-2xl transition-all
      cursor-pointer group
    `}
    >
      <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
        {text}
      </p>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </div>
  );
}

export function CompanyFormation() {
  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center order-1 lg:order-1">
            <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[420px] md:w-[400px] md:h-[480px] lg:w-[500px] lg:h-[600px] p-2 md:p-4">
              <div className="relative w-full h-full overflow-hidden rounded-t-[150px] sm:rounded-t-[180px] md:rounded-t-[200px] lg:rounded-t-[225px] rounded-b-[10px] z-10">
                <Image
                  src="https://images.unsplash.com/photo-1623669655876-17bac70dd7ae?q=80&w=1706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Person relaxing in water with mountain backdrop"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="block">
                {overlayData.map((overlay) => (
                  <OverlayBadge
                    key={overlay.id}
                    text={overlay.text}
                    position={overlay.position}
                    maxWidth={overlay.maxWidth}
                    delay={overlay.delay}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 md:space-y-8 lg:space-y-6 order-2 lg:order-2 md:px-6 lg:px-0">
            <div className="space-y-3 md:space-y-6 lg:space-y-4">
              <p className="text-xs md:text-sm font-medium text-gray-600 tracking-wider uppercase">
                Company Formation & Strategic Business Setup Consultancy
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight md:leading-snug lg:leading-tight text-balance">
                Empowering Visionaries
                <br />
                to Launch, Scale,
                <br />
                and <span className="text-[#D7B459]">Succeed</span>
              </h2>

              <p className="text-base md:text-lg lg:text-lg text-gray-600 leading-relaxed md:leading-relaxed max-w-lg md:max-w-2xl lg:max-w-lg text-pretty">
                Ready to expand across borders or establish a solid foothold in
                the UAE? We provide 360° guidance for every stage of your
                business journey.
              </p>

              <ul className="mt-3 md:mt-6 lg:mt-4 space-y-1.5 md:space-y-3 lg:space-y-2 text-gray-700 text-sm md:text-base list-disc pl-4 md:pl-6 lg:pl-5">
                {services.map((item, i) => (
                  <li key={i} className="text-pretty leading-relaxed">
                    <strong>{item.title}:</strong> {item.desc}
                  </li>
                ))}
              </ul>
            </div>

            <Button className="mt-4 md:mt-8 lg:mt-6 bg-[#D7B459] hover:bg-[#C4A347] text-white px-4 md:px-8 lg:px-6 py-2 md:py-3 lg:py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md text-sm md:text-base">
              Get Started
              <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
