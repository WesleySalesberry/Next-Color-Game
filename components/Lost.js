import { Square } from './Square'
import styles from '../styles/Lost.module.css'


export default function Lost({ color, reset }) {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <h2>Awe... You ran out of guesses but you can always try again</h2>
                <p>The Correct color is -&gt;</p>
                <div onClick={reset} className={styles.play_again}>Play Again</div>
            </div>
            <Square 
                color={color}
            />
        </div>
    )
}


// import styles from '../styles/Lost.module.css'
// import Square  from "./Square";
// // import { FaArrowRight } from "react-icons/fa";

// export const Lost = ({ color, reset }) => {
//     return (
//         <div className={styles.container}>
            // <div className={styles.message}>
            //     <h2>Awe... You ran out of guesses but you can always try again</h2>
            //     <p>The Correct color is -&gt;</p>
            //     <div onClick={reset} className={styles.play_again}>Play Again</div>
            // </div>
            // <Square 
            //     color={color}
            // />
//         </div>
//     )
// }
