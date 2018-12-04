const urls = [
    // Menu
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/Menu/phimbo.json', // [0]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/Menu/phimchieurap.json', // [1]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/Menu/phimle.json', // [2]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/Menu/phimxemnhieu.json', // [3]
    // Quoc Gia
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/ando.json', // [4]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/aumy.json', // [5]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/hanquoc.json', // [6]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/hongkong.json', // [7]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/nhatban.json', // [8]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/quocgiakhac.json', // [9]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/thailan.json', // [10]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/trungquoc.json', // [11]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/vietnam.json',// [12]
    // The Loai 
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimcotrangthanthoai.json', // [13]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimhaihuoc.json', // [14]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimhoathinh.json', // [15]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimkhoahocvientuong.json', // [16]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimkinhdima.json', // [17]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimphieuluuhanhdong.json', // [18]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimtamlytinhcam.json', // [19]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimthethaoamnhac.json', // [20]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimvothuatkiemhiep.json', // [21]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/tvshow.json', // [22]
    // Home
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TrangChu/banner.json', // [23]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TrangChu/phimbomoicapnhat.json', // [24]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TrangChu/phimhoathinh.json', // [25]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TrangChu/phimhot.json', // [26]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TrangChu/phimlemoicapnhat.json' // [27]
];

const a = [
    {
    "file":"https://r5---sn-i3b7knl6.googlevideo.com/videoplayback?id=6aaeef14b279fa5e&itag=18&source=webdrive&&requiressl=yes&mm=30&mn=sn-i3b7knl6&ms=nxu&mv=m&pl=48&sc=yes&ei=hEYFXLqWDoSm4wKv7YCgBg&susc=drp&app=fife&driveid=1jmLQ5aYoT0Giyk3KlLNhA3hKTa3-f6Yt&mime=video/mp4&dur=2730.225&lmt=1542066743623372&mt=1543849483&ip=2001:ee0:305:1::14&ipbits=48&expire=1543856804&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,driveid,mime,dur,lmt&signature=78B888DEEE400890BEC93634987B96809B1826421392C5AE1D1669633B7F29C3.9EB680719D2E04B4AD80C5EFE1C5DD4E4263F28D16FFF8F3FDF23AA8D32F7241&key=us0",
    "label":"360p"
    },
    {
    "file":"https://r5---sn-i3b7knl6.googlevideo.com/videoplayback?id=6aaeef14b279fa5e&itag=59&source=webdrive&&requiressl=yes&mm=30&mn=sn-i3b7knl6&ms=nxu&mv=m&pl=48&sc=yes&ei=hEYFXNmUHpr84gKavZjIDQ&susc=drp&app=fife&driveid=1jmLQ5aYoT0Giyk3KlLNhA3hKTa3-f6Yt&mime=video/mp4&dur=2730.225&lmt=1542066759381984&mt=1543849483&ip=2001:ee0:305:1::14&ipbits=48&expire=1543856804&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,driveid,mime,dur,lmt&signature=787F739A775DE14F02C0B7EA413BC957DDA841E8089351948DE4A84B64525DDC.1AF28C822249F7183CBFB407C267501B16CF3872EFE78DC855A33C323B136B2A&key=us0",
    "label":"480p"
    },
    {
    "file":"https://r5---sn-i3b7knl6.googlevideo.com/videoplayback?id=6aaeef14b279fa5e&itag=22&source=webdrive&&requiressl=yes&mm=30&mn=sn-i3b7knl6&ms=nxu&mv=m&pl=48&sc=yes&ei=hEYFXOPgLsXK4gL5ypKQAg&susc=drp&app=fife&driveid=1jmLQ5aYoT0Giyk3KlLNhA3hKTa3-f6Yt&mime=video/mp4&dur=2730.225&lmt=1542043325512608&mt=1543849483&ip=2001:ee0:305:1::14&ipbits=48&expire=1543856804&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,driveid,mime,dur,lmt&signature=9C475618010E26A7FEC0E09C3990FE1204849E7C1DD068B216D058E498A632BD.1085544C0EC782EF57BF34353599B0EAD5AB560C2327143F0542CC81DA5483C7&key=us0",
    "label":"720p"
    },
    {
    "file":"https://r5---sn-i3b7knl6.googlevideo.com/videoplayback?id=6aaeef14b279fa5e&itag=37&source=webdrive&&requiressl=yes&mm=30&mn=sn-i3b7knl6&ms=nxu&mv=m&pl=48&sc=yes&ei=hEYFXM6XMoHk4gKq4b6wDg&susc=drp&app=fife&driveid=1jmLQ5aYoT0Giyk3KlLNhA3hKTa3-f6Yt&mime=video/mp4&dur=2730.225&lmt=1542066914618987&mt=1543849483&ip=2001:ee0:305:1::14&ipbits=48&expire=1543856804&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,driveid,mime,dur,lmt&signature=9B0E0A497EA80D62FD3155D59187A04BAA99A7D87F399D4A3F1E9E9DA7B88E4E.E8D1D3230824B695F94068FBFF8920810A5A5B066A955F1C40BF3019D158A7ED&key=us0",
    "label":"1080p"
    },
    {
    "file":"http://api.bilutv.net/m3u8/cms_upload/bilu/20181112/thoigianbl108001_bilu_234527.m3u8",
    "label":"720p"
    },
    {
    "file":"https://r2---sn-i3b7knl6.googlevideo.com/videoplayback?id=73cc454a2d689c02&itag=18&source=webdrive&&requiressl=yes&mm=30&mn=sn-i3b7knl6&ms=nxu&mv=m&pl=48&sc=yes&ei=M0cFXIWeEZDm4wKD579Y&susc=drp&app=fife&driveid=1wiIzucHScsIPFQEJ3K9cHocESjAn3M2m&mime=video/mp4&dur=2730.225&lmt=1542075245119044&mt=1543849669&ip=2001:ee0:305:1::14&ipbits=48&expire=1543856979&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,driveid,mime,dur,lmt&signature=350D2CD9FB0A4A0E3066E0181A9B0E5B0232BEDE0EA2D80E8FC4DEB5731051E2.CD6BAEACB99F30AD1D45D2F86FD3D3AAA7F7AC99A21952FB08467C5197C4DE9B&key=us0",
    "label":"360p"
    },
    {
    "file":"https://r2---sn-i3b7knl6.googlevideo.com/videoplayback?id=73cc454a2d689c02&itag=59&source=webdrive&&requiressl=yes&mm=30&mn=sn-i3b7knl6&ms=nxu&mv=m&pl=48&sc=yes&ei=M0cFXLOkFZHo4wLs7bqYAg&susc=drp&app=fife&driveid=1wiIzucHScsIPFQEJ3K9cHocESjAn3M2m&mime=video/mp4&dur=2730.225&lmt=1542072204157124&mt=1543849669&ip=2001:ee0:305:1::14&ipbits=48&expire=1543856979&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,driveid,mime,dur,lmt&signature=714A62CE7ADE31DF654FC14DCD5B4A167219DDF4984E74837A1DA2C25D3CFDC8.8AE313F732973B4404534ED8CF8ED66DDCEEB74786967FB0512A9BBFE9DAA13B&key=us0",
    "label":"480p"
    },
    {
    "file":"https://r2---sn-i3b7knl6.googlevideo.com/videoplayback?id=73cc454a2d689c02&itag=22&source=webdrive&&requiressl=yes&mm=30&mn=sn-i3b7knl6&ms=nxu&mv=m&pl=48&sc=yes&ei=M0cFXPPMOsmV4ALXjbfoBA&susc=drp&app=fife&driveid=1wiIzucHScsIPFQEJ3K9cHocESjAn3M2m&mime=video/mp4&dur=2730.225&lmt=1542070009409935&mt=1543849669&ip=2001:ee0:305:1::14&ipbits=48&expire=1543856979&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,driveid,mime,dur,lmt&signature=AE91FA9303EC1AD886A000279B4995A92A3EA446D56A18E139E56156CA118D15.519AB8D4D0B251A1FCED29100075BBB32D8520F2A3237B8BCD5F80DBDEF862D7&key=us0",
    "label":"720p"
    },
    {
    "file":"https://r2---sn-i3b7knl6.googlevideo.com/videoplayback?id=73cc454a2d689c02&itag=37&source=webdrive&&requiressl=yes&mm=30&mn=sn-i3b7knl6&ms=nxu&mv=m&pl=48&sc=yes&ei=NEcFXOLhDJja4wK2sLOwCQ&susc=drp&app=fife&driveid=1wiIzucHScsIPFQEJ3K9cHocESjAn3M2m&mime=video/mp4&dur=2730.225&lmt=1542068501051760&mt=1543849669&ip=2001:ee0:305:1::14&ipbits=48&expire=1543856980&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,driveid,mime,dur,lmt&signature=25516BF4CC8CE842B31F21AD667AC0E4D6C488653D1C18B2089500BC3BCDAAEE.6BB0424D548B5693E2E1E776EADCEE44C798D3577584641A5EE4DAC243D6E04F&key=us0",
    "label":"1080p"
    },
    {
    "file":"http://api.bilutv.net/m3u8/cms_upload/bilu/20181112/thoigianbl108001_bilu_234527.m3u8",
    "label":"720p"
    },
    {
    "file":"https://r5---sn-i3b7knl6.googlevideo.com/videoplayback?id=6aaeef14b279fa5e&itag=18&source=webdrive&&requiressl=yes&mm=30&mn=sn-i3b7knl6&ms=nxu&mv=m&pl=48&sc=yes&ei=hEYFXLqWDoSm4wKv7YCgBg&susc=drp&app=fife&driveid=1jmLQ5aYoT0Giyk3KlLNhA3hKTa3-f6Yt&mime=video/mp4&dur=2730.225&lmt=1542066743623372&mt=1543849483&ip=2001:ee0:305:1::14&ipbits=48&expire=1543856804&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,driveid,mime,dur,lmt&signature=78B888DEEE400890BEC93634987B96809B1826421392C5AE1D1669633B7F29C3.9EB680719D2E04B4AD80C5EFE1C5DD4E4263F28D16FFF8F3FDF23AA8D32F7241&key=us0",
    "label":"360p"
    },
    {
    "file":"https://r5---sn-i3b7knl6.googlevideo.com/videoplayback?id=6aaeef14b279fa5e&itag=59&source=webdrive&&requiressl=yes&mm=30&mn=sn-i3b7knl6&ms=nxu&mv=m&pl=48&sc=yes&ei=hEYFXNmUHpr84gKavZjIDQ&susc=drp&app=fife&driveid=1jmLQ5aYoT0Giyk3KlLNhA3hKTa3-f6Yt&mime=video/mp4&dur=2730.225&lmt=1542066759381984&mt=1543849483&ip=2001:ee0:305:1::14&ipbits=48&expire=1543856804&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,driveid,mime,dur,lmt&signature=787F739A775DE14F02C0B7EA413BC957DDA841E8089351948DE4A84B64525DDC.1AF28C822249F7183CBFB407C267501B16CF3872EFE78DC855A33C323B136B2A&key=us0",
    "label":"480p"
    },
    {
    "file":"https://r5---sn-i3b7knl6.googlevideo.com/videoplayback?id=6aaeef14b279fa5e&itag=22&source=webdrive&&requiressl=yes&mm=30&mn=sn-i3b7knl6&ms=nxu&mv=m&pl=48&sc=yes&ei=hEYFXOPgLsXK4gL5ypKQAg&susc=drp&app=fife&driveid=1jmLQ5aYoT0Giyk3KlLNhA3hKTa3-f6Yt&mime=video/mp4&dur=2730.225&lmt=1542043325512608&mt=1543849483&ip=2001:ee0:305:1::14&ipbits=48&expire=1543856804&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,driveid,mime,dur,lmt&signature=9C475618010E26A7FEC0E09C3990FE1204849E7C1DD068B216D058E498A632BD.1085544C0EC782EF57BF34353599B0EAD5AB560C2327143F0542CC81DA5483C7&key=us0",
    "label":"720p"
    },
    {
    "file":"https://r5---sn-i3b7knl6.googlevideo.com/videoplayback?id=6aaeef14b279fa5e&itag=37&source=webdrive&&requiressl=yes&mm=30&mn=sn-i3b7knl6&ms=nxu&mv=m&pl=48&sc=yes&ei=hEYFXM6XMoHk4gKq4b6wDg&susc=drp&app=fife&driveid=1jmLQ5aYoT0Giyk3KlLNhA3hKTa3-f6Yt&mime=video/mp4&dur=2730.225&lmt=1542066914618987&mt=1543849483&ip=2001:ee0:305:1::14&ipbits=48&expire=1543856804&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,driveid,mime,dur,lmt&signature=9B0E0A497EA80D62FD3155D59187A04BAA99A7D87F399D4A3F1E9E9DA7B88E4E.E8D1D3230824B695F94068FBFF8920810A5A5B066A955F1C40BF3019D158A7ED&key=us0",
    "label":"1080p"
    }
]
let arr360 = [];
let arr480 = [];
let arr720 = [];
let arr1080 = [];
let All = [];
for(let i= 0; i < a.length; i++)
{
    if(a[i].label == "360p"){
        arr360.push(a[i].file)
    }
    if(a[i].label == "480p"){
        arr480.push(a[i].file)
    }
    if(a[i].label == "720p"){
        arr720.push(a[i].file)
    }
    if(a[i].label == "1080p"){
        arr1080.push(a[i].file)
    }
}
let myobj = {
    "arr360p": arr360,
    "arr480p": arr480,
    "arr720p": arr720,
    "arr1080p": arr1080,
}

if(myobj["arr360p"].length >0){
    console.log(myobj["arr360p"][0])
}
if(myobj["arr480p"].length >0){
    console.log(myobj["arr480p"][0])
}
if(myobj["arr720p"].length >0){
    console.log(myobj["arr720p"][0])
}
if(myobj["arr1080p"].length >0){
    console.log( myobj["arr1080p"][0])
}


