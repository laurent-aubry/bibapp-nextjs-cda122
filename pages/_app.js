import '../styles/globals.css'
import Footer from "../components/footer";
import Banner from "../components/banner"
import styles from "../styles/Home.module.css"
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Banner />
        <h1 className={styles.title} >Bienvenue au Greta</h1>
        <div className={styles.heroImage} >
        <Image src="/static/hero-image.png" width={300} height={157} />
        </div>
        <div className={styles.heroImage2} >
        <Image src="/static/hero-image2.png" width={60} height={60} />
        </div>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
