import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  FileText, 
  BadgeDollarSign, 
  Calculator, 
  LineChart, 
  BookOpen, 
  Building,
  QuoteIcon
} from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#F4F7FA]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4">
                Financial Excellence & Expert Guidance
              </h1>
              <p className="text-lg text-neutral-dark mb-8 max-w-lg">
                Prachi Harsh & Associates provides comprehensive accounting, auditing, and taxation services to help your business thrive in today's complex financial landscape.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/services">
                  <Button className="bg-primary text-white hover:bg-secondary px-8 py-6 h-auto">
                    Our Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 h-auto">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional accounting team meeting" 
                className="rounded-lg shadow-xl w-full max-w-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">About Our Firm</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-neutral-dark">
              Founded on principles of integrity and excellence, Prachi Harsh & Associates delivers expert financial services tailored to meet your unique business needs.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <img 
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern accounting office" 
                className="rounded-lg shadow-lg w-full" 
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">Our Vision & Mission</h3>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="mb-6">
                At Prachi Harsh & Associates, we strive to be more than just accountants. We aim to be trusted advisors who help our clients navigate financial complexities with confidence and clarity.
              </p>
              <p className="mb-8">
                Our mission is to deliver exceptional financial services that empower businesses to make informed decisions, maintain compliance, and achieve sustainable growth in an ever-changing economic landscape.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Integrity</h4>
                    <p className="text-sm">Unwavering ethical practices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Excellence</h4>
                    <p className="text-sm">Commitment to quality</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Expertise</h4>
                    <p className="text-sm">In-depth industry knowledge</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Client Focus</h4>
                    <p className="text-sm">Personalized solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Counter Section */}
          <div className="counter-section py-16 rounded-xl text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">15</div>
                <p className="uppercase text-sm font-medium">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <p className="uppercase text-sm font-medium">Satisfied Clients</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10</div>
                <p className="uppercase text-sm font-medium">Team Members</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="uppercase text-sm font-medium">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-[#F4F7FA]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-neutral-dark">
              We offer a comprehensive range of accounting and financial services to help your business succeed in today's competitive environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="service-card bg-white rounded-lg shadow-md p-8 transition-all duration-300">
              <div className="text-secondary text-4xl mb-4">
                <FileText className="h-10 w-10" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">GST Compliance</h3>
              <p className="mb-4">Comprehensive GST registration, filing, and compliance services to ensure your business meets all regulatory requirements.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>GST Registration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Monthly/Quarterly Returns</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>GST Reconciliation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>E-way Bill Management</span>
                </li>
              </ul>
              <Link href="/contact">
                <a className="text-secondary font-medium flex items-center hover:text-primary transition-colors">
                  Learn More <span className="ml-2">→</span>
                </a>
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="service-card bg-white rounded-lg shadow-md p-8 transition-all duration-300">
              <div className="text-secondary text-4xl mb-4">
                <BadgeDollarSign className="h-10 w-10" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Auditing Services</h3>
              <p className="mb-4">Comprehensive auditing services to assess financial health, ensure compliance, and identify improvement areas.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Statutory Audits</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Internal Audits</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Tax Audits</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Special Purpose Audits</span>
                </li>
              </ul>
              <Link href="/contact">
                <a className="text-secondary font-medium flex items-center hover:text-primary transition-colors">
                  Learn More <span className="ml-2">→</span>
                </a>
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="service-card bg-white rounded-lg shadow-md p-8 transition-all duration-300">
              <div className="text-secondary text-4xl mb-4">
                <Calculator className="h-10 w-10" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Taxation Services</h3>
              <p className="mb-4">Strategic tax planning and compliance services to optimize tax positions while ensuring full regulatory compliance.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Income Tax Filing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Tax Planning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>TDS Compliance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Tax Assessment Support</span>
                </li>
              </ul>
              <Link href="/contact">
                <a className="text-secondary font-medium flex items-center hover:text-primary transition-colors">
                  Learn More <span className="ml-2">→</span>
                </a>
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="service-card bg-white rounded-lg shadow-md p-8 transition-all duration-300">
              <div className="text-secondary text-4xl mb-4">
                <LineChart className="h-10 w-10" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Financial Advisory</h3>
              <p className="mb-4">Expert financial guidance and strategic advice to help businesses make informed decisions and achieve growth.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Business Valuations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Financial Forecasting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Investment Analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Risk Management</span>
                </li>
              </ul>
              <Link href="/contact">
                <a className="text-secondary font-medium flex items-center hover:text-primary transition-colors">
                  Learn More <span className="ml-2">→</span>
                </a>
              </Link>
            </div>

            {/* Service Card 5 */}
            <div className="service-card bg-white rounded-lg shadow-md p-8 transition-all duration-300">
              <div className="text-secondary text-4xl mb-4">
                <BookOpen className="h-10 w-10" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Bookkeeping & Accounting</h3>
              <p className="mb-4">Comprehensive bookkeeping and accounting services to maintain accurate financial records and generate insights.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Daily Accounting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Financial Statements</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Bank Reconciliation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Financial Reporting</span>
                </li>
              </ul>
              <Link href="/contact">
                <a className="text-secondary font-medium flex items-center hover:text-primary transition-colors">
                  Learn More <span className="ml-2">→</span>
                </a>
              </Link>
            </div>

            {/* Service Card 6 */}
            <div className="service-card bg-white rounded-lg shadow-md p-8 transition-all duration-300">
              <div className="text-secondary text-4xl mb-4">
                <Building className="h-10 w-10" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Corporate Compliance</h3>
              <p className="mb-4">End-to-end corporate compliance services to help businesses meet regulatory requirements and maintain good standing.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Company Registration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Annual Filings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>ROC Compliance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                  <span>Secretarial Services</span>
                </li>
              </ul>
              <Link href="/contact">
                <a className="text-secondary font-medium flex items-center hover:text-primary transition-colors">
                  Learn More <span className="ml-2">→</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Client Testimonials</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-neutral-dark">
              Hear what our clients have to say about their experience working with Prachi Harsh & Associates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
              <div className="text-accent mb-4">
                <QuoteIcon className="h-8 w-8" />
              </div>
              <p className="mb-6 italic">
                "Prachi Harsh & Associates has been instrumental in helping our company navigate complex tax regulations. Their expertise and attention to detail have saved us both time and money."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-neutral-medium rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">RS</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Rajesh Sharma</h4>
                  <p className="text-sm">CEO, Innovate Technologies</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
              <div className="text-accent mb-4">
                <QuoteIcon className="h-8 w-8" />
              </div>
              <p className="mb-6 italic">
                "The team at PH&A provides exceptional service. Their proactive approach to tax planning has helped us optimize our financial strategy and focus on growing our business."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-neutral-medium rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">AP</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Anita Patel</h4>
                  <p className="text-sm">Director, Horizon Retail</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
              <div className="text-accent mb-4">
                <QuoteIcon className="h-8 w-8" />
              </div>
              <p className="mb-6 italic">
                "Working with Prachi and Harsh has been a game-changer for our startup. Their guidance on financial matters and compliance has been invaluable as we scale our operations."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-neutral-medium rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">VK</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Vikram Khanna</h4>
                  <p className="text-sm">Founder, EcoSolutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-[#F4F7FA]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-neutral-dark">
              Have questions or need assistance? Contact our team for a consultation today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">Contact Information</h3>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Office Address</h4>
                  <p className="text-neutral-dark">405 Prestige Tower, Near Bageshree society<br />Anjar, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Phone</h4>
                  <p className="text-neutral-dark">+91 11 4567 8901<br />+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Email</h4>
                  <p className="text-neutral-dark">info@phassociates.com<br />contact@phassociates.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Working Hours</h4>
                  <p className="text-neutral-dark">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-2">Subject *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-2">Message *</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1 mr-3"
                    required 
                  />
                  <label htmlFor="privacy" className="text-sm text-neutral-dark">
                    I agree to the privacy policy and terms of service
                  </label>
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-primary text-white hover:bg-secondary py-6 h-auto">
                    Send Message
                  </Button>
                </Link>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">Our Location</h3>
              <p className="text-neutral-dark">405 Prestige Tower, Near Bageshree society, Anjar, Gujarat</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
              <iframe 
                src="https://www.google.com/maps/d/embed?mid=15J0rNLHAyslByUC5ZhLRO14zBdv2Akk&ehbc=2E312F&noprof=1" 
                width="100%" 
                height="350"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prachi Harsh & Associates Office Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
