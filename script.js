function toggleMode() {
  const html = document.documentElement
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
    */
  // função que adiciona ou remove
  html.classList.toggle("light")

  // pegar a tag img

  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver liht mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
  if (html.classList.contains("light")) {
    // se tiver liht mode, adicionar a imagem light
    img.setAttribute("alt", "Foto de Victor com celular de camisa regata preta")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("alt", "Foto de Victor sorrindo de camisa preta")
  }
}
