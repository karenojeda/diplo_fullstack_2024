import './Seccion.css';
import { useState } from 'react';
import hogwarts from '../../assets/img/hogwarts.jpg';
import Boton from '../boton/Boton';
import CardB from '../card/Card';

function Seccion() {
    const [nombre, setNombre ] = useState('Hermione');
    const [mostrarInformacion, setMostrarInformacion] = useState(false);

    const handleClicEnBoton = () =>{
        alert ('Hiciste click en el boton');
    }

    const handleClicEnBotonInformacion = () =>{
        setMostrarInformacion(!mostrarInformacion);
    }

    return (
        <section className="seccion">
            <h2> Informacion sobre Hogwarts</h2>
            <p>{nombre}</p>
        <p> La escuela de magia y hechiceria de Hogwarts es un lugart magico donde los jovenes magos y brujas aprenden a dominar sus poderes.</p>
        <img src={hogwarts} alt="Hogwarts" />

            <CardB/>
        <Boton color="pink" texto = "Leer mas" onClick = {handleClicEnBoton}/>
        <Boton className="boton" texto = "Comprar" />


<button onClick={handleClicEnBotonInformacion}>
    {mostrarInformacion ? 'Ocultar informacion': 'Mostrar informacion' }
</button>
{mostrarInformacion && (
    <div className='informacion-personaje'>
    <p>Nombre: Hermione</p>
    <p>Casa: Gryffindor</p>
    <p>Rol: Estudiante </p>
    <p>mail: hermione@hogwarts.edu</p>
    </div>
)}
        </section>
    )
}

export default Seccion;