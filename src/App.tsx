import React, { useState } from 'react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [noCount, setNoCount] = useState(0);

  const noPhrases = [
    "No",
    "Are you sure?",
    "Spidey sense says think again! 🕸️",
    "Think again! 🥺",
    "Last chance!",
    "Jeff Buckley wouldn't like this! 🎸",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "Have a heart! ❤️",
  ];

  const handleYes = () => {
    setCurrentSlide(4);
  };

  const handleNo = () => {
    setNoCount((prev) => prev + 1);
  };

  const yesButtonSize = noCount * 14 + 18;

  // Global Container Style
  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #ffe4e6 0%, #fecdd3 50%, #fda4af 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  };

  // Glass Card Style
  const cardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(16px)',
    padding: '35px 25px',
    borderRadius: '28px',
    boxShadow: '0 20px 45px rgba(225, 29, 72, 0.2)',
    border: '2px solid rgba(255, 255, 255, 0.9)',
    maxWidth: '420px',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
  };

  const primaryBtnStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)',
    color: '#ffffff',
    fontWeight: 'bold',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '16px',
    fontSize: '18px',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(225, 29, 72, 0.3)',
    width: '100%',
    transition: 'all 0.2s ease',
  };

  return (
    <div style={containerStyle}>
      {/* Progress Dots */}
      <div style={{ position: 'fixed', top: '30px', display: 'flex', gap: '8px', zIndex: 10 }}>
        {[1, 2, 3, 4].map((slideNum) => (
          <div
            key={slideNum}
            style={{
              height: '10px',
              width: currentSlide === slideNum ? '30px' : '10px',
              backgroundColor: currentSlide === slideNum ? '#e11d48' : 'rgba(225, 29, 72, 0.25)',
              borderRadius: '10px',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* SLIDE 1: INTRO */}
      {currentSlide === 1 && (
        <div style={cardStyle}>
          <div style={{ fontSize: '64px', marginBottom: '10px' }}>🕷️❤️</div>
          <h1 style={{ fontSize: '32px', color: '#be123c', margin: '0 0 8px 0', fontWeight: 900 }}>
            Hey Rani! ✨
          </h1>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6', marginBottom: '24px' }}>
            Even Spidey's web couldn't pull me away from creating something special for you. Ready to explore? 🕸️
          </p>
          <button onClick={() => setCurrentSlide(2)} style={primaryBtnStyle}>
            Open Surprise ➔
          </button>
        </div>
      )}

      {/* SLIDE 2: JEFF BUCKLEY & MEMORY VIBES */}
      {currentSlide === 2 && (
        <div style={cardStyle}>
          <div style={{ fontSize: '64px', marginBottom: '10px' }}>🎸🎶</div>
          <h2 style={{ fontSize: '26px', color: '#be123c', margin: '0 0 10px 0', fontWeight: 800 }}>
            A Little Vibe Check...
          </h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6', marginBottom: '16px' }}>
            Just like playing a classic <strong>Jeff Buckley</strong> track on repeat, having you around makes everything feel 100x better. 
          </p>
          <div style={{ background: '#ffe4e6', padding: '12px 16px', borderRadius: '16px', fontSize: '14px', color: '#9f1239', fontWeight: 600, marginBottom: '24px' }}>
            🎵 "My lover's got sweet things to say..." ✨
          </div>
          <button onClick={() => setCurrentSlide(3)} style={primaryBtnStyle}>
            Next Page ➔
          </button>
        </div>
      )}

      {/* SLIDE 3: THE VALENTINE QUESTION */}
      {currentSlide === 3 && (
        <div style={cardStyle}>
          <div style={{ fontSize: '70px', marginBottom: '10px' }}>💖</div>
          <h1 style={{ fontSize: '30px', color: '#be123c', margin: '0 0 8px 0', fontWeight: 900 }}>
            For Rani ❤️
          </h1>
          <p style={{ fontSize: '15px', color: '#4b5563', marginBottom: '24px', lineHeight: '1.5' }}>
            You're my Mary Jane, my favorite person, and my favorite song. Will you be my Valentine?
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
            <button
              onClick={handleYes}
              style={{
                ...primaryBtnStyle,
                fontSize: `${yesButtonSize}px`,
                padding: '14px 24px',
                width: 'auto',
                flex: 1,
              }}
            >
              ✨ Yes!
            </button>

            <button
              onClick={handleNo}
              style={{
                backgroundColor: '#e5e7eb',
                color: '#374151',
                fontWeight: 'bold',
                border: 'none',
                padding: '14px 20px',
                borderRadius: '16px',
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              {noPhrases[Math.min(noCount, noPhrases.length - 1)]}
            </button>
          </div>
        </div>
      )}

      {/* SLIDE 4: CELEBRATION */}
      {currentSlide === 4 && (
        <div style={cardStyle}>
          <div style={{ fontSize: '70px', marginBottom: '10px' }}>🕷️🎉</div>
          <h2 style={{ fontSize: '28px', color: '#be123c', margin: '0 0 10px 0', fontWeight: 900 }}>
            BEST DECISION EVER! 🥰
          </h2>
          <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6', marginBottom: '24px' }}>
            You just made my entire day, Rani! Spidey level excitement right now! Can't wait to celebrate together ❤️✨
          </p>
          <button
            onClick={() => {
              setNoCount(0);
              setCurrentSlide(1);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#e11d48',
              textDecoration: 'underline',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Replay Memory 🔄
          </button>
        </div>
      )}
    </div>
  );
}