import discord_icono from './assets/discord_icono.png'
import './Comunidad.css'


function Comunidad () {

    return(
        <>
            <h1>💻💻UNETE💻💻</h1>
            <p>
                🚀 ¿Te gustaría aprender programación de forma práctica y divertida? Únete a nuestro servidor de Discord, donde encontrarás una comunidad activa de entusiastas del código, recursos exclusivos, desafíos semanales y soporte personalizado para acelerar tu aprendizaje. ¡Conectemos y creemos juntos! 
            </p>
            <div className="omg">
                <a href="#">
                <img src={discord_icono} alt="discord_icono" width="100"/>
                </a>
            </div>
            <h1>CLASES</h1>
            <div className='wow'>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <table className="table table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>Profesores</th>
                                    <th>LU</th>
                                    <th>MA</th>
                                    <th>MI</th> 
                                    <th>JU</th>
                                    <th>VI</th>
                                    <th>SA</th>
                                    <th>DO</th>
                                    <th>Tipo Clase</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>GUIANELLO</td>
                                    <td>8AM/10AM</td>
                                    <td>-</td>
                                    <td>1PM/2PM</td>
                                    <td>-</td>
                                    <td>9AM/12PM</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td className="table-success">CLASES DE PYTHON</td>
                                </tr>
                                <tr>
                                    <td>RENZO</td>
                                    <td>-</td>
                                    <td>5PM/6PM</td>
                                    <td>-</td>
                                    <td>8PM/10PM</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td className="table-warning">CLASES DE HTML</td>
                                </tr>
                                <tr>
                                    <td>MARCELLO</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>24HR</td>
                                    <td>24HR</td>
                                    <td className="table-danger">CLASES DE BALATRO</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Comunidad;