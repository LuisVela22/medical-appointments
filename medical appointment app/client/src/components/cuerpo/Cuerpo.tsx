import React from "react";
// import { Card } from "react-bootstrap";
import './cuerpo.css'
import Card from './Card.tsx'
import logoCardio from '../../assets/cardio.jpg'
import logoNeuro from '../../assets/neurologia.jpg'
import logoPed from '../../assets/ped.jpg'
import logoDerma from '../../assets/derma.jpg'
import logoOnco from '../../assets/ocno.jpg'
import logoPsiq from '../../assets/psqui.jpg'
import logoGinecologia from '../../assets/ginecologia.jpg'




const Cuerpo: React.FC = () => {


    return (
        <div>
            <div className="jumbotron" >
                <h1 className="display-4">Agenda tu cita cuanto antes!</h1>
                <p className="lead">Agenda tu cita médica con nuestros doctores especialistas en areas como...</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cardiología</li>
                    <li className="list-group-item">Neurología</li>
                    <li className="list-group-item">Pediatría</li>
                    <li className="list-group-item">Dermatología</li>
                    <li className="list-group-item">Oncología</li>
                    <li className="list-group-item">Psiquiatría</li>
                    <li className="list-group-item">Gineoclogía y Obstetricía</li>
                </ul>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>

            </div>
            <main className="container mt-5">
                <section className="mt-5">
                <h2>Informacion, trámites y servicios</h2>
                    <div className="row">
                        

                        <Card cardTitle="Cardiología" src={logoCardio}>
                            En nuestra clínica, contamos con un equipo de cardiólogos altamente calificados y experimentados que están comprometidos con tu salud cardíaca. Utilizamos tecnología avanzada y nos mantenemos actualizados con las últimas investigaciones y tratamientos en cardiología para ofrecerte la mejor atención posible.
                        </Card>
                        <Card cardTitle="Neurología" src={logoNeuro}>
                            En nuestra clínica, contamos con un equipo de neurólogos especializados en el diagnóstico y tratamiento de trastornos neurológicos. Utilizamos tecnología avanzada y técnicas de vanguardia para abordar enfermedades del sistema nervioso central y periférico, garantizando un enfoque integral y personalizado para cada paciente.
                        </Card>
                        <Card cardTitle="Pediatría" src={logoPed}>
                            Nuestro equipo de pediatras está dedicado a ofrecer atención médica de alta calidad para niños y adolescentes. En nuestra clínica, nos enfocamos en el bienestar general de los más pequeños, desde el nacimiento hasta la adolescencia, con una atención especializada en el crecimiento, desarrollo y prevención de enfermedades.
                        </Card>
                        <Card cardTitle="Dermatología" src={logoDerma}>
                            En nuestra clínica, nuestros dermatólogos están altamente capacitados para tratar una amplia gama de afecciones de la piel. Desde problemas comunes como acné y eczema hasta enfermedades más complejas, ofrecemos tratamientos avanzados y personalizados para mantener tu piel saludable y radiante.
                        </Card>
                        <Card cardTitle="Oncología" src={logoOnco}>
                            En nuestra clínica, nuestros dermatólogos están altamente capacitados para tratar una amplia gama de afecciones de la piel. Desde problemas comunes como acné y eczema hasta enfermedades más complejas, ofrecemos tratamientos avanzados y personalizados para mantener tu piel saludable y radiante.
                        </Card>
                        <Card cardTitle="Psquiatría" src={logoPsiq}>
                            En nuestra clínica, nuestros psiquiatras ofrecen atención especializada para tratar una variedad de trastornos mentales y emocionales. Con un enfoque integral y personalizado, nos dedicamos a mejorar el bienestar mental y emocional de nuestros pacientes mediante terapias y tratamientos efectivos.
                        </Card>
                        <Card cardTitle="Ginecología y Obstetricia" src={logoGinecologia}>
                            Nuestro equipo de ginecólogos y obstetras está especializado en la salud reproductiva de la mujer. Ofrecemos atención completa y compasiva para todas las etapas de la vida femenina, desde la prevención y el diagnóstico hasta el tratamiento y el cuidado durante el embarazo y el parto.
                        </Card>

                    </div>
                </section>
            </main>
        </div>
    )

}

export default Cuerpo;
