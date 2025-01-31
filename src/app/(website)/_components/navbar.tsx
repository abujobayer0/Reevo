import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingPageNavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 bg-[#0F0F13]/80">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex w-full justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-x-3 group">
            <Image
              src="/logo.svg"
              alt="logo"
              width={40}
              height={40}
              className="group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-2xl font-semibold bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] bg-clip-text text-transparent">
              Reevo
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden gap-x-8 items-center lg:flex">
            <Link
              href="/"
              className="relative text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#8c52ff] after:transition-all hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="relative text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#8c52ff] after:transition-all hover:after:w-full"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="relative text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#8c52ff] after:transition-all hover:after:w-full"
            >
              How it Works
            </Link>
            <Link
              href="#testimonials"
              className="relative text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#8c52ff] after:transition-all hover:after:w-full"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="relative text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#8c52ff] after:transition-all hover:after:w-full"
            >
              Pricing
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-x-4">
            <Link
              href="/auth/sign-in"
              className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors duration-200"
            >
              Sign in
            </Link>
            <Link
              href="/auth/sign-up"
              className="px-5 py-2.5 bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] rounded-xl text-sm font-medium text-white hover:shadow-[0_0_20px_rgba(94,23,235,0.3)] transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingPageNavBar;
