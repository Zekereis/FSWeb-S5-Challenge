import axios from "axios"; 

const Tablar = (konu) => {
  const divOlusutr = document.createElement("div");
  divOlusutr.classList.add("topics");

  for(let i = 0;i<konu.length;i++){
    const tabOlustur = document.createElement("div");
    tabOlustur.classList.add("tab");
    tabOlustur.textContent = konu[i];

    divOlusutr.appendChild(tabOlustur);
  }

  return divOlusutr;

  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  const tabContainer = document.querySelector(secici);
  axios.get("http://localhost:5001/api/konular")
  .then(function(cikti){
    //console.log(cikti.data.konular);
    const tablar = Tablar(cikti.data.konular);
    tabContainer.appendChild(tablar);
  })
  //
}

export { Tablar, tabEkleyici }
