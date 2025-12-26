"use client";
import { useEffect, useState } from 'react';
import { getUrl } from 'aws-amplify/storage';

export default function Logo() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const result = await getUrl({
          path: 'media/LOGO.png',
          // Ensure we request a guest accessible URL if needed, 
          // but standard getUrl handles auth based on current user state.
          // Since we allowed guest access, it should work even if not logged in.
        });
        setLogoUrl(result.url.toString());
      } catch (error) {
        console.error('Error fetching logo:', error);
      }
    };

    fetchLogo();
  }, []);

  if (!logoUrl) {
    // Return a placeholder or the text while loading to avoid layout shift?
    // Or just null.
    return <span style={{ opacity: 0 }}>Urania Adventures</span>;
  }

  return (
    <img 
      src={logoUrl} 
      alt="Urania Adventures Logo" 
      style={{ 
        maxWidth: '80vw', 
        height: 'auto', 
        maxHeight: '200px',
        display: 'block',
        margin: '0 auto'
      }} 
    />
  );
}
