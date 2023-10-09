import Card from "@/components/Card"
import Link from "next/link";
import { useEffect, useState } from "react"
import style from '../components/Card/styles.module.css'

export default function Eventos() {

  const [response, setResponse] = useState();

  async function getData() {
    try {
      const res = await fetch("http://localhost:3001/eventos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (<>   
    <main>
     <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "3rem", marginTop: '1rem' }}>
        {response?.map((card) => (
          <Link href={`/eventos/${card.id}`} className={style.card}>
            <Card key={card.id}
              titulo={card.titulo}
              dataInicio={card.dataInicio}
              dataFim={card.dataFim}
              />
          </Link>
        ))}
      </div>

    </main>
  </>
  )
}