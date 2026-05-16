import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
    {
        title: 'ISIT EDTech',
        category: 'Full Stack',
        desc: 'A multi-user platform for students, teachers, and parents to access learning resources, track progress, and explore educational opportunities.',
        link: 'https://isic.org.in/',
        gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF3366 100%)',
        tech: ['React', 'Node.js', 'MongoDB'],
        label: 'ISIT EDTECH',
        preview: '/isit-preview.png',
    },
    {
        title: 'RED-ION',
        category: 'UI/UX Design',
        desc: 'Designed a modern streetwear e-commerce landing page with a clean, minimal layout and bold visuals focused on product presentation.',
        link: 'https://www.figma.com/proto/Z796fYWpQDli0ZCwHMZXg5/RED-ION?node-id=169-181&t=Wk4s0xJ4yP1kwWjl-1',
        gradient: 'linear-gradient(135deg, #2EC4B6 0%, #0F172A 100%)',
        tech: ['Figma'],
        label: 'RED-ION',
        preview: '/redion-preview.png',
    },
    {
        title: 'EASYPAY',
        category: 'Full Stack',
        desc: 'Built a self-checkout and health analysis web app that lets users scan items, manage purchases, and get basic health insights through a simple, user-friendly interface.',
        link: 'https://healthscan-kappa.vercel.app/',
        gradient: 'linear-gradient(135deg, #FF3366 0%, #FF6B35 100%)',
        tech: ['React', 'Tailwind', 'MongoDB'],
        label: 'EASYPAY',
        preview: '/easypay-preview.png',
    },
    {
        title: 'Lost & Found Portal',
        category: 'Full Stack',
        desc: 'Developed a responsive lost-and-found web platform with React.js frontend, Express.js and Django REST APIs backend, image uploads, and Netlify deployment for secure and smooth user experience.',
        link: 'https://silly-dusk-155e98.netlify.app/',
        gradient: 'linear-gradient(135deg, #0F172A 0%, #2EC4B6 100%)',
        tech: ['React', 'Node.js', 'Tailwind', 'MongoDB'],
        label: 'UNIFOUND',
        preview: '/unifound-preview.png',
    },
];

function EyeIcon() {
    return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

export default function Portfolio() {
    const sectionRef = useScrollReveal();

    return (
        <section id="portfolio" ref={sectionRef} style={{
            width: '100%',
            background: 'var(--teal)',
            borderTop: '4px solid var(--navy)',
            borderBottom: '4px solid var(--navy)',
            padding: '6rem 1.5rem',
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                <div className="scroll-reveal" style={{ marginBottom: '4rem' }}>
                    <p className="font-slab" style={{
                        color: 'var(--navy)',
                        fontWeight: 700,
                        fontSize: '1.125rem',
                        marginBottom: '1rem',
                    }}>★ Selected Work</p>
                    <h2 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                        <span style={{ color: 'white' }}>Featured</span>{' '}
                        <span className="heading-stroke-white">Projects</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                }}>
                    {projects.map((p, i) => (
                        <div key={i} className="scroll-reveal" style={{
                            transitionDelay: `${i * 0.12}s`,
                        }}>
                            <a
                                href={p.link || '#'}
                                target={p.link ? '_blank' : undefined}
                                rel={p.link ? 'noopener noreferrer' : undefined}
                                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                            >
                            <div
                                className="portfolio-card"
                                style={{
                                    border: '4px solid var(--navy)',
                                    boxShadow: '8px 8px 0px 0px var(--navy)',
                                    background: 'white',
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s var(--ease-bounce), box-shadow 0.3s var(--ease-bounce)',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translate(-4px, -4px)';
                                    e.currentTarget.style.boxShadow = '12px 12px 0px 0px var(--navy)';
                                    e.currentTarget.querySelector('.eye-overlay').style.transform = 'scale(1)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translate(0, 0)';
                                    e.currentTarget.style.boxShadow = '8px 8px 0px 0px var(--navy)';
                                    e.currentTarget.querySelector('.eye-overlay').style.transform = 'scale(0)';
                                }}
                            >
                                {/* Image area */}
                                <div style={{
                                    aspectRatio: '16/9',
                                    background: p.gradient,
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                }}>
                                    {/* Label text */}
                                    {p.label && <span style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontWeight: 700,
                                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                                        color: 'white',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        zIndex: 1,
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                    }}>{p.label}</span>}

                                    {/* Grid overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                        backgroundSize: '24px 24px',
                                    }} />

                                    {/* Hover overlay with preview image + eye */}
                                    <div className="eye-overlay" style={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transform: 'scale(0)',
                                        transition: 'transform 0.4s var(--ease-bounce)',
                                        borderRadius: '0',
                                        overflow: 'hidden',
                                    }}>
                                        {/* Preview image background */}
                                        {p.preview && <img src={p.preview} alt={p.title + ' preview'} style={{
                                            position: 'absolute',
                                            inset: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }} />}
                                        {/* Dark overlay on image */}
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: p.preview ? 'rgba(15, 23, 42, 0.3)' : 'rgba(15, 23, 42, 0.6)',
                                        }} />
                                        {/* Eye icon - only for cards without preview */}
                                        {!p.preview && <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '50%',
                                            background: 'rgba(255,255,255,0.15)',
                                            border: '3px solid white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            zIndex: 2,
                                        }}>
                                            <EyeIcon />
                                        </div>}
                                    </div>
                                </div>

                                {/* Info */}
                                <div style={{ padding: '1.5rem' }}>
                                    <p style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        color: 'var(--orange)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        marginBottom: '0.5rem',
                                    }}>{p.category}</p>
                                    <h3 className="heading-xl" style={{
                                        fontSize: '1.4rem',
                                        textTransform: 'uppercase',
                                        color: 'var(--navy)',
                                        marginBottom: '0.5rem',
                                    }}>{p.title}</h3>
                                    {p.desc && <p style={{
                                        fontSize: '0.9rem',
                                        color: '#64748b',
                                        lineHeight: 1.6,
                                        marginBottom: '0.75rem',
                                    }}>{p.desc}</p>}
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {p.tech.map((t, j) => (
                                            <span key={j} style={{
                                                fontSize: '0.75rem',
                                                fontWeight: 700,
                                                padding: '0.25rem 0.75rem',
                                                border: '2px solid var(--navy)',
                                                background: 'var(--bg)',
                                                textTransform: 'uppercase',
                                            }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 480px) {
          #portfolio > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
