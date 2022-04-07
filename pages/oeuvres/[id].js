import { useRouter } from "next/router";
import Link from "next/link"
import Head from "next/head"
import Image from "next/image";
import cls from 'classnames';

// import oeuvresData from "../../data/oeuvres.json"

import styles from "../../styles/oeuvre.module.css";

export async function getStaticProps(staticProps) {
    const params = staticProps.params;

    const res = await fetch(`http://localhost:3000/api/oeuvres/${params.id}`)
    const oeuvresData = await res.json()

    return {
      props: {
        oeuvres: oeuvresData.data
          // oeuvres: oeuvresData.data.find((o) => {
          //     return o._id.toString() === params.id
          // })
      }, // will be passed to the page component as props
    }
  }

  export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/oeuvres')
    const oeuvresData = await res.json()

      const paths = oeuvresData.data.map((o) => {
          return {
              params: {
                  id: o._id.toString(),
              }
          }
      })
    return {
      paths,
      fallback: true // false or 'blocking'
    };
  }

const OeuvreItem = (props) => {
    const router = useRouter();
    console.log(router);

    const {titre, auteur, annee, imageUrl } = props.oeuvres

    return (
        <div className={styles.layout}>
        <Head>
            <title>{titre}</title>
        </Head>
        <div className={styles.container}>
        <div className={styles.col1}>
          {/* Le <a></a> est nécessaire pour que le lien s'opère correctement */}
          {/* Link est utilisée pour du routage interne */}
          <div className={styles.backToHomeLink}>
          <Link href="/oeuvres">
            <a>Retour à la page d'Accueil</a>
          </Link>
          </div>
          <div className={styles.nameWrapper}>
          <h1 className={styles.name}>{titre}</h1>
          </div>
          <Image
            src={imageUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={titre}
          />
          
        </div>
        <div className={cls("glass", styles.col2)}>
          <p>{auteur}</p>
          <p>{annee}</p>

        </div>
      </div>
    </div>
    );
}

export default OeuvreItem;