import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
    {
        icon: '💻',
        title: 'Programming Languages',
        desc: 'Java, JavaScript, SQL',
        color: 'var(--orange)',
    },
    {
        icon: '🎨',
        title: 'Frontend',
        desc: 'HTML, CSS, React.js, Next.js, Tailwind CSS',
        color: 'var(--teal)',
    },
    {
        icon: '⚙️',
        title: 'Backend',
        desc: 'Node.js',
        color: 'var(--pink)',
    },
    {
        icon: '🛠️',
        title: 'Tools',
        desc: 'Git, GitHub, VS Code',
        color: 'var(--orange)',
    },
    {
        icon: '✏️',
        title: 'UI/UX',
        desc: 'Figma, Spline, Canva',
        color: 'var(--teal)',
    },
    {
        icon: '✨',
        title: 'Other',
        desc: 'Sketching, Story Writing',
        color: 'var(--pink)',
    },
];

export default function Services() {
    const sectionRef = useScrollReveal();

    return (
        <section id="services" ref={sectionRef} style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '3rem 1.5rem 6rem',
        }}>
            <div className="scroll-reveal" style={{ marginBottom: '4rem' }}>
                <p className="font-slab" style={{
                    color: 'var(--teal)',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    marginBottom: '1rem',
                }}>★ What I Do</p>
                <h2 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                    <span style={{ color: 'var(--navy)' }}>My</span>{' '}
                    <span style={{ color: 'var(--orange)' }}>Skills</span>
                </h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '2rem',
            }}>
                {services.map((s, i) => (
                    <div key={i} className="scroll-reveal" style={{
                        transitionDelay: `${i * 0.1}s`,
                    }}>
                        <div className="neo-card" style={{
                            padding: '2.5rem 2rem',
                            background: 'var(--bg)',
                            height: '100%',
                        }}>
                            <div style={{
                                fontSize: '3.5rem',
                                marginBottom: '1.25rem',
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '3px solid var(--navy)',
                                background: s.color + '15',
                            }}>
                                {s.icon}
                            </div>
                            <h3 className="heading-xl" style={{
                                fontSize: '1.5rem',
                                marginBottom: '0.75rem',
                                textTransform: 'uppercase',
                                color: 'var(--navy)',
                            }}>{s.title}</h3>
                            <p style={{
                                color: '#475569',
                                lineHeight: 1.7,
                                fontSize: '1.2rem',
                                fontWeight: 600,
                            }}>{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        @media (max-width: 480px) {
          #services > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
