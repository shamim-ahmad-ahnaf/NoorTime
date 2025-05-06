import React from 'react';
import { useLanguage } from '../Context/LanguageContext';

const Settings = () => {
  const { language, changeLanguage } = useLanguage();

  const handleChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-24 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold text-green-600 mb-6">
          {language === 'bn' ? 'সেটিংস' : 'Settings'}
        </h2>

        {/* Language Selector */}
        <div className="mb-6">
          <label htmlFor="language" className="block text-lg font-semibold mb-2">
            {language === 'bn' ? 'ভাষা নির্বাচন করুন:' : 'Select Language:'}
          </label>
          <select
            id="language"
            value={language}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 text-lg"
          >
            <option value="bn">বাংলা</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Placeholder for more settings */}
        <div>
          <p className="text-gray-500">
            {language === 'bn'
              ? 'আরো সেটিংস শীঘ্রই আসছে...'
              : 'More settings coming soon...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
