import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const LanguageSelector = ({ position = "navbar" }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hn", name: "Hindi", flag: "🇮🇳" },
    { code: "bengali", name: "Bengali", flag: "🇧🇩" },
    { code: "marathi", name: "Marathi", flag: "🇮🇳" },
    { code: "telugu", name: "Telugu", flag: "🇮🇳" },
    { code: "kannada", name: "Kannada", flag: "🇮🇳" },
  ];

  const changeLanguage = (langCode, langName) => {
    i18n.changeLanguage(langCode);
    setSelectedLanguage(langName);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`language-selector ${position}`}>
      <div className="language-button" onClick={toggleDropdown}>
        <span className="globe-icon">🌐</span>
        <span className="language-text">{selectedLanguage}</span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="language-option"
              onClick={() => changeLanguage(lang.code, lang.name)}
            >
              <span className="flag">{lang.flag}</span>
              <span className="name">{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
