if (document.getElementById('kt_auth_body')) {
    document.getElementById('kt_auth_body').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            login();
        }
    });
}


async function login() {

    if (!$('#username').val()) {
        Swal.fire('Eksik Bilgi!', 'Giriş yapabilmek için lütfen kullanıcı adınızı giriniz.', 'error');
    } else if (!$('#password').val()) {
        Swal.fire('Eksik Bilgi!', 'Giriş yapabilmek için lütfen parolanızı giriniz.', 'error');
    } else {
        var result = await authService.post('Authentication/Login', {
            "Username": $('#username').val(),
            "Password": $('#password').val()
        });

        if (result.success) {
            Swal.fire('Başarılı!', result.message, 'success').then(() => {
                var locationUrl = localStorage.getItem('redirectAfterLogin')
                localStorage.clear()
                localStorage.setItem("UserInfo", JSON.stringify({
                    'Id': result.data.userId,
                    'Username': result.data.username,
                    'LastLogin': moment.now()
                }));
                localStorage.setItem("Menus", JSON.stringify({
                    'MenuList': result.data.menus
                }));

                $.ajax({
                    type: "GET",
                    data: {
                        'token': result.data.token.token
                    },
                    url: "/Authentication/SaveToken/",
                    success: function (result) {
                        console.log(result ? "Token kaydı başarılı" : "Token kaydı esnasında hata.");
                    }
                });
                if (locationUrl) {
                    window.location.href = locationUrl
                } else {
                    window.location.href = "/Home/Index";
                }
            });
        } else {
            Swal.fire('Hata!', result.message, 'error');
        }
    }
};


function logout() {
    localStorage.clear();
    window.location.href = "/";
};

function checkLogin() {
    console.log('loginCheck')
    var obj = localStorage.getItem("UserInfo");
    console.log(obj)
    if (!obj) {
        return false;
    } else {
        var userInfo = JSON.parse(obj);
        var currentDate = moment();
        var result = currentDate.diff(userInfo.LastLogin, 'days');
        return result <= 0;
    }
};

function setPermissions(menuId) {
    var menus = JSON.parse(localStorage.getItem("Menus"));
}

function validatePasswords() {
    const password = document.getElementById('new-password').value;
    const passwordControl = document.getElementById('new-password-control').value;
    const errorMessage = document.getElementById('password-error');

    if (password === '') {
        Swal.fire('Eksik Bilgi!', 'Lütfen parolanızı giriniz.', 'error');
        return false;
    }

    if (password !== passwordControl) {
        Swal.fire('Hata', 'Şifreler Eşleşmiyor!', 'error');
        return false;
    }

    errorMessage.style.display = 'none';
    Swal.fire('Başarılı', 'Şifreniz Başarıyla Değiştirildi!', 'success');
    return true;
}

var saveButton = document.getElementById('kt_modal_new_address_submit');
var cancelButton = document.getElementById('kt_modal_new_address_cancel');
var modalElement = document.getElementById('exampleModal');

if (saveButton) {
    saveButton.addEventListener('click', function (event) {
        if (!validatePasswords()) {
            event.preventDefault();
        }
    });
}

if (modalElement) {
    modalElement.addEventListener('hidden.bs.modal', function () {
        resetPasswordFields();
    });
}
if (cancelButton) {
    cancelButton.addEventListener('click', function () {
        resetPasswordFields();
    });

}


function resetPasswordFields() {
    document.getElementById('new-password').value = '';
    document.getElementById('new-password-control').value = "";
    document.getElementById('password-error').style.display = 'none';
}

