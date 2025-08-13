import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const LanguageSelector = ({ position = "navbar" }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "kannada", name: "Kannada", flag: "🇮🇳" },
    { code: "hn", name: "Hindi", flag: "🇮🇳" },
    { code: "bengali", name: "Bengali", flag: "🇧🇩" },
    { code: "marathi", name: "Marathi", flag: "🇮🇳" },
    { code: "telugu", name: "Telugu", flag: "🇮🇳" },
  ];

  const changeLanguage = (langCode, langName) => {
    i18n.changeLanguage(langCode);
    setSelectedLanguage(langName);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.modern-language-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`modern-language-selector ${position}`}>
      <div className="modern-language-button" onClick={toggleDropdown}>
        <span className="globe-icon">🌐</span>
        <span className="language-text">{selectedLanguage}</span>
        <span className={`arrow-icon ${isOpen ? "open" : ""}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
            <path d="M6 8L0 0h12L6 8z"/>
          </svg>
        </span>
      </div>
      
      {isOpen && (
        <div className="modern-language-dropdown">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="modern-language-option"
              onClick={() => changeLanguage(lang.code, lang.name)}
            >
              <span className="flag-emoji">{lang.flag}</span>
              <span className="language-name">{lang.name}</span>
              {selectedLanguage === lang.name && (
                <span className="check-icon">✓</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
