const footerLinks = {
    navigation: [
        { label: 'Services', href: '#services' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Process', href: '#process' },
        { label: 'Reviews', href: '#testimonials' },
    ],
    socials: [
        { label: 'GH', href: 'https://github.com/Rohit3426up', title: 'GitHub' },
        { label: 'LI', href: 'https://www.linkedin.com/in/rohit3426up/', title: 'LinkedIn' },
    ],
    connect: [
        { label: 'rohitupadhyay3426@gmail.com', href: 'mailto:rohitupadhyay3426@gmail.com' },
        { label: '+91 7827016924', href: 'tel:+917827016924' },
        { label: 'Noida, Uttar Pradesh, India', href: '#' },
    ],
};

export default function Footer() {
    return (
        <footer style={{
            width: '100%',
            background: 'var(--navy)',
            borderTop: '8px solid var(--navy)',
            padding: '4rem 1.5rem 2rem',
            color: 'white',
        }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
                gap: '3rem',
            }} className="footer-grid">
                {/* Col 1: Logo & desc */}
                <div>
                    <div style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '3rem',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.03em',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'baseline',
                    }}>
                        Rohit
                        <span style={{ color: 'var(--pink)', fontSize: '3.5rem', lineHeight: 0 }}>.</span>
                    </div>
                    <p style={{
                        color: '#94a3b8',
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                        maxWidth: '300px',
                    }}>
                        FullStack Developer & UI/UX Designer crafting bold digital experiences with code and creativity.
                    </p>

                    {/* Status badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: '1.5rem',
                        background: 'var(--teal)',
                        border: '3px solid var(--navy)',
                        boxShadow: '4px 4px 0px 0px rgba(255,255,255,0.1)',
                        padding: '0.5rem 1rem',
                        transform: 'rotate(2deg)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'white',
                    }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: '#4ade80',
                            animation: 'pulse 2s infinite',
                        }}></span>
                        Available for Work
                    </div>
                </div>

                {/* Col 2: Links */}
                <div>
                    <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem',
                        color: 'var(--orange)',
                    }}>Navigation</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {footerLinks.navigation.map((link, i) => (
                            <a key={i} href={link.href} style={{
                                color: '#94a3b8',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                transition: 'color 0.2s',
                            }}
                                onMouseEnter={e => e.target.style.color = 'white'}
                                onMouseLeave={e => e.target.style.color = '#94a3b8'}
                            >{link.label}</a>
                        ))}
                    </div>
                </div>

                {/* Col 3: Connect */}
                <div>
                    <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem',
                        color: 'var(--orange)',
                    }}>Connect</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {footerLinks.connect.map((link, i) => (
                            <a key={i} href={link.href} style={{
                                color: '#94a3b8',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                transition: 'color 0.2s',
                            }}
                                onMouseEnter={e => e.target.style.color = 'white'}
                                onMouseLeave={e => e.target.style.color = '#94a3b8'}
                            >{link.label}</a>
                        ))}
                    </div>
                </div>

                {/* Col 4: Social */}
                <div>
                    <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem',
                        color: 'var(--orange)',
                    }}>Social</h4>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {/* GitHub */}
                        <a href="https://github.com/Rohit3426up" target="_blank" rel="noopener noreferrer" title="GitHub"
                            className="social-icon-link"
                            style={{
                                width: '52px',
                                height: '52px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'transparent',
                                border: '3px solid #334155',
                                transition: 'all 0.3s var(--ease-bounce)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'var(--orange)';
                                e.currentTarget.style.borderColor = 'var(--navy)';
                                e.currentTarget.style.transform = 'translate(-3px, -3px)';
                                e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(255,255,255,0.1)';
                                e.currentTarget.querySelector('svg').style.fill = 'white';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.borderColor = '#334155';
                                e.currentTarget.style.transform = 'translate(0,0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.querySelector('svg').style.fill = '#94a3b8';
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#94a3b8" style={{ transition: 'fill 0.3s' }}>
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/rohit3426up/" target="_blank" rel="noopener noreferrer" title="LinkedIn"
                            className="social-icon-link"
                            style={{
                                width: '52px',
                                height: '52px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'transparent',
                                border: '3px solid #334155',
                                transition: 'all 0.3s var(--ease-bounce)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'var(--orange)';
                                e.currentTarget.style.borderColor = 'var(--navy)';
                                e.currentTarget.style.transform = 'translate(-3px, -3px)';
                                e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(255,255,255,0.1)';
                                e.currentTarget.querySelector('svg').style.fill = 'white';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.borderColor = '#334155';
                                e.currentTarget.style.transform = 'translate(0,0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.querySelector('svg').style.fill = '#94a3b8';
                            }}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="#94a3b8" style={{ transition: 'fill 0.3s' }}>
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{
                maxWidth: '1280px',
                margin: '3rem auto 0',
                paddingTop: '2rem',
                borderTop: '2px solid #1e293b',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
            }}>
                <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                    © 2024 Rohit Kumar. All rights reserved.
                </p>
                <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                    Designed & Built with 💛
                </p>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </footer>
    );
}
