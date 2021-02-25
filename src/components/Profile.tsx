import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level, upLevel } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}> 
            <img src="https://github.com/waltherfernandes.png" alt="Walther Fernandes"/>
            <div>
                <strong>Walther Fernandes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}