window.onload = function() {
  alert("Prontos para muita nostalgia?");
};


function translatePage() {
  const targetLang = 'en'; // idioma de destino, por exemplo, português
  const sourceLang = 'auto'; // idioma de origem, 'auto' significa detectar automaticamente
  const text = document.body.innerText; // texto a ser traduzido, pode ser ajustado para suas necessidades

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const translation = data[0][0][0];
      document.body.innerHTML = translation; // substitua o conteúdo da página traduzido
    })
    .catch(error => console.error(error));
  }

  function setRootContent(children){
    $('content').append(children)
}

function removeContent(){
    $('content').html('')
}



function setCartonContent(){
    desenhos.forEach(carton=> 
        $('#carton-content').append(
            `
            <div class="col-4" id="carton-image">
                <span onclick="setContentInPage('${carton.pagina}')"><img class="rounded" src="${carton.desenho}" height=200px></span>
            </div> 
          `
        ))
}

function getContentFirstPage(rootChildren){
    switch (rootChildren) {
        case 'about':
            body.style.backgroundImage = 'url(img/about-img.jpg)';
            $('#navbarSupportedContent').find('ul').find('li').find('a').css('color','#000000');
            $('content').css('color','#000000', '!important');
            return $('#about-page').html();
        case 'carton':
            $('body').css('background-image','none');
            $('body').css('background-color','#111111');
            $('content').css('color','#FFFFFF', '!important');
            $('#navbarSupportedContent').find('ul').find('li').find('a').css('color','#FFFFFF');
            return $('#carton-page').html();
        case 'contact':
            body.style.backgroundImage = 'url(img/contact.jpg)';;
            $('#navbarSupportedContent').find('ul').find('li').find('a').css('color','#FFFFF');
            $('#navbarSupportedContent').find('ul').find('li').find('a').css('color','#FFFFFF');
            $('content').css('color','#FFFFFF', '!important');
            return $('#contact-page').html();
        case 'desenho':
            return $('#desenhos').html();
        default:
            $('body').css('background-image','url(img/stuv.jpg)');
            $('#navbarSupportedContent').find('ul').find('li').find('a').css('color','#FFFFFF');
            $('content').css('color','#FFFFFF', '!important');
            return $('#home-page').html();
    }
}

function setContentInPage(root){
    removeContent()
    setRootContent(getContentFirstPage(root))
}