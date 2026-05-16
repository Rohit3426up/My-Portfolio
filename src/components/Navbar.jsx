import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'About Me', href: '#process' },
    { label: 'Skills', href: '#services' },
    { label: 'Project', href: '#portfolio' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            padding: '1rem 1.5rem',
            transition: 'padding 0.3s ease',
            ...(scrolled ? { padding: '0.5rem 1.5rem' } : {}),
        }}>
            <nav style={{
                maxWidth: '1280px',
                margin: '0 auto',
                background: 'white',
                border: '4px solid var(--navy)',
                boxShadow: scrolled ? '4px 4px 0px 0px var(--navy)' : '8px 8px 0px 0px var(--navy)',
                padding: '0.75rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'box-shadow 0.3s ease',
            }}>
                {/* Logo */}
                <a href="#" style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.03em',
                    display: 'flex',
                    alignItems: 'baseline',
                }}>
                    Rohit
                    <span className="logo-dot" style={{
                        color: 'var(--pink)',
                        display: 'inline-block',
                        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        fontSize: '2rem',
                        lineHeight: 0,
                        marginLeft: '2px',
                    }}
                        onMouseEnter={e => e.target.style.transform = 'rotate(360deg)'}
                        onMouseLeave={e => e.target.style.transform = 'rotate(0deg)'}
                    >.</span>
                </a>

                {/* Desktop Links */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                }} className="nav-links-desktop">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} style={{
                            fontWeight: 900,
                            fontSize: '0.875rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            position: 'relative',
                            transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => e.target.style.color = 'var(--orange)'}
                            onMouseLeave={e => e.target.style.color = 'var(--navy)'}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="mailto:rohitupadhyay3426@gmail.com" className="neo-btn neo-btn-teal" style={{
                        padding: '0.625rem 1.5rem',
                        fontSize: '0.875rem',
                    }}>
                        Let's Talk →
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="mobile-menu-btn"
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.75rem',
                        fontWeight: 900,
                        color: 'var(--navy)',
                        cursor: 'pointer',
                    }}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div style={{
                    maxWidth: '1280px',
                    margin: '0.5rem auto 0',
                    background: 'white',
                    border: '4px solid var(--navy)',
                    boxShadow: '8px 8px 0px 0px var(--navy)',
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }} className="mobile-menu">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                fontWeight: 900,
                                fontSize: '1.25rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                padding: '0.5rem 0',
                                borderBottom: '2px solid #e2e8f0',
                            }}>
                            {link.label}
                        </a>
                    ))}
                    <a href="mailto:rohitupadhyay3426@gmail.com" className="neo-btn neo-btn-teal" style={{
                        textAlign: 'center',
                        marginTop: '0.5rem',
                    }}
                        onClick={() => setMenuOpen(false)}
                    >
                        Let's Talk →
                    </a>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
        </header>
    );
}
