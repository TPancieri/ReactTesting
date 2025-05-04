function Card({image, text, title, link}){
    return(
        <section className="card">
            <div className="row">
                <div>
                <a className="cards-box" href={link} target="_blank" rel="noopener noreferrer">
                    <img className="card-image" src={image} alt="image"></img>
                    <h2 className="card-title">{title}</h2>
                    <br></br>
                    <p className="card-text"> {text} </p>
                    </a>
                </div>
            </div>
        </section>  
    );
}

export default Card