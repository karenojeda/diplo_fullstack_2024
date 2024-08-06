import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPersonajeById } from "./api";
import "./personajes.css";


function DetallePersonaje() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [personaje, setPersonaje] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPersonajeById(id);
                setPersonaje(data);
                setLoading(false);

            } catch (error) {
                console.error("Error fetching details:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Cargando...</div>;
    } else {

        return (
            <div>
                <h2> Detalle Personaje </h2>

                <p> Nombre: {personaje.name}</p>
                <p> Casa: {personaje.house} </p>
                <p> Especie: {personaje.species}</p>
                <p> Especie: {personaje.patronus}</p>
                <img src={personaje.image} alt={personaje.name} />

            </div>
        );
    }
}


export default DetallePersonaje;