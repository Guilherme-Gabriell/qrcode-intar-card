const URL_INSTAGRAM = "https://www.instagram.com/guilherme_gabrielllll?igsh=MXZ2M240aHBzNDZycA%3D%3D&utm_source=qr"

let compartilharButton = document.getElementById("compartilhar-perfil-button")

// Forma mais comum de adicionar eventos aos botoes
compartilharButton.addEventListener('click', compartilharPerfilFn)
    


async function compartilharPerfilFn() {
   let shareData = {
        title : "Intagram Guilherme Gabriel",
        text : "Conheca Meu Perfil",
        url : URL_INSTAGRAM
   }
    try {
       await navigator.share(shareData)
    } catch (err) {
        console.log(err)
        if (!(err instanceof DOMException && err.name === "AbortError")) {
            window.open(URL_INSTAGRAM)
        }
    }
}

function copiarLink(){
    navigator.clipboard.writeText(URL_INSTAGRAM)
    //Mudar o texto do botao para link copiado e em negrito
    let copiarLinkText = document.getElementById("copiar-link-text")
    copiarLinkText.innerHTML = "<strong>Link copiado!</strong>"
    // adicionar animacao no botao (feedback)
    let copiarLinckButton = document.getElementById("copiar-link-botton")
    copiarLinckButton.classList.add(`animate__animated`, `animate__pulse` )
   // copiarLinckButton.addEventListener(`animationend`, () => {
   //     copiarLinkText.innerText = "Copiar linck"
   //     copiarLinckButton.classList.remove(`animate__pulse`)
   // })
}
