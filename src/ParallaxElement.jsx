import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './TextBlock.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Button from './Button.jsx'
import './ParallaxElement.css';

function ParallaxElement() {
    return (
    <Parallax pages={2.2} style={{ top: '0', left: '0' }} className="animation">
            <ParallaxLayer offset={0} speed={0.25}>
                <div className="animation_layer parallax" id="artback"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div className="animation_layer parallax" id="mountain"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0} style={{ zIndex: 3 }} >
                <div className="animation_layer parallax" id="logoland"></div>
                <Button></Button>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div className="animation_layer parallax" id="backwave"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} spee d={0.35}>
                <div className="animation_layer parallax" id=""></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.45} >
                <div className="animation_layer parallax" id="midpoint"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.25}>
                <div className="animation_layer parallax" id="boat"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.0000000005}>
                <div className="animation_layer parallax" id=""></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.40} >
                <div className="animation_layer parallax" id="bigwave"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.35}  >
                <div className="animation_layer parallax" id="wavefront"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.25} style={{ zIndex: 2 }}>
                <TextBlock />
            </ParallaxLayer>
            <ParallaxLayer offset={1.5} speed={0.25}>
                <Footer />
            </ParallaxLayer>
    </Parallax>
    )
}

export default ParallaxElement