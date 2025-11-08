"use client";

import Navigation from "../components/Navigation";
import { AlertTriangle, RefreshCw, Home, Phone } from "lucide-react";

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body className="font-['Outfit'] antialiased">
                <Navigation />
                <div className="min-h-screen bg-white flex items-center justify-center px-4">
                    <div className="text-center max-w-2xl mx-auto">
                        {/* Error Icon */}
                        <div className="mb-8 flex justify-center">
                            <div className="p-6 bg-red-50 rounded-full">
                                <AlertTriangle className="w-16 h-16 text-red-500" />
                            </div>
                        </div>

                        {/* Error Message */}
                        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                            Something Went Wrong
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                            We're experiencing some technical difficulties. Our team has been notified and is working to fix this issue.
                        </p>

                        {/* Error Details (only in development) */}
                        {process.env.NODE_ENV === 'development' && error && (
                            <div className="mb-8 p-4 bg-gray-100 rounded-lg text-left">
                                <h3 className="font-bold text-red-600 mb-2">Error Details:</h3>
                                <p className="text-sm text-gray-800 font-mono">{error.message}</p>
                            </div>
                        )}

                        {/* Medical themed message */}
                        <div className="flex items-center justify-center gap-2 text-black mb-8 font-semibold">
                            <span>Dr. Dheeraj Naik's Dental Care - We'll Get This Fixed!</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={reset}
                                className="group flex items-center justify-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                                Try Again
                            </button>
                            
                            <a
                                href="/"
                                className="group flex items-center justify-center gap-3 px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Go Home
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                            <h3 className="font-bold text-black mb-4">Need Immediate Assistance?</h3>
                            <div className="flex items-center justify-center gap-2 text-black">
                                <Phone className="w-5 h-5" />
                                <span>Call us at </span>
                                <a 
                                    href="tel:+919876543210" 
                                    className="font-bold hover:text-gray-700 transition-colors"
                                >
                                    +91 98765 43210
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}