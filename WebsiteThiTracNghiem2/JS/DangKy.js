
// ==========================================
// 1. KIEM TRA DU LIEU DANG KY
// ==========================================

function kiemTraDangKy() {
    const hoTen = document.getElementById("txtHoTen").value.trim();
    const tenDangNhap = document.getElementById("txtTenDangNhap").value.trim();
    const matKhau = document.getElementById("txtMatKhau").value;
    const nhapLaiMatKhau = document.getElementById("txtNhapLaiMatKhau").value;
    const email = document.getElementById("txtEmail").value.trim();
    const queQuan = document.getElementById("ddlQueQuan").value;
    const soThich = document.getElementById("txtSoThich").value.trim();
    const dongY = document.getElementById("chkDongYDieuKhoan").checked;


    const soTien = document.getElementById("txtTien").value.trim();


    const thongBao = document.getElementById("loiDangKyClient");

    thongBao.textContent = "";



    const mauSoTien = /^(1\d{2}|200)$/;
    if (!mauSoTien.test(soTien)) {
        return hienLoi("Số tiền phải là số từ 100 đến 200.");
    }



    // Kiem tra thong tin bat buoc
    if (!hoTen || !tenDangNhap || !matKhau ||
        !email || !queQuan || !soThich || !soTien) {
        return hienLoi("Vui lòng nhập đầy đủ thông tin bắt buộc.");
    }

    // Kiem tra email
    const mauEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!mauEmail.test(email)) {
        return hienLoi("Email không đúng định dạng.");
    }

    // Kiem tra mat khau
    if (matKhau !== nhapLaiMatKhau) {
        return hienLoi("Mật khẩu nhập lại không khớp.");
    }

    // Lay du lieu lop
    const lop = document.getElementById("txtLop").value.trim();

    // Kiem tra lop
    if (lop.length < 5 || lop.length > 10) {
        return hienLoi("Lớp phải từ 5 đến 10 ký tự.");
    }

    const mauLop = /^\d{2}[a-zA-Z0-9]{3,8}$/;

    if (!mauLop.test(lop)) {
        return hienLoi("Hai ký tự đầu phải là số, các ký tự còn lại là chữ hoặc số.");
    }

    // Kiem tra so thich
    if (soThich.length < 5 || soThich.length > 20) {
        return hienLoi("Sở thích phải từ 5 đến 20 ký tự.");
    }

    const mauSoThich = /^[\p{L} ]+$/u;

    if (!mauSoThich.test(soThich.normalize("NFC"))) {
        return hienLoi("Sở thích chỉ được chứa chữ và dấu cách.");
    }


    // Kiem tra dieu khoan
    if (!dongY) {
        return hienLoi("Bạn cần đồng ý với điều khoản.");
    }

    return true;
}

// ==========================================
// 2. HIEN THI LOI
// ==========================================

function hienLoi(noiDung) {
    const thongBao = document.getElementById("loiDangKyClient");

    thongBao.textContent = noiDung;

    return false;
}

// ==========================================
// 3. AN / HIEN MAT KHAU
// ==========================================

function doiHienThiMatKhau(id) {
    const oMatKhau = document.getElementById(id);

    if (oMatKhau.type === "password") {
        oMatKhau.type = "text";
    } else {
        oMatKhau.type = "password";
    }
}
//Chỉ có số: số có giới hạn trên dưới // chỉ có