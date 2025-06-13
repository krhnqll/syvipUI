const apiService = {

    baseUrl = "http://localhost:5282/api/",

    get: async (endpoint) => {
        try {
            $('#kt_body').waitMe({
                effect: 'bounce',
                text: 'Yükleniyor...',
                bg: 'rgba(255,255,255,0.7)',
                color: '#000'
            });

            const response = await fetch(baseUrl + endpoint);

            $('#kt_body').waitMe('hide');

            if (!response.ok) {
                throw new Error(`Hata kodu: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            $('#kt_body').waitMe('hide');
            Swal.fire('Hata!', error.message, 'error');
            return { success: false, message: error.message };
        }
    },

    post: async (endpoint, data) => {
        try {
            $('#kt_body').waitMe({
                effect: 'bounce',
                text: 'Yükleniyor...',
                bg: 'rgba(255,255,255,0.7)',
                color: '#000'
            });

            const response = await fetch(baseUrl + endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            $('#kt_body').waitMe('hide');

            if (!response.ok) {
                throw new Error(`Hata kodu: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            $('#kt_body').waitMe('hide');
            Swal.fire('Hata!', error.message, 'error');
            return { success: false, message: error.message };
        }
    }
};

