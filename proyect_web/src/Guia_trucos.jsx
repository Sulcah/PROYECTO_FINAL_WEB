import './Guia_trucos.css'
import { useState, useEffect } from 'react'

const Guia_trucos = () => {
  const [activeTab, setActiveTab] = useState('guia')
  const [filtro, setFiltro] = useState('')
  const [nombre, setNombre] = useState('')
  const [comentario, setComentario] = useState('')
  const [comentarios, setComentarios] = useState([])
  const [modoClaro, setModoClaro] = useState(false)

  const guias = [
    {"titulo" : "🎮 Fortnite" , "texto" : "Domina la construcción avanzada, edición turbo y estrategias de zona para subir en competitivo."},
    {"titulo" : "⚔️ Elden Ring" , "texto" : "Encuentra rutas secretas, builds mágicas y cómo derrotar jefes como Malenia con eficiencia."},
    {"titulo" : "🏎 Mario Kart 8 Deluxe" , "texto" : "Descubre combinaciones óptimas de kart, atajos en cada pista y técnicas de miniturbo."},
    {"titulo" : "🧙 Hogwarts Legacy" , "texto" : "Hechizos, talentos, zonas secretas y cómo maximizar tu poder mágico desde el principio."},
    {"titulo" : "🪖 Warzone 2.0" , "texto" : "Rotaciones, loot, UAVs, clases meta y cómo sobrevivir hasta el círculo final."},
    {"titulo" : "💥 Brawl Stars" , "texto" : "Estrategias por modo, builds recomendadas y los mejores brawlers para cada mapa."},
    {"titulo" : "🧟 Resident Evil 4 Remake" , "texto" : "Ruta de mejoras, administración de recursos y secretos escondidos del castillo y aldeas."},
    {"titulo" : "⚔️ Zelda: Tears of the Kingdom" , "texto" : "Templos ocultos, combinaciones Zonai, y consejos para explorar sin morir en el intento."},
    {"titulo" : "🧌 League of Legends" , "texto" : "Posicionamiento, builds por rol, visión avanzada y macrojuego en soloQ y teamplay."},
    {"titulo" : "🛸 Starfield" , "texto" : "Exploración eficiente, personalización de naves y construcción de bases en planetas clave."},
    {"titulo" : "🧊 Minecraft" , "texto" : "Guía completa de supervivencia, Nether, redstone, granjas automáticas y el End."},
    {"titulo" : "🕷 Spider-Man 2" , "texto" : "Combos, gadgets, trajes ocultos y misiones secundarias que otorgan mejoras clave."},
    {"titulo" : "🧠 The Last of Us Part II" , "texto" : "Gestión de recursos, exploración efectiva y cómo sobrevivir en dificultad realista."},
    {"titulo" : "🏴‍☠️ Assassin's Creed Valhalla" , "texto" : "Desbloquea habilidades, mejora tu asentamiento y descubre secretos nórdicos."},
    {"titulo" : "💣 Valorant" , "texto" : "Estrategias de ataque, defensa, uso de habilidades por agente y comunicación efectiva."}
  ]

  const trucos = [
    {"juego" : "GTA V" , "texto" : " Escribe (TURTLE) para obtener vida y armadura al máximo."},
    {"juego" : "Minecraft" , "texto" : " Coloca antorchas debajo de la arena para evitar daño por caída."},
    {"juego" : "Zelda TOTK" , "texto" : " Usa combinación de armas con rocas para romper estructuras sin gastar bombas."},
    {"juego" : "Call of Duty" , "texto" : " Dispara ráfagas cortas para mayor precisión a larga distancia."},
    {"juego" : "Fortnite" , "texto" : " Coloca trampas en la entrada de tus construcciones al final de la partida para sorprender enemigos que rushean sin pensar."},
    {"juego" : "Elden Ring" , "texto" : " Usa invocaciones espirituales para distraer a los jefes mientras atacas por detrás. Mejora primero tu lágrima mimética."},
    {"juego" : "Mario Kart" , "texto" : " Haz \"mini turbos\" derrapando en curvas y acumula hasta el ultraturbo (azul) para ganar en pistas técnicas como Rainbow Road."},
    {"juego" : "Warzone" , "texto" : " Lleva siempre munición extra y UAV. Al activar el UAV enemigo, ve a edificios altos y cambia tu posición constantemente."},
    {"juego" : "League of Legends" , "texto" : " Si tu línea va mal, farmea bajo torre y rota con tu jungla para forzar 2v1 en otras líneas."},
    {"juego" : "Hogwarts Legacy" , "texto" : " Usa Levioso en enemigos voladores antes de que te ataquen, y Combustion en trolls para debilitarlos rápidamente."},
    {"juego" : "Brawl Stars" , "texto" : " Usa el arbusto para esconderte y atacar con emboscadas. Combina ataques de largo alcance con supers que controlen zona."},
    {"juego" : "Resident Evil 4" , "texto" : " Dispara a las piernas de los enemigos para que se arrodillen y así puedas rematarlos con una patada para ahorrar balas."},
    {"juego" : "Zelda TOTK" , "texto" : " Usa la Ultramano para lanzar explosivos desde lejos sin arriesgar corazones. Aprovecha combinaciones con el arco de zona."},
    {"juego" : "Starfield" , "texto" : " En combates espaciales, apaga momentáneamente los escudos y redirígelos al motor para una fuga rápida."},
    {"juego" : "League of Legends" , "texto" : " Wardea el río a minuto 3:20 para evitar ganks tempranos."}
  ]

  useEffect(() => {
    if (modoClaro) {
      document.body.classList.add("modo-claro");
    } else {
      document.body.classList.remove("modo-claro");
    }
  }, [modoClaro]);

  
  const cambiarTab = (id) => {
    setActiveTab(id);
    setFiltro(''); 
  };

  const toggleModo = () => {
    setModoClaro(!modoClaro);
  };

  const handleSubmitComentario = (e) => {
    e.preventDefault()
    if (nombre.length < 3 || comentario.length < 5) {
      alert("Por favor, escribe un nombre y comentario más largos.")
      return
    }

    const nuevoComentario = {
      nombre,
      comentario,
      fecha: new Date().toLocaleString()
    }

    setComentarios([...comentarios, nuevoComentario])
    setNombre('')
    setComentario('')
  }

  const guiasFiltradas = guias.filter(guia => 
    guia.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
    guia.texto.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <main className="main__content">
      <section className="guias__section">
        <h2 className="guias__title">🧠 Guías y Trucos</h2>
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'guia' ? 'active' : ''}`} 
            onClick={() => cambiarTab('guia')} 
          >
            📘 Guías
          </button>
          <button 
            className={`tab ${activeTab === 'truco' ? 'active' : ''}`} 
            onClick={() => cambiarTab('truco')} 
          >
            🧪 Trucos
          </button>
          <button 
            className={`tab ${activeTab === 'comenta' ? 'active' : ''}`} 
            onClick={() => cambiarTab('comenta')} 
          >
            💬 Comentarios
          </button>
          <button 
            className="modo-toggle" 
            onClick={toggleModo} 
          >
            🌗 Modo
          </button>
        </div>


        {activeTab === 'guia' && (
          <div className="tab-content active">
            <input 
                type="text" 
                id="buscador" 
                placeholder="Buscar..." 
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />
            <div className="guia__grid">
              {guiasFiltradas.map((guia, index) => (
                <div key={index} className="guia__card">
                  <h3 className="guia__titulo">{guia.titulo}</h3>
                  <p>{guia.texto}</p>
                </div>
              ))}
            </div>
          </div>
        )}


        {activeTab === 'truco' && (
          <div className="tab-content active">
            <ul className="trucos__lista">
              {trucos.map((truco, index) => (
                <li key={index}>
                  <span className="negrita">{truco.juego}:</span> {truco.texto}
                </li>
              ))}
            </ul>
          </div>
        )}


        {activeTab === 'comenta' && (
          <div className="tab-content active">
            <form onSubmit={handleSubmitComentario} className="comentario__form">
              <input 
                type="text" 
                placeholder="Tu nombre" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required 
              />
              <textarea 
                placeholder="Escribe tu comentario aquí..." 
                rows="4"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                required 
              ></textarea>
              <button type="submit">Publicar Comentario</button>
            </form>
            <div className="comentario__lista">
              {comentarios.map((com, index) => (
                <p key={index}>{com.nombre} ({com.fecha}): {com.comentario}</p>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default Guia_trucos