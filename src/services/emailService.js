// src/services/emailService.js

import emailjs from '@emailjs/browser';
import emailConfig, { validateEmailConfig } from '../config/emailConfig';
import { formatReservationEmail } from '../utils/emailTemplate';

/**
 * Send reservation confirmation email using EmailJS
 */
export const sendReservationEmailJS = async (reservationData) => {
  // Log configuration for debugging
  console.log('EmailJS Configuration:', {
    serviceId: emailConfig.serviceId ? '✓ Present' : '✗ Missing',
    templateId: emailConfig.templateId ? '✓ Present' : '✗ Missing',
    publicKey: emailConfig.publicKey ? '✓ Present' : '✗ Missing'
  });

  // Validate configuration
  if (!validateEmailConfig()) {
    throw new Error('EmailJS configuration is missing. Please check your .env file.');
  }

  const templateParams = formatReservationEmail(reservationData);
  
  console.log('Sending email with params:', templateParams);

  try {
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams,
      emailConfig.publicKey
    );

    console.log('✅ Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    console.error('Error details:', {
      text: error.text,
      status: error.status,
      message: error.message
    });
    throw new Error(`Failed to send confirmation email: ${error.text || error.message}`);
  }
};

/**
 * Main email sending function
 */
export const sendReservationEmail = async (reservationData) => {
  return sendReservationEmailJS(reservationData);
};