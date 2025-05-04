import "./Footer.css"
import WaveElement from "./WaveElement";

function Footer(){
    return(
        <>
        <footer className="footer"> 
            <div style={{ height: "600px" }}></div>
            <p className="footer-text">
                DizAlaga - TCC - {new Date().getFullYear()}
            </p>
            <WaveElement />
        </footer>
        </>
    );
}

export default Footer