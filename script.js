async function downloadVideo() {
    const url = document.getElementById('url').value;
    const resultDiv = document.getElementById('result');
    
    if (!url.includes('tiktok.com')) {
        resultDiv.innerHTML = '<p style="color: red;">URL tidak valid!</p>';
        return;
    }
    
    resultDiv.innerHTML = '<p>Loading...</p>';
    
    try {
        // Menggunakan API pihak ketiga (contoh: ssstik.io - risiko tinggi, mungkin tidak berfungsi)
        const response = await fetch(`https://www.tikwm.com/api/convert?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        
        if (data.videoUrl) {
            resultDiv.innerHTML = `<a href="${data.videoUrl}" target="_blank">Klik untuk Download</a>`;
        } else {
            resultDiv.innerHTML = '<p style="color: red;">Gagal mendapatkan video. Coba URL lain.</p>';
        }
    } catch (error) {
        resultDiv.innerHTML = '<p style="color: red;">Error: API tidak tersedia atau diblokir.</p>';
    }
}
