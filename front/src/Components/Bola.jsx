import React, { useRef, useEffect, useState } from 'react';

import '../styles/Bola.css';

function Bola() {
    const [isDrag, setIsDrag] = useState(false);
    const [velocity, setVelocity] = useState({ x: 0, y: 0 });
    const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
    const [activeBola, setActiveBola] = useState(null);
    const bolaRefs = useRef([]);

    useEffect(() => {
        const handleMouseDown = (event) => {
            setIsDrag(true);
            setActiveBola(event.target.id);
            setLastPos({ x: event.pageX, y: event.pageY });
        };

        const handleMouseUp = () => {
            setIsDrag(false);
        };

        const handleMouseMove = (event) => {
            if(isDrag && activeBola) {
                let newPos = { x: event.pageX, y: event.pageY };
                setVelocity({ x: newPos.x - lastPos.x, y: newPos.y - lastPos.y });
                setLastPos(newPos);

                let bola = bolaRefs.current.find(bola => bola.id === activeBola);
                if (bola) {
                    bola.style.top = `${event.pageY - bola.offsetWidth / 2}px`;
                    bola.style.left = `${event.pageX - bola.offsetHeight / 2}px`;
                }
            }
        };

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDrag, lastPos, activeBola]);

    useEffect(() => {
        const interval = setInterval(() => {
            if(!isDrag && activeBola) {
                let bola = bolaRefs.current.find(bola => bola.id === activeBola);
                if (bola) {
                    let offset = { top: bola.offsetTop, left: bola.offsetLeft };
                    offset.top += velocity.y;
                    offset.left += velocity.x;

                    bola.style.top = `${offset.top}px`;
                    bola.style.left = `${offset.left}px`;

                    // Desaceleração
                    setVelocity({ x: velocity.x * 0.9, y: velocity.y * 0.9 });
                }
            }
        }, 20);

        return () => clearInterval(interval);
    }, [isDrag, velocity, activeBola]);

    return Array(5).fill().map((_, i) => <div key={i} className='bolas' id={`bola${i}`} ref={ref => bolaRefs.current[i] = ref}></div>)
}

export default Bola;
