import gow from './assets/gow.jpg'
import persona5 from './assets/persona5.jpg'
import tekken8 from './assets/tekken8.jpg'
import './Juegos.css'

export default function Juegos(){

    const arreglo_juegos = [
        {"titulo" : "God of War", 
            "texto" : "El juego narra la aventura de Kratos y Atreus mientras viajan por diferentes reinos nórdicos, luchando contra criaturas míticas y descubriendo la verdad sobre el pasado de Kratos y la naturaleza de Atreus. El juego mezcla acción, exploración y una profunda historia familiar, con Kratos esforzándose por romper el ciclo de violencia y proteger a su hijo.",
            src : gow,
            "alt" : "1"},

        {"titulo" : "Persona 5", 
            "texto" : "Persona 5 trata sobre un grupo de estudiantes de secundaria en Tokio que llevan una doble vida como (Ladrones Fantasma) . Durante el día, son estudiantes normales, pero por la noche, usan sus poderes para entrar en el (Metaverso) , un mundo distorsionado que refleja los corazones de personas corruptas, y robar sus (tesoros) para cambiar sus corazones y reformar la sociedad.",
            src : persona5,
            "alt" : "2"},
        
        {"titulo" : "Tekken 8", 
            "texto" : "Tekken 8 retoma la saga Mishima, con Jin Kazama enfrentándose a su padre, Kazuya, quien ha desatado una guerra mundial con la Corporación G. Jin, guiado por visiones de su madre Jun, busca detener a Kazuya y su destino como heredero del Gen Diablo. La historia culmina en una batalla espacial entre padre e hijo, donde ambos se purifican de sus genes diabólicos y se enfrentan en la Tierra en una lucha final.",
            src : tekken8,
            "alt" : "3"}
    ];

    return(
        <>
            <main className="main__content">
                <section className="juegos__catalogo">
                    <h2 className="juegos__catalogo__titulo">🎲 Catálogo de Juegos</h2>
                    <div className="filtro__menu">
                        <button className="filtro__btn">Todos</button>
                        <button className="filtro__btn">Aventura</button>
                        <button className="filtro__btn">Estrategia</button>
                        <button className="filtro__btn">Deportes</button>
                    </div>
                    <div className="catalogo__grid">

                        {
                            arreglo_juegos.map(jue=>(
                                <div className="juego__card">
                                    <img src={jue.src} alt={jue.alt} class="juego__img"/>
                                    <h3 className="juego__nombre">{jue.titulo}</h3>
                                    <p className="juego__descripcion">{jue.texto}</p>
                                </div>
                            ))
                        }

                    </div>
                </section>
            </main>
        </>
    )
}