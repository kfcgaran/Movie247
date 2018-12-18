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
            "nominatedMovie": nominatedMovie
        }
        arrDetails.push(myobj);
        return arrDetails;
    }


    static setUpQuality(arr){
        let arr360 = [];
        let arr480 = [];
        let arr720 = [];
        let arr1080 = [];
        let All = [];
        let url = '';
        for(let i= 0; i < arr.length; i++)
        {
            if(arr[i].label == "360p"){
                arr360.push(arr[i].file)
            }
            if(arr[i].label == "480p"){
                arr480.push(arr[i].file)
            }
            if(arr[i].label == "720p"){
                arr720.push(arr[i].file)
            }
            if(arr[i].label == "1080p"){
                arr1080.push(arr[i].file)
            }
        }
        let myobj = {
            "arr360p": arr360,
            "arr480p": arr480,
            "arr720p": arr720,
            "arr1080p": arr1080,
        }
        if(myobj["arr1080p"].length >0){
            for(let i = 0 ; i < myobj["arr1080p"].length ; i++){
                let string = myobj["arr1080p"][i].substr(0,21)
                if(string == 'http://api.bilutv.net') return myobj["arr1080p"][i]
            }
        }
        if(myobj["arr720p"].length >0){
            for(let i = 0 ; i < myobj["arr720p"].length ; i++){
                let string = myobj["arr720p"][i].substr(0,21)
                if(string == 'http://api.bilutv.net') return myobj["arr720p"][i]
            }
        }
        if(myobj["arr480p"].length >0){
            for(let i = 0 ; i < myobj["arr480p"].length ; i++){
                let string = myobj["arr480p"][i].substr(0,21)
                if(string == 'http://api.bilutv.net') return myobj["arr480p"][i]
            }
        }
        if(myobj["arr360p"].length > 0){
            for(let i = 0 ; i < myobj["arr360p"].length ; i++){
                let string = myobj["arr360p"][i].substr(0,21)
                if(string == 'http://api.bilutv.net') return myobj["arr360p"][i]
            }
        }
        if(myobj["arr1080p"].length >0){
            return (myobj["arr1080p"][0])
        }
        if(myobj["arr720p"].length >0){
            return (myobj["arr720p"][0])
        }
        if(myobj["arr480p"].length >0){
            return (myobj["arr480p"][0])
        }
        if(myobj["arr360p"].length > 0){
            return (myobj["arr360p"][0])
        }
        else return "https://r6---sn-i3beln76.googlevideo.com/"     
    }
}

