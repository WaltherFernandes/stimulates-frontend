import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';


export function ExperienceBar() {

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentage = String(Math.round(100 * currentExperience) / experienceToNextLevel) + '%';
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                { currentExperience !== 0 && (
                    <>
                        <div style={{width: percentage}}></div>
                        <span className={styles.currentExperience} style={{left: percentage}}>{currentExperience} xp</span>
                    </>
                ) }
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}