"use client";
import { useState } from "react";

export default function GoogleMap() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="w-full h-64 bg-black/15 rounded-lg overflow-hidden relative">
      {/* Skeleton Loader */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-300 dark:bg-slate-700 animate-pulse">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Loading map...
          </p>
        </div>
      )}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d866.9939651177165!2d32.27155722512821!3d30.62525808673554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f85983ce774def%3A0x4f6d0663e9e4c77a!2sFaculty%20of%20Engineering%20-%20Suez%20Canal%20University!5e0!3m2!1sen!2seg!4v1738627312233!5m2!1sen!2seg"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
        onLoad={() => setMapLoaded(true)}
      ></iframe>
    </div>
  );
}
