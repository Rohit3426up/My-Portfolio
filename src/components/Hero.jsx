import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
    const sectionRef = useScrollReveal();

    return (
        <section ref={sectionRef} style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 1.5rem 6rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            minHeight: '85vh',
        }} className="hero-section">
            {/* Left */}
            <div className="scroll-reveal">
                <p className="font-slab" style={{
                    fontSize: '1.125rem',
                    color: 'var(--orange)',
                    marginBottom: '1.5rem',
                    fontWeight: 700,
                }}>
                    ★ FullStack Developer & UI/UX Designer
                </p>

                <h1 className="heading-xl" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
                    <span style={{ display: 'block', color: 'var(--navy)' }}>I Build</span>
                    <span className="heading-stroke" style={{ display: 'block', fontSize: '1.05em' }}>Creative</span>
                    <span style={{ display: 'block', color: 'var(--orange)' }}>Experiences</span>
                </h1>

                <p className="font-slab" style={{
                    fontSize: '1.15rem',
                    lineHeight: 1.7,
                    marginTop: '2rem',
                    maxWidth: '500px',
                    color: '#475569',
                }}>
                    A passionate developer from Noida, India, turning ideas into
                    high-impact digital products. I blend clean code with bold design
                    to create experiences that feel alive.
                </p>

                <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="#portfolio" className="neo-btn neo-btn-orange" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                        View Project ↗
                    </a>
                    <a href="/resume.pdf" download className="neo-btn neo-btn-white" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                        📋 Resume
                    </a>
                </div>
            </div>

            {/* Right */}
            <div className="scroll-reveal" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}>
                {/* Circle Container */}
                <div style={{
                    width: 'clamp(280px, 28vw, 400px)',
                    height: 'clamp(280px, 28vw, 400px)',
                    borderRadius: '50%',
                    background: 'var(--teal)',
                    border: '4px solid var(--navy)',
                    boxShadow: '8px 8px 0px 0px var(--navy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(5rem, 10vw, 8rem)',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    <img
                        src="/rohit-hero-bw.jpg"
                        alt="Rohit Kumar"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                    />

                    {/* Background pattern overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                        borderRadius: '50%',
                        zIndex: 1,
                    }} />
                </div>

                {/* Floating Badge */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    background: 'var(--pink)',
                    border: '4px solid var(--navy)',
                    boxShadow: '6px 6px 0px 0px var(--navy)',
                    padding: '1rem 1.25rem',
                    transform: 'rotate(12deg)',
                    animation: 'float 6s ease-in-out infinite',
                    color: 'white',
                    textAlign: 'center',
                }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '2rem', lineHeight: 1 }}>5+</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Projects</div>
                </div>

                {/* Another floating element */}
                <div style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: '10%',
                    background: 'var(--orange)',
                    border: '4px solid var(--navy)',
                    boxShadow: '6px 6px 0px 0px var(--navy)',
                    padding: '0.75rem 1rem',
                    transform: 'rotate(-8deg)',
                    animation: 'float 8s ease-in-out infinite 2s',
                    color: 'white',
                    textAlign: 'center',
                }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', lineHeight: 1 }}>5+</div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Design</div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            text-align: center;
            min-height: auto !important;
            padding-top: 2rem !important;
            padding-bottom: 3rem !important;
          }
          .hero-section > div:last-child {
            order: -1;
          }
        }
      `}</style>
        </section>
    );
}
