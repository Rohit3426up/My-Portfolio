import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
    {
        subtitle: 'Building Scalable Systems',
        desc: 'I design and develop backend systems using Java & Spring Boot, focusing on performance, scalability, and clean architecture.',
        color: 'var(--orange)',
    },
    {
        subtitle: 'User-Centered Design',
        desc: 'I create intuitive UI/UX designs using Figma, ensuring every interface is visually appealing and easy to use.',
        color: 'var(--teal)',
    },
    {
        subtitle: 'Continuous Improvement',
        desc: 'I constantly explore new technologies like cloud, AI tools, and modern frameworks to stay industry-ready.',
        color: 'var(--pink)',
    },
    {
        subtitle: 'Collaborative Development',
        desc: 'I believe in clear communication, teamwork, and delivering impactful products efficiently.',
        color: 'var(--orange)',
    },
];

export default function Process() {
    const sectionRef = useScrollReveal();

    return (
        <section id="process" ref={sectionRef} style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '6rem 1.5rem 3rem',
        }}>
            <div className="scroll-reveal" style={{ marginBottom: '4rem' }}>
                <p className="font-slab" style={{
                    color: 'var(--pink)',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    marginBottom: '1rem',
                }}>★ Get to Know Me</p>
                <h2 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                    <span style={{ color: 'var(--navy)' }}>About</span>{' '}
                    <span style={{ color: 'var(--orange)' }}>Me</span>
                </h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
            }} className="process-grid">
                {/* Left: Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {highlights.map((item, i) => (
                        <div
                            key={i}
                            className="process-step scroll-reveal"
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1.5rem',
                                padding: '2rem 1.5rem',
                                borderBottom: i < highlights.length - 1 ? '3px solid #e2e8f0' : 'none',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease',
                                transitionDelay: `${i * 0.1}s`,
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = item.color + '10';
                                e.currentTarget.querySelector('.step-num').style.webkitTextStrokeColor = item.color;
                                e.currentTarget.querySelector('.step-num').style.color = item.color;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.querySelector('.step-num').style.webkitTextStrokeColor = 'var(--navy)';
                                e.currentTarget.querySelector('.step-num').style.color = 'transparent';
                            }}
                        >
                            <span className="step-num" style={{
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 700,
                                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                lineHeight: 0.9,
                                WebkitTextStroke: '3px var(--navy)',
                                color: 'transparent',
                                transition: 'color 0.3s ease, -webkit-text-stroke-color 0.3s ease',
                                flexShrink: 0,
                            }}>
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <div>
                                <h3 className="heading-xl" style={{
                                    fontSize: '1.3rem',
                                    textTransform: 'uppercase',
                                    color: 'var(--navy)',
                                    marginBottom: '0.5rem',
                                }}>{item.subtitle}</h3>
                                <p style={{
                                    color: '#64748b',
                                    lineHeight: 1.7,
                                    fontSize: '0.95rem',
                                }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right: About Card */}
                <div className="scroll-reveal process-image-container" style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <div
                        className="process-image"
                        style={{
                            width: '100%',
                            maxWidth: '450px',
                            aspectRatio: '4/5',
                            background: 'linear-gradient(135deg, var(--teal), var(--navy))',
                            border: '4px solid var(--navy)',
                            boxShadow: '8px 8px 0px 0px var(--navy)',
                            transform: 'rotate(3deg)',
                            transition: 'transform 0.5s var(--ease-bounce), filter 0.5s ease',
                            filter: 'grayscale(80%)',
                            overflow: 'hidden',
                            position: 'relative',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'rotate(0deg)';
                            e.currentTarget.style.filter = 'grayscale(0%)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'rotate(3deg)';
                            e.currentTarget.style.filter = 'grayscale(80%)';
                        }}
                    >
                        {/* Pattern */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
                            backgroundSize: '30px 30px',
                        }} />
                        {/* Center content */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem',
                            padding: '2rem',
                            textAlign: 'center',
                        }}>
                            <p style={{
                                color: 'white',
                                fontFamily: 'var(--font-body)',
                                fontWeight: 400,
                                fontSize: '1.05rem',
                                lineHeight: 1.8,
                                maxWidth: '360px',
                                textAlign: 'left',
                            }}>
                                <span style={{ fontFamily: 'var(--font-slab)', fontWeight: 700, fontSize: '1.15rem', display: 'block', marginBottom: '1rem' }}>
                                    A Full Stack Developer and UI/UX Designer who enjoys turning ideas into real, usable products.
                                </span>
                                I focus on writing clean, scalable code and designing interfaces that feel simple and intuitive.
                                <br /><br />
                                My approach is to balance functionality with user experience — building things that not only work well but also feel right.
                                <br /><br />
                                <span style={{ color: 'var(--teal)', fontStyle: 'italic' }}>
                                    Currently exploring better ways to combine backend systems with thoughtful UI design.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .process-image-container {
            order: -1;
          }
        }
      `}</style>
        </section>
    );
}
