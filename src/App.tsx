import React, { useState, useEffect } from 'react';

export default function App() {
  const [stage, setStage] = useState<'intro' | 'music' | 'question' | 'accepted'>('intro');
  const [noPosition, setNoPosition] = useState({ top: '50%', left: '60%' });
  const [isPlaying, setIsPlaying] = useState(true);
  const [noAttempts, setNoAttempts] = useState(0);

  // Dodge function for the "No" button using Spider-Sense!
  const dodgeNoButton = () => {
    const randomTop = Math.floor(Math.random() * 70 + 15) + '%';
    const randomLeft = Math.floor(Math.random() * 70 + 15) + '%';
    setNoPosition({ top: randomTop, left: randomLeft });
    setNoAttempts((prev) => prev + 1);
  };

  return (
    <div style={styles.container}>
      {/* Background Animated Web Particles */}
      <div style={styles.spiderBg}>
        <div style={styles.webCornerTopLeft}>🕸️</div>
        <div style={styles.webCornerTopRight}>🕸️</div>
      </div>

      {/* STAGE 1: SPIDER-MAN ENTRANCE */}
      {stage === 'intro' && (
        <div style={styles.card}>
          <div style={styles.spideyBadge}>CLASSIFIED S.H.I.E.L.D. FILE</div>
          <div style={{ fontSize: '80px', margin: '15px 0' }}>🕷️</div>
          <h1 style={styles.title}>Hey Rani!</h1>
          <p style={styles.subtitle}>
            Your friendly neighborhood Valentine message has arrived. Spider-Sense is tingling... 
          </p>
          <button style={styles.heroBtn} onClick={() => setStage('music')}>
            THWIP! Enter The Vibe 🕸️
          </button>
        </div>
      )}

      {/* STAGE 2: JEFF BUCKLEY VINYL PLAYER */}
      {stage === 'music' && (
        <div style={styles.card}>
          <div style={styles.musicTag}>NOW PLAYING: JEFF BUCKLEY</div>
          
          {/* Vinyl Record Animation */}
          <div style={{ ...styles.vinyl, animation: isPlaying ? 'spin 4s linear infinite' : 'none' }}>
            <div style={styles.vinylCenter}>🎸</div>
          </div>

          <p style={styles.quote}>
            "Too young to hold on, and too old to just break free and run..."
          </p>

          <p style={{ ...styles.subtitle, color: '#f43f5e', fontWeight: 'bold' }}>
            Lover, You Should've Come Over ✨
          </p>

          <button style={styles.heroBtn} onClick={() => setStage('question')}>
            Continue to Main Mission ➔
          </button>
        </div>
      )}

      {/* STAGE 3: THE IMPOSSIBLE QUESTION (DODGING NO BUTTON) */}
      {stage === 'question' && (
        <div style={{ ...styles.card, position: 'relative', overflow: 'hidden', minHeight: '380px' }}>
          <div style={{ fontSize: '60px' }}>❤️🕷️</div>
          <h2 style={styles.title}>For Rani</h2>
          <p style={styles.subtitle}>
            Will you be my Valentine? (Spider-Sense active: "No" is practically unclickable!)
          </p>

          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button
              style={{
                ...styles.heroBtn,
                width: 'auto',
                padding: `${14 + noAttempts * 4}px ${28 + noAttempts * 8}px`,
                fontSize: `${18 + noAttempts * 2}px`,
                zIndex: 10,
              }}
              onClick={() => setStage('accepted')}
            >
              YES! 💖
            </button>

            {/* Dodging No Button */}
            <button
              style={{
                ...styles.noBtn,
                position: noAttempts > 0 ? 'absolute' : 'relative',
                top: noAttempts > 0 ? noPosition.top : 'auto',
                left: noAttempts > 0 ? noPosition.left : 'auto',
                transition: 'all 0.15s ease-out',
              }}
              onMouseEnter={dodgeNoButton}
              onClick={dodgeNoButton}
            >
              {noAttempts === 0 ? "No" : noAttempts < 5 ? "Missed! 🕸️" : "Nice try! 😂"}
            </button>
          </div>
        </div>
      )}

      {/* STAGE 4: GRAND FINALE / VICTORY */}
      {stage === 'accepted' && (
        <div style={styles.card}>
          <div style={{ fontSize: '90px', animation: 'bounce 1s infinite' }}>🕷️🎉❤️</div>
          <h1 style={{ ...styles.title, color: '#e11d48', fontSize: '36px' }}>
            MISSION ACCOMPLISHED!
          </h1>
          <p style={styles.subtitle}>
            You just made my entire year, Rani! Greatest decision in the Multiverse. 🌌
          </p>
          <div style={styles.quoteBox}>
            "With great love comes great celebration." ❤️✨
          </div>
          <button style={styles.resetBtn} onClick={() => { setNoAttempts(0); setStage('intro'); }}>
            Replay Multiverse 🔄
          </button>
        </div>
      )}

      {/* Inject Keyframe Animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
}

// Custom Retro-Futuristic Styling
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    width: '100vw',
    background: 'radial-gradient(circle at center, #1e1b4b 0%, #0f172a 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    fontFamily: '"Segoe UI", Roboto, -apple-system, sans-serif',
    color: '#ffffff',
    overflow: 'hidden',
    position: 'relative',
  },
  spiderBg: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.15,
    fontSize: '120px',
  },
  webCornerTopLeft: {
    position: 'absolute',
    top: '-20px',
    left: '-20px',
  },
  webCornerTopRight: {
    position: 'absolute',
    top: '-20px',
    right: '-20px',
  },
  card: {
    background: 'rgba(30, 41, 59, 0.85)',
    backdropFilter: 'blur(20px)',
    border: '2px solid rgba(244, 63, 94, 0.4)',
    borderRadius: '32px',
    padding: '40px 30px',
    maxWidth: '440px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 0 50px rgba(225, 29, 72, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    zIndex: 2,
  },
  spideyBadge: {
    background: '#e11d48',
    color: '#fff',
    fontSize: '11px',
    fontWeight: 900,
    letterSpacing: '2px',
    padding: '6px 14px',
    borderRadius: '20px',
  },
  musicTag: {
    background: 'rgba(244, 63, 94, 0.2)',
    color: '#fb7185',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    padding: '6px 14px',
    borderRadius: '20px',
    border: '1px solid rgba(244, 63, 94, 0.3)',
    marginBottom: '20px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 900,
    margin: '10px 0',
    background: 'linear-gradient(to right, #fb7185, #e11d48)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '15px',
    color: '#94a3b8',
    lineHeight: '1.6',
    margin: '0 0 25px 0',
  },
  vinyl: {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #334155 20%, #0f172a 21%, #0f172a 100%)',
    border: '4px solid #475569',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px 0 25px 0',
    boxShadow: '0 0 25px rgba(0,0,0,0.8)',
  },
  vinylCenter: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    background: '#e11d48',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  },
  quote: {
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#cbd5e1',
    lineHeight: '1.5',
    margin: '0 0 10px 0',
  },
  heroBtn: {
    background: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
    color: '#ffffff',
    fontWeight: 'bold',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '20px',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(225, 29, 72, 0.4)',
    width: '100%',
  },
  noBtn: {
    background: '#334155',
    color: '#94a3b8',
    fontWeight: 'bold',
    border: 'none',
    padding: '14px 24px',
    borderRadius: '20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  quoteBox: {
    background: 'rgba(225, 29, 72, 0.15)',
    borderLeft: '4px solid #e11d48',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#fecdd3',
    margin: '15px 0 25px 0',
  },
  resetBtn: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '14px',
  },
};