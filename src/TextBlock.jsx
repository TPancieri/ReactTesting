import './App.css';
import CardContainer from './CardContainer.jsx'

function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-container" className='arvo-bold'>
                <h1 id="textblock-title">DizAlaga</h1>
                <p id="textblock-content" className='arvo-regular'>
                <br/><br/>
            Este site foi desenvolvido como parte de um Trabalho de Conclusão de Curso em Engenharia de Software, com o objetivo de reunir e divulgar dados 
            sobre alagamentos em Goiânia.
            <br/> 
            A plataforma exibe indicadores e casos de alagamentos por meio de painéis interativos criados no Power BI. Os gráficos e mapas permitem uma visualização 
            clara de padrões como frequência, intensidade e áreas mais afetadas, facilitando a compreensão dos dados.    
            <br/>
            O portal também conta com um formulário para que moradores de Goiânia relatem alagamentos em suas regiões, incluindo localização, data e descrição. 
            Esses relatos ajudam a complementar os dados disponíveis e tornam a população parte ativa no enfrentamento desse problema.    
            <br/>
            <br/>
            </p>
            </div>
            <CardContainer />
        </div>
    );
}

export default TextBlock;