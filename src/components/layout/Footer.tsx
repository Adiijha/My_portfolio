import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-12">
      {/* Social icons, visible on mobile and desktop */}
      <div className="flex justify-center items-center gap-6 mb-8 sm:hidden font-pop">
        <a
          href="https://github.com/adiijha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://linkedin.com/in/adiikj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://instagram.com/adii_jha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://twitter.com/adii_kj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>

      {/* Footer text and contact info */}
      <div className="container mx-auto px-6 text-center text-sm md:text-lg">
        <p>
          <span>Email: </span>
          <a
            href="mailto:adityakumarjha.276@gmail.com"
            className="hover:underline text-gray-400 hover:text-white text-lg transition duration-300"
          >
            adityakumarjha.276@gmail.com
          </a>
        </p>
        <p className="mt-4 text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Made with ❤️ Adii.
        </p>
      </div>
    </footer>
  );
}
