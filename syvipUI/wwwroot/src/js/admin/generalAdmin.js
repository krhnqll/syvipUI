var adminInfo = [];
var reservationList = [];
var galleryItems = [];

//#region Kullanıcı İşlemleri

async function firstRunForAdminInfo() {
    await getAdminInfo();
}

async function getAdminInfo() {

    var response = apiService.get("");

    if (response.success) {
        adminInfo = response.data;
    }
    else {
        Swal.fire('Admin Bilgilerini Çekme Esnasında Hata!', error.message, 'error');
    }
}


//#endregion

//#region Rezervasyon İşlemleri

async function firstRunForReservations() {
    await getAllReservation();
}

async function getAllReservation() {

    var response = apiService.get("");

    if (response.success) {
        reservationList = response.data;
    }
    else {
        Swal.fire('Rezervasyon Bilgilerini Çekme Esnasında Hata!', error.message, 'error');
    }
}

function generateReservationList() {

    if ($.fn.DataTable.isDataTable('#')) {
        $('#').DataTable().destroy();
    }

    $('#').DataTable({
        "data": recordSelectBoxData,
        // "fixedHeader": true,
        order: [],

        "columns": [

            {
                "data": null,
                "render": function (row) {
                    return `<div class="d-flex align-items-center">
                                <a>${row.customerCode}</a>
                            </div>`;
                }
            },
            {
                "data": null,
                "render": function (row) {
                    return `<div class="d-flex align-items-center">
                                <a class="text-gray-800 text-hover-primary">${row.processPlace}</a>
                            </div>`;
                }
            },
            {
                "data": null,
                "render": function (row) {
                    return `<div class="d-flex align-items-center">
                                <a class="text-gray-800 text-hover-primary">${row.documentNo}</a>
                            </div>`;
                }
            },
            {
                "data": null,
                "render": function (row) {
                    return `<div class="d-flex align-items-center">
                                <a class="text-gray-800 text-hover-primary">${row.revisionDate}</a>
                            </div>`;
                }
            },
            {
                "data": null,
                "render": function (row) {
                    return `<div class="d-flex align-items-center">
                                <a class="text-gray-800 text-hover-primary">${row.releaseDate}</a>
                            </div>`;
                }
            },

            {
                "data": null,
                "render": function (row) {
                    return `<a onclick="openControlPlanEditModal(${row.id})" class="btn btn-icon btn-color-success bg-body w-25px h-25px w-lg-30px h-lg-30px me-3" title="Kontrol Plan Bilgilerini Düzenle" data-bs-toggle="tooltip" data-bs-placement="top">
        <i class="ki-duotone ki-pencil fs-2 fs-md-1">
            <span class="path1"></span>
            <span class="path2"></span>
        </i>
    </a>`;
                }
            },
        ],
        "searching": true
    });



    $('#').on('keyup', function () {
        var value = $(this).val();
        $('#').DataTable().search(value).draw();
    });

}

//#endregion

//#region Galeri İşlemleri

async function firstRunForGallery() {
    await getAllGalleryItems();
}

async function getAllGalleryItems() {

    var response = apiService.get("");

    if (response.success) {
        galleryItems = response.data;
    }
    else {
        Swal.fire('Galeri bileşenleri Getirme Esnasında Hata!', error.message, 'error');
    }
}

function generateGalleryList() {

    if ($.fn.DataTable.isDataTable('#')) {
        $('#').DataTable().destroy();
    }

    $('#').DataTable({
        "data": recordSelectBoxData,
        // "fixedHeader": true,
        order: [],

        "columns": [

            {
                "data": null,
                "render": function (row) {
                    return `<div class="d-flex align-items-center">
                                <a>${row.customerCode}</a>
                            </div>`;
                }
            },
            {
                "data": null,
                "render": function (row) {
                    return `<div class="d-flex align-items-center">
                                <a class="text-gray-800 text-hover-primary">${row.processPlace}</a>
                            </div>`;
                }
            },
            {
                "data": null,
                "render": function (row) {
                    return `<div class="d-flex align-items-center">
                                <a class="text-gray-800 text-hover-primary">${row.documentNo}</a>
                            </div>`;
                }
            },
            {
                "data": null,
                "render": function (row) {
                    return `<div class="d-flex align-items-center">
                                <a class="text-gray-800 text-hover-primary">${row.revisionDate}</a>
                            </div>`;
                }
            },
            {
                "data": null,
                "render": function (row) {
                    return `<div class="d-flex align-items-center">
                                <a class="text-gray-800 text-hover-primary">${row.releaseDate}</a>
                            </div>`;
                }
            },

            {
                "data": null,
                "render": function (row) {
                    return `<a onclick="openControlPlanEditModal(${row.id})" class="btn btn-icon btn-color-success bg-body w-25px h-25px w-lg-30px h-lg-30px me-3" title="Kontrol Plan Bilgilerini Düzenle" data-bs-toggle="tooltip" data-bs-placement="top">
        <i class="ki-duotone ki-pencil fs-2 fs-md-1">
            <span class="path1"></span>
            <span class="path2"></span>
        </i>
    </a>`;
                }
            },
        ],
        "searching": true
    });



    $('#').on('keyup', function () {
        var value = $(this).val();
        $('#').DataTable().search(value).draw();
    });

}

//#endregion