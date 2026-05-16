import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
    {
        name: 'Ashish Tyagi',
        role: 'Founder, ISIC',
        initial: 'A',
        color: 'var(--orange)',
        quote: '"Rohit showed strong ownership throughout the project, delivering design, frontend, and research with a clean, well-structured, and user-friendly approach."',
    },
];

function StarRating() {
    return (
        <div style={{ display: 'flex', gap: '4px' }}>
            {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFD700">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const sectionRef = useScrollReveal();

    return (
        <section id="testimonials" ref={sectionRef} style={{
            width: '100%',
            background: 'var(--navy)',
            borderTop: '4px solid var(--navy)',
            borderBottom: '4px solid var(--navy)',
            padding: '6rem 1.5rem',
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                {/* Header row */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '3rem',
                    marginBottom: '4rem',
                    flexWrap: 'wrap',
                }}>
                    <div className="scroll-reveal">
                        <p className="font-slab" style={{
                            color: 'var(--teal)',
                            fontWeight: 700,
                            fontSize: '1.125rem',
                            marginBottom: '1rem',
                        }}>★ Client Love</p>
                        <h2 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                            <span style={{ color: 'white' }}>What They</span>{' '}
                            <span style={{ color: 'var(--orange)' }}>Say</span>
                        </h2>
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                }}>
                    {testimonials.map((t, i) => (
                        <div key={i} className="neo-card scroll-reveal" style={{
                            padding: '2.5rem 2rem',
                            background: 'white',
                            transitionDelay: `${i * 0.12}s`,
                        }}>
                            {/* Avatar + Name */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '1.5rem',
                            }}>
                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '50%',
                                    background: t.color,
                                    border: '3px solid var(--navy)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 900,
                                    fontSize: '1.25rem',
                                    fontFamily: 'var(--font-heading)',
                                    flexShrink: 0,
                                }}>
                                    {t.initial}
                                </div>
                                <div>
                                    <div style={{
                                        fontWeight: 900,
                                        fontSize: '1rem',
                                        color: 'var(--navy)',
                                    }}>{t.name}</div>
                                    <div style={{
                                        fontSize: '0.8rem',
                                        color: '#94a3b8',
                                        fontWeight: 600,
                                    }}>{t.role}</div>
                                </div>
                            </div>
                            {/* Quote */}
                            <p className="font-slab" style={{
                                fontSize: '1.05rem',
                                lineHeight: 1.7,
                                color: '#334155',
                            }}>{t.quote}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
