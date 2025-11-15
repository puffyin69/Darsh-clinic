"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import WhatsAppButton from "../../../components/WhatsAppButton";
import BeforeAfterTestimonial from "../../../components/BeforeAfterTestimonial";
import { CardSpotlight } from "../../../components/ui/card-spotlight";
import CountAnimation from "../../../components/count-animation";
import TextReveal from "../../../components/forgeui/text-reveal";
import DoctorTimeline from "../../../components/DoctorTimeline";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Calendar,
  AlertCircle,
  CheckCircle,
  Award,
  Users,
  Heart,
  Stethoscope,
  GraduationCap,
  Building,
  Activity,
  ArrowLeft,
  Trophy,
  Clock3,
  PhoneCall,
  MessageCircle,
  User,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DoctorPage = ({ params }) => {
  const resolvedParams = React.use(params);
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  const heroRef = useRef(null);
  const profileRef = useRef(null);
  const expertiseRef = useRef([]);
  const achievementsRef = useRef([]);
  const appointmentRef = useRef(null);

  // Custom micro-interaction CSS
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(1deg); }
        66% { transform: translateY(-5px) rotate(-1deg); }
      }
      
      @keyframes gentlePulse {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.05); }
      }
      
      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }
      
      @keyframes slideUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-gentle-pulse {
        animation: gentlePulse 4s ease-in-out infinite;
      }
      
      .animate-slide-up {
        animation: slideUp 0.6s ease-out forwards;
      }
      
      .hover-lift {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hover-lift:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      }
      
      .hover-glow:hover {
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        transform: translateY(-2px);
      }
      
      .shimmer-effect {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        background-size: 1000px 100%;
        animation: shimmer 2s infinite;
      }
      
      .card-hover {
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .card-hover:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 25px 50px rgba(0,0,0,0.1);
      }
      
      .button-bounce:hover {
        animation: bounce 0.6s ease-in-out;
      }
      
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: scale(1); }
        40% { transform: scale(1.05); }
        60% { transform: scale(1.02); }
      }
      
      .icon-spin:hover {
        animation: spin 0.8s ease-in-out;
      }
      
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Team members data (same as in About page)
  const teamMembers = [
    {
      id: "dr-dheeraj-naik-001",
      name: "Dr. Dheeraj Naik",
      role: "Founder & Chief Dental Officer",
      specialization: "General & Cosmetic Dentistry",
      experience: "15+ Years",
      qualifications: "BDS, MDS",
      avatar: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200579/dheeraj_mw5zif.jpg",
      isFounder: true,
      expertise: ["General Dentistry", "Cosmetic Dentistry", "Root Canal", "Dental Implants"],
      description: "Visionary leader with 15+ years of excellence in dental care, transforming smiles across Vadodara.",
      fullBio: "Dr. Dheeraj Naik is the visionary founder of Darsh Dental Clinic, established in 2008 with a mission to provide world-class dental care with a personal touch. With over 15 years of dedicated service to the Vadodara community, Dr. Naik has built a reputation for clinical excellence, innovative treatments, and compassionate patient care. His approach combines cutting-edge dental technology with traditional values of trust, integrity, and personalized attention. Under his leadership, Darsh Dental has grown from a single clinic to a network of three state-of-the-art facilities, serving over 10,000 satisfied patients. Dr. Naik specializes in general and cosmetic dentistry, with particular expertise in smile makeovers, dental implants, and complex restorative procedures.",
      education: [
        { degree: "Bachelor of Dental Surgery (BDS)", institution: "Gujarat University", year: "2008" },
        { degree: "Master of Dental Surgery (MDS)", institution: "Rajiv Gandhi University", year: "2011" },
        { degree: "Advanced Implantology Certification", institution: "Nobel Biocare Institute", year: "2015" },
        { degree: "Cosmetic Dentistry Fellowship", institution: "American Academy of Cosmetic Dentistry", year: "2017" }
      ],
      achievements: [
        { title: "Excellence in Dental Care Award", organization: "Vadodara Dental Association", year: "2020" },
        { title: "Community Service Recognition", organization: "Rotary Club Vadodara", year: "2019" },
        { title: "Best Dental Clinic Award", organization: "Times Health Survey", year: "2021" },
        { title: "Patient Choice Award", organization: "Healthcare Excellence Survey", year: "2022" }
      ],
      publications: [
        { title: "Modern Approaches to Dental Implantology", journal: "Indian Journal of Dental Sciences", year: "2020" },
        { title: "Patient-Centered Care in Cosmetic Dentistry", journal: "Journal of Aesthetic Dentistry", year: "2021" }
      ],
      specialProcedures: [
        "Full Mouth Rehabilitation",
        "Digital Smile Design",
        "All-on-4 Implants",
        "Laser Dentistry",
        "Sedation Dentistry",
        "Porcelain Veneers"
      ],
      personalInterests: ["Photography", "Reading Medical Literature", "Community Service", "Technology Innovation"],
      consultationHours: [
        { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
        { day: "Saturday", time: "9:00 AM - 2:00 PM" },
        { day: "Sunday", time: "Emergency Only" }
      ],
      languages: ["English", "Hindi", "Gujarati"],
      membershipAffiliations: [
        "Indian Dental Association",
        "Vadodara Dental Society",
        "International Association of Oral and Maxillofacial Surgeons",
        "American Academy of Cosmetic Dentistry"
      ]
    },
    {
      id: "dr-priti-bhat-002",
      name: "Dr. Priti Bhat",
      role: "Senior Dental Surgeon",
      specialization: "General & Advanced Dentistry",
      experience: "12+ Years",
      qualifications: "BDS, MDS",
      avatar: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763208416/image-1763044165858_bcntzu.png",
      isFounder: false,
      expertise: ["General Dentistry", "Oral Surgery", "Restorative Procedures", "Preventive Care"],
      description: "Dedicated senior dental surgeon with extensive experience in comprehensive oral health care and advanced dental procedures.",
      fullBio: "Dr. Priti Bhat is a highly experienced senior dental surgeon who brings over 12 years of dedicated service to Darsh Dental Clinic. With her comprehensive approach to oral health care, she specializes in both routine and complex dental procedures, ensuring that each patient receives personalized attention and the highest quality treatment. Dr. Bhat is committed to staying current with the latest advancements in dental technology and techniques, making her a valuable asset to our team and a trusted care provider for our patients.",
      education: [
        { degree: "Bachelor of Dental Surgery (BDS)", institution: "Government Dental College", year: "2011" },
        { degree: "Master of Dental Surgery (MDS)", institution: "Dental Institute", year: "2014" },
        { degree: "Advanced Restorative Dentistry", institution: "Continuing Education Institute", year: "2018" }
      ],
      achievements: [
        { title: "Excellence in Patient Care", organization: "Vadodara Dental Society", year: "2021" },
        { title: "Outstanding Dental Service Award", organization: "Gujarat Dental Association", year: "2020" }
      ],
      publications: [
        { title: "Modern Approaches in General Dentistry", journal: "Indian Dental Review", year: "2021" }
      ],
      specialProcedures: [
        "Comprehensive Oral Examinations",
        "Advanced Restorative Procedures",
        "Oral Surgery",
        "Preventive Dental Care",
        "Emergency Dental Treatment"
      ],
      personalInterests: ["Reading", "Traveling", "Community Health"],
      consultationHours: [
        { day: "Monday to Friday", time: "9:00 AM - 6:00 PM" },
        { day: "Saturday", time: "9:00 AM - 2:00 PM" }
      ],
      languages: ["English", "Hindi", "Gujarati"],
      membershipAffiliations: [
        "Indian Dental Association",
        "Gujarat Dental Society"
      ]
    },
    {
      id: "dr-janhvi-oza-003",
      name: "Dr. Janhvi Oza",
      role: "Dental Surgeon",
      specialization: "General Dentistry",
      experience: "8+ Years",
      qualifications: "BDS",
      avatar: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200586/jhanvi_ny8xrc.jpg",
      isFounder: false,
      expertise: ["General Dentistry", "Oral Health", "Patient Care", "Dental Treatments"],
      description: "Compassionate dental surgeon committed to providing quality dental care with a focus on patient comfort and oral health excellence.",
      fullBio: "Dr. Janhvi Oza is a dedicated dental surgeon with 8+ years of experience in providing comprehensive dental care. She is committed to maintaining the highest standards of oral health care while ensuring patient comfort and satisfaction. Dr. Oza believes in preventive dentistry and patient education, helping her patients maintain optimal oral health through regular care and proper dental hygiene practices.",
      education: [
        { degree: "Bachelor of Dental Surgery (BDS)", institution: "Dental College", year: "2015" },
        { degree: "Continuing Education in General Dentistry", institution: "Professional Development Institute", year: "2018" }
      ],
      achievements: [
        { title: "Patient Care Excellence", organization: "Vadodara Dental Society", year: "2022" }
      ],
      publications: [],
      specialProcedures: [
        "General Dental Examinations",
        "Preventive Care",
        "Basic Restorative Procedures",
        "Oral Health Education"
      ],
      personalInterests: ["Reading", "Music", "Community Service"],
      consultationHours: [
        { day: "Monday to Friday", time: "10:00 AM - 6:00 PM" },
        { day: "Saturday", time: "9:00 AM - 1:00 PM" }
      ],
      languages: ["English", "Hindi", "Gujarati"],
      membershipAffiliations: [
        "Indian Dental Association",
        "Gujarat Dental Society"
      ]
    },
    {
      id: "dr-hetal-patel-004",
      name: "Dr. Hetal Patel",
      role: "Dental Surgeon",
      specialization: "General Dentistry",
      experience: "7+ Years",
      qualifications: "BDS",
      avatar: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200586/hetal_gclnsu.png",
      isFounder: false,
      expertise: ["General Dentistry", "Preventive Care", "Oral Health Education", "Restorative Treatments"],
      description: "Skilled dental surgeon dedicated to maintaining optimal oral health through comprehensive care and patient education.",
      fullBio: "Dr. Hetal Patel is a skilled dental surgeon with 7+ years of experience in providing comprehensive dental care. She is passionate about preventive dentistry and believes in educating her patients about maintaining optimal oral health. Dr. Patel is known for her gentle approach and attention to detail, making her a trusted choice for patients seeking quality dental care.",
      education: [
        { degree: "Bachelor of Dental Surgery (BDS)", institution: "Dental College", year: "2016" },
        { degree: "Continuing Education in Restorative Dentistry", institution: "Professional Development Center", year: "2019" }
      ],
      achievements: [
        { title: "Excellence in Patient Care", organization: "Gujarat Dental Association", year: "2022" }
      ],
      publications: [],
      specialProcedures: [
        "Comprehensive Dental Care",
        "Preventive Treatments",
        "Restorative Procedures",
        "Oral Health Counseling"
      ],
      personalInterests: ["Healthcare Education", "Community Service", "Reading"],
      consultationHours: [
        { day: "Monday to Friday", time: "9:00 AM - 5:00 PM" },
        { day: "Saturday", time: "9:00 AM - 1:00 PM" }
      ],
      languages: ["English", "Hindi", "Gujarati"],
      membershipAffiliations: [
        "Indian Dental Association",
        "Gujarat Dental Society"
      ]
    },
    {
      id: "dr-namrata-awariya-005",
      name: "Dr. Namrata Awariya",
      role: "BDS Surgeon",
      specialization: "General Dentistry",
      experience: "6+ Years",
      qualifications: "BDS",
      avatar: "https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200587/namrata_p0eofv.png",
      isFounder: false,
      expertise: ["General Dentistry", "Oral Care", "Patient Treatment", "Dental Health"],
      description: "Professional dental surgeon focused on delivering personalized dental care with attention to detail and patient satisfaction.",
      fullBio: "Dr. Namrata Awariya is a professional dental surgeon with 6+ years of experience in general dentistry. She is dedicated to providing personalized dental care that meets each patient's unique needs. Dr. Awariya focuses on creating a comfortable environment for her patients while delivering high-quality dental treatments with precision and care.",
      education: [
        { degree: "Bachelor of Dental Surgery (BDS)", institution: "Dental Institute", year: "2017" },
        { degree: "Advanced General Dentistry Course", institution: "Continuing Education Center", year: "2020" }
      ],
      achievements: [
        { title: "Young Dentist Achievement Award", organization: "Vadodara Dental Society", year: "2023" }
      ],
      publications: [],
      specialProcedures: [
        "General Dental Examinations",
        "Basic Restorative Care",
        "Preventive Treatments",
        "Patient Consultation"
      ],
      personalInterests: ["Medical Literature", "Patient Care", "Professional Development"],
      consultationHours: [
        { day: "Monday to Friday", time: "10:00 AM - 6:00 PM" },
        { day: "Saturday", time: "10:00 AM - 2:00 PM" }
      ],
      languages: ["English", "Hindi", "Gujarati"],
      membershipAffiliations: [
        "Indian Dental Association"
      ]
    }
  ];

  useEffect(() => {
    // Find doctor by ID
    const foundDoctor = teamMembers.find(member => member.id === resolvedParams.doc_id);
    if (foundDoctor) {
      setDoctor(foundDoctor);
    }
    setLoading(false);
  }, [resolvedParams.doc_id]);

  useEffect(() => {
    if (!doctor) return;

    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        heroRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Profile section animation
      gsap.fromTo(
        profileRef.current,
        {
          x: -30,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: profileRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    });

    return () => ctx.revert();
  }, [doctor]);

  if (loading) {
    return (
      <ReactLenis root>
        <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <motion.div 
            className="rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <p className="text-gray-600">Loading doctor profile...</p>
        </div>
        </div>
      </ReactLenis>
    );
  }

  if (!doctor) {
    notFound();
    return null;
  }

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-white">
      <Navigation />

      {/* Back Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our Team
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 bg-blue-100/30 rounded-full blur-xl"
            animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute top-40 right-32 w-24 h-24 bg-purple-100/40 rounded-full blur-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          ></motion.div>
          <motion.div 
            className="absolute top-28 left-1/4 text-blue-200/40"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Stethoscope className="w-8 h-8" />
          </motion.div>
          <motion.div
            className="absolute bottom-40 right-1/3 text-purple-200/40"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          >
            <Heart className="w-7 h-7" />
          </motion.div>
        </div>

        {/* Wave Divider at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-4 xs:h-6 sm:h-8 md:h-10 lg:h-12 overflow-hidden">
          <svg 
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            fill="white"
            style={{ display: "block" }}
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"/>
          </svg>
        </div>

        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Doctor Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={doctor.avatar}
                  alt={doctor.name}
                  width={600}
                  height={700}
                  className="w-full h-[500px] lg:h-[600px] object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-900">{doctor.experience}</span>
                  </div>
                </div>

                {/* Founder Badge (if applicable) */}
                {doctor.isFounder && (
                  <div className="absolute bottom-6 left-6 bg-blue-600/90 backdrop-blur-sm rounded-lg p-3 text-white shadow-lg">
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      <span className="text-sm font-semibold">Founder</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Doctor Information */}
            <div className="space-y-8">
              <div>
                <TextReveal
                  text={doctor.name}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                  duration={0.8}
                  staggerDelay={0.1}
                />
                <p className="text-2xl text-blue-600 font-semibold mb-2">{doctor.role}</p>
                <p className="text-xl text-gray-600 mb-4">{doctor.specialization}</p>
                <p className="text-lg text-gray-700 leading-relaxed">{doctor.description}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                  <Clock3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">{doctor.experience}</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                  <GraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">{doctor.qualifications}</p>
                  <p className="text-sm text-gray-600">Qualifications</p>
                </div>
              </div>

              {/* Clinic Information */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
                <p className="text-gray-700 text-sm mb-3">
                  Part of our expert team at Darsh Dental Clinic, providing comprehensive dental care across Vadodara.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold w-full justify-center"
                >
                  <Building className="w-5 h-5" />
                  Visit Our Clinic
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Details */}
      <section className="relative py-20 bg-white" ref={profileRef}>
        {/* Wave at top */}
        <div className="absolute top-0 left-0 w-full h-4 xs:h-6 sm:h-8 md:h-10 lg:h-12 overflow-hidden">
          <svg 
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            fill="white"
            style={{ display: "block", transform: "scaleY(-1)" }}
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet {doctor.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {doctor.description}
            </p>
          </motion.div>

          {/* Doctor Timeline Component */}
          <DoctorTimeline doctor={doctor} />
        </div>
      </section>

      {/* Before & After Testimonials Section */}
      <BeforeAfterTestimonial />

      <Footer />
      <WhatsAppButton />
      </div>
    </ReactLenis>
  );
};

export default DoctorPage;