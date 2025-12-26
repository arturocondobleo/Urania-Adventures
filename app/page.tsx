"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

export default function LandingPage() {
  return (
    <main>
      {/* Navigation */}
      <nav style={{ position: 'absolute', top: 0, width: '100%', padding: '1.5rem', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'white' }}>Urania Adventures</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#about" style={{ color: 'white' }}>Nosotros</a>
          <a href="#experiences" style={{ color: 'white' }}>Experiencias</a>
          <a href="#blog" style={{ color: 'white' }}>Blog</a>
          <a href="#contact" style={{ color: 'white' }}>Contacto</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-video" style={{ background: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop) center/cover no-repeat' }}></div>
        <div className="hero-content">
          <h1 className="mb-4">Descubre el Universo con <span className="text-accent">Ciencia y Pasión</span></h1>
          <p className="mb-8" style={{ fontSize: '1.25rem' }}>
            Experiencias de astroturismo auténticas, dirigidas por astrofísicos profesionales.
            Conecta con el cosmos de una manera única e inclusiva.
          </p>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            Reserva tu Experiencia
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="mb-4">Más que Astroturismo, <span className="text-accent">Ciencia Real</span></h2>
            <p>
              En Urania Adventures, nos distinguimos por el rigor científico. Nuestras experiencias son diseñadas y dirigidas por una <strong>astrofísica profesional</strong>, alejándonos de mitos y pseudociencias.
            </p>
            <p>
              Creemos firmemente que el cielo es para todos. Por eso, adaptamos nuestras actividades para ser <strong>inclusivas</strong>, permitiendo que personas con discapacidad también puedan disfrutar de la maravilla del universo.
            </p>
          </div>
          <div style={{ height: '400px', background: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop) center/cover', borderRadius: '1rem' }}></div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <h2 className="text-center mb-8">Nuestras Experiencias</h2>
          <div className="grid grid-3">
            <div className="card">
              <div style={{ height: '200px', background: '#2d1b69', marginBottom: '1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>Observación Telescópica</span>
              </div>
              <h3>Noches de Estrellas</h3>
              <p>Observación guiada con telescopios profesionales. Aprende a identificar constelaciones y objetos de cielo profundo.</p>
            </div>
            <div className="card">
              <div style={{ height: '200px', background: '#1e1b4b', marginBottom: '1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>Senderismo Nocturno</span>
              </div>
              <h3>Caminatas Cósmicas</h3>
              <p>Combina el senderismo nocturno con la interpretación del cielo. Una conexión total con la naturaleza.</p>
            </div>
            <div className="card">
              <div style={{ height: '200px', background: '#312e81', marginBottom: '1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>Talleres Educativos</span>
              </div>
              <h3>Ciencia para Todos</h3>
              <p>Talleres interactivos para escuelas y grupos. Aprende astrofísica de manera divertida y accesible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="container">
        <h2 className="text-center mb-8">Divulgación Científica</h2>
        <div className="grid grid-3">
          <div className="card">
            <div style={{ height: '150px', background: '#4c1d95', marginBottom: '1rem', borderRadius: '0.5rem' }}></div>
            <h3>¿Qué es la contaminación lumínica?</h3>
            <p className="text-muted">Descubre cómo afecta a nuestra salud y a la observación astronómica.</p>
            <a href="#" className="text-accent">Leer más →</a>
          </div>
          <div className="card">
            <div style={{ height: '150px', background: '#5b21b6', marginBottom: '1rem', borderRadius: '0.5rem' }}></div>
            <h3>Guía para observar las Perseidas</h3>
            <p className="text-muted">Todo lo que necesitas saber para disfrutar de esta lluvia de estrellas.</p>
            <a href="#" className="text-accent">Leer más →</a>
          </div>
          <div className="card">
            <div style={{ height: '150px', background: '#6d28d9', marginBottom: '1rem', borderRadius: '0.5rem' }}></div>
            <h3>Mitos sobre la Luna</h3>
            <p className="text-muted">Desmintiendo creencias populares con ciencia real.</p>
            <a href="#" className="text-accent">Leer más →</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container">
        <h2 className="text-center mb-8">Lo que dicen nuestros viajeros</h2>
        <div className="grid grid-3">
          <div className="card">
            <p className="mb-4">"Increíble experiencia. Nunca había visto el cielo así. La explicación científica le da un valor incalculable."</p>
            <p className="text-accent">- María G.</p>
          </div>
          <div className="card">
            <p className="mb-4">"La inclusión es real. Mi hijo con discapacidad pudo disfrutar plenamente. Gracias Urania Adventures."</p>
            <p className="text-accent">- Carlos R.</p>
          </div>
          <div className="card">
            <p className="mb-4">"Profesionalismo puro. Se nota la pasión y el conocimiento. Totalmente recomendado."</p>
            <p className="text-accent">- Ana P.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ background: 'linear-gradient(to top, #000, #050510)' }}>
        <div className="container text-center">
          <h2 className="mb-4">¿Listo para la aventura?</h2>
          <p className="mb-8">
            Reserva tu lugar o solicita más información. Atendemos exclusivamente por WhatsApp para brindarte una atención personalizada.
          </p>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center">
        <div className="container">
          <h3 className="mb-4">Urania Adventures</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <a href="#" className="text-muted">Instagram</a>
            <a href="#" className="text-muted">Facebook</a>
            <a href="#" className="text-muted">TikTok</a>
          </div>
          <p className="text-muted">© {new Date().getFullYear()} Urania Adventures. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
  );
}
