"use client";

import Script from "next/script";

export default function Home() {
  
  // DIRECT SCRIPT HANDLING MANIFEST: Manual trigger via native window mapping
  const triggerCartCheckout = () => {
    // Explicitly target the browser's global window variable
    const targetWindow = window as any;
    
    if (targetWindow.Snipcart) {
      try {
        targetWindow.Snipcart.api.cart.items.add({
          id: "blr-tee-01",
          name: "Oversized BLR Tee",
          price: 799,
          url: "/", // Targets home path for pricing validity rules
          quantity: 1
        });
      } catch (validationError) {
        console.error("Snipcart core validation failed:", validationError);
      }
    } else {
      console.warn("Snipcart runtime engine is still downloading from CDN.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      {/* 1. Global Layout Styling Sheet */}
      <link rel="stylesheet" href="https://snipcart.com" />
      
      {/* 2. Direct Framework Framework Component Script download */}
      <Script 
        src="https://snipcart.com" 
        strategy="lazyOnload" 
      />

      {/* 3. Base Verification Connection Node. Input your Personal Public Key string here */}
      <div 
        id="snipcart" 
        data-api-key="YzgxYjYwNzEtMDZkYi00OGM2LTk4Y2UtMWNmYzY0YjA3MDZkNjM4ODU5NzUzODAzMzg5NTA0" 
        data-config-modal-style="side"
        hidden
      ></div>

      {/* Storefront Layout Interface Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Bengaluru Merch Lab
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Premium streetwear. Linked via Client Window SDK API layer.
        </p>
      </header>

      {/* Product Display Container Block */}
      <section className="max-w-4xl mx-auto flex justify-center">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6 w-full max-w-sm flex flex-col justify-between">
          <div>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 font-bold text-sm">
              [ Shirt Mockup Layout Box ]
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">Oversized BLR Tee</h3>
            <p className="mt-1 text-sm text-gray-500">100% Premium Heavyweight Cotton</p>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-extrabold text-gray-900">₹799</span>
              <span className="text-xs bg-green-100 text-green-800 font-semibold px-2 py-1 rounded">In Stock</span>
            </div>
            
            {/* Standard React Click Handler Execution button */}
            <button 
              onClick={triggerCartCheckout}
              className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition duration-200 shadow-sm text-center block cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
