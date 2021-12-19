import Head from "next/head"
import styles from "../styles/Layout.module.css"
import Header from "./Header"

export default function Layout({ description, color, bgColor, children }) {
    return (
        <div className={styles.container} style={{backgroundColor: bgColor ? bgColor : '#232323'}}>
            <Head>
                <title>The Color Game</title>
                <meta name='description' content={description} />
            </Head>

            <div className={styles.body_container}>
                <Header />
                <div className={styles.square_container}>

                    <h2>Guess which one is <span className={styles.color}>{ color }</span></h2>
                    { children }
                </div>
            </div> 
        </div>
    )
}

Layout.defaultProps = {
    description: "A match the rgb color code to the displayed color"
}