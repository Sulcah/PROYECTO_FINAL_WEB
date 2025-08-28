import fortninte from './assets/fortninte.jpeg'
import elden from './assets/elden.jpeg'
import mariokart from './assets/mariokart.jpeg'
import './Inicio.css'


export default function Inicio(){

    const arreglo_inicio = [

            {"titulo": "Fortnite" , 
                "texto": "Fortnite es un juego gratuito y multiplataforma que ofrece una experiencia de juego variada, desde el competitivo Battle Royale hasta el modo cooperativo de supervivencia. Los jugadores pueden construir estructuras, recolectar armas y objetos, y competir en combates intensos." ,
                src : fortninte,
                "alt" : "1"},

            { "titulo": "Elden Ring", 
                "texto": "Elden Ring es un juego ambicioso que combina la jugabilidad característica de FromSoftware con un mundo abierto expansivo y una narrativa rica, ofreciendo una experiencia desafiante y gratificante para los jugadores",
                src : elden,
                "alt" : "2"},

            { "titulo": "Mario Kart 8 Deluxe", 
                "texto": "Mario Kart 8 Deluxe es una experiencia de carreras divertida y competitiva, con opciones para jugar solo, con amigos o en línea, y con la posibilidad de personalizar los karts y disfrutar de una variedad de modos de juego.",
                src : mariokart,
                "alt" : "3"},

    ];

    const arreglo_newnoti = [

        { "titulo" : "Donkey Kong Bonanza",
            "texto" : "Donkey Kong regresa a las 3D en una colorida aventura con exploración, destrucción masiva y plataformas, en la que el querido simio de Nintendo puede escalar, excavar y destrozar los escenarios para recuperar los plátanos dorados robados por VoidCo."},

        { "titulo" : "Grand Theft Auto VI",
            "texto" : "Rockstar podría permitir que artistas suban música inédita directamente al universo de GTA 6. La idea es crear emisoras radiales personalizadas dentro del juego, más allá de conciertos temporales como en Fortnite. Esto convertiría a GTA 6 en una plataforma viva para lanzar música y construir audiencias virtuales."}
        
    ];

    return(
        <>
            <main className="main__content">
                <section className="juegos__section">
                    <h2 className="juegos__title">🎮 Los mejores juegos del 2025</h2>
                    <div className="juegos__grid">
                        {
                            arreglo_inicio.map(ini=>(
                                <div className="juego__card">
                                    <img src={ini.src} alt={ini.alt} class="juego__img" />
                                    <h3 class="juego__nombre">{ini.titulo}</h3>
                                    <p class="juego__descripcion">{ini.texto}</p>
                                </div>
                            ))
                        }

                    </div>
                </section>
                <section className="noticias__section">
                    <h2 className="noticias__title">📰 Últimas Noticias</h2>
                    <div className="noticias__grid">

                        {
                            arreglo_newnoti.map(newn=>(

                                <article class="noticia__card">
                                    <h3 class="noticia__titulo">{newn.titulo}</h3>
                                    <p class="noticia__contenido">{newn.texto}</p>
                                </article>

                            ))
                        }

                    </div>
                </section>
            </main>
        </>
    )
}