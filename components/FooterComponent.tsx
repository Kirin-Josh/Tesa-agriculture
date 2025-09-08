import Image from 'next/image';
import React from 'react'

export default function FooterComponent() {
  return (
    <footer className="w-full px-6 md:px-12 lg:px-20 py-16 bg-yellow-600/10">
      <div className="flex-col space-y-8">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* left side */}
          <div className="flex-col items-start gap-4">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            <div>
              <p>Address</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
