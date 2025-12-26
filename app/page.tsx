"use client";

import { useEffect, useRef } from "react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

Amplify.configure(outputs);
gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Hero Animation
    const tl = gsap.timeline();

    if (heroImageRef.current) {
      tl.fromTo(
        heroImageRef.current,
        { scale: 1.2 },
        { scale: 1, duration: 10, ease: "power1.out" }
      );
    }

    if (heroTextRef.current) {
      tl.fromTo(
        heroTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
        "-=9"
      );
    }

    // Scroll Animations for Sections
    sectionsRef.current.forEach((section) => {
      const image = section.querySelector(".feature-image");
      const text = section.querySelector(".feature-text");

      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        }
      );
      
      if(image) {
          gsap.to(image, {
              yPercent: 20,
              ease: "none",
              scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true
              }
          });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <main style={{ backgroundColor: "#000", color: "#fff", overflow: "hidden" }}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          ref={heroImageRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/images/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <div
          ref={heroTextRef}
          style={{
            zIndex: 1,
            textAlign: "center",
            mixBlendMode: "difference",
          }}
        >
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: "700", letterSpacing: "-0.02em", marginBottom: "1rem", lineHeight: 1.1 }}>
            Urania Adventures
          </h1>
          <p style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", fontWeight: "300", opacity: 0.9 }}>
            Explora el Universo.
          </p>
        </div>
      </section>

      {/* Feature 1 */}
      <section
        ref={addToRefs}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 2rem",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
           <div className="feature-text">
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.5rem", fontWeight: "600", lineHeight: 1.1 }}>Campamentos Astronómicos.</h2>
              <p style={{ fontSize: "1.25rem", lineHeight: "1.6", color: "#ccc" }}>
                Vive la magia de la noche bajo un cielo estrellado. Nuestros campamentos están diseñados para conectarte con el cosmos de una manera única y segura.
              </p>
           </div>
           <div className="feature-image" style={{ height: "600px", overflow: "hidden", borderRadius: "20px" }}>
              <img src="/images/feature1.jpg" alt="Campamento" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
           </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section
        ref={addToRefs}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 2rem",
          position: "relative",
          backgroundColor: "#050505"
        }}
      >
        <div style={{ maxWidth: "1200px", width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center", direction: "rtl" }}>
           <div className="feature-text" style={{ direction: "ltr" }}>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.5rem", fontWeight: "600", lineHeight: 1.1 }}>Experiencias Inolvidables.</h2>
              <p style={{ fontSize: "1.25rem", lineHeight: "1.6", color: "#ccc" }}>
                Cada aventura es una historia que contar. Desde la observación de planetas hasta la fotografía nocturna, creamos recuerdos que duran para siempre.
              </p>
           </div>
           <div className="feature-image" style={{ height: "600px", overflow: "hidden", borderRadius: "20px" }}>
              <img src="/images/feature2.jpg" alt="Experiencia" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
           </div>
        </div>
      </section>

      {/* Feature 3 */}
      <section
        ref={addToRefs}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 2rem",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
           <div className="feature-text">
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.5rem", fontWeight: "600", lineHeight: 1.1 }}>Conexión con la Naturaleza.</h2>
              <p style={{ fontSize: "1.25rem", lineHeight: "1.6", color: "#ccc" }}>
                Desconecta para reconectar. Nuestros destinos están elegidos cuidadosamente para ofrecerte paz, tranquilidad y una vista inigualable del universo.
              </p>
           </div>
           <div className="feature-image" style={{ height: "600px", overflow: "hidden", borderRadius: "20px" }}>
              <img src="/images/feature3.jpg" alt="Naturaleza" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
           </div>
        </div>
      </section>
    </main>
  );
}
