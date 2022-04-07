import Card from "../../components/card";

import styles from '../../styles/home.module.css'

// import oeuvresData from "../../data/oeuvres.json";

export async function getServerSideProps(context) {
    // const params = staticProps.params;

    const res = await fetch('http://localhost:3000/api/oeuvres')
    const oeuvresData = await res.json()

    return {
      props: {
          oeuvres: oeuvresData,
      }, // will be passed to the page component as props
    }
  }

const Oeuvres = ({oeuvres}) => {

    // console.log(oeuvres)
    return (
        <>
            <div>
                Mes Oeuvres
            </div>
            <div className={styles.cardLayout}>
                {oeuvres.data.map((o) => {
                    return (
                        <Card
                            key={o._id}
                            titre={o.titre}
                            imageUrl={o.imageUrl}
                            href={`/oeuvres/${o._id}`}
                            // className={styles.card}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default Oeuvres;