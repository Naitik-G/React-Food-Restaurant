// src/config/emailConfig.js - TEMPORARY FOR TESTING

const emailConfig = {
  // Option 1: Use environment variables (preferred)
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  
  // Option 2: Hardcode for testing (REMOVE AFTER TESTING)
  // serviceId: 'service_YOUR_ID',
  // templateId: 'template_YOUR_ID',
  // publicKey: 'YOUR_PUBLIC_KEY',
  
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000'
};

// Validate configuration
export const validateEmailConfig = () => {
  console.log('Validating Email Config...');
  console.log('Service ID:', emailConfig.serviceId);
  console.log('Template ID:', emailConfig.templateId);
  console.log('Public Key:', emailConfig.publicKey);
  
  const missingKeys = [];
  
  if (!emailConfig.serviceId) missingKeys.push('VITE_EMAILJS_SERVICE_ID');
  if (!emailConfig.templateId) missingKeys.push('VITE_EMAILJS_TEMPLATE_ID');
  if (!emailConfig.publicKey) missingKeys.push('VITE_EMAILJS_PUBLIC_KEY');
  
  if (missingKeys.length > 0) {
    console.error('❌ Missing EmailJS configuration keys:', missingKeys);
    return false;
  }
  
  console.log('✅ All configuration keys present');
  return true;
};

export default emailConfig;