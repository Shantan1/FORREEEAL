import React, { useState } from 'react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [websTapped, setWebsTapped] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ top: '60%', left: '60%' });
  const [claimedCoupons, setClaimedCoupons] = useState<{ [key: number]: boolean }>({});

  // Audio link for Jeff Buckley vibe snippet
  const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; 

  const noPhrases = [
    "No 🥺",
    "Are you sure? 💔",
    "Spidey sense says reconsider! 🕸️",
    "Think again! 🐻",
    "Last chance! 🎸",
  ];

  const handleWebTap = () => {
    if (websTapped < 2) {
      setWebsTapped((prev) => prev + 1);
    } else {
      setWebsTapped(3);
      setTimeout(() => setCurrentSlide(2), 600);
    }
  };

  const handleNoDodge = () => {
    const randomTop = Math.floor(Math.random() * 60 + 20) + '%';
    const randomLeft = Math.floor(Math.random() * 60 + 20) + '%';
    setNoPosition({ top: randomTop, left: randomLeft });
    setNoCount((prev) => prev + 1);
  };

  const toggleCoupon = (id: number) => {
    setClaimedCoupons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const yesButtonSize = noCount * 10 + 18;

  return (
    <div style={styles.container}>
      <div style={styles.spiralBg} />

      {/* Progress Indicator */}
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

      {/* SLIDE 1: SPIDEY MINI GAME */}
      {currentSlide === 1 && (
        <div style={styles.card}>
          <div style={styles.badge}>MINI-GAME UNLOCK 🕷️</div>
          <h1 style={styles.title}>Hey Rani! ✨</h1>
          <p style={styles.subtitle}>
            Tap all 3 Spidey Webs on the card to unlock your secret Valentine delivery! ({websTapped}/3)
          </p>

          <div style={styles.webGrid}>
            {[1, 2, 3].map((id) => (
              <button
                key={id}
                onClick={handleWebTap}
                style={{
                  ...styles.webBtn,
                  opacity: websTapped >= id ? 0.3 : 1,
                  transform: websTapped >= id ? 'scale(0.8)' : 'scale(1)',
                }}
              >
                {websTapped >= id ? '✅' : '🕸️'}
              </button>
            ))}
          </div>

          {websTapped === 3 && (
            <p style={{ color: '#10b981', fontWeight: 'bold', animation: 'bounce 0.5s' }}>
              ACCESS GRANTED! Opening... 🚀
            </p>
          )}
        </div>
      )}

      {/* SLIDE 2: JEFF BUCKLEY VINYL PLAYER */}
      {currentSlide === 2 && (
        <div style={styles.card}>
          <div style={styles.badge}>NOW PLAYING: JEFF BUCKLEY 🎸</div>
          
          <div style={styles.vinylContainer}>
            <div
              style={{
                ...styles.vinylRecord,
                animation: isPlaying ? 'spin 3s linear infinite' : 'none',
              }}
            >
              <div style={styles.vinylGroove} />
              <div style={styles.vinylLabel}>
                <span>🎵</span>
              </div>
            </div>
          </div>

          {/* Equalizer Bars */}
          <div style={styles.equalizer}>
            <div style={{ ...styles.eqBar, height: isPlaying ? '24px' : '8px' }} />
            <div style={{ ...styles.eqBar, height: isPlaying ? '36px' : '12px' }} />
            <div style={{ ...styles.eqBar, height: isPlaying ? '18px' : '6px' }} />
            <div style={{ ...styles.eqBar, height: isPlaying ? '30px' : '10px' }} />
          </div>

          <p style={styles.quoteText}>"Lover, You Should've Come Over"</p>

          <button
            style={styles.musicToggleBtn}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? '⏸️ Pause Vibe' : '▶️ Play Song Snippet'}
          </button>

          <button style={{ ...styles.primaryBtn, marginTop: '20px' }} onClick={() => setCurrentSlide(3)}>
            Next Memory ➔
          </button>
        </div>
      )}

      {/* SLIDE 3: INTERACTIVE POLAROID CARD */}
      {currentSlide === 3 && (
        <div style={styles.card}>
          <div style={styles.badge}>MEMORY SNAPSHOT 📸</div>
          
          <div style={styles.polaroidFrame}>
            <div style={styles.polaroidImageArea}>
              <span style={{ fontSize: '56px' }}>🕷️❤️</span>
            </div>
            <p style={styles.polaroidCaption}>"My favorite person in every universe."</p>
          </div>

          <p style={styles.subtitle}>
            Just like a classic song, having you around never gets old, Rani! ✨
          </p>

          <button style={styles.primaryBtn} onClick={() => setCurrentSlide(4)}>
            Continue to Main Mission ➔
          </button>
        </div>
      )}

      {/* SLIDE 4: THE BIG QUESTION */}
      {currentSlide === 4 && (
        <div style={{ ...styles.card, position: 'relative', overflow: 'hidden', minHeight: '430px' }}>
          <div style={{ fontSize: '60px', marginBottom: '10px' }}>💖🕷️</div>
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

      {/* SLIDE 5: UNO REVERSE & COUPON DECK */}
      {currentSlide === 5 && (
        <div style={styles.card}>
          <div style={{ fontSize: '60px', animation: 'bounce 1s infinite' }}>🎉❤️</div>
          <h1 style={{ ...styles.title, fontSize: '28px' }}>YAY! BEST DECISION EVER!</h1>

          {/* UNO Reverse Card */}
          <div style={styles.unoCard}>
            <div style={styles.unoInner}>
              <span style={{ fontSize: '24px', fontWeight: 900 }}>🔀 UNO REVERSE</span>
              <p style={{ margin: '4px 0 0 0', fontSize: '13px' }}>"YOU are now MY Valentine!"</p>
            </div>
          </div>

          <h3 style={{ color: '#be123c', margin: '15px 0 10px 0', fontSize: '16px' }}>
            🎟️ CLAIM YOUR COUPONS:
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            {[
              { id: 1, title: '☕ Late Night Coffee / Boba Date' },
              { id: 2, title: '🎬 Movie Night (You Control Remote)' },
              { id: 3, title: '👑 Unlimited Free Hugs & Kisses' },
            ].map((coupon) => (
              <div
                key={coupon.id}
                onClick={() => toggleCoupon(coupon.id)}
                style={{
                  ...styles.couponCard,
                  backgroundColor: claimedCoupons[coupon.id] ? '#d1fae5' : '#ffe4e6',
                  borderColor: claimedCoupons[coupon.id] ? '#10b981' : '#f43f5e',
                }}
              >
                <span>{coupon.title}</span>
                <span style={{ fontWeight: 'bold', color: claimedCoupons[coupon.id] ? '#059669' : '#e11d48' }}>
                  {claimedCoupons[coupon.id] ? 'CLAIMED ✅' : 'TAP TO CLAIM 🎁'}
                </span>
              </div>
            ))}
          </div>

          <button
            style={styles.replayBtn}
            onClick={() => {
              setWebsTapped(0);
              setNoCount(0);
              setClaimedCoupons({});
              setCurrentSlide(1);
            }}
          >
            Replay Experience 🔄
          </button>
        </div>
      )}

      {/* Styling Keyframes */}
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes spiralRotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      `}</style>
    </div>
  );
}

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
    width: '750px',
    height: '750px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(244,63,94,0.2) 0%, transparent 70%)',
    animation: 'spiralRotate 25s linear infinite',
    pointerEvents: 'none',
  },
  progressBar: {
    position: 'fixed',
    top: '20px',
    display: 'flex',
    gap: '8px',
    zIndex: 20,
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '8px 16px',
    borderRadius: '20px',
  },
  progressDot: {
    height: '8px',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.94)',
    backdropFilter: 'blur(20px)',
    borderRadius: '32px',
    padding: '35px 25px',
    maxWidth: '420px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
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
    letterSpacing: '1px',
    padding: '6px 14px',
    borderRadius: '20px',
    marginBottom: '16px',
  },
  title: { fontSize: '28px', fontWeight: 900, color: '#be123c', margin: '0 0 8px 0' },
  subtitle: { fontSize: '15px', color: '#4b5563', lineHeight: '1.5', marginBottom: '20px' },
  webGrid: { display: 'flex', gap: '15px', margin: '20px 0' },
  webBtn: {
    fontSize: '36px',
    background: '#ffe4e6',
    border: '2px solid #f43f5e',
    borderRadius: '20px',
    padding: '15px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  vinylContainer: { margin: '15px 0' },
  vinylRecord: {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    background: '#0f172a',
    border: '3px solid #334155',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 20px rgba(225, 29, 72, 0.3)',
  },
  vinylGroove: { position: 'absolute', inset: '8px', borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.2)' },
  vinylLabel: { width: '36px', height: '36px', borderRadius: '50%', background: '#e11d48', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  equalizer: { display: 'flex', gap: '4px', alignItems: 'flex-end', height: '36px', margin: '10px 0' },
  eqBar: { width: '6px', background: '#e11d48', borderRadius: '4px', transition: 'height 0.2s ease' },
  quoteText: { fontSize: '14px', fontStyle: 'italic', color: '#374151', margin: '5px 0 15px 0' },
  musicToggleBtn: {
    background: '#ffe4e6',
    color: '#be123c',
    border: '1px solid #f43f5e',
    padding: '10px 20px',
    borderRadius: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
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
    width: '100%',
  },
  secondaryBtn: { backgroundColor: '#e5e7eb', color: '#374151', fontWeight: 'bold', border: 'none', padding: '14px 22px', borderRadius: '18px', fontSize: '15px' },
  polaroidFrame: { background: '#ffffff', padding: '12px 12px 20px 12px', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', transform: 'rotate(-2deg)', marginBottom: '20px', width: '80%' },
  polaroidImageArea: { background: '#ffe4e6', height: '130px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  polaroidCaption: { margin: '10px 0 0 0', fontSize: '13px', fontWeight: 'bold', color: '#be123c', fontStyle: 'italic' },
  unoCard: { background: 'linear-gradient(135deg, #e11d48, #be123c)', color: '#ffffff', padding: '12px', borderRadius: '14px', width: '85%', transform: 'rotate(2deg)', marginBottom: '10px' },
  unoInner: { border: '2px solid #ffffff', borderRadius: '10px', padding: '8px' },
  couponCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    borderRadius: '14px',
    border: '1px dashed',
    fontSize: '13px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  replayBtn: { background: 'none', border: 'none', color: '#e11d48', textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px', marginTop: '15px' },
};