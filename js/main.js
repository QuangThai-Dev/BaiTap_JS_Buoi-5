var getEl = function(id) {
    return document.getElementById(id);
}
var rdKhuVucA = getEl('rdKhuVucA');
var rdKhuVucB = getEl('rdKhuVucB');
var rdKhuVucC = getEl('rdKhuVucC');
var rdKhuVucX = getEl('rdKhuVucX');

var rdDoiTuong1 = getEl('rdDoiTuong1');
var rdDoiTuong2 = getEl('rdDoiTuong2');
var rdDoiTuong3 = getEl('rdDoiTuong3');
var rdDoiTuong0 = getEl('rdDoiTuong0');

var checkKhuVuc = function() {

    var diemKhuVuc = 0;
    if (rdKhuVucA.checked) {
        diemKhuVuc = 2;
    } else if (rdKhuVucB.checked) {
        diemKhuVuc = 1;
    } else if (rdKhuVucC.checked) {
        diemKhuVuc = 0.5;
    } else if (rdKhuVucX.checked) {
        diemKhuVuc = 0;
    }
    console.log(diemKhuVuc);
    return diemKhuVuc;
}

var checkDoiTuong = function() {
    var diemDoiTuong = 0;
    if (rdDoiTuong1.checked) {
        diemDoiTuong = 2.5;
    } else if (rdDoiTuong2.checked) {
        diemDoiTuong = 1.5;
    } else if (rdDoiTuong3.checked) {
        diemDoiTuong = 1;
    } else if (rdDoiTuong0.checked) {
        diemDoiTuong = 0
    }
    console.log(diemDoiTuong);
    return diemDoiTuong;
}

var tinhDiemTrungBinh = function(diemToan, diemLy, diemHoa) {
    var diemDoiTuong = checkDoiTuong();
    var diemKhuVuc = checkKhuVuc();
    var diemTrungBinh = 0;
    diemTrungBinh = (diemToan + diemLy + diemHoa) + diemDoiTuong + diemKhuVuc;
    return diemTrungBinh;
}

var xetDiemTotNghiep = function() {
    var diemToan = Number(getEl('diemToan').value);
    var diemLy = Number(getEl('diemLy').value);
    var diemHoa = Number(getEl('diemHoa').value);
    var diemChuan = Number(getEl('diemChuan').value);
    var diemXetTotNghiep = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
    if (isNaN(diemToan) || isNaN(diemLy) || isNaN(diemHoa) || isNaN(diemChuan)) {
        alert('Yêu cầu bạn nhập số!!');
        return;
    }
    if (diemChuan <= 0 || diemChuan > 30) {
        alert('Yêu cầu nhập lại điểm chuẩn!!')
        return;
    }
    if (diemToan < 0 || diemToan > 10) {
        alert('Bạn nhập sai điểm Toán. Yêu cầu nhập lại!');
        return;
    }
    if (diemLy < 0 || diemLy > 10) {
        alert('Bạn nhập sai điểm Lý. Yêu cầu nhập lại!');
        return;
    }
    if (diemHoa < 0 || diemHoa > 10) {
        alert('Bạn nhập sai điểm Hóa. Yêu cầu nhập lại!');
        return;
    }
    if (rdKhuVucA.checked == false && rdKhuVucB.checked == false && rdKhuVucC.checked == false && rdKhuVucX.checked == false) {
        alert('Yêu cầu bạn chọn khu vực!!');
        return;
    }
    if (rdDoiTuong1.checked == false && rdDoiTuong2.checked == false && rdDoiTuong3.checked == false && rdDoiTuong0.checked == false) {
        alert('Yêu cầu bạn chọn đối tượng!!');
        return;
    }
    if (diemChuan <= diemXetTotNghiep && diemToan != 0 && diemHoa != 0 && diemLy != 0) {
        xuatThongTin.style.display = 'block';
        xuatThongTin.innerHTML = 'Bạn đã đậu tốt nghiệp và số điểm đạt được là: ' + diemXetTotNghiep;
    } else {
        xuatThongTin.style.display = 'block';
        xuatThongTin.innerHTML = 'Bạn đã rớt tốt nghiệp';
    }

}

// Sự kiện cho buttuon 
getEl('btnXetDiem').addEventListener('click', xetDiemTotNghiep);

// Bài 2:
var xuatHoaDon = getEl('xuatHoaDon');
var tinhTienDien = function(ipTen, soKw) {
    var tinhTienDien = 0;
    if (soKw <= 50) {
        tinhTienDien = 500 * soKw;
    } else if (soKw > 50 && soKw <= 100) {
        tinhTienDien = (500 * 50) + ((soKw - 50) * 650);
    } else if (soKw > 100 && soKw <= 200) {
        tinhTienDien = (500 * 50) + (50 * 650) + ((soKw - 100) * 850);
    } else if (soKw > 200 && soKw <= 350) {
        tinhTienDien = (500 * 50) + (50 * 650) + (100 * 850) + ((soKw - 150) * 1100);
    } else {
        tinhTienDien = (500 * 50) + (50 * 650) + (100 * 850) + (200 * 1100) + ((soKw - 350) * 1300);
    }
    return tinhTienDien;
}

var thanhTien = function() {
    var ipTen = getEl('ipTen').value;
    var soKw = Number(getEl('soKw').value);
    // Check
    if (ipTen == '') {
        alert('Yêu cầu nhập tên người nộp!');
        return;
    }
    if (isNaN(soKw)) {
        alert('Bạn chỉ được nhập số!');
        return;
    }
    if (soKw < 0) {
        alert('Nhập sai số Kw yêu cầu nhập lại');
        return;
    }
    var tinhTien = tinhTienDien(ipTen, soKw);
    xuatHoaDon.style.display = 'block';
    xuatHoaDon.innerHTML = 'Tiền điện của bạn ' + ipTen + ' là: ' + tinhTien.toLocaleString() + ' VNĐ'
}

// Bắt sự kiện button
getEl('btnTinhTien').addEventListener('click', thanhTien);