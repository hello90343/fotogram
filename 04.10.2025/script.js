const pictures = ["./img/1.png", "./img/2.png", "./img/3.png", "./img/4.png",
    "./img/6.png", "./img/7.png", "./img/8.png", "./img/9.png", "./img/10.png", "./img/11.png",
    "./img/12.png"
 ];

 const gallery = document.getElementById("gallery");
 const dialog = document.getElementById("dialog");
 const dialogImg = document.getElementById("dialog-img");
 const show = document.getElementById("show");

let currentIndex = 0;
// i - nur lokal
// Ich brauche eine globale Variable (currentIndex), um den Zustand (welches Bild gerade angezeigt wird) dauerhaft zu speichern.
// (currentIndex) Der Button (zurück/weiter) braucht einen dauerhaft gespeicherten Index, um zu wissen, welches Bild gerade aktiv ist und wohin geslidet werden soll. i aus der Schleife existiert nur kurz beim Klick auf ein Thumbnail; die Buttons kommen später und müssen dann auf etwas Globales zugreifen

 function pushPictures(){
    for(let i = 0; i < pictures.length; i++) {
        gallery.innerHTML += `<div aria-haspopup="dialog" aria-controls="dialog" tabindex="0"><img class="picture" src="${pictures[i]}" alt="Bild ${i + 1}" onclick="openDialog('${pictures[i]}', ${i})"></div>`
    }
 }

 function openDialog(src, i){
    currentIndex = i;
    dialogImg.src = src;
    dialogImg.alt = `Bild: ${src}`;
    show.textContent = `${i + 1} / ${pictures.length}`;
    dialog.showModal();
    
 }

 function closeDialog(){
   dialog.close();
 }

function backButton(){
   let newIndex = currentIndex - 1;
   // der Kreislauf: Dialog → Button → neues Bild → Dialog.

   if (newIndex < 0) {
      newIndex = pictures.length - 1;
   }

   openDialog(pictures[newIndex], newIndex);
   // Neues Fenster wird aufgemacht
}

function nextButton(){
   let newIndex1 = currentIndex + 1;

   if (newIndex1 > pictures.length - 1) {
      newIndex1 = 0;
   }

   openDialog(pictures[newIndex1], newIndex1);
   // Neues Fenster wird aufgemacht
}

function setFocusOnTop(){
   const elemRef1 = document.getElementById("headline12")
   elemRef1.focus();
}

function closeAbroad(event) {
  if (event.target === dialog) {
    dialog.close();
  }
}










