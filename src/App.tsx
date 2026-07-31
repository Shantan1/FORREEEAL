import React, { useState } from 'react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ top: '50%', left: '60%' });
  const [claimedCoupon, setClaimedCoupon] = useState(false);

  const noPhrases = [
    "No 🥺",
    "Are you sure? 💔",
    "Think again! 🐻",
    "Last chance! 🕷️",
    "Surely not? 🎸",
    "Spidey-sense says reconsider! 🕸️",
  ];

  const handleNoDodge = () => {
    const randomTop = Math.floor(Math.random() * 60 + 20) + '%';
    const randomLeft = Math.floor(Math.random() * 60 + 20) + '%';
    setNoPosition({ top: randomTop, left: randomLeft });
    setNoCount((prev) => prev + 1);
  };

  const yesButtonSize = noCount * 12 + 18;

  return (
    <div style={styles.container}>
      {/* Background Animated Spiral Pattern */}
      <div style={styles.spiralBg} />

      {/* Slide Progress Bar */}
      <div style={styles.progressBar}>
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            style={{
              ...styles.progressDot,
              width: currentSlide === num ? '28px' : '10px',
              backgroundColor: currentSlide === num ? '#e11d48' : 'rgba(225, 29, 72, 0.3)',
            }}
          />
        ))}
      </div>

      {/* SLIDE 1: BEAR INTRO */}
      {currentSlide === 1 && (
        <div style={styles.card}>
          <div style={styles.badge}>SPECIAL DELIVERY 📬</div>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3B3aTJtc3p3Y3dtY29reHJ6ZjZhNnR3OHR4a3R2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lp8alM9xBIBS/giphy.gif"
            alt="Cute Bear GIF"
            style={styles.gifImage}
          />
          <h1 style={styles.title}>Hey Rani! ✨</h1>
          <p style={styles.subtitle}>
            I built a little interactive world just for you. Ready to explore? 🐻❤️
          </p>
          <button style={styles.primaryBtn} onClick={() => setCurrentSlide(2)}>
            Unfold the Magic ➔
          </button>
        </div>
      )}

      {/* SLIDE 2: POLAROID MEMORY CARD & SPIDER-MAN */}
      {currentSlide === 2 && (
        <div style={styles.card}>
          <div style={styles.badge}>MEMORIES & SPIDEY VIBES 🕷️</div>
          
          {/* Polaroid Frame */}
          <div style={styles.polaroidFrame}>
            <div style={styles.polaroidImageArea}>
              <span style={{ fontSize: '48px' }}>🕷️❤️</span>
            </div>
            <p style={styles.polaroidCaption}>"My Favorite Person in Every Universe"</p>
          </div>

          <p style={styles.subtitle}>
            Even Spider-Man's web couldn't catch someone as special as you, Rani! 🕸️✨
          </p>

          <button style={styles.primaryBtn} onClick={() => setCurrentSlide(3)}>
            Next Memory ➔
          </button>
        </div>
      )}

      {/* SLIDE 3: JEFF BUCKLEY VINYL RECORD */}
      {currentSlide === 3 && (
        <div style={styles.card}>
          <div style={styles.badge}>NOW PLAYING 🎸</div>
          
          {/* Animated Vinyl Player */}
          <div style={styles.vinylContainer}>
            <div style={styles.vinylRecord}>
              <div style={styles.vinylGroove} />
              <div style={styles.vinylLabel}>
                <span style={{ fontSize: '20px' }}>🎵</span>
              </div>
            </div>
          </div>

          <p style={styles.quoteText}>
            "Too young to hold on, and too old to just break free and run..."
          </p>
          <p style={styles.songTitle}>Jeff Buckley — Lover, You Should've Come Over ✨</p>

          <button style={styles.primaryBtn} onClick={() => setCurrentSlide(4)}>
            Continue to Main Mission ➔
          </button>
        </div>
      )}

      {/* SLIDE 4: THE BIG QUESTION + DODGING NO BUTTON */}
      {currentSlide === 4 && (
        <div style={{ ...styles.card, position: 'relative', overflow: 'hidden', minHeight: '430px' }}>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1a3B4bmd4bm95Mm1wZHlzN3dtcWsycGprNXBhdzcxaTRlY3Y4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c6wvY5Q92I427j10eb/giphy.gif"
            alt="Please Bear GIF"
            style={{ width: '120px', borderRadius: '16px', marginBottom: '12px' }}
          />
          <h1 style={styles.title}>For Rani ❤️</h1>
          <p style={styles.subtitle}>Will you make me the happiest person and be my Valentine?</p>

          <div style={{ marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
            <button
              style={{
                ...styles.primaryBtn,
                width: 'auto',
                fontSize: `${yesButtonSize}px`,
                padding: '14px 28px',
                zIndex: 10,
              }}
              onClick={() => setCurrentSlide(5)}
            >
              YES! ✨
            </button>

            <button
              style={{
                ...styles.secondaryBtn,
                position: noCount > 0 ? 'absolute' : 'relative',
                top: noCount > 0 ? noPosition.top : 'auto',
                left: noCount > 0 ? noPosition.left : 'auto',
                transition: 'all 0.15s ease-out',
              }}
              onMouseEnter={handleNoDodge}
              onClick={handleNoDodge}
            >
              {noPhrases[Math.min(noCount, noPhrases.length - 1)]}
            </button>
          </div>
        </div>
      )}

      {/* SLIDE 5: UNO "LOVE YOU MORE" CARD & COUPON */}
      {currentSlide === 5 && (
        <div style={styles.card}>
          <div style={{ fontSize: '60px', animation: 'bounce 1s infinite' }}>🎉❤️</div>
          <h1 style={{ ...styles.title, fontSize: '32px' }}>YAY! BEST DECISION EVER!</h1>
          <p style={styles.subtitle}>You just made my entire year, Rani! ✨</p>

          {/* UNO Reverse Card */}
          <div style={styles.unoCard}>
            <div style={styles.unoInner}>
              <span style={{ fontSize: '28px', fontWeight: 900 }}>🔀</span>
              <p style={{ margin: '6px 0 0 0', fontWeight: 900, fontSize: '15px' }}>UNO REVERSE</p>
              <p style={{ margin: '2px 0 0 0', fontSize: '13px' }}>"I Love You More!"</p>
            </div>
          </div>

          {/* Free Hugs & Kisses Coupon */}
          <div style={styles.couponBox}>
            <p style={{ margin: '0 0 6px 0', fontWeight: 'bold', color: '#be123c' }}>
              🎟️ SPECIAL COUPON 🎟️
            </p>
            <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#4b5563' }}>
              Redeemable for Unlimited Hugs & Kisses!
            </p>
            <button
              style={{
                ...styles.primaryBtn,
                padding: '10px 20px',
                fontSize: '14px',
                background: claimedCoupon ? '#10b981' : 'linear-gradient(135deg, #e11d48, #f43f5e)',
              }}
              onClick={() => setClaimedCoupon(true)}
            >
              {claimedCoupon ? '✅ CLAIMED FOREVER!' : 'Claim Coupon 🎁'}
            </button>
          </div>

          <button
            style={styles.replayBtn}
            onClick={() => {
              setNoCount(0);
              setClaimedCoupon(false);
              setCurrentSlide(1);
            }}
          >
            Replay Experience 🔄
          </button>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spiralRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

// Inline Styles Object
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#0f172a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  spiralBg: {
    position: 'absolute',
    width: '800px',
    height: '800px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(244,63,94,0.25) 0%, rgba(225,29,72,0.05) 50%, transparent 70%)',
    animation: 'spiralRotate 20s linear infinite',
    pointerEvents: 'none',
  },
  progressBar: {
    position: 'fixed',
    top: '25px',
    display: 'flex',
    gap: '8px',
    zIndex: 20,
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '8px 16px',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  progressDot: {
    height: '8px',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(20px)',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '32px',
    padding: '36px 28px',
    maxWidth: '420px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(225, 29, 72, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    zIndex: 2,
  },
  badge: {
    background: 'linear-gradient(135deg, #e11d48, #f43f5e)',
    color: '#ffffff',
    fontSize: '11px',
    fontWeight: 900,
    letterSpacing: '1.5px',
    padding: '6px 14px',
    borderRadius: '20px',
    marginBottom: '16px',
  },
  gifImage: {
    width: '140px',
    height: '140px',
    borderRadius: '20px',
    objectFit: 'cover',
    marginBottom: '16px',
  },
  title: {
    fontSize: '30px',
    fontWeight: 900,
    color: '#be123c',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '15px',
    color: '#4b5563',
    lineHeight: '1.5',
    margin: '0 0 24px 0',
  },
  primaryBtn: {
    background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)',
    color: '#ffffff',
    fontWeight: 'bold',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '18px',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(225, 29, 72, 0.3)',
    width: '100%',
    transition: 'all 0.2s ease',
  },
  secondaryBtn: {
    backgroundColor: '#e5e7eb',
    color: '#374151',
    fontWeight: 'bold',
    border: 'none',
    padding: '14px 22px',
    borderRadius: '18px',
    fontSize: '15px',
    cursor: 'pointer',
  },
  polaroidFrame: {
    background: '#ffffff',
    padding: '12px 12px 20px 12px',
    borderRadius: '8px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
    transform: 'rotate(-2deg)',
    marginBottom: '20px',
    width: '80%',
  },
  polaroidImageArea: {
    background: '#ffe4e6',
    height: '140px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  polaroidCaption: {
    margin: '12px 0 0 0',
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#be123c',
    fontStyle: 'italic',
  },
  vinylContainer: {
    margin: '15px 0 20px 0',
  },
  vinylRecord: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: '#0f172a',
    border: '3px solid #334155',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 25px rgba(225, 29, 72, 0.25)',
    animation: 'spin 4s linear infinite',
    position: 'relative',
  },
  vinylGroove: {
    position: 'absolute',
    inset: '8px',
    borderRadius: '50%',
    border: '1px dashed rgba(255,255,255,0.2)',
  },
  vinylLabel: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#e11d48',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  quoteText: {
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#374151',
    margin: '0 0 6px 0',
  },
  songTitle: {
    fontSize: '13px',
    color: '#e11d48',
    fontWeight: 'bold',
    marginBottom: '24px',
  },
  unoCard: {
    background: 'linear-gradient(135deg, #e11d48, #be123c)',
    color: '#ffffff',
    padding: '16px',
    borderRadius: '16px',
    boxShadow: '0 10px 20px rgba(225, 29, 72, 0.3)',
    marginBottom: '16px',
    width: '80%',
    transform: 'rotate(2deg)',
  },
  unoInner: {
    border: '2px solid #ffffff',
    borderRadius: '12px',
    padding: '10px',
  },
  couponBox: {
    background: '#ffe4e6',
    border: '2px dashed #f43f5e',
    borderRadius: '18px',
    padding: '14px',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '20px',
  },
  replayBtn: {
    background: 'none',
    border: 'none',
    color: '#e11d48',
    textDecoration: 'underline',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
  },
};