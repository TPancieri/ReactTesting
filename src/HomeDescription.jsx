import "./HomeDescription.css"

function HomeDescription(){
    return(
        <div className="description">
            <h2>
                Bem Vindo Ao Site do DizAlaga
            </h2>
            <p>
            Este site foi desenvolvido como parte de um Trabalho de Conclusão de Curso em Engenharia de Software, com o objetivo de reunir e divulgar dados 
            sobre alagamentos em Goiânia. A proposta busca apoiar o monitoramento urbano e oferecer informações úteis para decisões de órgãos públicos e empresas 
            privadas ligadas à infraestrutura e gestão de riscos. 
            </p>
            <p>
            A plataforma exibe indicadores e casos de alagamentos por meio de painéis interativos criados no Power BI. Os gráficos e mapas permitem uma visualização 
            clara de padrões como frequência, intensidade e áreas mais afetadas, facilitando a compreensão dos dados por diferentes perfis de usuários.    
            </p>
            <p>
            Além de promover o uso de dados abertos, o site incentiva soluções baseadas em evidências para melhorar o planejamento urbano e prevenir impactos causados por 
            alagamentos. Ao centralizar essas informações, queremos contribuir com uma cidade mais preparada e resiliente.
            </p>
            <p>
            O portal também conta com um formulário para que moradores relatem alagamentos em suas regiões, incluindo localização, data, descrição e imagens. 
            Esses relatos ajudam a complementar os dados disponíveis e tornam a população parte ativa no enfrentamento desse problema.    
            </p>
        </div>

    );
}

export default HomeDescription