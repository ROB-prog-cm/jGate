import styles from './page.module.scss'
import Card from "@/components/card";

export default function Home() {
  return (
    <main className={styles.main}>
      <Card
        image={'/image/image.png'}
        price={100}
        title={'Zebronics head phone'}
        subtitle={'A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.'}
      />
    </main>
  )
}
