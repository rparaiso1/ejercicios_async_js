async function cargarPersonajes() {
  try {
    const respuesta = await fetch("https://thronesapi.com/api/v2/Characters");

    if (!respuesta.ok) {
      throw new Error("Error al cargar los personajes");
    }

    const datos = await respuesta.json();

    const listaNombres = document.getElementById("character-list");

    datos.forEach((personaje) => {
      const option = document.createElement("option");
      option.value = personaje.imageUrl;
      option.textContent = personaje.fullName;
      listaNombres.appendChild(option);
    });

    listaNombres.addEventListener("change", mostrarImagen);
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
  }
}

function mostrarImagen() {
  const imageElement = document.querySelector(".character-image");
  const characterList = document.getElementById("character-list");

  const imageUrl = characterList.value;

  if (imageElement) {
    imageElement.src = imageUrl || "";
    imageElement.alt = imageUrl
      ? "Imagen del personaje seleccionado"
      : "Sin imagen";
  }
}

window.onload = cargarPersonajes;
