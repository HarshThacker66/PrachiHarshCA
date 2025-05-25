import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="pt-24 md:pt-32">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">About Our Firm</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-neutral-dark">
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">Our Vision & Mission</h2>
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

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">Our History</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Founded on Excellence</h3>
              <p className="text-neutral-dark mb-6">
                Established in 2008, Prachi Harsh & Associates began as a small practice focused on providing personalized accounting services to local businesses. The firm was founded by CA Prachi Maheshwari with a vision to offer accessible, high-quality financial expertise to growing businesses.
              </p>
              <p className="text-neutral-dark">
                Within three years, CA Harsh Thacker joined as a partner, bringing specialized expertise in auditing and corporate compliance. Together, they expanded the firm's service offerings and client base, establishing a reputation for excellence and reliability.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Growth & Evolution</h3>
              <p className="text-neutral-dark mb-6">
                Over the years, our firm has grown steadily, expanding our team of professionals and broadening our expertise across various financial domains. We have adapted to changing regulations, embraced technological advancements, and continuously refined our services to meet the evolving needs of our clients.
              </p>
              <p className="text-neutral-dark">
                Today, Prachi Harsh & Associates is recognized as a leading chartered accountancy firm in the region, serving clients across diverse industries. Our growth story is a testament to our commitment to excellence, integrity, and client satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Counter Section */}
        <div className="counter-section py-16 rounded-xl text-white mb-20">
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

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">Why Choose Us</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Expert Team</h3>
              <p className="text-neutral-dark">
                Our team consists of qualified professionals with extensive experience across various financial domains. We continuously update our knowledge to provide you with the best guidance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Timely Service</h3>
              <p className="text-neutral-dark">
                We understand the importance of meeting deadlines in financial matters. Our team is committed to delivering timely, accurate services to ensure your business operations run smoothly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Tailored Solutions</h3>
              <p className="text-neutral-dark">
                We recognize that each business is unique, with specific needs and challenges. Our approach is to provide customized solutions that address your specific requirements.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">Our Approach</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">Understand</h3>
                <p className="text-sm text-neutral-dark">We begin by thoroughly understanding your business, goals, and challenges.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">Analyze</h3>
                <p className="text-sm text-neutral-dark">Our experts analyze your financial situation and identify opportunities and areas for improvement.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">Strategize</h3>
                <p className="text-sm text-neutral-dark">We develop a customized strategy tailored to your specific needs and objectives.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">Implement</h3>
                <p className="text-sm text-neutral-dark">We execute the strategy with precision, providing ongoing support and guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
