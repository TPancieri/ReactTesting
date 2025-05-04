import Card from './Card';
import './Card.css';
import image1 from './assets/aviao-de-papel.png';
import image2 from './assets/chart-pie-alt.png';
import image3 from './assets/informacoes.png';

function CardContainer(){
    const cardsData = [
        {
            image: image1,
            title: "Enviar Relato",
            text: "Canal para moradores de Goiânia informarem alagementos e colaborarem com o mapeamento",
            link: "/relato"
        },
        {
            image: image2,
            title: "Acessar Paineis",
            text: "Dashboards interativos que contém análises sobre chuvas, níveis de água e alertas emitidos",
            link: "/paineis"
        },
        {
            image: image3,
            title: "Sobre o Projeto",
            text: "Entenda a iniciativa, suas motivações, as tecnologias utilizadas e os impactos esperados para a cidade",
            link: "/sobre"
        }
    ];

    return(
        <>
        <div className="card-container">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    text={card.text}
                    link={card.link}
                />
            ))}
        </div>
        </>
    );
}

export default CardContainer;