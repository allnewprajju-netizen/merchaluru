"use client";

import Script from "next/script";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Native Next.js framework script injector for the shopping engine */}
      <Script src="https://snipcart.com" strategy="afterInteractive" />

      {/* Global Snipcart connection anchor. Put your personal Public API key here */}
      <div 
        id="snipcart" 
        data-api-key="ZjM0MmQ1OWItMWRkYi00NDVmLWE4ODUtM2U2MzkxM2Q0MjU0NjM5MTc0NTI2NDU3Mzk4MjI3" 
        data-config-modal-style="side"
        hidden
      ></div>

      {/* Branded Storefront Header block */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Bengaluru Merch Lab
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Premium streetwear. Coded in TypeScript, shipped directly.
        </p>
      </header>

      {/* Product Display Layout Grid */}
      <section className="max-w-4xl mx-auto flex justify-center">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6 w-full max-w-sm flex flex-col justify-between">
          <div>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 font-bold text-sm">
              [ Shirt Mockup Placeholder ]
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">Oversized BLR Tee</h3>
            <p className="mt-1 text-sm text-gray-500">100% Premium Heavyweight Cotton</p>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-extrabold text-gray-900">₹799</span>
              <span className="text-xs bg-green-100 text-green-800 font-semibold px-2 py-1 rounded">In Stock</span>
            </div>
            
            {/* Self-contained auto-binding buy button anchor element */}
            <button 
              className="snipcart-add-item w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition duration-200 shadow-sm text-center block cursor-pointer"
              data-item-id="blr-tee-01"
              data-item-name="Oversized BLR Tee"
              data-item-price="799"
              data-item-url="/"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
