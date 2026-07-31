import React, { useState } from 'react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [noCount, setNoCount] = useState(0);

  const noPhrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again! 🥺",
    "Last chance!",
    "Surely not?",
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

  // Inline Styles for foolproof design & zero external library crashes
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

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(16px)',
    padding: '40px 30px',
    borderRadius: '30px',
    boxShadow: '0 25px 50px rgba(225, 29, 72, 0.2)',
    border: '1px solid rgba(255, 255, 255, 1)',
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
    padding: '15px 30px',
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

      {/* SLIDE 1 */}
      {currentSlide === 1 && (
        <div style={cardStyle}>
          <div style={{ fontSize: '60px', marginBottom: '15px' }}>🎁</div>
          <h1 style={{ fontSize: '32px', color: '#be123c', margin: '0 0 10px 0', fontWeight: 900 }}>
            Hey Rani! ✨
          </h1>
          <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.5', marginBottom: '30px' }}>
            I crafted a special digital card just for you. Ready to open it?
          </p>
          <button onClick={() => setCurrentSlide(2)} style={primaryBtnStyle}>
            Let's Open It ➔
          </button>
        </div>
      )}

      {/* SLIDE 2 */}
      {currentSlide === 2 && (
        <div style={cardStyle}>
          <div style={{ fontSize: '60px', marginBottom: '15px' }}>🌟</div>
          <h2 style={{ fontSize: '26px', color: '#be123c', margin: '0 0 10px 0', fontWeight: 800 }}>
            Just a gentle reminder...
          </h2>
          <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.5', marginBottom: '30px' }}>
            Your smile literally lights up every space around you. Everything gets 100x brighter whenever you're around! 💖
          </p>
          <button onClick={() => setCurrentSlide(3)} style={primaryBtnStyle}>
            Continue ➔
          </button>
        </div>
      )}

      {/* SLIDE 3 */}
      {currentSlide === 3 && (
        <div style={cardStyle}>
          <div style={{ fontSize: '70px', marginBottom: '10px', animation: 'pulse 1.5s infinite' }}>
            ❤️
          </div>
          <h1 style={{ fontSize: '32px', color: '#be123c', margin: '0 0 10px 0', fontWeight: 900 }}>
            For Rani ❤️
          </h1>
          <p style={{ fontSize: '16px', color: '#4b5563', marginBottom: '30px' }}>
            Will you make me the happiest person and be my Valentine?
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
                padding: '15px 20px',
                borderRadius: '16px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              {noPhrases[Math.min(noCount, noPhrases.length - 1)]}
            </button>
          </div>
        </div>
      )}

      {/* SLIDE 4 */}
      {currentSlide === 4 && (
        <div style={cardStyle}>
          <div style={{ fontSize: '70px', marginBottom: '15px' }}>🎉</div>
          <h2 style={{ fontSize: '28px', color: '#be123c', margin: '0 0 12px 0', fontWeight: 900 }}>
            YAY! Best Decision Ever! 🥰
          </h2>
          <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.5', marginBottom: '25px' }}>
            You just made my day, Rani! Can't wait to celebrate together! ❤️✨
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
            Replay memory
          </button>
        </div>
      )}
    </div>
  );
}