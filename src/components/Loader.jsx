import { useState, useEffect } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [exiting, setExiting] = useState(false);

  const words = ['DESIGN', 'DEVELOP', 'DEPLOY', 'DELIVER'];
  const tagline = 'ROHIT KUMAR';

  useEffect(() => {
    // Progress bar animation over 4.5 seconds
    const startTime = Date.now();
    const duration = 2500;

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(progressInterval);
    }, 30);

    // Cycle words every 1s
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1000);

    // Start exit at 4.5s, complete at 5s
    const exitTimer = setTimeout(() => setExiting(true), 2500);
    const completeTimer = setTimeout(() => onComplete(), 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(wordInterval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      background: 'var(--navy)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      transition: 'clip-path 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
      clipPath: exiting ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)',
    }}>

      {/* Dot grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      {/* Floating geometric shapes */}
      <div className="loader-shape shape-1" />
      <div className="loader-shape shape-2" />
      <div className="loader-shape shape-3" />
      <div className="loader-shape shape-4" />
      <div className="loader-shape shape-5" />

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.5rem',
        textAlign: 'center',
      }}>



        {/* Cycling words */}
        <div style={{
          height: 'clamp(80px, 12vw, 130px)',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
          {words.map((word, i) => (
            <span
              key={word}
              style={{
                position: 'absolute',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                textTransform: 'uppercase',
                letterSpacing: '-0.03em',
                color: 'transparent',
                WebkitTextStroke: i === currentWord ? '3px var(--teal)' : '2px rgba(255,255,255,0.1)',
                transform: i === currentWord ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.8)',
                opacity: i === currentWord ? 1 : 0,
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Name + role */}
        <div style={{ textAlign: 'center', width: '100%' }}>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: 'white',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            animation: 'loaderFadeIn 1s ease forwards',
          }}>
            {tagline.split('').map((char, i) => (
              <span key={i} style={{
                display: 'inline-block',
                animation: `loaderLetterReveal 0.5s ease forwards`,
                animationDelay: `${i * 0.06}s`,
                opacity: 0,
                transform: 'translateY(20px)',
              }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </p>
          <p style={{
            fontFamily: 'var(--font-slab)',
            fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
            color: 'var(--orange)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginTop: '1rem',
            animation: 'loaderFadeIn 1s 0.8s ease forwards',
            opacity: 0,
          }}>
            FullStack Developer & UI/UX Designer
          </p>
        </div>

        {/* Progress bar */}
        <div style={{
          width: 'clamp(320px, 60vw, 600px)',
          marginTop: '1.5rem',
        }}>
          {/* Progress track */}
          <div style={{
            width: '100%',
            height: '14px',
            background: 'rgba(255,255,255,0.08)',
            border: '3px solid rgba(255,255,255,0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Progress fill */}
            <div style={{
              width: `${progress}%`,
              height: '100%',
              background: `linear-gradient(90deg, var(--orange), var(--pink), var(--teal))`,
              transition: 'width 0.1s linear',
              position: 'relative',
            }}>
              {/* Shimmer effect */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                animation: 'loaderShimmer 1.5s infinite',
              }} />
            </div>
          </div>

          {/* Progress text */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
          }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              Loading Portfolio
            </span>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              fontWeight: 700,
              color: 'var(--teal)',
            }}>
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
      }}>
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{
            width: i === 2 ? '40px' : '12px',
            height: '4px',
            background: i === 2 ? 'var(--orange)' : 'rgba(255,255,255,0.15)',
            animation: `loaderDotPulse 1.5s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }} />
        ))}
      </div>

      <style>{`
        @keyframes loaderSpin {
          to { transform: rotate(360deg); }
        }

        @keyframes loaderFadeIn {
          to { opacity: 1; }
        }

        @keyframes loaderLetterReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loaderShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        @keyframes loaderDotPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes shapeFloat1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -40px) rotate(90deg); }
          50% { transform: translate(-20px, -80px) rotate(180deg); }
          75% { transform: translate(40px, -30px) rotate(270deg); }
        }

        @keyframes shapeFloat2 {
          0%, 100% { transform: translate(0, 0) rotate(45deg); }
          33% { transform: translate(-50px, 30px) rotate(135deg); }
          66% { transform: translate(30px, -50px) rotate(225deg); }
        }

        @keyframes shapeFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 40px) scale(1.2); }
        }

        .loader-shape {
          position: absolute;
          z-index: 1;
        }

        .shape-1 {
          width: 60px;
          height: 60px;
          border: 4px solid var(--orange);
          top: 12%;
          left: 8%;
          animation: shapeFloat1 8s ease-in-out infinite;
          opacity: 0.4;
        }

        .shape-2 {
          width: 40px;
          height: 40px;
          background: var(--teal);
          border-radius: 50%;
          bottom: 18%;
          right: 10%;
          animation: shapeFloat2 6s ease-in-out infinite;
          opacity: 0.3;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          border: 4px solid var(--pink);
          border-radius: 50%;
          top: 20%;
          right: 15%;
          animation: shapeFloat3 7s ease-in-out infinite;
          opacity: 0.25;
        }

        .shape-4 {
          width: 30px;
          height: 30px;
          background: var(--orange);
          bottom: 25%;
          left: 15%;
          transform: rotate(45deg);
          animation: shapeFloat2 9s ease-in-out infinite reverse;
          opacity: 0.2;
        }

        .shape-5 {
          width: 20px;
          height: 20px;
          border: 3px solid var(--teal);
          top: 60%;
          right: 25%;
          transform: rotate(45deg);
          animation: shapeFloat1 5s ease-in-out infinite reverse;
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
}
