import { LocateIcon, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
    return (
      <div className="bg-black text-gray-300 py-10 px-6 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section */}
          <div className=" flex flex-col space-y-6">
            <Image src="/images/logo.png" alt="logo" width={50} height={50} loading="lazy"/>
            <p className="text-sm leading-relaxed">
            Ifelodun Local Government Council is a progressive and community-focused administrative body located in Lagos, Nigeria. Dedicated to sustainable development and the well-being of our residents, we strive to create an environment where businesses thrive, infrastructure flourishes, and every citizen enjoys an improved quality of life.
            </p>
          </div>
  
          {/* Web Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Web Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
            <Mail color='green'/> <a href="mailto:info@ibejulekki.lg.gov.ng" className="hover:text-white">info@ibejulekki.lg.gov.ng</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone color="green"/> 08079792040, 09167148716
              </li>
              <li>
                <span className="font-semibold text-white">The Council Secretariat</span>
                <p className="text-sm mt-1">
                <MapPin /> Klm 47, Lekki-Epe Expressway, Igando-Oloja, Ibeju-Lekki, Lagos State.
                </p>
              </li>
            </ul>
          </div>
  
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-green-400">Home</a></li>
              <li><a href="#">About Ibeju-Lekki Local Government</a></li>
              <li><a href="#">Council Personnels</a></li>
              <li><a href="#">Projects & News</a></li>
              <li><a href="#">Job Opportunity Desk</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
  
          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">🌐</a>
              <a href="#" className="text-gray-400 hover:text-white">🐦</a>
              <a href="#" className="text-gray-400 hover:text-white">📸</a>
              <a href="#" className="text-gray-400 hover:text-white">🎵</a>
            </div>
            <p className="text-sm mt-6">
              © 2024 Created by <a href="#" className="text-blue-400">Nihitem Solutions</a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  


