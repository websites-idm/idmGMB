import { siteConfig } from "@/config/site";

export function getWhatsAppLink() {
  const message = "Hello IDM Smart Tech, I have completed the ₹299 payment for the 3-Day LIVE GMB Mastery Workshop. I am sharing my payment screenshot for verification.";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

export function openRazorpay() {
  window.open("https://rzp.io/rzp/kIA0I6Xo", "_blank");
}
