"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import TimelineSection from "../../components/TimelineSection";
import { CardSpotlight } from "../../components/ui/card-spotlight";
import CountAnimation from "../../components/count-animation";
import TextReveal from "../../components/forgeui/text-reveal";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Calendar,
  CheckCircle,
  Award,
  Users,
  Shield,
  Heart,
  Star,
  Stethoscope,
  GraduationCap,
  Building,
  Activity,
  Target,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  // Custom CSS animations
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
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-gentle-pulse {
        animation: gentlePulse 4s ease-in-out infinite;
      }
      
      .hover-lift {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hover-lift:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }
      
      .hover-glow:hover {
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
      }
      
      .card-hover {
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .card-hover:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 25px 50px rgba(0,0,0,0.15);
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
      
      .shimmer-effect {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        background-size: 1000px 100%;
        animation: shimmer 2s infinite;
      }
      
      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const statsRef = useRef([]);
  const valuesRef = useRef([]);
  const teamRef = useRef(null);
  const achievementsRef = useRef([]);

  // Motion variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
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

      // Story section animation
      gsap.fromTo(
        storyRef.current,
        {
          x: -30,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Stats animation
      gsap.fromTo(
        statsRef.current,
        {
          y: 40,
          opacity: 0,
          scale: 0.95,
        },
        {
          scrollTrigger: {
            trigger: statsRef.current[0],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        }
      );

      // Values animation
      gsap.fromTo(
        valuesRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: valuesRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Team section animation
      gsap.fromTo(
        teamRef.current,
        {
          scale: 0.95,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Team members data with unique IDs
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
    },
    {
      id: "dr-priti-bhat-002",
      name: "Dr. Priti Bhat",
      role: "Senior Dental Surgeon",
      specialization: "General & Advanced Dentistry",
      experience: "12+ Years",
      qualifications: "BDS, MDS",
      avatar: "/doctors/priti.png",
      isFounder: false,
      expertise: ["General Dentistry", "Oral Surgery", "Restorative Procedures", "Preventive Care"],
      description: "Dedicated senior dental surgeon with extensive experience in comprehensive oral health care and advanced dental procedures.",
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
    },
  ];

  const clinicStats = [
    {
      icon: Users,
      number: 1000,
      label: "Happy Patients",
      suffix: "+",
      color: "blue",
    },
    {
      icon: Award,
      number: 15,
      label: "Years of Excellence",
      suffix: "+",
      color: "purple",
    },
    {
      icon: Building,
      number: 3,
      label: "Modern Clinics",
      suffix: "",
      color: "green",
    },
    {
      icon: Star,
      number: 98,
      label: "Success Rate",
      suffix: "%",
      color: "yellow",
    },
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every treatment decision is made with the patient's comfort, health, and satisfaction as our top priority.",
    },
    {
      icon: Shield,
      title: "Clinical Excellence",
      description: "We maintain the highest standards of clinical practice, using evidence-based treatments and advanced technology.",
    },
    {
      icon: Users,
      title: "Compassionate Team",
      description: "Our experienced team treats every patient with empathy, respect, and personalized attention.",
    },
    {
      icon: Target,
      title: "Continuous Innovation",
      description: "We stay at the forefront of dental technology and techniques to provide the best possible outcomes.",
    },
  ];

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-16 sm:py-20 overflow-hidden">
        {/* Premium Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Orbs with Enhanced Colors */}
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
            className="absolute bottom-32 left-40 w-40 h-40 bg-green-100/20 rounded-full blur-2xl"
            animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-20 right-20 w-28 h-28 bg-rose-100/30 rounded-full blur-xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          ></motion.div>
          
          {/* Medical Geometric Shapes */}
          <motion.div 
            className="absolute top-60 left-10 w-4 h-4 bg-blue-400/20 rotate-45"
            animate={{ rotate: [45, 405] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <motion.div 
            className="absolute top-32 right-40 w-6 h-6 bg-purple-400/20 rotate-12"
            animate={{ rotate: [12, -348] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-40 right-60 w-8 h-8 bg-green-400/20 rotate-45"
            animate={{ rotate: [45, 405] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          
          {/* Premium Medical Icons */}
          <motion.div 
            className="absolute top-28 left-1/4 text-blue-200/40"
            animate={{ y: [0, -10, -5, 0], rotate: [0, 1, -1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Stethoscope className="w-8 h-8" />
          </motion.div>
          <motion.div 
            className="absolute top-80 right-1/4 text-purple-200/30"
            animate={{ y: [0, -10, -5, 0], rotate: [0, 1, -1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <Heart className="w-7 h-7" />
          </motion.div>
          <motion.div 
            className="absolute bottom-60 left-1/3 text-green-200/40"
            animate={{ y: [0, -10, -5, 0], rotate: [0, 1, -1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          >
            <Activity className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Premium Interactive Floating Cards */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer group">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <span className="text-xs font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                Our Vision in Action
              </span>
            </div>
          </div>
          
          <div className="absolute top-60 right-12 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer group" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-500 group-hover:text-blue-600 transition-colors" />
              <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                Excellence & Innovation
              </span>
            </div>
          </div>
          
          <div className="absolute bottom-40 left-16 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer group" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-500 group-hover:text-purple-600 transition-colors" />
              <span className="text-xs font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                1000+ Transformed Lives
              </span>
            </div>
          </div>
          
          <div className="absolute bottom-32 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer group" style={{ animationDelay: '3s' }}>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 group-hover:text-rose-600 transition-colors" />
              <span className="text-xs font-medium text-gray-700 group-hover:text-rose-600 transition-colors">
                Compassionate Care
              </span>
            </div>
          </div>
        </div>

        {/* Premium Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full h-auto">
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

        <div ref={heroRef} className="w-full max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Premium Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <Image
                  src="https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200746/dental-clinic-interior_nsy34s.jpg"
                  alt="Dr. Dheeraj Naik at Darsh Dental Clinic - Our Vision of Excellence"
                  width={600}
                  height={700}
                  className="w-full h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-700"></div>
                
                {/* Premium Achievement Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer group/badge">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 group-hover/badge:from-blue-600 group-hover/badge:to-purple-700 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/badge:rotate-12 shadow-lg">
                      <Award className="w-7 h-7 text-white group-hover/badge:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900 group-hover/badge:text-blue-600 transition-colors">15+ Years</p>
                      <p className="text-sm text-gray-600 group-hover/badge:text-gray-700 transition-colors font-medium">Excellence & Innovation</p>
                    </div>
                  </div>
                </div>

                {/* Premium Patient Counter */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-gentle-pulse hover:scale-110 transition-all duration-500 cursor-pointer group/counter">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <motion.div 
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      ></motion.div>
                      <Users className="w-5 h-5 text-gray-700 group-hover/counter:text-green-600 transition-colors" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 group-hover/counter:text-green-600 transition-colors">
                      <CountAnimation number={1000} suffix="+" />
                    </p>
                    <p className="text-xs text-gray-600 font-medium">Happy Patients</p>
                  </div>
                </div>

                {/* Premium Vision Badge */}
                <div className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer group/vision">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-2 group-hover/vision:scale-110 transition-transform duration-300">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-xs font-bold text-gray-900 group-hover/vision:text-green-600 transition-colors">Our Vision</p>
                    <p className="text-xs text-gray-600">Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Content Section */}
            <div ref={storyRef} className="space-y-8 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6 sm:mb-8"
              >
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <div className="relative">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-rose-600 transition-colors duration-300" />
                    <motion.div 
                      className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full opacity-75"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    ></motion.div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full"></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 uppercase tracking-wider transition-colors duration-300">
                    OUR JOURNEY & VISION
                  </span>
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full ml-1"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                </div>
              </motion.div>

              <TextReveal
                text="Transforming Smiles, Transforming Lives"
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
                duration={0.8}
                staggerDelay={0.1}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed"
              >
                From a visionary dream in 2008 to becoming Vadodara's most trusted dental care destination. 
                Dr. Dheeraj Naik's journey of excellence, innovation, and compassionate care.
              </motion.p>

              {/* Premium Stats Cards */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-2 gap-4 sm:gap-6 mb-8"
              >
                <motion.div variants={fadeInUp} className="group text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    <Building className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    <CountAnimation number={2008} />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors font-medium">
                    Founded
                  </p>
                  <div className="w-full h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="group text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-green-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    <CountAnimation number={3} />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors font-medium">
                    Locations
                  </p>
                  <div className="w-full h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}></div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Premium Vision Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-gray-200/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To be the beacon of dental excellence in Gujarat, where advanced technology meets compassionate care, 
                      creating healthy, confident smiles that transform lives.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-20 bg-gray-50">
        {/* Wave at top */}
        <div className="absolute top-0 left-0 w-full h-4 xs:h-6 sm:h-8 md:h-10 lg:h-12 overflow-hidden">
          <svg 
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            fill="#f9fafb"
            style={{ display: "block", transform: "scaleY(-1)" }}
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="text-center mb-16">
            <TextReveal
              text="Excellence in Numbers"
              className="text-3xl md:text-4xl font-bold font-manrope text-gray-900 mb-4"
              duration={0.6}
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality care is reflected in these milestones achieved over our journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicStats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = {
                blue: "text-blue-600 bg-blue-50",
                purple: "text-purple-600 bg-purple-50",
                green: "text-green-600 bg-green-50",
                yellow: "text-yellow-600 bg-yellow-50",
              };

              return (
                <div
                  key={index}
                  ref={(el) => (statsRef.current[index] = el)}
                  className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 ${colorClasses[stat.color].replace('text-', 'bg-').replace('bg-', 'bg-').replace('-50', '-500/10')} rounded-full scale-0 group-hover:scale-100 transition-transform duration-500`}></div>
                    <Icon className={`w-8 h-8 ${colorClasses[stat.color].split(' ')[0]} mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:${colorClasses[stat.color].split(' ')[0].replace('text-', 'text-')} transition-colors`}>
                    <CountAnimation number={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors font-medium">
                    {stat.label}
                  </p>
                  <div className="w-full h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
                    <div className={`h-full ${colorClasses[stat.color].split(' ')[0].replace('text-', 'bg-')} rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out`} style={{transitionDelay: `${index * 200}ms`}}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wave at bottom */}
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
      </section>

      {/* Why We Stand Out Timeline Section */}
      <TimelineSection />

      {/* Team Section - Premium Team Component */}
      <section className="relative py-20 bg-gray-50" ref={teamRef}>
        {/* Wave at top */}
        <div className="absolute top-0 left-0 w-full h-4 xs:h-6 sm:h-8 md:h-10 lg:h-12 overflow-hidden">
          <svg 
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            fill="#f9fafb"
            style={{ display: "block", transform: "scaleY(-1)" }}
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"/>
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 relative z-10 pt-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 mb-8 shadow-sm">
              <Users className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                OUR EXPERT TEAM
              </span>
            </div>
            
            <TextReveal
              text="Meet Our Dental Professionals"
              className="text-3xl md:text-5xl font-bold font-manrope text-gray-900 mb-6"
              duration={0.6}
            />
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of experienced dentists brings together decades of expertise, compassion, 
              and commitment to delivering exceptional dental care for every patient.
            </p>
          </div>

          {/* Founder Highlight */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Founder & Leader</h3>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <CardSpotlight className="p-8 bg-white">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity blur"></div>
                    <div className="relative">
                      <Image
                        src={teamMembers[0].avatar}
                        alt={teamMembers[0].name}
                        width={200}
                        height={200}
                        className="w-48 h-48 rounded-full object-cover object-top border-4 border-white shadow-xl"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-2">
                        <Award className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h4 className="text-3xl font-bold text-gray-900 mb-2">
                      {teamMembers[0].name}
                    </h4>
                    <p className="text-xl text-blue-600 font-semibold mb-2">
                      {teamMembers[0].role}
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                      {teamMembers[0].specialization} • {teamMembers[0].experience}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {teamMembers[0].description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                      {teamMembers[0].expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/about/${teamMembers[0].id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl hover:rounded-2xl transition-all duration-300 group font-semibold button-bounce hover:shadow-2xl transform hover:scale-105 relative overflow-hidden"
                    >
                      {/* Background shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <span className="relative z-10">Learn More About Dr. Naik</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 relative z-10" />
                    </Link>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </div>

          {/* Other Team Members */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Specialist Team</h3>
              <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.slice(1).map((member, index) => (
                <div key={member.id} className="group overflow-hidden">
                  <CardSpotlight className="h-full p-6 bg-white card-hover hover-glow">
                    <div className="relative mb-6">
                      <Image
                        className="w-full h-80 rounded-lg object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                        src={member.avatar}
                        alt={member.name}
                        width={300}
                        height={400}
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <span className="text-xs font-bold text-gray-700">
                          _{String(index + 2).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-semibold text-sm mb-1">
                          {member.role}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {member.specialization} • {member.experience}
                        </p>
                      </div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {member.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100">
                        <Link
                          href={`/about/${member.id}`}
                          className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 group text-sm font-semibold hover:shadow-lg transform hover:scale-[1.02]"
                        >
                          <span>View Profile</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </CardSpotlight>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Got a Question? Reach Out Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Wave at top */}
        <div className="absolute top-0 left-0 w-full h-4 xs:h-6 sm:h-8 md:h-10 lg:h-12 overflow-hidden">
          <svg 
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            fill="#f9fafb"
            style={{ display: "block", transform: "scaleY(-1)" }}
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="relative">
                <Mail className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full opacity-75"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                ></motion.div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 uppercase tracking-wider transition-colors duration-300">
                GOT A QUESTION?
              </span>
            </div>

            <TextReveal
              text="Ready to Transform Your Smile?"
              className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-gray-900 mb-6"
              duration={0.8}
              staggerDelay={0.1}
            />

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Our expert team is here to answer your questions and help you achieve the smile of your dreams. 
              Contact us today for a personalized consultation with Dr. Dheeraj Naik.
            </p>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <Phone className="w-12 h-12 text-blue-600 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Call Us Now</h3>
                <p className="text-gray-600 mb-4">Speak directly with our team</p>
                <a href="tel:+919925465919" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:scale-110 transition-all duration-300">
                  +91 99254 65919
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-green-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <Mail className="w-12 h-12 text-green-600 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your questions</p>
                <a href="mailto:darshorthoclinic@gmail.com" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group-hover:scale-110 transition-all duration-300">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-purple-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <MapPin className="w-12 h-12 text-purple-600 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">Visit Us</h3>
                <p className="text-gray-600 mb-4">3 convenient locations</p>
                <Link href="/locations" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold group-hover:scale-110 transition-all duration-300">
                  Find Locations
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      </div>
    </ReactLenis>
  );
};

export default AboutPage;