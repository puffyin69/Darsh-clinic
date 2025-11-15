import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import UnifiedDentalServices from "../components/UnifiedDentalServices";
import TechnologySection from "../components/TechnologySection";
import TrustSection from "../components/TrustSection";
import TimelineSection from "../components/TimelineSection";
import BeforeAfterTestimonial from "../components/BeforeAfterTestimonial";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SmoothScroll from "../components/ui/SmoothScroll";
import { ReactLenis } from "lenis/react";
import StaggeredFAQSection from "../components/ruixen/staggered-faq-section";
import Image from "next/image";

// SEO metadata for homepage
export const metadata = {
  title: "Best Dental Clinic in Vadodara - Darsh Dental Clinic | 3 Locations",
  description:
    "Expert dental care at Darsh Dental Clinic with 15+ years experience. Advanced dentistry, painless treatments & comprehensive oral healthcare across Karelibaug, VIP Road & Ajwa Road, Vadodara.",
  keywords:
    "darsh dental clinic, best dentist vadodara, dental care vadodara, karelibaug dentist, vip road dental clinic, ajwa road dentist",
  openGraph: {
    title: "Darsh Dental Clinic - Premier Dental Care in Vadodara",
    description:
      "15+ years of expert dental care across 3 convenient locations in Vadodara. Advanced technology, painless treatments, emergency care available 24/7.",
    images: ["/og-darsh-clinic-homepage.jpg"],
  },
};

export default function Home() {
  const heroProducts = [
    {
      title: "Digital Smile Design",
      link: "/services",
      thumbnail: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200689/jonathan-borba-W9YEY6G8LVM-unsplash_co5oj5.jpg",
    },
    {
      title: "Invisalign Clear Aligners",
      link: "/services",
      thumbnail: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200688/atikah-akhtar-XJptUS8nbhs-unsplash_cr0gs4.jpg",
    },
    {
      title: "Teeth Whitening",
      link: "/services",
      thumbnail: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200687/amr-taha-uvnMQXF56kQ-unsplash_vvkhid.jpg",
    },
    {
      title: "Dental Implants",
      link: "/services",
      thumbnail: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200690/ozkan-guner-GxctDhxhbxM-unsplash_ajpxai.jpg",
    },
    {
      title: "Root Canal Therapy",
      link: "/services",
      thumbnail: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200746/dental-clinic-interior_nsy34s.jpg",
    },
    {
      title: "Periodontal Care",
      link: "/services",
      thumbnail: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200752/dental-equipment_f5wmlm.jpg",
    },
    {
      title: "Cosmetic Dentistry",
      link: "/services",
      thumbnail: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200746/cosmetic-dentistry_heezog.jpg",
    },
    {
      title: "Oral Surgery",
      link: "/services",
      thumbnail: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200623/hero1_r1cyop.jpg",
    },
    {
      title: "Pediatric Dentistry",
      link: "/services",
      thumbnail: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200766/hero5_xw6fmw.jpg",
    },
    {
      title: "Emergency Care",
      link: "/services",
      thumbnail: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200623/hero2_wlp9p0.jpg",
    },
    {
      title: "Preventive Care",
      link: "/services",
      thumbnail: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200626/hero3_ffwkt3.jpg",
    },
    {
      title: "Advanced Dental Care",
      link: "/services",
      thumbnail: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200624/hero4_jcnfea.jpg",
    },
    {
      title: "Comfort & Care",
      link: "/services",
      thumbnail: "/waiting-room.jpg",
    },
    {
      title: "Modern Dentistry",
      link: "/services",
      thumbnail: "/dental-treatment-room.jpg",
    },
    {
      title: "Expert Treatment",
      link: "/services",
      thumbnail: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200638/ozkan-guner-NUPZa4bbi_0-unsplash_dv6imq.jpg",
    }
  ];

  const faqItems = [
    {
      id: "treatment-pain",
      question: "Are dental treatments painful?",
      answer:
        "Modern dentistry has advanced significantly in pain management. We use the latest anesthetic techniques, sedation options, and gentle procedures to ensure your comfort. Most patients experience minimal to no discomfort during treatment. We also offer various sedation options including nitrous oxide and oral sedation for anxious patients.",
    },
    {
      id: "appointment-booking",
      question: "How do I book an appointment?",
      answer:
        "You can easily book an appointment by calling us at +91 99254 65919, sending a WhatsApp message to the same number, or visiting our clinic directly at Chitra Complex, 302, Muktanand Circle, Karelibagh, Vadodara. We also accept walk-in appointments based on availability.",
    },
    {
      id: "insurance-payment",
      question:
        "Do you accept insurance and what payment methods are available?",
      answer:
        "We accept various payment methods including cash, credit/debit cards, and UPI payments for your convenience. While we don&apos;t directly process insurance, we can provide detailed receipts and treatment documentation that you can submit to your insurance provider for reimbursement.",
    },
    {
      id: "emergency-services",
      question: "Do you provide emergency dental services?",
      answer:
        "Yes, we provide 24/7 emergency dental services for urgent situations like severe tooth pain, dental trauma, or broken teeth. Call us immediately at +91 99254 65919 for emergency situations. We understand dental emergencies can&apos;t wait and we&apos;re here to help anytime.",
    },
    {
      id: "treatment-duration",
      question: "How long do different treatments take?",
      answer:
        "Treatment duration varies based on complexity. Routine cleanings take 30-45 minutes, fillings 30-60 minutes, root canals 1-2 hours, and implants may require multiple visits over 3-6 months. During your consultation, we&apos;ll provide a detailed timeline specific to your treatment plan.",
    },
    {
      id: "aftercare-instructions",
      question:
        "What should I expect after treatment and how do I care for my teeth?",
      answer:
        "Post-treatment care varies by procedure. We provide detailed aftercare instructions including dietary restrictions, oral hygiene guidelines, and follow-up schedules. Generally, maintain good oral hygiene, avoid hard foods initially, and attend all follow-up appointments. We&apos;re always available for post-treatment questions or concerns.",
    },
    {
      id: "technology-safety",
      question: "What advanced technology do you use and is it safe?",
      answer:
        "We use state-of-the-art digital X-rays (90% less radiation), 3D imaging, intraoral cameras, and laser dentistry equipment. All our technology is FDA-approved and regularly maintained for optimal safety and precision. Our digital systems provide better diagnostics while minimizing patient exposure to radiation.",
    },
    {
      id: "children-services",
      question:
        "Do you treat children and what pediatric services do you offer?",
      answer:
        "Yes, we welcome patients of all ages! Our pediatric services include routine cleanings, fluoride treatments, sealants, cavity treatments, and orthodontic consultations. We create a friendly, comfortable environment for children and use child-friendly techniques to ensure positive dental experiences from an early age.",
    },
  ];

  return (
    <ReactLenis root>
      <div className="min-h-screen w-full relative">
        {/* Dashed Grid */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
            WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        <SmoothScroll>
          <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <HeroSection />

            {/* Wave Divider */}
            <div className="relative w-full bg-gray-50">
              <div className="absolute top-0 left-0 w-full h-auto transform -scale-y-100">
                <Image
                  src="/wavesNegative.svg"
                  alt="Wave divider"
                  width={1200}
                  height={60}
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                  priority
                />
              </div>
            </div>

            {/* Unified Bento Grid Services Section */}
            <div className="relative bg-gray-50">
              <UnifiedDentalServices />
              
              {/* Wave Divider at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-auto">
                <Image
                  src="/wavesNegative.svg"
                  alt="Wave divider"
                  width={1200}
                  height={60}
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                />
              </div>
            </div>

            {/* Technology Section */}
            <div className="relative bg-white">
              <TechnologySection />
              
              {/* Wave Divider at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-auto">
                <Image
                  src="/wavesNegative.svg"
                  alt="Wave divider"
                  width={1200}
                  height={60}
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                />
              </div>
            </div>

            {/* Before & After Testimonials Section */}
            <div className="relative bg-gray-50">
              <div className="absolute top-0 left-0 w-full h-auto transform -scale-y-100">
                <Image
                  src="/wavesNegative.svg"
                  alt="Wave divider"
                  width={1200}
                  height={60}
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                />
              </div>
              
              <BeforeAfterTestimonial />
            </div>

            {/* Trust Section */}
            <div className="relative bg-gray-50">
              <div className="absolute top-0 left-0 w-full h-auto transform -scale-y-100">
                <Image
                  src="/wavesNegative.svg"
                  alt="Wave divider"
                  width={1200}
                  height={60}
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                />
              </div>
              
              <TrustSection />

              {/* Wave Divider at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-auto">
                <Image
                  src="/wavesNegative.svg"
                  alt="Wave divider"
                  width={1200}
                  height={60}
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                />
              </div>
            </div>

            {/* Timeline Section - Replaces Contact Section */}
            <div className="relative bg-white">
              <div className="absolute top-0 left-0 w-full h-auto transform -scale-y-100">
                <Image
                  src="/wavesNegative.svg"
                  alt="Wave divider"
                  width={1200}
                  height={60}
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                />
              </div>
              
              <TimelineSection />

              {/* Wave Divider at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-auto">
                <Image
                  src="/wavesNegative.svg"
                  alt="Wave divider"
                  width={1200}
                  height={60}
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </div>
        </SmoothScroll>
      </div>

      {/* FAQ Section */}
      <div className="relative bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30">
        <div className="absolute top-0 left-0 w-full h-auto transform -scale-y-100">
          <Image
            src="/wavesNegative.svg"
            alt="Wave divider"
            width={1200}
            height={60}
            className="w-full h-auto"
            style={{ display: 'block' }}
          />
        </div>

        <StaggeredFAQSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our dental services and treatments"
          supportText="Can&apos;t find what you&apos;re looking for? Contact our"
          supportLink="tel:+919925465919"
          supportLinkText="dental care team"
          faqItems={faqItems}
          className=""
        />

        {/* Wave Divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-auto">
          <Image
            src="/wavesNegative.svg"
            alt="Wave divider"
            width={1200}
            height={60}
            className="w-full h-auto"
            style={{ display: 'block' }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="relative bg-gray-900">
        <div className="absolute top-0 left-0 w-full h-auto transform -scale-y-100">
          <Image
            src="/wavesNegative.svg"
            alt="Wave divider"
            width={1200}
            height={60}
            className="w-full h-auto"
            style={{ display: 'block' }}
          />
        </div>
        
        <Footer />
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </ReactLenis>
  );
}
