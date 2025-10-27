import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 flex flex-col items-center justify-center py-12 px-6 md:px-16 lg:px-32">
      {/* Logo */}
      <div className="mb-8 flex flex-col items-center">
        <img
          src="src/assets/logo.png" // replace with your logo path
          alt="The Tiffin Box"
          className="h-12 mb-4"
        />
        <h2 className="text-lg tracking-[0.3em] text-center uppercase">
          Subscribe to our Newsletter
        </h2>
      </div>

      {/* Subscribe Input */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-12">
        <input
          type="email"
          placeholder="Email Address"
          className="flex-1 border-b border-gray-500 bg-transparent px-2 py-3 text-sm text-gray-200 focus:outline-none focus:border-yellow-400"
        />
        <button className="border border-yellow-400 px-6 py-3 text-sm text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
          Subscribe →
        </button>
      </div>

      {/* Contact Info */}
      <div className="text-center mb-8">
        <h3 className="uppercase tracking-[0.3em] text-sm mb-2">Contact Us</h3>
        <p className="text-xs text-gray-400">0151 245 1500</p>
        <p className="text-xs text-gray-400">info@tiffinbox.co.uk</p>
        <p className="text-xs text-gray-400">Allerton Rd, Liverpool L25 7RE</p>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500 uppercase tracking-widest border-t border-gray-800 pt-6">
        <a href="#" className="hover:text-yellow-400">Menu</a> |
        <a href="#" className="hover:text-yellow-400">Order Online</a> |
        <a href="#" className="hover:text-yellow-400">Book a Table</a> |
        <a href="#" className="hover:text-yellow-400">About Us</a> |
        <a href="#" className="hover:text-yellow-400">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
