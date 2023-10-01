import logo from './logo.svg';
import muralla from './muralla.jpg'
import petra from './petra.jpeg'
import coliseo from './coliseo.jpg'
import itza from './itza.jpg'
import picchu from './picchu.jpg'
import redentor from './redentor.jpg'
import mahal from './mahal.jpg'
import mundo from './mundo.png'
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <div class="titulo">
        7 maravillas del mundo<img class="mundo" style={{width: 90,height: 100}} src={mundo} alt='mundo'/>
      </div>
      <h1>1: La gran muralla china (china)</h1>
      <div class="imagen-container">
        <img style={{ width: 250, height: 200 }} src={muralla} alt='muralla'/>
      </div>
      <p>Es algo más que una muralla para un país como China.<br />
      Representa también su cultura y filosofía de vida hoy en día.<br />
      Sirvió para defenderse de los mongoles y llegó a tener más de 20.000 kilómetros desde Corea al desierto de Gobi.<br />
      Las primeras construcciones de la Gran Muralla China datan del siglo VII a.C.<br />
      entre los que destaca el muro construido entre 220 y 206 a.C.<br />
      por el primer emperador de China, Qin Shi Huang.</p><br/>
      <h1>2: PETRA (JORDANIA)</h1>
      <div class="imagen-container">
      <img style={{ width: 250, height: 200 }} src={petra} alt='petra'/>
      </div>
      <p>Punto clave de paso de la Ruta de la Seda, se levantó en el reino Nabateao.<br />
      Tras su abandono fue descubierta en 1812 por explorador suizo Johann Ludwig Burckhardt.<br />
      Se compone de 1.500 metros de longitud con fecha del año 312 a.C.<br />
      Petra fue nombrada por la revista Smithsonian como uno de los "28 lugares para ver antes de morir".</p><br/>
      <h1>3: EL COLISEO (ITALIA)</h1>
      <div class="imagen-container">
      <img style={{ width: 250, height: 200 }} src={coliseo} alt='coliseo'/>
      </div>
      <p>Con capacidad para 65.000 espectadores, acogió luchas de gladiadores durante 500 años<br />
      y se convirtió en el circo más grande entre todos los construidos en aquella época (año 72 d.C.).<br />
      Ha sufrido importantes daños por terremotos y expolios, pero mantiene todo su esplendor como símbolo icónico de la Roma imperial.<br />
      Es una de las atracciones turísticas más populares de Roma y también tiene vínculos con la Iglesia Católica Romana. <br />
      Cada Viernes Santo el Papa encabeza una procesión del Vía Crucis por el Coliseo.</p><br/>
      <h1>4: CHICHEN ITZA (MÉXICO)</h1>
      <div class="imagen-container">
      <img style={{ width: 250, height: 200 }} src={itza} alt='itza'/>
      </div>
      <p>El Templo de Kukulcán es una pirámide escalonada mesoamericana<br/>
      que domina el centro del sitio arqueológico de Chichén Itzá en el estado mexicano de Yucatán.<br />
      El edificio está designado más formalmente por los arqueólogos como Estructura 5B18 de Chichén Itzá.<br />
      La pirámide tiene 91 escalones en cada uno de sus lados.<br />
      Sumando todos ellos más el escalón final son 365 escalones, tantos como días tiene un año.</p><br/>
      <h1>5: MACHU PICCHU (PERÚ)</h1>
      <div class="imagen-container">
      <img style={{ width: 250, height: 200 }} src={picchu} alt='picchu'/>
      </div>
      <p>El Machu Picchu fue construido como propiedad del emperador inca Pachacuti (1438-1472).<br />
      A menudo denominada erróneamente como la "Ciudad Perdida de los Incas" y es todo un icono familiar de la civilización Inca.<br />
      Fue declarado Santuario Histórico del Perú en 1981 y Patrimonio de la Humanidad por la UNESCO en 1983.</p><br/>
      <h1>6: EL CRISTO REDENTOR (BRASIL)</h1>
      <div class="imagen-container">
      <img style={{ width: 250, height: 200 }} src={redentor} alt='redentor'/>
      </div>
      <p>Entre 1922 y 1931 se creó esta estatua art deco de Jesucristo en Río de Janeiro<br />
      por el escultor polaco-francés Paul Landowski y los ingenieros Heitor da Silva Costa y Albert Caquo.<br />
      La estatua pesa 635 toneladas y está ubicada en la cima de la montaña Corcovado en el Parque Nacional del Bosque de Tijuca.<br />
      Símbolo del cristianismo en todo el mundo,<br/>
      la estatua también se ha convertido en un icono cultural tanto de Río de Janeiro como de Brasil.</p><br/>
      <h1>7: TAJ MAHAL (INDIA)</h1>
      <div class="imagen-container">
      <img style={{ width: 250, height: 200 }} src={mahal} alt='mahal'/>
      </div>
      <p>El Taj Mahal es un mausoleo de mármol blanco marfil en la orilla sur del río Yamuna en la ciudad de Agra (India).<br />
      Fue encargado en 1632 por el emperador Shah Jahan para albergar la tumba de su esposa favorita,<br />
      Mumtaz Mahal. La tumba es la pieza central de un complejo que incluye una mezquita y una casa de huéspedes.<br />
      Su valor de construcción trasladado a hoy en día serían un 750 millones de euros.</p><br/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

