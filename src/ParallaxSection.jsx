import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './ParallaxSection.css';

const ParallaxSection = () => {
    return (
    <div className="parallax-container">
        
      {/* Background layers */}
        <Parallax speed={-20}>
        <img src="./assets/Parallax/Layer1.png" alt="Layer 1" className="parallax-image" />
        </Parallax>
        <Parallax speed={-10}>
        <img src="/images/layer2.png" alt="Layer 2" className="parallax-image" />
        </Parallax>
        <Parallax speed={-5}>
        <img src="/images/layer3.png" alt="Layer 3" className="parallax-image" />
        </Parallax>

      {/* Foreground content */}
        <div className="parallax-content">
        <h1 className="arvo-bold">DizAlaga</h1>
        <button>Enviar Relato</button>
        </div>
    </div>
    );
};

export default ParallaxSection;
