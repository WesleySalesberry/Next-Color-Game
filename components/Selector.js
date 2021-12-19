import styles from '../styles/Selector.module.css'

export default function Selector({ reset, isPlaying, isCorrectColor, selectLevel, guesses }) {
    return (
        <div className={styles.selector}>

                {
                    !isPlaying ?
                        <div className={styles.reset} onClick={reset}>
                            <p>Play Again</p>
                        </div> 
                    : 
                        <p>Select a difficulty or just click a color </p>      
                }
            
            <div>
                {
                    isCorrectColor && <p>Correct with {guesses} guesses left</p>
                }
                {/* {
                    isPlaying ? <p className={styles.color}>{ guesses } guess left</p> : ""
                } */}
                
            </div>
            <div>
                <ul>
                    <li onClick={() => selectLevel("easy")}>Easy</li>
                    <li onClick={() => selectLevel("meduim")}>Meduim</li>
                    <li onClick={() => selectLevel("hard")}>Hard</li>
                </ul>
            </div>
        </div>
    )
}
