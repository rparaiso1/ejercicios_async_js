const min = 1;
const max = 151;
const numRandom = Math.floor(Math.random() * (max - min + 1)) + min;

async function Pokemon() {
  try {
    const respuesta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${numRandom}`
    );
    if (!respuesta.ok) throw new Error("Error al cargar el Pokémon");

    const datos = await respuesta.json();
    const imageUrl = datos.sprites.front_shiny;

    mostrarImagen(imageUrl);
  } catch (error) {
    console.error("Error al obtener el Pokémon:", error);
  }
}

function mostrarImagen(imageUrl) {
  const imageElement = document.querySelector(".random-image");
  if (imageElement) {
    imageElement.src = imageUrl || "";
    imageElement.alt = imageUrl ? "Imagen del Pokémon aleatorio" : "Sin imagen";
  }
}

window.onload = Pokemon;
