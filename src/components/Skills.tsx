import styles from '../styles/components/Skills.module.css';

import { CardsSkill } from './CardsSkill';


export function Skills() {
    return (
        <div className={styles.skillContainer}>
            <img src="/analytics_tablet.webp" alt="Analise de dados no tablet"/>
            <CardsSkill />
        </div>
    );
}