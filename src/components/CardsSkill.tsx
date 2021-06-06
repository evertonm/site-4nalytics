import styles from '../styles/components/CardsSkill.module.css';
import { useEffect, useState } from 'react';

interface InfoCardInterface {
    title: string;
    description: string;
    image: string;
    id: number;
}

export function CardsSkill() {

    const [infoCards, setInfoCards] = useState<InfoCardInterface[]>([]);

    useEffect(() => {
        setInfoCards([
            {
                title: 'Analise os dados',
                description: 'Faça a análise dos dados do seu negócio e evite complicações que ocorrem por decisões mal analisadas',
                image: '',
                id: 1
            },
            {
                title: 'Conhecemos o problema, temos a solução',
                description: 'Entendemos os problemas que ocorrem sem uma análise profissional e sabemos que existem Insights valiosos escondidos nos seus dados',
                image: '',
                id: 2
            },
            {
                title: 'Tome decisões',
                description: 'Se torne um tomador de decisões  confiante  com o poder dos dados',
                image: '',
                id: 3
            },
        ])
    }, []);

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 content">
                {
                    infoCards.map((infoCard) => (

                        <div key={infoCard.id} className="col">
                            <div  className={`card h-100 ${styles.cardSkill}`}>
                                <div className="card-body">
                                    <div className={styles.titleContainer}>
                                        <h4 className={styles.cardTitle}>{infoCard.title}</h4> 
                                    </div>
                                    <p className={styles.cardDescription}>{infoCard.description}</p>
                                </div>                               
                            </div>
                        </div>

                    )) 
                }
            </div>
        </>
    );
}
