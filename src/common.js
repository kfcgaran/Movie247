import React, { Component } from "react";

export default class Common extends Component {
    constructor() {

    }
    static getItemMovies(arrMovies) {
        const arrItem = [];
        for (let i = 0, len = arrMovies.length; i < len; i++) {
            let id = arrMovies[i].Key;
            let image = arrMovies[i].Anh;
            let url = arrMovies[i].Link;
            let name = arrMovies[i].TenPhim;
            let myobj = {
                "id": id,
                "image": image,
                "Link": url,
                "name": name,
            }
            arrItem.push(myobj);
        }
        return arrItem;
    }

    static getDetailMovies(arrMovies) {
        const arrDetails = [];
        let image = arrMovies[0].HinhAnh;
        let url = arrMovies[0].LinkXemPhim;
        let name = arrMovies[0].TenPhim;
        let realName = arrMovies[0].TenThat;
        let nowShowing = arrMovies[0].DangPhat;
        let comingSoon = arrMovies[0].SapChieu;
        let director = arrMovies[0].DaoDien;
        let cast = arrMovies[0].DienVien;
        let kind = arrMovies[0].TheLoai;
        let country = arrMovies[0].QuocGia;
        let time = arrMovies[0].ThoiLuong;
        let view = arrMovies[0].LuotXem;
        let reviews = arrMovies[0].LuotDanhGia;
        let numOfYears = arrMovies[0].NamXuatBan;
        let content = arrMovies[0].NoiDung;
        let imageContent = arrMovies[0].AnhNoiDung;
        let episodes = arrMovies[0].DanhSachServer;
        let nominatedMovie = arrMovies[0].PhimDeCu
        let myobj = {
            "image": image,
            "url": url,
            "name": name,
            "realName": realName,
            "nowShowing": nowShowing,
            "comingSoon": comingSoon,
            "director": director,
            "cast": cast,
            "kind": kind,
            "country": country,
            "time": time,
            "view": view,
            "reviews": reviews,
            "numOfYears": numOfYears,
            "content": content,
            "imageContent": imageContent,
            "episodes": episodes,
            "nominatedMovie" : nominatedMovie
        }
        arrDetails.push(myobj);
        return arrDetails;
    }

}

