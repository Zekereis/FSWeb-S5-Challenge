import axios from "axios";


const Card = (makale) => {
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  const divHeadLine = document.createElement("div");
  divHeadLine.classList.add("headline");
  divHeadLine.textContent = makale.anabaslik;
  divCard.appendChild(divHeadLine);

  const divAuthor = document.createElement("div");
  divAuthor.classList.add("author");
  const divImage = document.createElement("div");
  divImage.classList.add("img-container");
  const img =document.createElement("img");
  img.setAttribute("src", makale.yazarFoto);
  divImage.appendChild(img);

  const span = document.createElement("span");
  span.textContent = `${makale.yazarAdi} tarafından`;

  divAuthor.appendChild(divImage);
  divAuthor.appendChild(span);

  divCard.appendChild(divAuthor);

  divCard.addEventListener("click",function(){
    console.log(makale.anabaslik);
  })

  return divCard;


  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  axios.get("http://localhost:5001/api/makaleler")
  .then(function(yanit){
    //console.log(yanit.data.makaleler)
    for(let i in yanit.data.makaleler){
      yanit.data.makaleler[i].forEach(function(makale,k){
        document.querySelector(secici).appendChild(Card(makale));
      })
    }
  })
}

export { Card, cardEkleyici }
