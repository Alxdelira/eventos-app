import Card from "@/components/Card"
import Link from "next/link";
import { useEffect, useState } from "react"

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

  return (
    <main>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem", marginTop: "1rem" }}>
        <h1>Plataforma de   Eventos</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
        {response?.map((card) => (
          <Link href={`/eventos/${card.id}`}>
            <Card key={card.id}
              titulo={card.titulo}
              dataInicio={card.dataInicio}
              dataFim={card.dataFim}
            />
          </Link>
        ))}
      </div>

    </main>
  )
}