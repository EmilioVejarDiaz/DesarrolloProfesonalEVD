<template>
  <div>
    <div>
      Estesel Inisio
    </div>
    <div>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <div id="info">
      <b-card overlay img-src="https://picsum.photos/900/250/?image=3" img-alt="Card Image" text-variant="white"
        title="Image Overlay" sub-title="Subtitle">
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
    </div>
    <div id="texto">
      <b-text>
        albion online es un mmorpg no lineal en el que escribes tu propia historia sin limitarte a seguir un camino
        prefijado, explora un amplio mundo abierto con cinco biomas unicos, todo cuanto hagas tendra su repercusíon en el
        mundo, con su economia orientada al jugador de albion los jugadores crean practicamente todo el equipo a partir de
        los recursos que consiguen, el equipo que llevas define quien eres, cambia de arma y armadura para pasar de
        caballero a mago o juego como una mezcla de ambas clases, aventurate en el mundo abierto y haz frente a los
        habitantes y las criaturas de albion, inicia expediciones o adentrate en mazmorras en las que encontraras enemigos
        aun mas dificiles, enfrentate a otros jugadores en encuentros en el mundo abierto, lucha por los territorios o por
        ciudades enteras en batallas tacticas, relajate en tu isla privada donde podras construir un hogar, cultivar
        cosechas, criar animales, unete a un gremio, todo es mejor cuando se trabaja en grupo [musica] adentrate ya en el
        mundo de albion y escribe tu propia historia.
      </b-text>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [

        {
          text: 'Inicio',
          active: true,
        }

      ]
    }
  }
}
</script>

<style></style>