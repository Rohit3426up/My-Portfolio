import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTA() {
    const sectionRef = useScrollReveal();

    return (
        <section id="contact" ref={sectionRef} style={{
            width: '100%',
            background: 'var(--pink)',
            borderTop: '4px solid var(--navy)',
            borderBottom: '4px solid var(--navy)',
            padding: '6rem 1.5rem',
            textAlign: 'center',
        }}>
            <div className="scroll-reveal" style={{
                maxWidth: '900px',
                margin: '0 auto',
            }}>
                <p className="font-slab" style={{
                    color: 'var(--navy)',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    marginBottom: '2rem',
                }}>★ Ready to Start?</p>

                <h2 className="heading-xl cta-heading" style={{
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    color: 'white',
                    textShadow: '8px 8px 0px var(--navy)',
                    lineHeight: 0.95,
                    marginBottom: '2rem',
                }}>
                    LET'S<br />WORK<br />TOGETHER
                </h2>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '3rem',
                    maxWidth: '500px',
                    margin: '0 auto 3rem',
                    lineHeight: 1.7,
                }}>
                    Got a project in mind? Let's create something bold, beautiful, and unforgettable.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}>
                    <a href="mailto:rohitupadhyay3426@gmail.com" className="neo-btn neo-btn-navy" style={{
                        fontSize: '1.15rem',
                        padding: '1.25rem 3rem',
                    }}
                        onMouseEnter={e => {
                            const icon = e.currentTarget.querySelector('.btn-icon');
                            if (icon) icon.style.transform = 'scale(1.3) rotate(10deg)';
                        }}
                        onMouseLeave={e => {
                            const icon = e.currentTarget.querySelector('.btn-icon');
                            if (icon) icon.style.transform = 'scale(1)';
                        }}
                    >
                        <span className="btn-icon" style={{
                            display: 'inline-block',
                            transition: 'transform 0.3s var(--ease-bounce)',
                            fontSize: '1.3rem',
                        }}>✉️</span>
                        Email Me
                    </a>
                    <a href="/resume.pdf" download className="neo-btn neo-btn-white" style={{
                        fontSize: '1.15rem',
                        padding: '1.25rem 3rem',
                    }}
                        onMouseEnter={e => {
                            const icon = e.currentTarget.querySelector('.btn-icon');
                            if (icon) icon.style.transform = 'scale(1.3) rotate(10deg)';
                        }}
                        onMouseLeave={e => {
                            const icon = e.currentTarget.querySelector('.btn-icon');
                            if (icon) icon.style.transform = 'scale(1)';
                        }}
                    >
                        <span className="btn-icon" style={{
                            display: 'inline-block',
                            transition: 'transform 0.3s var(--ease-bounce)',
                            fontSize: '1.3rem',
                        }}>📋</span>
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
