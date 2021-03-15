import styles from '../styles/components/CardsSkill.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function CardsSkill() {
    return (
        <div className={styles.cardsSkillContainer}>
            <div className={styles.cardContainer}>    
                <FontAwesomeIcon icon="box-open" className={styles.iconCard}  size="lg" color="purple"/> 
                <h1>Analise os dados</h1>
                <span>Faça a análise dos dados do seu negócio e evite complicações que ocorrem por decisões mal analisadas.</span>
            </div>
            <div className={styles.cardContainer}>    
                <FontAwesomeIcon icon="mouse" className={styles.iconCard}  size="lg" color="purple"/> 
                <h1>Soluções para seu negócio</h1>
                <span>Entendemos os problemas que ocorrem  sem uma análise profissional e sabemos que existem Insights valiosos escondidos nos seus dados.</span>
            </div>
            <div className={styles.cardContainer}>    
                <FontAwesomeIcon icon="headset" className={styles.iconCard}  size="lg" color="purple"/> 
                <h1>Poder dos dados</h1>
                <span>Se torne um tomador de decisões  confiante  com o poder dos dados.</span>
            </div>
            
        </div>

    );
}