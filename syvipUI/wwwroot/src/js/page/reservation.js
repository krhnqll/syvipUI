//#region otp işlemleri

//önce kullanıcı gerekli verileri girip rezervasyon yap diyecek. Butona basıldığı gibi btüün alanlar kontrol edilecek aradan telefon numarası seçilecek ve sendOTP fonksiyonuna istek atılacak. Daha sonra otp doğrulama modalı açılacak orada telefona gelen kod girilecek, tekrar doğrula butonuna basılınca apideki OTP kontrol endpointine istek atılacak ve gelen cevaba göre kullanıcıya geri bildirim yapılacak.

async function sendOTP() {

    


    try {
        var response = await apiService.post(``);

        if (response.success) {
            //kod doğrulama modal açıldığı kısım
        }
        else {
            
        }
    }
    catch {
        Swal.fire('Rezervasyon Kaydetme Esnasında Hata!', error.message, 'error');
    }
}

async function checkAndSaveResInfo() {


    try {
        var response = await apiService.post(``);

        if (response.success) {
            Swal.fire('Rezervasyon Kaydı Başarılı!', response.message, 'Success');
        }
        else {

        }
    }
    catch {
        Swal.fire('Rezervasyon Kaydetme Esnasında Hata!', error.message, 'error');
    }
}
//#endregion