const items = [
    { text: 'Web Development', color: '#FF6B35' },
    { text: 'UI/UX Design', color: '#2EC4B6' },
    { text: 'React & Next.js', color: '#FF3366' },
    { text: 'Full Stack', color: '#FF6B35' },
    { text: 'Creative Code', color: '#FF3366' },
];

function StarIcon({ color }) {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
    );
}

export default function Marquee() {
    const content = items.map((item, i) => (
        <span key={i} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2rem',
            whiteSpace: 'nowrap',
        }}>
            <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
            }}>
                {item.text}
            </span>
            <StarIcon color={items[(i + 1) % items.length]?.color || '#FF6B35'} />
        </span>
    ));

    return (
        <div style={{
            background: 'var(--navy)',
            borderTop: '4px solid var(--orange)',
            borderBottom: '4px solid var(--orange)',
            padding: '1.25rem 0',
            overflow: 'hidden',
            width: '100%',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                animation: 'marquee 25s linear infinite',
                width: 'max-content',
            }}>
                {content}
                {content}
            </div>
        </div>
    );
}
