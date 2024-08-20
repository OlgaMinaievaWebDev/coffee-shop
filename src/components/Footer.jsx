import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex items-center justify-between px-4 w-full md:px-8 h-16 bg-darkBrown text-white">
      <h1 className="text-l font-bold font-heading text-orange">ROASTERS</h1>
      <div className="flex gap-4">
        <FaFacebook /> <FaInstagram /> <FaTwitter />
      </div>
      <p className="text-xs md:text-sm"> copyright © 2024</p>
    </footer>
  );
}

export default Footer;
