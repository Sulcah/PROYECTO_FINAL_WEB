import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpEg'
import BALATRO from './assets/BALATRO.webp'
import './Noticia.css'

export default function Noticia(){

    const arreglo_noticia = [

            { "titulo": "El actor de MindsEye muestra su disgusto con el catastrófico lanzamiento del juego: 'No me gusta ese modelo'" , 
                "texto": "Álex Hernández, que interpreta a Jacob Diaz en MindsEye, critica el lanzamiento temprano de juegos con evidentes problemas, como sucedió antes con Cyberpunk 2077.",
                src : img1,
                "alt" : "1"},

            { "titulo": "Death Stranding 2 ya está a la venta en PS5 y estrena tráiler de lanzamiento editado por Hideo Kojima", 
                "texto": "El director estrena un vídeo final, aunque los fans saben que Kojima suele mostrar 'spoilers' en este tipo de montajes y avisan sobre el contenido.",
                src : img2,
                "alt" : "1"},

            { "titulo": "Rematch ha sido un éxito: Sloclap anuncia ventas y actualiza su número de jugadores únicos", 
                "texto": "El juego de fútbol de los creadores de Sifu todavía tiene que mejorar con nuevas funciones y contenido, pero los datos del debut son muy buenos.",
                src : img3,
                "alt" : "1"},

            { "titulo": "Capcom lo ha vuelto a hacer: Pragmata reinventará los 'shooters' con una mecánica que nadie se esperaba", 
                "texto": "Según explica Cho Yonghee, el director de Pragmata, en este juego podremos controlar simultáneamente a los dos protagonistas, algo hasta ahora muy inusual en los shooters",
                src : img4,
                "alt" : "1"},

            { "titulo": "Su debut ha sido un exitazo y los desarrolladores de Clair Obscur: Expedition 33 ya piensan en su próximo juego", 
                "texto": "Sandfall Interactive sabe que las expectativas serán mayores, pero también han ganado experiencia con su exitoso juego de rol.",
                src : img5,
                "alt" : "1"},

            { "titulo": "Planean un ataque terrorista en Roblox", 
                "texto": "Un hombre de Texas fue acusado esta semana por supuestamente amenazar con un ataque inspirado por ISIS contra un concierto de música cristiana.",
                src : img6,
                "alt" : "1"},

            { "titulo": "Cómo Balatro Armonizó(Arruinó) Mi Vida", 
                "texto": "Balatro no es solo un juego de cartas, es un estilo de vida.",
                src : BALATRO,
                "alt" : "1"}
    ];

    return(
        <>
            <section id="noticias__section">
            <h1 id="titulo">👻👻 Noticias Recientes 👻👻</h1>
            <div id="div_franja"></div>
            <div id="div_padding">

                {
                    arreglo_noticia.map(noti=>(
                        
                        <a href="html-noti/n1.html">
                            <article className="noticias_article">
                            <img src={noti.src} alt={noti.alt} width="150" height="90"/>
                            <div>
                                <h2>{noti.titulo}</h2>
                                <p>{noti.texto}</p>
                            </div>
                            </article>
                        </a>

                    ))

                }

            </div>
        </section>
        </>
    )
}