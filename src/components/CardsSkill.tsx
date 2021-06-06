import styles from '../styles/components/CardsSkill.module.css';
import { useEffect, useState } from 'react';

interface InfoCardInterface {
    title: string;
    description: string;
    image: string;
}

export function CardsSkill() {

    const [infoCards, setInfoCards] = useState<InfoCardInterface[]>([]);

    useEffect(() => {
        setInfoCards([
            {
                title: 'Analise os dados',
                description: 'Faça a análise dos dados do seu negócio e evite complicações que ocorrem por decisões mal analisadas',
                image: ''
            },
            {
                title: 'Conhecemos o problema, temos a solução',
                description: 'Entendemos os problemas que ocorrem sem uma análise profissional e sabemos que existem Insights valiosos escondidos nos seus dados',
                image: ''
            },
            {
                title: 'Tome decisões',
                description: 'Se torne um tomador de decisões  confiante  com o poder dos dados',
                image: ''
            },
        ])
    }, []);

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 content">
                {
                    infoCards.map((infoCard) => (

                        <div className="col">
                            <div  className={`card h-100 ${styles.cardSkill}`}>
                                <div className="card-body">
                                    <div className={styles.titleContainer}>
                                        <h4 className="card-title">{infoCard.title}</h4> 
                                    </div>
                                    <p className="card-text">{infoCard.description}</p>
                                </div>                               
                            </div>
                        </div>

                    )) 
                }
            </div>
        </>
    );
}
