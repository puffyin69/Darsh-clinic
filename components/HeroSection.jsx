"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Phone, Star, Shield, Award, Users, Clock, CheckCircle, XCircle } from "lucide-react";
import { Highlighter } from "./ui/Highlighter";
import TextReveal from "./forgeui/text-reveal";

const HeroSection = () => {
  const [clinicStatus, setClinicStatus] = useState({ isOpen: false, message: "", nextChange: "" });

  // Function to check if clinic is currently open
  const checkClinicStatus = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes; // Convert to minutes for easier comparison

    // Clinic hours: Monday-Saturday 9:30 AM - 1:00 PM & 4:30 PM - 8:00 PM
    const morningStart = 9 * 60 + 30; // 9:30 AM
    const morningEnd = 13 * 60; // 1:00 PM
    const eveningStart = 16 * 60 + 30; // 4:30 PM
    const eveningEnd = 20 * 60; // 8:00 PM

    if (day === 0) { // Sunday
      return {
        isOpen: false,
        message: "Closed Today",
        nextChange: "Opens Monday 9:30 AM"
      };
    } else if (day >= 1 && day <= 6) { // Monday to Saturday
      if ((currentTime >= morningStart && currentTime < morningEnd) || 
          (currentTime >= eveningStart && currentTime < eveningEnd)) {
        // Currently open
        if (currentTime >= morningStart && currentTime < morningEnd) {
          return {
            isOpen: true,
            message: "Open Now",
            nextChange: "Closes at 1:00 PM"
          };
        } else {
          return {
            isOpen: true,
            message: "Open Now", 
            nextChange: "Closes at 8:00 PM"
          };
        }
      } else {
        // Currently closed during weekdays
        if (currentTime < morningStart) {
          return {
            isOpen: false,
            message: "Opens Soon",
            nextChange: "Opens at 9:30 AM"
          };
        } else if (currentTime >= morningEnd && currentTime < eveningStart) {
          return {
            isOpen: false,
            message: "Lunch Break",
            nextChange: "Opens at 4:30 PM"
          };
        } else {
          return {
            isOpen: false,
            message: "Closed Today",
            nextChange: day === 6 ? "Opens Monday 9:30 AM" : "Opens Tomorrow 9:30 AM"
          };
        }
      }
    }

    return {
      isOpen: false,
      message: "Closed",
      nextChange: "Check back later"
    };
  };

  useEffect(() => {
    // Initial check
    setClinicStatus(checkClinicStatus());

    // Update every minute
    const interval = setInterval(() => {
      setClinicStatus(checkClinicStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        
        {/* Floating Elements */}
        <motion.div
          animate={floatingAnimation}
          className="absolute top-32 right-20 w-20 h-20 bg-white/80 rounded-full shadow-lg flex items-center justify-center"
        >
          <Shield className="w-8 h-8 text-blue-600" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [10, -10, 10],
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-64 left-20 w-16 h-16 bg-white/80 rounded-full shadow-lg flex items-center justify-center"
        >
          <Award className="w-6 h-6 text-teal-600" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-block">
              <div className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                ⭐ Vadodara's Most Trusted Dental Clinic
              </div>
            </motion.div>

            {/* Main Heading with TextReveal */}
            <div className="space-y-4">
              <TextReveal
                text="Transform Your Smile with"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
                duration={1.2}
                staggerDelay={0.15}
              />
              <div className="relative">
                <TextReveal
                  text="Expert Dental Care"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
                  duration={1.5}
                  staggerDelay={0.18}
                  delay={0.8}
                />
                <Highlighter 
                  action="underline" 
                  color="#4ECDC4" 
                  strokeWidth={4} 
                  animationDelay={3500}
                  duration={2000}
                >
                  <span className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-transparent pointer-events-none select-none">
                    Expert Dental Care
                  </span>
                </Highlighter>
              </div>
            </div>

            {/* Description with TextReveal */}
            <TextReveal
              text="Experience 15+ years of excellence with Dr. Dheeraj Naik. Advanced treatments, painless procedures, and compassionate care across 3 convenient locations in Vadodara."
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              duration={1.0}
              staggerDelay={0.06}
              delay={2.0}
            />

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-900">4.9/5</span>
                <span className="text-gray-600">Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900">2000+</span>
                <span className="text-gray-600">Happy Patients</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 text-teal-600" />
                <span className="font-semibold text-gray-900">3</span>
                <span className="text-gray-600">Locations</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </motion.button>
              </Link>
              
              <Link href="tel:+919374268965">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Improved Image Layout */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative"
          >
            {/* Hero Image - Dr. Dheeraj */}
            <motion.div 
              variants={fadeInUp}
              className="relative mb-6"
            >
              <div className="aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200687/amr-taha-uvnMQXF56kQ-unsplash_vvkhid.jpg"
                  alt="Professional Dental Care at Darsh Dental Clinic"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Doctor Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <p className="text-sm font-semibold text-gray-900">Dr. Dheeraj Naik</p>
                  <p className="text-xs text-gray-600">15+ Years Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Images Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <motion.div variants={fadeInUp} className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200623/hero2_wlp9p0.jpg"
                    alt="Professional Dental Care Services"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs font-semibold">Expert Care</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200624/hero4_jcnfea.jpg"
                    alt="Advanced Dental Treatments"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs font-semibold">Modern Treatment</p>
                </div>
              </motion.div>
            </div>

            {/* Dynamic Clinic Status Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className={`absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl border max-w-52 ${
                clinicStatus.isOpen ? 'border-green-200' : 'border-red-200'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                {clinicStatus.isOpen ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
                <h3 className={`font-semibold text-sm ${
                  clinicStatus.isOpen ? 'text-green-700' : 'text-red-600'
                }`}>
                  {clinicStatus.message}
                </h3>
              </div>
              <p className="text-xs text-gray-600 mb-1">
                {clinicStatus.nextChange}
              </p>
              <div className="border-t border-gray-100 pt-2 mt-2">
                <p className="text-xs text-gray-500">
                  Mon-Sat: 9:30 AM-1:00 PM<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4:30 PM-8:00 PM<br/>
                  Sunday: Closed
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 max-w-52"
            >
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900 text-sm">100% Safe</h3>
              </div>
              <p className="text-xs text-gray-600">
                WHO-approved sterilization protocols for complete safety.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;