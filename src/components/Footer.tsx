import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Download } from 'lucide-react';

export default function Footer() {
  const categories = [
    'Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Thriller',
    'Sci-Fi', 'Documentary', 'Animation', 'Family', 'Music Videos',
    'Short Films', 'Web Series', 'Live TV'
  ];

  const quickLinks = [
    'About Us', 'Careers', 'Advertise with Us', 'Contact Us',
    'FAQ', 'Content Complaints', 'Terms of Service', 'Privacy Policy',
    'Compliance Report'
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Youtube, name: 'Youtube', url: '#' }
  ];

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Download Our App</h3>
            <p className="text-gray-400 mb-4">
              Install our mobile app for the best experience. Stream your favorite content
              anytime, anywhere.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="flex-1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-10"
                />
              </a>
              <a href="#" className="flex-1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">Scan QR Code</span>
                <Download className="h-5 w-5 text-gray-400" />
              </div>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/app"
                alt="App QR Code"
                className="w-32 h-32 mx-auto"
              />
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Company</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Connect With Us</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3" />
                <span>support@videohub.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3" />
                <span>123 Stream Street, Digital City, DC 12345</span>
              </div>
            </div>
            <h4 className="text-white font-semibold mb-3">Follow us for updates</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 VideoHub. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Content Complaints
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}