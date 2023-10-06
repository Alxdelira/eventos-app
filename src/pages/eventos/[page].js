import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function EventoPage() {

  const router = useRouter();

  let page = router.query.page;

  const [response, setResponse] = useState();

  async function getData() {
    try {
      if (page) {
        const res = await fetch(`http://localhost:3001/eventos/${page}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
  
        const data = await res.json();
        setResponse(data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, [router])

  if (response) return (
    <>
    <h1>{response.titulo}</h1>
    </>
  )
}