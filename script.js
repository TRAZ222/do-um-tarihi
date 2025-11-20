// **DOĞRU TARİH AYARI**
const DOGRU_TARIH = "2006-03-10"; 

function tarihiKontrolEt() {
    const girilenTarihElementi = document.getElementById("dogumTarihiGiris");
    const gizliMesajAlani = document.getElementById("gizliMesajAlani");
    const hataMesajiAlani = document.getElementById("hataMesaji");
    const anaBaslik = document.getElementById("anaBaslik"); 
    const romantikEfektAlani = document.getElementById("romantikEfekt"); // Yeni alan

    hataMesajiAlani.textContent = "";
    gizliMesajAlani.style.display = 'none';
    
    const girilenTarih = girilenTarihElementi.value;

    if (girilenTarih === "") {
        hataMesajiAlani.textContent = "Lütfen doğum tarihinizi giriniz.";
        return; 
    }

    if (girilenTarih === DOGRU_TARIH) {
        // DOĞRU İSE:
        anaBaslik.style.display = 'none'; 
        girilenTarihElementi.style.display = 'none'; 
        document.querySelector('button').style.display = 'none'; 
        
        gizliMesajAlani.style.display = 'block'; 
        document.body.style.background = 'linear-gradient(to right, #a18cd1, #fbc2eb)'; 
        
        // **ROMANTİK EFEKTİ BAŞLAT**
        kalpleriSac(romantikEfektAlani); 

    } else {
        // YANLIŞ İSE:
        hataMesajiAlani.textContent = "Sayfadan Çık";
    }
}


// **YENİ ANİMASYON FONKSİYONU**
function kalpleriSac(alan) {
    const semboller = ['💖', '🌹', '✨', '💐', '❤️'];
    const adet = 40; // Saçılacak parça sayısı

    for (let i = 0; i < adet; i++) {
        const kalp = document.createElement('div');
        
        // Rastgele sembol seçimi
        kalp.textContent = semboller[Math.floor(Math.random() * semboller.length)]; 

        // Kalp stilini ayarla
        kalp.style.position = 'absolute';
        kalp.style.fontSize = `${Math.random() * 20 + 15}px`; // Rastgele boyut
        kalp.style.left = `${Math.random() * 100}vw`; // Rastgele yatay konum
        kalp.style.top = `${-20}px`; // Ekranın üstünden başla
        kalp.style.transition = 'none';

        // CSS animasyonu için class ekle
        kalp.classList.add('dusme-animasyonu'); 

        alan.appendChild(kalp);

        // Animasyon özelliklerini rastgele ayarla
        setTimeout(() => {
            kalp.style.transition = `transform ${Math.random() * 5 + 5}s linear, opacity 5s linear`;
            kalp.style.transform = `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`;
            kalp.style.opacity = '0'; // Aşağı düşerken yavaşça yok ol
        }, 50); 
    }
}
