import styles from '../styles/components/Skills.module.css';

import { CardsSkill } from './CardsSkill';


export function Skills() {
    return (
        <div className={styles.skillContainer}>
            <div className={styles.skillDescription}> 
                <h1>Awesome Soft Feature</h1>
                <span>Vel aliquam quis, nulla pede mi commodo tristique nam hac. Luctus torquent velit felis commodo pellentesque nulla cras. Tincidunt hacvel alivquam quis nulla pede mi commodo tristique nam hac luctus torquent</span>
            </div>
            <CardsSkill />
        </div>
    );
}