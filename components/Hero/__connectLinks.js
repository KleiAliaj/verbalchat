import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

export const connectionLinks = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/verbal-chat",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61554385696724",
    icon: <FaFacebook />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/verbal.chat/",
    icon: <FiInstagram />,
  },

  {
    name: "Mail",
    // link: "mailto:ayushsoni1010.work@gmail.com",
    icon: <MdEmail />,
  },
];
