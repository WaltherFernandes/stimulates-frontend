import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';

import { CountdownContext } from '../contexts/CountdownContext';


export function Countdown() {
    const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(CountdownContext);

    const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0'). split('');
    const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0'). split('');

    return (
        <>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button type="button" disabled className={styles.countdownButton}>
                    Ciclo encerrado <img src="icons/level.svg"></img>
                </button>
            ) : (
                <>
                    {
                        isActive  ? ( 
                            <button 
                                type="button" 
                                onClick={resetCountdown} 
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            >
                                Abandonar Ciclo
                            </button>
                        ):(
                            <button type="button" onClick={startCountdown} className={styles.countdownButton}>
                            Iniciar Ciclo
                            </button>
                        ) 
                    }
                </>
            )}
            
        </>
    );
}