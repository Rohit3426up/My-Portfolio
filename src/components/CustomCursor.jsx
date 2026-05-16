import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            ring.style.left = ringX + 'px';
            ring.style.top = ringY + 'px';
            requestAnimationFrame(animate);
        };

        const onMouseDown = () => {
            dot.style.transform = 'translate(-50%, -50%) scale(0.6)';
            ring.style.transform = 'translate(-50%, -50%) scale(0.5)';
            ring.style.borderColor = '#FF3366';
        };

        const onMouseUp = () => {
            dot.style.transform = 'translate(-50%, -50%) scale(1)';
            ring.style.transform = 'translate(-50%, -50%) scale(1)';
            ring.style.borderColor = '#FF6B35';
        };

        const onMouseEnterLink = () => {
            dot.style.transform = 'translate(-50%, -50%) scale(2.5)';
            dot.style.background = '#2EC4B6';
            dot.style.mixBlendMode = 'difference';
            ring.style.opacity = '0';
            ring.style.transform = 'translate(-50%, -50%) scale(2)';
        };

        const onMouseLeaveLink = () => {
            dot.style.transform = 'translate(-50%, -50%) scale(1)';
            dot.style.background = '#FF6B35';
            dot.style.mixBlendMode = 'normal';
            ring.style.opacity = '1';
            ring.style.transform = 'translate(-50%, -50%) scale(1)';
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        // Add hover effect for all interactive elements
        const interactiveEls = document.querySelectorAll('a, button, .neo-card, .neo-btn');
        interactiveEls.forEach(el => {
            el.addEventListener('mouseenter', onMouseEnterLink);
            el.addEventListener('mouseleave', onMouseLeaveLink);
        });

        // Watch for dynamically added elements
        const observer = new MutationObserver(() => {
            const newEls = document.querySelectorAll('a, button, .neo-card, .neo-btn');
            newEls.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnterLink);
                el.removeEventListener('mouseleave', onMouseLeaveLink);
                el.addEventListener('mouseenter', onMouseEnterLink);
                el.addEventListener('mouseleave', onMouseLeaveLink);
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });

        animate();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            interactiveEls.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnterLink);
                el.removeEventListener('mouseleave', onMouseLeaveLink);
            });
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Dot */}
            <div ref={dotRef} style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '12px',
                height: '12px',
                background: '#FF6B35',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: 'translate(-50%, -50%)',
                transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease, mix-blend-mode 0.3s ease',
            }} />
            {/* Ring */}
            <div ref={ringRef} style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '40px',
                height: '40px',
                border: '3px solid #FF6B35',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9998,
                transform: 'translate(-50%, -50%)',
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s ease, opacity 0.3s ease',
                opacity: 1,
            }} />

            <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
        @media (pointer: coarse) {
          /* Hide custom cursor on touch devices */
          div[style*="position: fixed"][style*="z-index: 9999"],
          div[style*="position: fixed"][style*="z-index: 9998"] {
            display: none !important;
          }
        }
      `}</style>
        </>
    );
}
