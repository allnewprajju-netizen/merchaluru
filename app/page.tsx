"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [cartLoaded, setCartLoaded] = useState(false);

  useEffect(() => {
    // Inject Stylesheet safely into browser head
    if (!document.getElementById("snip-css")) {
      const link = document.createElement("link");
      link.id = "snip-css";
      link.rel = "stylesheet";
      link.href = "https://snipcart.com";
      document.head.appendChild(link);
    }

    // Inject Production Engine Script into page frame
    if (!document.getElementById("snip-js")) {
      const script = document.createElement("script");
      script.id = "snip-js";
      script.src = "https://snipcart.com";
      script.async = true;
      script.onload = () => setCartLoaded(true);
      document.body.appendChild(script);
    } else {
      setCartLoaded(true);
    }
  }, []);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f9fafb", padding: "48px 24px", fontFamily: "sans-serif" }}>
      {/* Target initialization hook node */}
      <div 
        id="snipcart" 
        data-api-key="YzgxYjYwNzEtMDZkYi00OGM2LTk4Y2UtMWNmYzY0YjA3MDZkNjM4ODU5NzUzODAzMzg5NTA0" 
        data-config-modal-style="side"
        hidden
      ></div>

      <header style={{ maxWidth: "28rem", margin: "0 auto 48px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#111827", marginBottom: "8px" }}>
          Bengaluru Merch Lab
        </h1>
        <p style={{ color: "#4b5563", fontSize: "1.125rem" }}>
          Premium streetwear store sandbox.
        </p>
      </header>

      <section style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", border: "1px solid #f3f4f6", padding: "24px", width: "100%", maxWidth: "20rem" }}>
          <div style={{ width: "100%", height: "16rem", backgroundColor: "#e5e7eb", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontWeight: "bold" }}>
            [ Shirt Mockup Layout Box ]
          </div>
          <h3 style={{ marginTop: "16px", fontSize: "1.125rem", fontWeight: "bold", color: "#111827" }}>Oversized BLR Tee</h3>
          <p style={{ marginTop: "4px", fontSize: "0.875rem", color: "#6b7280" }}>100% Premium Heavyweight Cotton</p>
          
          <div style={{ marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111827" }}>₹799</span>
            <span style={{ fontSize: "0.75rem", backgroundColor: "#d1fae5", color: "#065f46", fontWeight: "bold", padding: "4px 8px", borderRadius: "9999px" }}>
              {cartLoaded ? "Engine Active" : "Loading Cart..."}
            </span>
          </div>
          
          <button 
            className="snipcart-add-item"
            data-item-id="blr-tee-01"
            data-item-name="Oversized BLR Tee"
            data-item-price="799"
            data-item-url="/"
            style={{ width: "100%", backgroundColor: "#000000", color: "#ffffff", fontWeight: 500, padding: "12px", borderRadius: "8px", border: "none", cursor: "pointer" }}
          >
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
}
