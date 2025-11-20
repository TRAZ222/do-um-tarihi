// **DOĞRU TARİH AYARI**
// Doğru tarih 10 Mart 2006 (YYYY-MM-DD formatında)
const DOGRU_TARIH = "2006-03-10"; 

function tarihiKontrolEt() {
    // HTML elementlerini alıyoruz
    const girilenTarihElementi = document.getElementById("dogumTarihiGiris");
    const gizliMesajAlani = document.getElementById("gizliMesajAlani");
    const hataMesajiAlani = document.getElementById("hataMesaji");
    const anaBaslik = document.getElementById("anaBaslik"); 

    // Temizlik ve sıfırlama
    hataMesajiAlani.textContent = "";
    gizliMesajAlani.style.display = 'none';
    
    // Kullanıcının girdiği değeri al
    const girilenTarih = girilenTarihElementi.value;

    if (girilenTarih === "") {
        hataMesajiAlani.textContent = "Lütfen doğum tarihinizi giriniz.";
        return; 
    }

    // Doğru tarihi kontrol etme
    if (girilenTarih === DOGRU_TARIH) {
        // DOĞRU İSE: Gizli mesajı göster
        anaBaslik.style.display = 'none'; 
        girilenTarihElementi.style.display = 'none'; 
        document.querySelector('button').style.display = 'none'; 
        
        gizliMesajAlani.style.display = 'block'; 
        document.body.style.background = 'linear-gradient(to right, #a18cd1, #fbc2eb)'; 
    } else {
        // YANLIŞ İSE: Mesajı "Sayfadan Çık" olarak göster
        hataMesajiAlani.textContent = "Sayfadan Çık"; // BURASI DEĞİŞTİ!
        
        // Opsiyonel: Yanlışsa formu gizleyebiliriz
        // anaBaslik.style.display = 'none'; 
        // girilenTarihElementi.style.display = 'none'; 
        // document.querySelector('button').style.display = 'none'; 
    }
}
