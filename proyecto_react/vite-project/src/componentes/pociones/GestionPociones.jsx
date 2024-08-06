import { useEffect, useState } from "react";
import ListaDePociones from "./ListaDePociones";
import FormularioDePociones from "./FormularioDePociones";

const GestionPociones = () => {
    const [pociones, setPociones] = useState(() => {
        const pocionesGuardadas = JSON.parse(localStorage.getItem("pociones"));
        return pocionesGuardadas || [];

    });

    useEffect(() => {
        localStorage.setItem("pociones", JSON.stringify(pociones));
    }, [pociones]);


    const agregarPocion = (nombre) => {

        const nuevaPocion = {
            id: Date.now(),
            nombre,
        };

        setPociones((prevPociones) => [...prevPociones, nuevaPocion]);

    };


    const completarPocion = (id) => {
        const nuevasPociones = pociones.map((pocion) =>
            pocion.id === id ? { ...pocion, completada: !pocion.completada } : pocion
        );
        setPociones(nuevasPociones);
    };








    const eliminarPocion = (id) => {
        const nuevasPociones = pociones.filter((pocion) => pocion.id !== id);
        setPociones(nuevasPociones);
    };







    return (
        <div className="contenedor-pociones">
            <h1 className="titulo"> Gestion de pociones en Hogwarts</h1>
            <ListaDePociones
                pociones={pociones}
                completarPocion={completarPocion}
                eliminarPocion={eliminarPocion} />
            <FormularioDePociones agregarPocion={agregarPocion} />

        </div>

    );
};

export default GestionPociones;



