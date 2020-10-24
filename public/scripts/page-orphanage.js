const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
    
//criação do mapa
const map = L.map('mapid', options).setView([-3.7169908, -38.5670573, 17], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criação do icone
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});



//criação do poup-up no mapa
L.marker([-3.7169908, -38.5670573], { icon }).addTo(map)

/* GALERIA DE IMAGENS */
function selectImage(event) {
  const button = event.currentTarget

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
  }

  //selecionar a imagem clicada 
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de imagem 
  imageContainer.src = image.src

  //adicionar a classe .active para esse botão
  button.classList.add('active')

}