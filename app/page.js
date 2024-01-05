
import styles from './page.module.css'

export default function Home() {
  const port=process.env.NEXT_PUBLIC_PORT;
  return (
    <main className={styles.main}>
      <h2>Mathematics is Awesome</h2>
      <div>{port}</div>
      <div></div>
    </main>
  )
}
