import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  FileText, 
  BadgeDollarSign, 
  Calculator, 
  LineChart, 
  BookOpen, 
  Building
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FileText className="h-10 w-10" />,
      title: "GST Compliance",
      description: "Comprehensive GST registration, filing, and compliance services to ensure your business meets all regulatory requirements.",
      features: [
        "GST Registration",
        "Monthly/Quarterly Returns",
        "GST Reconciliation",
        "E-way Bill Management",
        "Input Tax Credit Optimization",
        "GST Audit Assistance"
      ]
    },
    {
      id: 2,
      icon: <BadgeDollarSign className="h-10 w-10" />,
      title: "Auditing Services",
      description: "Comprehensive auditing services to assess financial health, ensure compliance, and identify improvement areas.",
      features: [
        "Statutory Audits",
        "Internal Audits",
        "Tax Audits",
        "Special Purpose Audits",
        "Due Diligence",
        "Compliance Audits"
      ]
    },
    {
      id: 3,
      icon: <Calculator className="h-10 w-10" />,
      title: "Taxation Services",
      description: "Strategic tax planning and compliance services to optimize tax positions while ensuring full regulatory compliance.",
      features: [
        "Income Tax Filing",
        "Tax Planning",
        "TDS Compliance",
        "Tax Assessment Support",
        "International Taxation",
        "Transfer Pricing"
      ]
    },
    {
      id: 4,
      icon: <LineChart className="h-10 w-10" />,
      title: "Financial Advisory",
      description: "Expert financial guidance and strategic advice to help businesses make informed decisions and achieve growth.",
      features: [
        "Business Valuations",
        "Financial Forecasting",
        "Investment Analysis",
        "Risk Management",
        "Debt Restructuring",
        "Business Planning"
      ]
    },
    {
      id: 5,
      icon: <BookOpen className="h-10 w-10" />,
      title: "Bookkeeping & Accounting",
      description: "Comprehensive bookkeeping and accounting services to maintain accurate financial records and generate insights.",
      features: [
        "Daily Accounting",
        "Financial Statements",
        "Bank Reconciliation",
        "Financial Reporting",
        "Payroll Processing",
        "Accounts Receivable & Payable"
      ]
    },
    {
      id: 6,
      icon: <Building className="h-10 w-10" />,
      title: "Corporate Compliance",
      description: "End-to-end corporate compliance services to help businesses meet regulatory requirements and maintain good standing.",
      features: [
        "Company Registration",
        "Annual Filings",
        "ROC Compliance",
        "Secretarial Services",
        "Legal Documentation",
        "Regulatory Reporting"
      ]
    }
  ];

  return (
    <div className="pt-24 md:pt-32">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-neutral-dark">
            We offer a comprehensive range of accounting and financial services to help your business succeed in today's competitive environment.
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div key={service.id} className="service-card bg-white rounded-lg shadow-md p-8 transition-all duration-300">
              <div className="text-secondary text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="#more-services">
                <a className="text-secondary font-medium flex items-center hover:text-primary transition-colors">
                  Learn More <span className="ml-2">→</span>
                </a>
              </Link>
            </div>
          ))}
        </div>

        {/* Detailed Service Information */}
        <div id="more-services">
          {services.map((service, index) => (
            <div key={service.id} className={`mb-16 ${index % 2 === 0 ? '' : 'bg-[#F4F7FA] rounded-lg p-8'}`}>
              <div className="flex flex-col md:flex-row items-center">
                <div className={`md:w-1/2 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <img 
                    src={`https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=${80 + index}`} 
                    alt={`${service.title} service`} 
                    className="rounded-lg shadow-lg w-full" 
                  />
                </div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <div className="w-16 h-1 bg-accent mb-6"></div>
                  <p className="mb-6">
                    {service.description} Our expert team ensures that your business remains compliant while maximizing efficiency and minimizing financial risks.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="bg-primary rounded-full p-2 mr-3">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button className="bg-primary text-white hover:bg-secondary">Request Service</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-primary text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Need Custom Financial Solutions?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            We understand that every business has unique needs. Contact us today to discuss how we can provide tailored financial services for your specific requirements.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-primary hover:bg-accent hover:text-white">Contact Us Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
