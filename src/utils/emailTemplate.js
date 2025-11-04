// src/utils/emailTemplate.js

export const formatReservationEmail = (reservationData) => {
  const formattedDate = new Date(reservationData.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return {
    to_email: reservationData.email,
    to_name: reservationData.name,
    reservation_date: formattedDate,
    reservation_time: reservationData.time,
    guests: reservationData.guests,
    phone: reservationData.phone,
    special_requests: reservationData.requests || 'None',
    restaurant_name: 'Foodify Restaurant',
    restaurant_location: 'Kanpur, Uttar Pradesh, India',
    restaurant_email: 'info@foodify.com',
    restaurant_phone: '+91 (555) 000-0000'
  };
};

export const getConfirmationMessage = (reservationData) => {
  const formattedDate = new Date(reservationData.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `✅ Reservation Confirmed!

Thank you ${reservationData.name}!

A confirmation email has been sent to:
${reservationData.email}

Reservation Details:
📅 ${formattedDate}
🕐 ${reservationData.time}
👥 ${reservationData.guests} ${reservationData.guests === 1 ? 'guest' : 'guests'}

We look forward to serving you!`;
};