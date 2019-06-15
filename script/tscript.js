var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(kindof, name, city, zipCode, address, imgTeaser, created) {
        this.kindof = "";
        this.name = "";
        this.city = "";
        this.zipCode = "";
        this.address = "";
        this.imgTeaser = "";
        this.created = "";
        this.kindof = kindof;
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.imgTeaser = imgTeaser;
        this.created = created;
    }
    Locations.prototype.displayLocations = function () {
        return "\n\n         <div class=\"col-lg-3 col-md-6 col-sm-12 mt-5\">\n\n          <div class=\"row m-1\">\n\n              <div class=\"info text-center col-lg-12 text-white bg-dark\">\n\n                 <h2>" + this.name + "</h2>\n                 <p> " + this.address + ", " + this.zipCode + " " + this.city + " </p>\n\n              </div>\n\n              <div class=\" col-lg-12 p-0\">\n                <img class=\"imgs w-100 d-lg-block d-md-block d-sm-none d-xs-none d-none\" src=\"" + this.imgTeaser + "\">\n              </div>\n\n              <div class=\"pt-3 col-lg-12 text-center text-white bg-dark inform  border-top  border-secondary\" >\n              \n             \n       ";
    };
    /* Closure tags in order to make possible to nest other properties between those functions*/
    Locations.prototype.displayLocationsEnd = function () {
        return "\n             \n\n            </div>\n\n            <p class=\"bg-secondary text-white w-100 text-center\">Created: " + this.created + "</p>\n\n          </div><!-- nested row -->\n        \n      </div>  \n\n       ";
    };
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(kindof, name, city, zipCode, address, imgTeaser, created, web, phone, type) {
        var _this = _super.call(this, kindof, name, city, zipCode, address, imgTeaser, created) || this;
        _this.web = web;
        _this.phone = phone;
        _this.type = type;
        return _this;
    }
    Restaurant.prototype.displayRestaurant = function () {
        return "\n               " + _super.prototype.displayLocations.call(this) + "\n               <p><a href=\"#\"> " + this.web + " </a></p>\n               <p> " + this.phone + "</p>\n               <p> " + this.type + " restaurant</p>\n               " + _super.prototype.displayLocationsEnd.call(this) + "\n\n       ";
    };
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(kindof, name, city, zipCode, address, imgTeaser, created, date, time, ticket) {
        var _this = _super.call(this, kindof, name, city, zipCode, address, imgTeaser, created) || this;
        _this.date = date;
        _this.time = time;
        _this.ticket = ticket;
        return _this;
    }
    Events.prototype.displayEvents = function () {
        return "\n               " + _super.prototype.displayLocations.call(this) + "\n               <p>Price: " + this.ticket + "\u20AC</p>\n               <p> " + this.date + " -  " + this.time + "</p>\n               <p></p>\n               " + _super.prototype.displayLocationsEnd.call(this) + "\n\n       ";
    };
    return Events;
}(Locations));
var arrObj = [];
arrObj.push(new Locations("location", "Zoo", "Vienna", "1030 ", "Maxingstraße 13b", "img/place1.JPG", "18.06.2012 20:30"));
arrObj.push(new Locations("location", "St. Charles Church", "Vienna", "1010 ", "Karlsplaz 1", "img/place2.JPG", "11.06.2010 22:32"));
arrObj.push(new Restaurant("restaurant", "Schnitzel", "Vienna", "1022 ", "Aspernstraße 31", "img/rest1.JPG", "08.05.2013 18:25", "www.restaurant.at", "+43 1 58 528 56 l", "Viennese"));
arrObj.push(new Restaurant("restaurant", "Italia", "Vienna", "1015 ", "Etwasplatz 7", "img/res2.JPG", "05.07.2002 13:23", "www.italia.at", "+43 8 33 222 90 l", "Italian"));
arrObj.push(new Events("event", "Metallica", "Vienna", "1150 ", "Roland Rainer Platz 1", "img/metallica.JPG", "03.01.2019 09:34", " 15.03.2017 ", "12:45", "65,50"));
arrObj.push(new Events("event", "R.H.C.P.", "Vienna", "1010 ", "kettenbrückengasse 6", "img/red.JPG", "06.07.2015 13:23", " 20.01.2014 ", "14:15", "35,50"));
arrObj.push(new Events("event", "Buckethead", "Vienna", "1022 ", "Somwhere 13", "img/bucket.JPG", "02.06.2011 20:30", "13.07.2005", "22:30", "42,30"));
arrObj.push(new Events("event", "B.B.King", "Innsbruck", "1010 ", "Wienstraße 89", "img/bbk.JPG", "12.10.2009 20:30", "23.09.2009", "21:45", "28,50"));
var row = document.getElementById('mainRow');
function show() {
    for (var i = 0; i < arrObj.length; ++i) {
        if (arrObj[i].kindof == "location") {
            row.innerHTML += arrObj[i].displayLocations() + arrObj[i].displayLocationsEnd();
        }
        else if (arrObj[i].kindof == "restaurant") {
            row.innerHTML += arrObj[i].displayRestaurant();
        }
        else if (arrObj[i].kindof == "event") {
            row.innerHTML += arrObj[i].displayEvents();
        }
    }
}
var filename = document.URL.substring(document.URL.lastIndexOf('/') + 1);
if (filename == "index.html") {
    show();
}
else if (filename == "index-asc.html") {
    arrObj.sort(confrontaD);
    show();
}
else if (filename == "index-desc.html") {
    arrObj.sort(confrontaD);
    arrObj.reverse();
    show();
}
function confrontaD(a, b) {
    var piece = a.created.split('.');
    var pieceB = b.created.split('.');
    var datAin = piece[1] + "." + piece[0] + "." + piece[2];
    var datBin = pieceB[1] + "." + pieceB[0] + "." + pieceB[2];
    var datA = new Date(datAin);
    var datB = new Date(datBin);
    if (datA < datB) {
        return -1;
    }
    else {
        if (datA > datB) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
