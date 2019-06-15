
class Locations { 
    kindof = "";
    name = "";
    city = ""; 
    zipCode = "";   
    address = "";  
    imgTeaser = "";
    created = "";
    constructor(kindof, name, city, zipCode, address, imgTeaser, created) { 
        this.kindof = kindof;
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.imgTeaser = imgTeaser;
        this.created = created;
   }

   displayLocations() { 
       return `

         <div class="col-lg-3 col-md-6 col-sm-12 mt-5">

          <div class="row m-1">

              <div class="info text-center col-lg-12 text-white bg-dark">

                 <h2>${this.name}</h2>
                 <p> ${this.address}, ${this.zipCode} ${this.city} </p>

              </div>

              <div class=" col-lg-12 p-0">
                <img class="imgs w-100 d-lg-block d-md-block d-sm-none d-xs-none d-none" src="${this.imgTeaser}">
              </div>

              <div class="pt-3 col-lg-12 text-center text-white bg-dark inform  border-top  border-secondary" >
              
             
       `;         
   }

   /* Closure tags in order to make possible to nest other properties between those functions*/

   displayLocationsEnd(){    

       return `
             

            </div>

            <p class="bg-secondary text-white w-100 text-center">Created: ${this.created}</p>

          </div><!-- nested row -->
        
      </div>  

       `;
   }

}



class Restaurant extends Locations { 
    phone; 
    type;
    web;

   constructor(kindof, name, city, zipCode, address, imgTeaser, created, web, phone, type) {
       super(kindof, name, city, zipCode, address, imgTeaser, created); 
       this.web = web;
       this.phone = phone;
       this.type = type;
   }

   displayRestaurant() { 
       return `
               ${super.displayLocations()}
               <p><a href="#"> ${this.web} </a></p>
               <p> ${this.phone}</p>
               <p> ${this.type} restaurant</p>
               ${super.displayLocationsEnd()}

       `; 
    }

}


class Events extends Locations { 
    date; 
    time;
    ticket;

   constructor(kindof, name, city, zipCode, address, imgTeaser, created, date, time, ticket) {
       super(kindof, name, city, zipCode, address, imgTeaser, created); 
       this.date = date;
       this.time = time;
       this.ticket = ticket;
   }

   displayEvents() { 
       return `
               ${super.displayLocations()}
               <p>Price: ${this.ticket}€</p>
               <p> ${this.date} -  ${this.time}</p>
               <p></p>
               ${super.displayLocationsEnd()}

       `; 
   }

}



var zoo = new Locations("location", "Zoo", "Vienna", "1030 ", "Maxingstraße 13b", "img/place1.JPG", `18.06.2012 20:30` );
var church = new Locations("location", "St. Charles Church", "Vienna", "1010 ", "Karlsplaz 1", "img/place2.JPG", `11.06.2010 22:32`);
var schnitzel = new Restaurant("restaurant", "Schnitzel", "Vienna", "1022 ", "Aspernstraße 31", "img/rest1.JPG", `08.05.2013 18:25`,"www.restaurant.at", "+43 1 58 528 56 l", "Viennese");
var italia = new Restaurant("restaurant", "Italia", "Vienna", "1015 ", "Etwasplatz 7", "img/res2.JPG", `05.07.2002 13:23`,"www.italia.at", "+43 8 33 222 90 l", "Italian");
var metallica = new Events("event", "Metallica", "Vienna", "1150 ", "Roland Rainer Platz 1", "img/metallica.JPG", `03.01.2019 09:34`, " 15.03.2017 ", "12:45", "65,50");
var rhcp = new Events("event", "R.H.C.P.", "Vienna", "1010 ", "kettenbrückengasse 6", "img/red.JPG", `06.07.2015 13:23`, " 20.01.2014 ", "14:15", "35,50" );
var bhead = new Events("event", "Buckethead", "Vienna", "1022 ", "Somwhere 13", "img/bucket.JPG", `02.06.2011 20:30`,"13.07.2005", "22:30", "42,30");
var bbk = new Events("event", "B.B.King", "Innsbruck", "1010 ", "Wienstraße 89", "img/bbk.JPG", `12.10.2009 20:30`,"23.09.2009", "21:45", "28,50");



var arrObj: any[] = [zoo, church, schnitzel, italia, metallica, rhcp, bhead, bbk];

var row = document.getElementById('mainRow');



function show(){

    for (let i = 0; i < arrObj.length; ++i) {

        if(arrObj[i].kindof == "location"){

            row.innerHTML += arrObj[i].displayLocations()+arrObj[i].displayLocationsEnd();

        }else if(arrObj[i].kindof == "restaurant"){

            row.innerHTML += arrObj[i].displayRestaurant();

        }else if(arrObj[i].kindof == "event"){

            row.innerHTML += arrObj[i].displayEvents();
        }
    }

}




var filename = document.URL.substring(document.URL.lastIndexOf('/')+1);


if(filename == "index.html"){

   show();

}else if(filename == "index-asc.html"){

   arrObj.sort(confrontaD);
   show();

}else if(filename == "index-desc.html"){

   arrObj.sort(confrontaD);
   arrObj.reverse();
   show();

}



function confrontaD(a, b) {

      let piece = a.created.split('.');
      let pieceB = b.created.split('.');

      let datAin =piece[1]+"."+piece[0]+"."+piece[2];
      let datBin =pieceB[1]+"."+pieceB[0]+"."+pieceB[2];
       
      let datA = new Date(datAin);
      let datB = new Date(datBin);

      if (datA < datB) { return -1; }

         else {

           if (datA > datB) { return 1; }

         else { return 0; }
      }
}



