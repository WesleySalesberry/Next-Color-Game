import styles from '../styles/Square.module.css'

export const Square = ({ color, handleClick, isPlaying }) => {

    return (
        <div 
            className={styles.square} 
            style={{backgroundColor: `${color}`}}
            onClick={() => handleClick(color)}
        >
        </div>
    )
}