'use client';

import NotFoundPage from "../components/page-not-found";
import Navigation from "../components/Navigation";

export default function NotFound() {
    return (
        <div className="font-['Outfit'] antialiased">
            <Navigation />
            <NotFoundPage />
        </div>
    );
}