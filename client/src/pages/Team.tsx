import { 
  GraduationCap, 
  Briefcase, 
  Linkedin, 
  Mail 
} from "lucide-react";

const Team = () => {
  const partners = [
    {
      id: 1,
      name: "CA Prachi Maheshwari",
      position: "Senior Partner",
      bio: "With over 15 years of experience in taxation and auditing, Prachi leads the firm with expertise in GST compliance and corporate taxation.",
      qualifications: ["Chartered Accountant, ICAI", "GST Practitioner"],
      image: "/ca-prachi.jpeg"
    },
    {
      id: 2,
      name: "CA Harsh Thacker",
      position: "Managing Partner",
      bio: "Harsh specializes in financial advisory services and audit compliance with 12 years of experience across various industries.",
      qualifications: ["Chartered Accountant, ICAI", "Certified Internal Auditor"],
      image: "/ca-harsh.jpeg"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Neha Gupta",
      position: "Senior Associate",
      bio: "Specializes in GST compliance and corporate taxation with 8 years of experience.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 2,
      name: "Amit Verma",
      position: "Audit Manager",
      bio: "Leads the audit team with expertise in statutory and internal audits.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 3,
      name: "Priya Sharma",
      position: "Tax Consultant",
      bio: "Expert in income tax planning and compliance for individuals and businesses.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 4,
      name: "Rajiv Kapoor",
      position: "Financial Advisor",
      bio: "Specializes in financial planning, analysis, and business advisory services.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "GST Specialist",
      bio: "Handles complex GST matters and ensures compliance across various sectors.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 6,
      name: "Anjali Mehta",
      position: "Audit Associate",
      bio: "Focuses on statutory audits and internal control assessment for clients.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 7,
      name: "Sanjay Desai",
      position: "Bookkeeping Manager",
      bio: "Oversees accounting and bookkeeping services for business clients.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 8,
      name: "Meera Joshi",
      position: "Compliance Specialist",
      bio: "Ensures corporate compliance and handles regulatory filings for clients.",
      image: "https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    }
  ];

  return (
    <div className="pt-24 md:pt-32">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Meet Our Team</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-neutral-dark">
            Our team of experienced professionals is dedicated to providing exceptional service and expert financial guidance.
          </p>
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-primary mb-8 text-center">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 bg-[#E1E7ED] overflow-hidden">
                    {partner.image ? (
                      <img 
                        src={partner.image} 
                        alt={`${partner.name} - ${partner.position}`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center p-8">
                        <div className="w-48 h-48 rounded-full bg-[#F4F7FA] flex items-center justify-center">
                          <span className="text-5xl text-primary font-bold">
                            {partner.name.split(' ').map(name => name[0]).join('')}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">{partner.name}</h3>
                    <p className="text-accent font-medium mb-4">{partner.position}</p>
                    <p className="mb-4">{partner.bio}</p>
                    <div className="mb-4">
                      {partner.qualifications.map((qualification, index) => (
                        <div key={index} className="flex items-center mb-1">
                          {index === 0 ? (
                            <GraduationCap className="text-secondary mr-2 h-4 w-4" />
                          ) : (
                            <Briefcase className="text-secondary mr-2 h-4 w-4" />
                          )}
                          <span>{qualification}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a href="#" className="text-neutral-dark hover:text-secondary">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-neutral-dark hover:text-secondary">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <h2 className="font-heading text-2xl font-bold text-primary mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={member.image} 
                alt={`${member.name} - ${member.position}`} 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.position}</p>
                <p className="text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-dark hover:text-secondary">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-neutral-dark hover:text-secondary">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Work Culture Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">Our Work Culture</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-neutral-dark mb-8">
              At Prachi Harsh & Associates, we foster a collaborative, innovative, and growth-oriented work environment where our team members can thrive professionally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Professional Development</h3>
              <p className="text-neutral-dark">
                We invest in our team's growth through continuous learning opportunities, professional certifications, and mentorship programs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Collaborative Environment</h3>
              <p className="text-neutral-dark">
                We foster teamwork and knowledge sharing, encouraging cross-functional collaboration to deliver comprehensive solutions to our clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Work-Life Balance</h3>
              <p className="text-neutral-dark">
                We believe in maintaining a healthy balance between professional responsibilities and personal well-being to ensure sustainable excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
