import { useState } from "react";
import axios from "axios";
import { CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL } from "next/dist/shared/lib/constants";

export default function Cadastrar() {
    const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        local: ""
    });

    async function inserirEvento(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/eventos", evento)
            limparCampos();
        } catch (error) {
            console.log(error)
        }
    }

    function limparCampos() {
        setEvento({
            titulo: "",
            descricao: "",
            dataInicio: "",
            dataFim: "",
            local: ""
        })
    }

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
                marginTop: "1rem",
                alignItems: "center",
            }}>
                <div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "2rem",
                        marginTop: "1rem",
                        alignItems: "center",
                        backgroundColor: "#000",
                        color: "#fff",
                        padding: "12rem",
                        borderRadius: "20px",

                    }}>
                        <div style={{
                            height: "10rem",
                            backgroundColor: "#000",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#fff",
                            fontSize: "1rem",
                            flexDirection: "column",
                        }}>
                            <h1>Cadastrar</h1>
                            <h1>Eventos</h1>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            color: "#000",
                            padding: "0.1rem",
                            height: "30rem",
                            marginLeft: "5rem",
                            marginRight: "5rem",
                        }}>
                        </div>
                        <div>

                            <form onSubmit={e => inserirEvento(e)}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    width: "20rem",
                                    margin: "0 auto"

                                }}>
                                    <label htmlFor="titulo">Titulo</label>
                                    <input
                                        type="text"
                                        placeholder="Nome do evento"
                                        id="titulo"
                                        value={evento.titulo}
                                        onChange={(e) => setEvento({
                                            ...evento,
                                            titulo: e.target.value
                                        })}
                                    />
                                    <label htmlFor="descricao">Descrição</label>
                                    <textarea
                                        style={{ height: "10rem" }}
                                        type="text"
                                        placeholder="Descrição"
                                        id="descricao"
                                        value={evento.descricao}
                                        onChange={(e) => setEvento({
                                            ...evento,
                                            descricao: e.target.value
                                        })}
                                    />
                                    <label htmlFor="dataInicio">Data início</label>
                                    <input
                                        type="date"
                                        placeholder="Data de início"
                                        id="dataInicio"
                                        value={evento.dataInicio}
                                        onChange={(e) => setEvento({
                                            ...evento,
                                            dataInicio: e.target.value
                                        })
                                        }
                                    />
                                    <label htmlFor="dataFim">Data fim</label>
                                    <input
                                        type="date"
                                        placeholder="Data de fim"
                                        id="dataFim"
                                        value={evento.dataFim}
                                        onChange={(e) => setEvento({
                                            ...evento,
                                            dataFim: e.target.value
                                        })}
                                    />
                                    <label htmlFor="local">Local</label>
                                    <input
                                        type="text"
                                        placeholder="Local"
                                        id="local"
                                        value={evento.local}
                                        onChange={(e) => setEvento({
                                            ...evento,
                                            local: e.target.value
                                        })}
                                    />
                                    <button
                                        type="submit"
                                    >Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}