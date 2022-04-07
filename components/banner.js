
import styles from "../styles/banner.module.css"

const Banner = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.subTitle}>Bibliothèque</h1>
            <p className={styles.buttonWrapper} >Mes oeuvres préférées</p>
            <div>
                <button className={styles.buttonWrapper} >
                    Mes musiques
                </button>
            </div>
        </div>
    );
}



export default Banner;