import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add shadow to header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location === path ? "text-secondary" : "text-neutral-dark";
  };

  return (
    <header className={`fixed w-full bg-white z-50 transition-shadow ${scrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <a className="flex items-center">
              <div className="text-primary font-heading font-bold text-2xl">
                <span className="text-primary">PH</span>
                <span className="text-accent">&</span>
                <span className="text-secondary">A</span>
              </div>
              <div className="ml-2 hidden md:block">
                <p className="text-sm font-semibold">Prachi Harsh & Associates</p>
                <p className="text-xs">Chartered Accountants</p>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className={`font-medium hover:text-secondary transition-colors ${location === '/' ? 'text-primary' : 'text-neutral-dark'}`}>Home</a>
            </Link>
            <Link href="/about">
              <a className={`font-medium hover:text-secondary transition-colors ${isActive('/about')}`}>About</a>
            </Link>
            <Link href="/services">
              <a className={`font-medium hover:text-secondary transition-colors ${isActive('/services')}`}>Services</a>
            </Link>
            <Link href="/team">
              <a className={`font-medium hover:text-secondary transition-colors ${isActive('/team')}`}>Team</a>
            </Link>
            <Link href="/contact">
              <a>
                <Button className="bg-primary text-white hover:bg-secondary">Contact Us</Button>
              </a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" onClick={toggleMenu} size="icon" className="md:hidden text-primary focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
            <Link href="/">
              <a className={`font-medium py-2 hover:text-secondary transition-colors ${location === '/' ? 'text-primary' : 'text-neutral-dark'}`}>Home</a>
            </Link>
            <Link href="/about">
              <a className={`font-medium py-2 hover:text-secondary transition-colors ${isActive('/about')}`}>About</a>
            </Link>
            <Link href="/services">
              <a className={`font-medium py-2 hover:text-secondary transition-colors ${isActive('/services')}`}>Services</a>
            </Link>
            <Link href="/team">
              <a className={`font-medium py-2 hover:text-secondary transition-colors ${isActive('/team')}`}>Team</a>
            </Link>
            <Link href="/contact">
              <a className="py-2">
                <Button className="bg-primary text-white hover:bg-secondary w-full">Contact Us</Button>
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
