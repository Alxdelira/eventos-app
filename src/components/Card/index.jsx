import styles from "./styles.module.css";

export default function Card({titulo, dataInicio, dataFim}) {
  return (
    <div className={styles.container}>
      <h2>{titulo}</h2>
      <div>Data de início: {dataInicio}</div>
      <div>Data final: {dataFim}</div>
    </div>
  )
}