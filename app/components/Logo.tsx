"use client";
export default function Logo() {
  return (
    <img 
      src="/images/logo.png" 
      alt="Urania Adventures Logo" 
      style={{ 
        maxWidth: '80vw', 
        height: 'auto', 
        maxHeight: '200px',
        display: 'block',
        margin: '0 auto',
        filter: 'brightness(0) invert(1)'
      }} 
    />
  );
}
