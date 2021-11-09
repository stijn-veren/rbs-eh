import styles from './GridItem.module.css'

const GridItem = (props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{props.fact.title}</h2>
      <article className={styles.fact}>{props.fact.fact}</article>
    </div>
  )
}

export default GridItem
