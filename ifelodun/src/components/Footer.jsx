import {
  Facebook,
  Instagram,
  LocateIcon,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";



const Footer = () => {
  return (
    <div className="bg-green-700 text-gray-300 py-12 px-4 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Section */}
        <div className="flex flex-col space-y-4">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={40}
            height={40}
            loading="lazy"
          />
          <p className="text-sm leading-snug">
            Ifelodun Local Government Council is a progressive and
            community-focused administrative body located in Lagos, Nigeria.
          </p>
        </div>

        {/* Web Links */}
        <div>
          <h3 className="text-sm font-semibold text-white">Web Links</h3>
          <ul className="mt-3 space-y-1 text-xs">
            <li className="flex items-center gap-2">
              <Mail color="white" size={20}/>{" "}
              <a
                href="mailto:info@ibejulekki.lg.gov.ng"
                className="hover:text-white font-medium text-sm"
              >
                info@ifelodunlcda.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Phone color="white" size={20} /> 08079792040, 09167148716
            </li>
            <li>
              <span className="font-semibold text-white text-sm">The Council Secretariat</span>
              <p className=" mt-1 text-sm">3 Dispensary Street, Amukoko, Lagos</p>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-sm font-semibold text-white">About Us</h3>
          <ul className="mt-3 space-y-1 text-sm hover:underline">
            <li><a href="/" className="">Home</a></li>
            <li><a href="/about">About Ifelodun LCDA</a></li>
            <li><a href="/contact">Job Opportunity Desk</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-sm  font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-3 mt-3 text-sm">
            <a href="https://www.facebook.com/officeofthechairmanifelodunlcda" className="text-gray-400 hover:text-white">
              <Facebook size={20} color="white" />
            </a>
            <a href="https://www.instagram.com/explore/locations/409183292448081/ifelodun-lcda" className="text-gray-400 hover:text-white">
              <Instagram size={20} color="white" />
            </a>
          </div>
          <p className="text-sm mt-4">
            © {new Date().getFullYear()} Created by{" "}
            <a href="#" className="text-blue-500">Ifelocdun Local Government Development Area </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

