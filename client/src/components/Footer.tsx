import { Link } from "wouter";
import { 
  FacebookIcon, 
  LinkedinIcon, 
  TwitterIcon, 
  InstagramIcon, 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon, 
  ClockIcon 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-white font-heading font-bold text-2xl mb-4">
              <span className="text-white">PH</span>
              <span className="text-accent">&</span>
              <span className="text-white">A</span>
            </div>
            <p className="mb-6">
              Prachi Harsh & Associates is a leading chartered accountancy firm providing comprehensive financial services to businesses across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="text-white hover:text-accent">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" className="text-white hover:text-accent">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="text-white hover:text-accent">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="hover:text-accent transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-accent transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-accent transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a className="hover:text-accent transition-colors">Our Team</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-accent transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <a className="hover:text-accent transition-colors">GST Compliance</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-accent transition-colors">Auditing Services</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-accent transition-colors">Taxation Services</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-accent transition-colors">Financial Advisory</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-accent transition-colors">Bookkeeping & Accounting</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-accent transition-colors">Corporate Compliance</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                <span>405 Prestige Tower, Near Bageshree society<br />Anjar, Gujarat, India</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="mr-3 h-5 w-5 flex-shrink-0" />
                <span>+91 11 4567 8901</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="mr-3 h-5 w-5 flex-shrink-0" />
                <span>info@phassociates.com</span>
              </li>
              <li className="flex items-center">
                <ClockIcon className="mr-3 h-5 w-5 flex-shrink-0" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Prachi Harsh & Associates. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors mr-6">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
