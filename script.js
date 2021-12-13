
//home
let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav-links');
let links = document.querySelectorAll('.nav-links li');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
const wrapper = document.querySelector('.wrapper');
let nav = document.querySelector('.nav')
hamburger.addEventListener('click', function() {
   navLinks.classList.toggle('show-menu');
   line1.classList.toggle('rotate-line1');
   line3.classList.toggle('rotate-line3');
   line2.classList.toggle('vanish-line2');

   links.forEach((link,index) => {
    if(navLinks.classList.contains('show-menu')){
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
    } else if(!navLinks.classList.contains('show-menu')){
      link.style.animation = `navLinkFadeOut 0.4s ease forwards `
  
    }
})
})

const mediaQuery = window.matchMedia('(min-width:644px)');

function handleTabletChange(e) {
  if(e.matches) {
    let introTitle = document.querySelector('.introduction-title').innerText;
  
    let newIntroTitle = document.querySelector('.introduction-title');
    let letters = introTitle.split('');
    let strings = ''
    letters.forEach(letter =>{
     strings += letter == " " ? `<span class='gap'></span>` : `<span class="intro-spans">${letter}</span>`
    
    })

    newIntroTitle.innerHTML = strings;
    
    let spans = Array.from(newIntroTitle.children);
    let i;
    
    //fadein the main title from backward
      for(i = spans.length-1; 0 <= i; i--){
        console.log(spans.length)
        spans[i].style.animation = `introFade 5s linear forwards ${((spans.length-i)*0.1)}s`;
        }
  }
  
}

//fade in text of 'about confession killer' and 'about this project'
mediaQuery.addEventListener("change",handleTabletChange);
handleTabletChange(mediaQuery);

let FadeContents = document.querySelectorAll('.fade-content');

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2
};

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      entry.target.classList.add('fadeTextImg');
    }else if(entry.target.classList.contains('fadeTextImg')){
      observer.unobserve(entry.target);
    
    }
  })

}, options);


FadeContents.forEach(content => {
  observer.observe(content);
});


//map
function initMap(){
    let latlngArray = [];
    //center of map
    var option = {
        center : {lat:35.29336, lng:-99.660404},
        zoom: 4,
        // set to darkmode
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }],
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }],
            },
          ],

        mapTypeId: google.maps.MapTypeId.ROADMAP 
        // mapId: 'AIzaSyCAOeCTlfDReLSNEHRmh6lP0TuwNn84R-o'
    }

    let map = new google.maps.Map(document.getElementById("map"), option);


    //add marker function
    let array = [
      [{lat:38.4495688 , lng:-78.8689156},	"March, 1951",	"Harrisburg, VA',",	"Laura Everlean Burnley  W/F/17',",	"Strangulation. <br>Lucas confessed to this offense 02/14/84."],
      [{lat:42.0039331, lng:-83.9449417},	"January 02, 1961",	"Tecumseh, MI",	"Viola Lucas  W/F/68",	"Stabbed once in neck. <br>Victim was Lucas' mother."],
      [{lat:32.076176, lng:-81.088371},	"September 24, 1968",	"Savannah, GA",	"Unknown  W/F/?",	"Strangled. Toole only."],
      [{lat:32.589024, lng: -96.308868},	"August 09, 1970",	"Kaufman County, TX",	"Linda Phillips  W/F/26",	"stabbed  "],
      [{lat:33.576698, lng:-101.855072},	"January 31, 1971",	"Lubbock, TX",	"Naomi Miller Martin  W/F/54",	"Stabbed 25times in neck and chest."],
      [{lat:41.897549, lng:-84.037163},	"September 29, 1971",	"Adrian, MI",	"Two juveniles  W/F/14.",	"Attempted aggravated kidnapping"],
      [{lat:38.276463, lng:-104.604607},	"October 10, 1974",	"Pueblo County, CO",	"Helen Holman  W/F/31",	"Kidnapped; Shot 3 times in the head. <br>Toole only"],
      [{lat:33.491820, lng: -101.927110},	"August 24, 1975",	"Lubbock, TX",	"Debra Sue Williamson  W/F/18",	"Stabbed with knift 17 times in back. <br>Accomplice: Ottis Toole. "],
      [{lat:32.335251, lng:-95.31025},	"September 10, 1975",	"Smith County, TX",	"Curby(Kirby) Reeves  W/M/69",	"Shot in the top of the head with .22. <br>Accomplice: Ottis Toole."],
      [{lat:32.550149, lng:-94.3668628},	"September 17, 1975",	"Harrison County, TX",	"W/M",	"Shot and beat to death. <br>Lucas considered as suspect."],
      [{lat:40.044437, lng:-76.306229},	"December 05, 1975",	"Lancaster, PA",	"Lindy Beichler  W/F/19",	"Stabbed 19 times with a kitchen knife. <br>Accomplice: Ottis Toole"],
      [{lat:39.299236, lng: -76.609383},	"December 12, 1975",	"Baltimore, MD",	"James Carpellotti  W/M/49",	"Strangled"],
      [{lat:27.80058, lng:-97.39638},	"December 30, 1975",	"Corpus Christi, TX",	"Katherin L. Robinson  W/F/15",	"Shot once in head with .22"],
      [{lat:30.110495, lng:-97.315269},	"January 27, 1976",	"Bastrop County, TX",	"John Whatley and Faye Whatley  W/M/74, W/F/68",	"Stabbed to death while tied up by Toole, <br>who was paid $10,000 to kill Whatleys. <br>Accomplice: Ottis Toole."],
      [{lat:33.632574, lng:-101.829607},	"April 10, 1976",	"Lubbock, TX",	"Elizabeth Ann Price  W/F/45",	"Stabbed 20 times in the chest. <br>Accomplice: Ottis Toole."],
      [{lat: 31.772543, lng: -106.460953},	"April 12, 1976",	"El Paso, TX",	"Sima Warren  W/F/29",	"Beaten, drowned. Vehicle: Ford passenger car. <br>Acoomplice: Ottis Toole."],
      [{lat:39.056198, lng:-95.695312},	"April 26, 1976",	"Topeka, KS",	"Tirell Ocobock  Unknown",	"Kidnapped and murdered. <br>Lucas considered a suspect only."],
      [{lat:38.2672246, lng:-104.6609087},	"May 30, 1976",	"Pueblo County, CO",	"Andy Leply  ?/M/?",	"Dissapeared from service station. <br>Lucas considered a suspect."],
      [{lat:40.8020712, lng: -124.1636729},	"June 30, 1976",	"Eureka, CA",	"Vickie L. Schneider  W/F/19",	"Strangled on beach"],
      [{lat:43.038902, lng: -87.906471},	"July 31, 1976",	"Milwaukee, WI",	"Alice Daubon  W/F/70",	"Strangulation, arson. Toole only."],
      [{lat:38.276768, lng:-82.291072 },	"August 03, 1976",	"Cabell County, WV",	"Clemmie Curtis  W/F/50",	"Police officer found hancuffed and <br>shot once with his own service revolver. <br>Vehicle: Patrol car. <br>Accomplice: Ottis Toole."],
      [{lat:38.2672246, lng:-104.6609087},	"August 17, 1976",	"Pueblo County, CO",	"Sharon Marie Copp  W/F/35",	"Murdered, dismembered, decapitated. <br>Accomplice: Ottis Toole."],
      [{lat:38.9097323, lng:-75.427937},	"August 31, 1976",	"Milford, DE",	"Sarita Hughes  W/F/?",	"Beaten and strangled. <br>Accomplice: Ottis Toole. "],
      [{lat:35.653095, lng:-77.034468},	"October 12, 1976",	"Between Norfolk, VA and Oceanview, NC",	"Carol Ann Lane  W/F/22",	"Choked, stabbed 19 times in chest, <br>neck and back."],
      [{lat:36.084621, lng:-96.921387},	"October 25, 1976",	"Oklahoma City, OK",	"Virginia Grace Kegans  W/F/17",	"Shot with .30, throat cut with knife."],
      [{lat:29.4502321, lng: -98.5169623},	"December 17, 1976",	"Bexar County, TX",	"Nancy Freeze  W/F/23",	"Strangulation. <br>Accomplice: Ottis Toole.", "1535 W Ashby Pl"],
      [{lat:32.013379, lng:-81.823743},	"December 17, 1976",	"Liberty County, GA",	"Marion Kallquest  W/F/46",	"Stabbed 7 times, throat slashed. <br> Accomplice: Ottis Toole.", "Forest St"],
      [{lat:39.6833209, lng: -105.6505581},	"December 26, 1976",	"Clearcreek County, CO",	"Holly Marie Andrews  W/F/16",	"Stabbed in the back and breast. <br>Accomplice: Ottis Toole."],
      [{lat:35.839699, lng:-97.9511837},	"January 08, 1977",	"Kingfisher, OK",	"Mary E. Harrison  W/F/63",	"Stabbed 42 times."],
      [{lat:29.262561,lng:-94.8556007},	"January 31, 1977",	"Galveston, TX",	"James E. Cox  W/M/19",	"Toole slashed victim's neck.<br> Accomplices: Henry Lee Lucas, <br>Freida Powell, Frank Powell."],
      [{lat:29.6484391, lng:-95.3541992},	"February 12, 1977",	"Houston, TX",	"Bernice Price Erdman  W/F/76",	"Beaten to death. Ottis Toole only."],
      [{lat:33.6764292,lng:-115.9683568},	"February 25, 1977",	"Cactus City, CA",	"Unknown  W/F/40",	"Shot once in head; hands chopped off; <br>face and public area chemically burned. <br>Accomplice: Ottis Toole."],
      [{lat:29.7865642, lng:-82.1732458},	"March 01, 1977",	"Waldo, FL",	"Julie Cohen  W/F/?",	"Beaten, strangled. Ottis Toole considered a suspect. "],
      [{lat:36.783159, lng:-81.6955256},	"March 11, 1977",	"Smyth County, VA",	"Sharon Ann Blankenbeckler  W/F/20",	"Abducted. Strangled. <br>Accomplice: Ottis Toole."],
      [{lat:35.061085, lng:-91.9155667},	"April 05, 1977",	"Beebe, AR",	"Abe Pipkin  W/M/77",	"Beaten to death with tire iron. <br>Victim was night marshall. <br> Accomplice: Ottis Toole."],
      [{lat:29.3131303,lng:-98.6224764},	"April 27, 1977",	"Bexar County, TX",	"Linda Hopwood  W/F/29",	"Strangled with undergarments. <br> Accomplice: Ottis Toole."],
      [{lat:41.5374876,lng:-87.6924353},	"May 02, 1977",	"Cook County, IL",	"Laura Ann Williams  W/F/16",	"Multiple stab wounds to chest, throat slashed. <br>Alleged vehicle: Van. <br>Accomplice: Ottis Toole"],
      [{lat:29.288297, lng:-95.0716217},	"May 21, 1977",	"Galveston County, TX",	"Suzanne Bowers  W/F/12",	"Kidnapped. Strangled, stabbed. Accomplice: Ottis Toole."],
      [{lat:30.040055,lng:-89.9966857},	"June 07, 1977",	"New Orleans, LA",	"Stephanie Lee Smith  W/F/14",	"Kidnapped, strangled. <br>Accomplice: Ottis Toole."],
      [{lat:36.202158, lng:-95.4901887},	"July 10, 1977",	"Rogers County, OK",	"Laura Lee Long  W/F/18",	"Abducted. Strangled, suffocated. <br>Accomplices: Ottis Toole and Freida Powell."],
      [{lat:38.822364, lng:-106.1629997},	"July 30, 1977",	"Buena Vista, CO",	"Andrey Hurtado  H/F",	"Stabbed to death. Lucas considered a suspect.", "Gregg Dr"],
      [ {lat: 29.422048, lng: -98.703615},	"July 31, 1977",	"Bexar County, TX",	"Elsa Gonzales  H/F/18",	"No information. <br>Accomplices: Ottis Toole and Freida Powell.", "1242 Stable Glen Dr"],
      [ {lat: 36.626656, lng: -76.311527},	"August 02, 1977",	"Cheasapeake, VA",	"Debra Ann Eason  W/F/17",	"Struck in head with table leg. <br>Repeatedly stabbed.", "2416 Benefit Rd"],
      [ {lat: 39.088247, lng: -120.916178},	"August 07, 1977",	"Wendy Point, CA ",	"Stephanie Driscoll  W/F/21",	"Strangled.", "Iowa Hill Rd"],
      [ {lat: 29.842205, lng: -95.28063},	"August 24, 1977",	"Houston, TX",	"Helen Outlaw  W/F/56",	"Multiple stab wounds. <br>Lucas confessed and <br>considered a strong suspect.", "8038 Homewood Ln"],
      [ {lat: 42.379048, lng: -87.848617},	"August 25, 1977",	"Waukegan, IL",	"Lisa Ann Slusser  W/F/12",	"Abducted. Five blows to head. <br>19 stab wounds.", "1342 W Glen Flora Ave"],
      [ {lat: 38.551426, lng: -121.714433},	"September 04, 1977",	"Davis, CA",	"Elizabeth Mary Wolf  W/F/27",	"Stabbed 16 times in the front and back.","2828 Spafford St"],
      [ {lat: 29.703932, lng: -95.563528},	"September 06, 1977",	"Houston, TX",	"Glenda Beth Goff  W/F/18",	"Shot once in head with .22.","Bellaire Blvd @ Turtlewood Dr"],
      [ {lat: 31.58564, lng: -97.087303},	"October 22, 1977",	"Bellmead, TX",	"Glenn Parks  W/M/47",	"Robbery/Homicide. <br>Shot 3times in the back and 4times in the front. <br>Accomplice:Ottis Toole."],
      [ {lat: 32.461295, lng: -94.567699},	"November 01, 1977",	"Harrison County, TX",	"Lilly Pearl Darty B/F/18",	"Shot 2times in the head with .32. <br>Accomplice: Ottis Toole."],
      [ {lat: 29.248564, lng: -94.885721},	"November 25, 1977",	"Galveston, TX",	"Louis Levie Leger W/M/26",	"Beat to death with 2x4 after sexual intercourse. <br>Accomplices: Frank powell, Freida Powell."],
      [ {lat: 35.04622, lng: -98.420292},	"November 30, 1977",	"Oklahoma, OK",	"Tina Marie Williams W/F/17",	"Shot 6times. Vehicle: 1965 Ford Station Wagon. <br>Accomplice: Ottis Toole."],
      [ {lat: 29.591742, lng: -95.146048},	"December 19, 1977",	"Houston, TX",	"John Carter Swint W/M/66",	"Shotgun blast to the back of the neck. Toole only."],
      [ {lat: 35.631062, lng: -97.655155},	"January 27, 1978",	"Oklahoma City, OK",	"Donna Lee Laughton W/F/19",	"Cause of death unknown. Lucas shown as suspect."],
      [ {lat: 37.894287, lng: -105.408364},	"February 02, 1978",	"Colorado Springs, CO to Taos, NM",	"Victoria Sorano W/F/22",	"Attempted absduction."],
      [ {lat: 41.827715, lng: -103.67022},	"February 07, 1978",	"Gering, NE",	"Stella McLean W/F/46",	"Abducted. Strangled, decapitated. <br>Accomplices: Ottis Toole, Frank Powell, Freida Powell."],
      [ {lat: 29.735055, lng: -95.580386},	"March 07, 1978",	"Harris County, TX",	"Unkown ",	"Homicide. No other information available. <br>Lucas shown as suspect."],
      [ {lat: 32.815008, lng: -117.095287},	"April 12, 1978",	"San Diego, CA",	"Barbara Nantais",	"No other information available. <br>Lucas shown as suspect.", "10777 Viacha Dr"],
      [ {lat: 30.190018, lng: -97.820739},	"April 13, 1978",	"Austin, TX",	"Billy Dale Mitchell W/M/19",	"Heavy blows to head, 107 stab wounds. <br>Accomplice: Ottis Toole.","2510 Keepsake Dr"],
      [ {lat: 29.610962, lng: -95.099734},	"May 07, 1978",	"Harris County, TX",	"Susan Minnick W/F/17",	"Body mutilated with knife. <br>Accomplice: Ottis Toole(present only)."],
      [ {lat: 29.754018, lng: -95.593741},	"May 17, 1978",	"Houston, TX",	"Tina Carr W/F/18",	"Hit and run. Toole only."],
      [ {lat: 30.249862, lng: -89.7877},	"June 01, 1978",	"Slidell, LA",	"Claudia Favia W/F/84",	"Beaten and strangled. <br>Accomplices: Ottis Toole, <br>Freida Powell, Frank Powell. "],
      [ {lat: 30.483934, lng: -90.131885},	"June 03, 1978",	"Covington Parrish, LA",	"Louis Wagner W/M/26",	"Shot once in back with .32, robbed. <br>1968 Ford 4-door sedan(green). <br>Accomplices: Ottis Toole, Freida Powell, Frank Powell."],
      [ {lat: 32.45832, lng: -99.79338},	"June 07, 1978",	"Abilene, TX",	"William E. Favors W/M/50",	"Hit in head with a bumper jack. <br> White over blue Chevrolet. <br>Accomplice: Henry Lee Lucas(present only)."],
      [ {lat: 43.187713, lng: -89.456851},	"June 17, 1978",	"Waunakee, WI",	"Julie Ann Hall W/F/19",	"Beaten, strangled/asphyxiated. <br>Accomplice: Ottis Toole, Freida Powell, Frank Powell."],
      [ {lat: 33.057155, lng: -96.782642},	"June 27, 1978",	"Plano, TX",	"Mystis Lee Thomas B/F/21",	"Abducted. Stabbed 4times in chest, cut on neck. <br>Accomplice: Ottis Toole."],
      [ {lat: 40.224754, lng: -111.71033},	"June 30, 1978",	"Provo, UT",	"Maria Rae Scharp W/F/25",	"Homicide, strangled. Accomplice: Ottis Toole."],
      [ {lat: 34.783485, lng: -92.431356},	"July 04, 1978",	"Little Rock, AR",	"Elizabeth Taylor W/F/35",	"Beat in head, stabbed."],
      [ {lat: 32.336528, lng: -86.250203},	"July 06, 1978",	"Montgomery, AL",	"Gladys J. Gilmore W/F/46",	"Possibly strangled."],
      [ {lat: 33.718882, lng: -117.022429},	"July 20, 1978",	"Helmet, CA",	"DeAnna Nuzquiz W/F/16",	"Beaten, strangled. Lucas considered a suspect."],
      [ {lat: 36.379534, lng: -108.810488},	"July 24, 1978",	"San Juan, NM",	"Elizabeth Faye Bull W/F/26",	"Shot once in head with .22."],
      [ {lat: 39.057773, lng: -95.627016},	"July 26, 1978",	"Topeka, KS",	"Shirley I. Steiner ?/W/?",	"Shot with shotgun. Lucas considered a suspect."],
      [ {lat: 30.246564, lng: -81.911261},	"August 04, 1978",	"Jacksonville, FL",	"Nicole Lauwcert ",	"Beaten to death. Accomplice: Ottis Toole. <br>Lucas and Toole considered suspects."],
      [ {lat: 35.378405, lng: -97.267887},	"August 13, 1978",	"Oklahoma City, OK",	"Betty Ann Coons W/F/37",	"Strangled, struck in head with pistol."],
      [ {lat: 39.63845, lng: -104.529365},	"August 15, 1978",	"Arapahoe County, CO",	"Kimberly Graven ",	"No other information available. <br>Lucas considered a suspect."],
      [ {lat: 43.114473, lng: -88.040911},	"August 23, 1978",	"Milwaukee, WI",	"Mark Ridyard W/M/22",	"Stabbed once in neck. Toole only."],
      [ {lat: 39.57799, lng: -119.68901},	"September 17, 1978",	"North Sparks, NV",	"Robert Ridley  W/M/33",	"Multiple shotgun wounds to head. "],
      [ {lat: 47.727285, lng: -117.48975},	"October 02, 1978",	"Spokane, WA",	"Krisann Baxter W/F/16",	"Beaten, strangled. <br>Vehicle: 1965 Ford Station Wagon.","5508-5940 W 9 Mile Rd"],
      [ {lat: 29.558482, lng: -94.396182},	"October 04, 1978",	"High Island, TX",	"Deborah K. Sheppard W/F/25",	"Attempted kidnapping.","1897 4 1/2 St"],
      [ {lat: 34.71254, lng: -92.879907},	"October 07, 1978",	"Saline County, AR",	"Doris Litherland W/F/51",	"Stabbed; strangled with pants. <br>Accomplice: Ottis Toole"],
      [ {lat: 30.829962, lng: -103.259813},	"October 19, 1978",	"Pecos County, TX",	"Robert Louie Hie W/M/25",	"Shot in head. Accomplice: Ottis Toole."],
      [ {lat: 33.739152, lng: -105.338967},	"October 25, 1978",	"Lincoln County, NM",	"Pam Nolen W/F/25",	"Stabbed; mutilated; decapitated. <br>Vehicle: 1965 Ford Station Wagon. <br>Accomplice: Ottis Toole.","T W Rd"],
      [ {lat: 40.809751, lng: -119.799752},	"October 27, 1978",	"Washoe County, NE",	"Jeannie Smith W/F/17",	"No information","Rd 26006"],
      [ {lat: 32.538583, lng: -93.662408},	"October 29, 1978",	"Bossier City, LA",	"Dollie Huckaby Dement W/F/48",	"Shot 6 times in head with .22","5303 E Texas St # 20"],
      [ {lat: 46.195482, lng: -119.204535},	"November 01, 1978",	"Kennewick, WA",	"Lisa Martin W/F/18",	"Stabbed, body mutilated.","1318 S Lincoln St"],
      [ {lat: 39.007567, lng: -92.211009},	"November 02, 1978",	"Boone County, MO",	"Leigh Ann Wilson ?/F/?",	"Stabbed in back; throat slashed.","8209 E Dusty Rhodes Ln"],
      [ {lat: 30.762121, lng: -97.860918},	"November 05, 1978",	"Williamson County, TX",	"Frank Kevin Key W/M/19",	"Shot 10 times in head with .22. <br>Accomplice: Ottis Toole. "],
      [ {lat: 31.655351, lng: -97.307731},	"November 05, 1978",	"McLennan Couty, TX",	"Rita Salazar W/F/18",	"Shot 6 times with .22. Accomplice: Ottis Toole."],
      [ {lat: 40.931709, lng: -98.363964},	"November 15, 1978",	"Grand Island, NE ",	"Janet Callies W/F/40",	"Strangled with telephone cord. <br>Accomplice: Ottis Toole."],
      [ {lat: 32.687897, lng: -97.142977},	"November 24, 1978",	"Arlington, TX",	"Pat Rau W/F/26",	"Beaten to death; body dumped in river. <br>Accomplices: Ottis Toole, freida Powell."],
      [ {lat: 32.915362, lng: -117.205154},	"December 02, 1978",	"San Diego, CA",	"3 Juveniles. W/F/12, W/F/12, W/M/10",	"No information"],
      [ {lat: 38.617637, lng: -104.765442},	"December 11, 1978",	"El Paso, County, CO",	"Peggy Sue Gaylord W/F/?",	"No information. Hitchhiker. <br>Ottis Toole considered a suspect."],
      [ {lat: 35.328497, lng: -119.109368},	"January 11, 1979",	"Bakersfield, CA",	"Linda Sue Adkins W/F/29",	"Stab wounds to chest and neck; throat slashed."],
      [ {lat: 30.943262, lng: -96.18211},	"January 18, 1979",	"Marison County, TX",	"Cecil Chester Mayley W/M/57",	"Shot with .380. Accomplices: Ottis Toole, <br>Freida Powell, Frank Powell."],
      [ {lat: 29.618011, lng: -95.1845},	"January 18, 1979",	"Houston, TX",	"Alfred trevizo H/M/46",	"Stabbed to death. <br>Ottis Toole considered a suspect."],
      [ {lat: 25.582136, lng: -80.763244},	"February 04, 1979",	"Dade County, FL",	"Unknown, W/F/25",	"Stabbed 4 times in chest; body burned. <br>Accomplice: Ottis Toole."],
      [ {lat: 36.049893, lng: -95.996157},	"March 20, 1979",	"Tulsa, OK",	"Pamela Elaine Tollett W/F/30",	"Shot in head with .32. <br>Exact date of offense unknown. "],
      [ {lat: 32.332881, lng: -90.278256},	"March 25, 1979",	"Jackson, MS",	"John Noyes, Jr. B/M/26",	"Shot from passing car, possibly with a .357. <br>Accomplice: Ottis Toole."],
      [ {lat: 43.135782, lng: -89.381741},	"March 28, 1979",	"Madison, WI",	"Julie Ann Sperschneider W/F/20",	"Strangled. Accomplice: Ottis Toole."],
      [ {lat: 36.882172, lng: -77.291953},	"April 01, 1979",	"Sussex County, VA ",	"Unknown W/M/?",	"Throat cut. Accomplice: Ottis Toole."],
      [ {lat: 29.77786, lng: -95.423453},	"April 07, 1979",	"Houston, TX",	"Jean Luther Mila W/M/79",	"Beaten, strangled with necktie. <br>Accomplice: Ottis Toole."],
      [ {lat: 29.203762, lng: -99.78904},	"April 18, 1979",	"Uvalde, TX",	"Yolanda Hernandez Garcia H/F/24",	"Stabbed 4 times in chest. <br>Vehicle: pick-up truck/ station wagon. <br>Accomplice: Ottis Toole, Freida Powell, Frank Powell."],
      [ {lat: 35.403035, lng: -97.413456},	"April 19, 1979",	"Oklahoma City, OK",	"Arley Belle Killiar I/F/23",	"Stabbed; mutilated; dismembered. <br>Accomplice: Ottis Toole"],
      [ {lat: 30.251309, lng: -81.70252},	"May 08, 1979",	"Jacksonville, FL",	"Debra L.O'Quinn ?/F/?",	"Multiple stab wounds. Accomplice: Ottis Toole"],
      [ {lat: 29.742095, lng: -95.687124},	"May 16, 1979",	"Houston, TX",	"Charlotte Wallis W/F/69",	"Beaten, strangled. Accomplice: Ottis Toole."],
      [ {lat: 30.356647, lng: -97.400885},	"June 21, 1979",	"Elgin, TX",	"Unknown W/F/23 to 39",	"Stabbed to death. Auto-pedestrian accident. <br>Accomplice: Freida Powell.","614 Lavaca Loop"],
      [ {lat: 43.166079, lng: -88.029238},	"June 22, 1979",	"Milwaukee, WI",	"Janet Bey B/F/27",	"Stabbed in face and head. <br>Accomplice: Ottis Toole.","8101 N Michelle Rd"],
      [ {lat: 39.576137, lng: -119.706176},	"July 10, 1979",	"Sparks, NV",	"Rulan Mcgill ",	"No further information available. <br>Ottis Toole listed as suspect in task Force Calendar."],
      [ {lat: 35.44883, lng: -78.430111},	"July 18, 1979",	"Four Oaks, NC",	"Juvenile ?/F/10",	"Beaten to death. Accomplice: Ottis Toole. <br>Lucas and Toole considered suspects."],
      [ {lat: 30.481567, lng: -90.130512},	"July 20, 1979",	"Covington, LA",	"John Mutter W/M/56",	"Beaten. Accomplice: Ottis Toole."],
      [ {lat: 29.841973, lng: -90.073689},	"July 22, 1979",	"Jeffeson Parrish, LA",	"Unkown W/F/?",	"Stabbed to death. Accomplice: Ottis Toole. Lucas <br>and Toole considered suspects."],
      [ {lat: 29.663387, lng: -98.538821},	"July 27, 1979",	"Bexar County, TX",	"Kathryn O'Conner W/F/24",	"Stabbed in chest, throat and face. <br>Accomplice: Ottis Toole."],
      [ {lat: 39.704701, lng: -105.084035},	"August 15, 1979",	"Jeffeson County, CO",	"Linda Ruth Hutchins W/F/17",	"Beaten in head with tire tool."],
      [ {lat: 38.999222, lng: -112.928434},	"August 19, 1979",	"Millerd County, UT",	"Unknown W/F/20 to 25",	"Shot twice with .380. Vehicle: Ford Station Wagon. <br>Accomplice: Ottis Toole, Freida Powell, Frank Powell."],
      [ {lat: 31.270499, lng: -85.502041},	"August 24, 1979",	"Dothan, AL",	"Laura A. Fulford W/F/25",	"Abducted; shot twice with .38. Ottis Toole only."],
      [ {lat: 30.492242, lng: -97.772674},	"September 03, 1979",	"Austin, TX",	"Sharon Schillings W/F/27",	"Shot once with .410. <br>Vehicle: Cadillac. Ottis Toole only."],
      [ {lat: 29.830407, lng: -94.995364},	"September 29, 1979",	"Harris County, TX",	"Russel Curtis King W/M/57",	"Struck in head with pipe. Toole only."],
      [ {lat: 30.334662, lng: -97.724608},	"October 02, 1979",	"Travis County, TX",	"Sandra Dubbs  W/F/34",	"Stabbed 35 times; body mutilated. <br>Accomplice: Ottis Toole. ","1010 Karen Ave, Austin"],
      [ {lat: 31.063951, lng: -85.00061},	"October 04, 1979",	"Seminole County, GA",	"Mazie Lee Seymore W/F/56",	"Shot once with .30 cal. Rifle. <br>Accomplice: Ottis Toole.","5132 J Q Harvey Rd"],
      [ {lat: 40.847034, lng: -98.000692},	"October 05, 1979",	"Hamilton County, NE",	"Brian Lee Byrum W/M/22",	"Several blows to head with machete. <br>Accomplice: Ottis Toole.","1517 11th St"],
      [ {lat: 31.267582, lng: -81.573351},	"October 08, 1979",	"Glynn County, GA",	"William Dale Willis W/M/17",	"Shot once with .35 cal. Rifle. <br>Accomplice: Ottis Toole.","451-449 McKenzie Dr"],
      [ {lat: 35.542604, lng: -78.43623},	"October 16, 1979",	"Johnston County, NC",	"Lou Della Jernigan W/F/54",	"Shot once in face with 12 gauge. <br>Vehicle: Pontiac Grand Prix. Accomplice: Ottis Toole."],
      [ {lat: 32.453456, lng: -82.886069},	"October 20, 1979",	"Laurens County, GA",	"Martin P. Wilkins W/M/24",	"Shot once with .35cal.rifle. Accomplice: Ottis Toole."],
      [ {lat: 30.315696, lng: -97.927855},	"October 23, 1979",	"Travis County, TX",	"Harry Schlessinger W/M/53, Molly Schlessinger W/F/52",	"Multiple gunshot wound from .22. <br>Accomplice: Ottis Toole."],
      [ {lat: 30.60859, lng: -97.46541},	"October 31, 1979",	"Williamson County, TX",	"Unidentified W/F/25",	"Strangled. Accomplice: Ottis Toole."],
      [ {lat: 26.063163, lng: -97.608833},	"November 03, 1979",	"Brownsville, TX",	"Francisca Rodriguez H/F/27",	"Strangled; shot twice. <br>Accomplices: Ottis Toole, Freida Powell, Frank Powell."],
      [ {lat: 42.56888, lng: -77.837248},	"November 10, 1979",	"Livingston County, NY",	"Unknown W/F/15",	"Shot twice with either .38 or .357. <br>Accomplices: Ottis Toole, Freida Powell, Frank Powell."],
      [ {lat: 34.22718, lng: -117.402459},	"November 19, 1979",	"San Bernadino, CA",	"Unidentified W/M",	"Shot in back of head with .22. Accomplice: Ottis Toole."],
      [ {lat: 30.334313, lng: -81.897528},	"November 24, 1979",	"Jacksonville, FL",	"Melody R.Husk W/F/",	"Strangulation of hitchhiker. Accomplice: Ottis Toole."],
      [ {lat: 30.524957, lng: -81.504766},	"November 27, 1979",	"Jacksonville, FL",	"Elizabeth D.Knotts ",	"Shot with .38. Vehicle: White Olds Station Wagon. <br>Accomplice: Ottis Toole."],
      [ {lat: 30.63244, lng: -99.951182},	"1979/11/?",	"Kimble County, TX",	"W/M/20's",	"Shot twice in back with .38. Vehicle: 1965 Ford Station Wagon.  <br>Accomplice: Ottis Toole."],
      [ {lat: 39.508596, lng: -119.815145},	"December 01, 1979",	"Reno, NV",	"Mike Whitton W/M/26",	"Shot to death. Accomplice: Ottis Toole.","1572 Lander St"],
      [ {lat: 30.395821, lng: -99.434824},	"December 01, 1979",	"Kimble County, TX",	"Unidentified W/M/20's",	"Shot twice in back with .38. Accomplice: Ottis Toole.","Rusty Spur Rd"],
      [ {lat: 29.565467, lng: -95.151541},	"December 03, 1979",	"Houston, TX",	"Mary M. Young W/F/29",	"Lucas and Toole considered suspects."],
      [ {lat: 32.628353, lng: -97.144351},	"December 22, 1979",	"Arlington, TX",	"Donaver P.Hanna W/M/40",	"Shot with .22 pistol. Vehicle: Wh/blue 73 Olds Station Wagon. <br>Accomplice: Ottis Toole, Freida Powell, Frank Powell"],
      [ {lat: 30.059955, lng: -95.189993},	"December 25, 1979",	"Houston, TX",	"Katie Dunham B/F/63",	"Struck in head with brick; multiple cut and stab wounds."],
      [ {lat: 30.535603, lng: -81.515753},	"December 27, 1979",	"Jacksonville, FL",	"Lynne C.Owings ",	"Beaten to death. No other information available. <br>Lucas considered a suspect."],
      [ {lat: 30.398297, lng: -81.875555},	"January 03, 1980",	"Jacksonville, FL",	"Jamie L.Collins W/F/76",	"Beaten to death. Lucas and Toole considered suspects."],
      [ {lat: 32.069936, lng: -95.081835},	"January 10, 1980",	"Cherokee County, TX",	"Bobby Caveness ?/M/?",	"Burglary. Vehicle: 1972 Cadillac Brown Four-door. Wagon. <br>Accomplice: Ottis Toole, Freida Powell, Frank Powell"],
      [ {lat: 30.496975, lng: -97.772674},	"January 10, 1980",	"Austin, TX",	"Susan Wolfe ?/F/?",	"Strangled. Shot with .22. Lucas and Toole considered suspects."],
      [ {lat: 33.95179, lng: -118.353503},	"January 16, 1980",	"Englewood, CA",	"Helene Pruszynski W/F/21",	"Multiple stab wounds to back. Accomplice: Ottis Toole."],
      [ {lat: 33.738869, lng: -117.003889},	"January 17, 1980",	"Hemet, CA",	"Elizabeth Crossman W/F/67",	"Strangled to death. Lucas listed as suspect on Task Force Documents, <br>not considered a suspect by Hemet, CA P.D. "],
      [ {lat: 31.858661, lng: -106.607211},	"January 20, 1980",	"El Paso, TX",	"Elizabeth Ann Allen ?/F/?",	"Lucas listed as suspect on Task Force documents."],
      [ {lat: 32.663933, lng: -97.018326},	"January 28, 1980",	"Grand Prairie, TX",	"Bobby Wayne Ragen W/M/17",	"Shot twice in head. Accomplice: Ottis Toole."],
      [ {lat: 32.028348, lng: -102.20396},	"February 02, 1980",	"Midland, TX",	"Kristy Booth ?/F/?",	"No information. Toole considered a suspect."],
      [ {lat: 32.409972, lng: -95.226918},	"February 04, 1980",	"Smith County, TX",	"Nanette Warren W/F/57",	"Shot once in chest with .22. Vehicle: 1972 cadillac, brown. <br>Accomplice: Ottis Toole, Freida Powell."],
      [ {lat: 30.777861, lng: -85.53461},	"February 06, 1980",	"Chipley, FL",	"Schott D. Schallert W/M/18",	"Shot 5 times in head. Toole only. "],
      [ {lat: 29.468119, lng: -95.14923},	"February 23, 1980",	"Galveston County, TX",	"Roy Wayne Hallmark W/M/29",	"Stabbed 27 times. Accomplice:Ottis Toole."],
      [ {lat: 29.966012, lng: -95.217459},	"February 24, 1980",	"Houston, TX",	"Steven Mitchell Ford W/M/23",	"Shot in chest and abdomen. Lucas considered a strong suspect."],
      [ {lat: 32.459164, lng: -97.704412},	"March 08, 1980",	"Granbury, TX",	"Lillian D.Peart W/F/53",	"Shot 3 times in head with .22. Vehicle: Vesta Cruiser Station Wagon. <br>Accomplice: Ottis Toole."],
      [ {lat: 31.790061, lng: -83.323914},	"March 12, 1980",	"Ben Hill County, GA",	"VickieAycock W/F/28",	"Shot once with .357. Accomplice: Ottis Toole."],
      [ {lat: 29.775476, lng: -95.361654},	"March 14, 1980",	"Houston, TX",	"Roger B.Cooke W/M/59",	"Robbery/Homicide. Lucas and Toole considered strong suspects."],
      [ {lat: 32.355421, lng: -99.758361},	"March 18, 1980",	"Abilene, TX",	"Lynn Hall Gray W/F/42",	"Robbery/Homicide. Shot once in head with .22."],
      [ {lat: 30.265543, lng: -81.474554},	"March 23, 1980",	"Jacksonville, FL",	"Carol Ann Barrett ?/F/? ",	"Shot in head. Accomplice: Ottis Toole. <br>Lucas and Toole considered suspects."],
      [ {lat: 30.108789, lng: -95.903109},	"March 25, 1980",	"Harris County, TX",	"Sandra Dennise Alexander A/K/A Maurene Harris B/F/21",	"Strangled with nylon cord. "],
      [ {lat: 33.769838, lng: -118.046341},	"March 30, 1980",	"Seal Beach, CA",	"Cindy Lee Vancott W/F/24",	"Asphyxiated. Accomplices: Ottis Toole, Frank Powell, <br>Becky Powell."],
      [ {lat: 29.825026, lng: -94.374971},	"April 13, 1980",	"Winnie, TX",	"Wilbert Meche, Jr. W/M/28",	"Shot once with .38. Vehicle: 1973 Olds Vista Cruiser. <br>Accomplice: Henry Lee Lucas, Freida Powell, Frank Powell."],
      [ {lat: 30.291634, lng: -81.578924},	"April 26, 1980",	"Jacksonville, FL",	"Jo Cole Scheffer W/F/54",	"Stabbed with kitchen knife."],
      [ {lat: 29.703932, lng: -95.508597},	"April 30, 1980",	"Houston, TX",	"Danita J.Allen W/F/19",	"Strangled with electrical cord. Accomplice: Ottis Toole. <br>Lucas and Toole considered suspects."],
      [ {lat: 35.753098, lng: -91.606922},	"May 07, 1980",	"Batesville, AR",	"Cindy Lou Malott W/F/23",	"Stabbed and strangled."],
      [ {lat: 35.757532, lng: -121.030087},	"May 17, 1980",	"San Luis Obispo County, CA",	"Teresa Flores H/F/5, Martha Mezo H/F/4 ",	"Kidnapped, beaten, strangled. Accomplice: Ottis Toole."],
      [ {lat: 38.406073, lng: -96.196617},	"May 30, 1980",	"Emporia, KS",	"Unknown, ?/M/?",	"Shot to death. Ottis Toole considered a suspect."],
      [ {lat: 39.174291, lng: -122.284878},	"June 06, 1980",	"Colusa County, CA",	"Unknown W/F/18",	"Strangled. Accomplice: Ottis Toole. <br>Decomposed body found this date."],
      [ {lat: 29.849952, lng: -94.87701},	"June 11, 1980",	"Mont Belview, TX",	"Betty Ann Choate W/F/41",	"Shot 3times in back with .32. Vehicle: 1973 Olds Vista Cruiser."],
      [ {lat: 30.439746, lng: -81.846716},	"July 12, 1980",	"Jacksonville, FL",	"Regina A. Campbell W/F/24",	"Strangled to death. Accomplice: Ottis Toole."],
      [ {lat: 30.343392, lng: -81.726047},	"July 20, 1980",	"Jacksonville, FL",	"Tammi Lynn Conners W/F/20",	"Strangled to death. Accomplice: Ottis Toole."],
      [ {lat: 33.791102, lng: -84.659496},	"July 28, 1980",	"Douglas County, GA",	"Lonney Ray Wright W/M/59",	"Beating death. Vehicle: Unknown make; Blue Four-door. <br>Accomplice: Ottis Toole."],
      [ {lat: 32.719709, lng: -86.020416},	"August 14, 1980",	"Elmore County, AL",	"Bernice H.Harris W/F/40",	"Kidnapped. Strangled."],
      [ {lat: 30.218499, lng: -92.369422},	"August 27, 1980",	"Crowley, LA",	"Unknown W/M/?",	"Shot with .22. Accomplice: Ottis Toole. <br>Lucas and Toole considered suspects."],
      [ {lat: 39.473379, lng: -118.778422},	"September 01, 1980",	"Fallon, NV",	"Unknown W/M/22 to 29",	"Shot in head with .22. <br>Accomplice: Ottis Toole, Freida Powell, Frank Powell. "],
      [ {lat: 36.921457, lng: -76.225186},	"September 09, 1980",	"Norfolk, VA",	"Kathleen O.Doyle W/F/25",	"Beaten, stabbed. <br>Accomplice: Ottis Toole, Freida Powell, Frank Powell."],
      [ {lat: 43.523285, lng: -87.981569},	"October 04, 1980",	"Ozaudee County, WI",	"Beth R.Umolac W/F/19",	"Multiple stab wounds."],
      [ {lat: 30.079085, lng: -95.105227},	"October 16, 1980",	"Harris County, TX",	"Unknown, B/F/27",	"Strangled with scarf."],
      [ {lat: 30.166956, lng: -89.67593},	"October 18, 1980",	"New Orleans, LA",	"Barnie ray Fincher W/M/41",	"Beaten, kicked, stabbed, larynx crushed. <br>Accomplice: Ottis Toole."],
      [ {lat: 38.138711, lng: -117.295829},	"October 22, 1980",	"Tonopah, NV",	"Unknown W/M/50 to 51 ",	"4 gunshot wounds to head. Body found this date."],
      [ {lat: 39.632105, lng: -103.776801},	"October 25, 1980",	"Arapahce County, CO",	"Violet Newman W/F/54",	"Shot once in head with .22. Vehicle:1973 Olds Vista Cruiser. <br>Accomplice: Ottis Toole. "],
      [ {lat: 37.649322, lng: -122.00893},	"October 30, 1980",	"Hayward,  CA",	"Carmen Rivera ?/F/?",	"Stabbed. Lucas considered suspect.","83 Country Club Dr"],
      [ {lat: 30.799808, lng: -95.552756},	"November 01, 1980",	"Walker County, TX",	"Unknown ",	"Beaten, strangled.","104-170 FM 2628"],
      [ {lat: 30.851764, lng: -97.731829},	"November 04, 1980",	"Williamson County, TX",	"Mildred McKinney W/F/74",	"Beaten and strangled. Accomplices: Ottis Toole, <br>Freida Powell, Frank Powell. "],
      [ {lat: 30.764652, lng: -94.740153},	"November 14, 1980",	"Polk County, TX",	"Unknown W/M/35 to 40",	"Unknown. Accomplice: Ottis Toole."],
      [ {lat: 28.439643, lng: -98.040364},	"November 28, 1980",	"Live Oak County, TX",	"Unknown W/F/20 ",	"Stabbed, strangled. "],
      [ {lat: 39.705405, lng: -104.660783},	"December 02, 1980",	"Auroro, CO",	"Dianna Love B/F/?",	"No further information available. <br>Ottis Toole considered a suspect."],
      [ {lat: 35.395364, lng: -97.734545},	"December 07, 1980",	"Mustang, OK",	"Carl Garrison W/M/?",	"Shot 6 times. Ottis Toole only."],
      [ {lat: 31.09418, lng: -97.782189},	"December 07, 1980",	"Killeen, TX",	"Libbie Rhyme W/F/24",	"Stabbed in neck. Accomplice: Ottis Toole, <br>Freida Powell, Frank Powell."],
      [ {lat: 30.225207, lng: -82.018377},	"December 22, 1980",	"Jacksonville, FL",	"Brenda Elaine Harden W/F/28",	"Hunting knife. Occurred at victim's residence, no property pissing. <br>Accomplice: Ottis Toole."],
      [ {lat: 30.328867, lng: -89.811389},	"January 10, 1981",	"Slidell, LA",	"Wendy Pope W/F/17",	"Hit and Run. Vehicle: 1976 GMC pickup truck. <br>Accomplices: Ottis Toole, Freida Powell."],
      [ {lat: 26.584798, lng: -81.880718},	"January 16, 1981",	"Fort Meyers, FL",	"Mary Opitz ",	"Kidnapped. Accomplice: Ottis Toole Lucas and <br>Toole considered suspects."],
      [ {lat: 31.423607, lng: -97.138817},	"January 25, 1981",	"McLennan Couty, TX",	"Dorothy G.Collins B/F/25",	"Multiple stab wounds, throat slashed. <br>Accomplice: Ottis Toole and Freida Powell."],
      [ {lat: 32.687944, lng: -93.736279},	"January 28, 1981",	"Benton, LA",	"Unknown W/F/?",	"Multiple stab wounds. Accomplice: Ottis Toole and Freida Powell. <br>Body found this date."],
      [ {lat: 26.587254, lng: -81.877972},	"February 11, 1981",	"Fort Meyers, FL",	"Mary E.Hare ?/F/?",	"No further information available. <br>Lucas considered a suspect."],
      [ {lat: 35.307123, lng: -80.94287},	"February 18, 1981",	"Carlotte, NC",	"Juvenile W/F/5",	"Lucas considered a suspect."],
      [ {lat: 39.017519, lng: -119.370055},	"February 26, 1981",	"Douglas County, NV",	"Cora Rasalie Corillo W/F/24",	"Rope strangulation"],
      [ {lat: 29.947677, lng: -81.3267},	"March 04, 1981",	"San Augustine, FL",	"Nancy Canode ?/?/?",	"No other information available. <br>Toole considered a suspect.","Pantano Dr"],
      [ {lat: 29.595715, lng: -95.770782},	"March 04, 1981",	"Richmond, TX",	"Deion M.Wilkinson W/F/22",	"Multiple stab wounds.","1200 Winchester Dr"],
      [ {lat: 27.811915, lng: -97.535948},	"March 05, 1981",	"Corpus Christi, TX",	"Estella Montoya H/F/29",	"Multiple stab wounds. <br>Vehicle: 1973 Olds Vista Cruiser station wagon. Accomplices: Ottis Toole, Freida Powell, Frank Powell.","1726 N Clarkwood Rd"],
      [ {lat: 31.89369, lng: -85.095553},	"March 06, 1981",	"Georgetown, GA",	"Alonzo Clay Perkins W/M/59",	"Stabbed in back. Attempted robbery.","1063 US-82"],
      [ {lat: 31.809745, lng: -102.330519},	"March 13, 1981",	"Odessa, TX",	"Beverly Joyce Luttrell W/F/46",	"Stabbed, strangled. Accomplices: Ottis Toole, <br>Freida Powell, Frank Powell."],
      [ {lat: 29.844702, lng: -95.02283},	"March 21, 1981",	"Harris County, TX",	"?",	"?"],
      [ {lat: 30.273154, lng: -95.078912},	"March 31, 1981",	"Liberty County, TX",	"Patricia Ann Jones W/F/18",	"Multiple blows to head. "],
      [ {lat: 29.77257, lng: -95.040657},	"April 01, 1981",	"Baytown, TX",	"Lois Raye Hartes W/F/51",	"Beaten in face and neck with tire tool. <br>Vehicle: 1973 Olds Vista Cruiser Station-wagon. <br>Accomplice: Ottis Toole."],
      [ {lat: 32.513818, lng: -92.101868},	"April 04, 1981",	"Monroe, LA",	"Kathy Whorton W/F/19",	"Abducted, robbed. Shot once in the head with .22. <br>Accomplice: Ottis Toole. "],
      [ {lat: 29.785682, lng: -95.04203},	"April 08, 1981",	"Baytown, TX",	"Thelma L.Lopez W/F/25",	"Shot once in mouth with .22. <br>Accomplice: Ottis Toole, Frank Powell, Freida Powell."],
      [ {lat: 33.447821, lng: -93.997336},	"April 08, 1981",	"Texarkana, AR",	"Gordon Alexander W/M/13, Karen Alexander W/F/14",	"Throat slashed. Multiple stab wounds to neck and face. <br>Vehicle: pickup truck. <br>Accomplices: Ottis Toole, Freida Powell, Frank Powell."],
      [ {lat: 30.16111, lng: -81.570684},	"April 14, 1981",	"Jacksonville, FL",	"Shirley E.Ogden W/F/55",	"Stabbed with butcher knife."],
      [ {lat: 33.179497, lng: -102.29019},	"April 26, 1981",	"Brownfield, TX",	"Dianna Lynn Bryant W/F/17",	"Strangled. Vehicle: 1973 Olds Vista Cruiser station-wagon. <br>Accomplice: Ottis Toole, Freida Powell, Frank Powell."],
      [ {lat: 31.711442, lng: -98.992565},	"April 27, 1981",	"Brownwood, TX",	"Donna Mae Inlow W/F/73",	"Stabbed, strangled. Accomplices: Ottis Toole, <br>Freida Powell, Frank Powell."],
      [ {lat: 43.106331, lng: -88.146433},	"May 09, 1981",	"Memonee Falls, WI",	"Joyce E.Garder W/F/54",	"Stabbed in heart. Accomplice: Ottis Toole."],
      [ {lat: 34.243873, lng: -116.067914},	"May 20, 1981",	"Twenty-nine Palms, CA",	"Sandy Rhodes W/F/20",	"Multiple stab wounds. Accomplice: Ottis Toole. <br>Lucas and Toole considered suspects."],
      [ {lat: 25.916106, lng: -80.266097},	"May 28, 1981",	"Dade County, FL",	"Hazel Haack W/F/19, Lynda Karbin W/F/17",	"Drowned. Bound/gagged. Accomplices: Ottis Toole, <br>Freida Powell, Frank Powell. ","15620 NW 39th Pl"],
      [ {lat: 29.883689, lng: -90.112579},	"May 29, 1981",	"Marrero, LA",	"Ruth Kaiser W/F/79",	"Stabbed approx. 50 times. Accomplices: Ottis Toole, <br>Freida Powell, Frank Powell.","6209 S Judah Dr"],
      [ {lat: 29.798368, lng: -98.202096},	"June 04, 1981",	"Comal County, TX",	"Unknown W/F/20",	"6 times with .22. Accomplices: Ottis Toole, <br>Freida Powell, Frank Powell."],
      [ {lat: 34.749666, lng: -97.481825},	"June 12, 1981",	"Garvin County, OK",	"Pasty Gilliam W/F/45",	"Kicked in chest, shot once in face. Vehicle: Olds Vista Cruiser. <br>Accomplices: Ottis Tooke, Freida Powell, Frank Powell."],
      [ {lat: 30.500585, lng: -95.924891},	"June 16, 1981",	"Grimes County, TX",	"Unknown, W/F/?",	"Beaten in head, face, chest. Accomplices: Ottis Toole, <br>Freida Powell, Frank Powell. Exact date of death unknown."],
      [ {lat: 34.044019, lng: -80.877185},	"June 20, 1981",	"Columbia, SC",	"Linda Cope W/F/33",	"Stab wounds; body mutilated. <br>Lucas and Toole considered suspects."],
      [ {lat: 29.702216, lng: -94.939033},	"June 23, 1981",	"Baytown, TX",	"Dianna Lynn Underwood W/F/32",	"Shot 3 times in neck. "],
      [ {lat: 36.115374, lng: -95.779177},	"July 11, 1981",	"Tulsa, OK",	"Mary Kaufman W/F/64",	"Multiple stab wounds. Accomplice: Toole only.","3261-3101 S 177th E Ave"],
      [ {lat: 39.734105, lng: -75.515068},	"July 11, 1981",	"Wilmington, DE",	"Unknown W/F/?",	"Accomplice: Ottis Toole. Lucas and Toole considered suspects.","4589-4555 Hay Rd"],
      [ {lat: 39.696249, lng: -105.112875},	"July 13, 1981",	"Jefferson County, CO",	"Elvin V.Fuster W/M/19",	"Shot once in head with .22. Accomplice: Ottis Toole.","10250 W Mississippi Ave"],
      [ {lat: 26.031528, lng: -80.18775},	"July 27, 1981",	"Hollywood, FL",	"Adam Walsh W/M/18",	"Decapited with knife. Toole considered a suspect."],
      [ {lat: 39.637242, lng: -104.974327},	"August 04, 1981",	"Cherry Hill, CO",	"Sylvia Quayle W/F/33",	"Shot once with .22. Stabbed. Toole only."],
      [ {lat: 31.851165, lng: -102.389914},	"August 21, 1981",	"Odessa, TX",	"Carmen Croan W/F/19",	"Throat slashed. Toole considered a suspect."],
      [ {lat: 29.87079, lng: -95.486624},	"September 12, 1981",	"Houston, TX",	"Dominico Munoz H/M/29",	"Shot once in had with .22. Toole only."],
      [ {lat: 29.613235, lng: -95.173514},	"September 28, 1981",	"Houston, TX",	"Sontenes Mendez H/M/34",	"No other information available. Toole considered a suspect."],
      [ {lat: 32.009765, lng: -81.126679},	"October 07, 1981",	"Chatham County, GA",	"Kathryn Gill Woods W/F/20",	"Shot once in head with .32. <br>Disemboweled. Accomplice: Ottis Toole."],
      [ {lat: 34.900341, lng: -76.862995},	"October 22, 1981",	"Craven County, NC",	"John Melborne Creech W/M/48",	"Robbed, shot once in head with .25. <br>Body burned. Accomplice: Ottis Toole."],
      [ {lat: 34.662711, lng: -92.432729},	"November 06, 1981",	"Little Rock, AR",	"Betty Thornton W/F/?",	"Lucas confessed and was considered a suspect. "],
      [ {lat: 34.950437, lng: -116.862826},	"November 19, 1981",	"Calico, CA",	"Dennis J.Gibson W/M/30",	"Shot in head with .22 beaten in face. <br>Vehicle: Monte Carlo(stolen from victim) <br>Accomplice: Ottis Toole."],
      [ {lat: 35.275057, lng: -116.065525},	"December 02, 1981",	"Baker, CA",	"Unknow W/F/?",	"Unknown weapon. Accomplice: Ottis Toole.","72520 Hillview Dr"],
      [ {lat: 30.907284, lng: -81.549445},	"December 04, 1981",	"Comeden County, GA",	"Teresa Argust W/F/20",	"Multiple stab wounds. Body dragged with car. <br>Accomplice: Ottis Toole.","Unnamed Road"],
      [ {lat: 33.11386, lng: -96.502274},	"December 05, 1981",	"Colin County, TX",	"Tammy Jean Decker W/F/19",	"Murdered, robbed. Murdered in unknown manner. <br>Accomplice: Ottis Toole.","4111 Co Rd 444"],
      [ {lat: 33.877971, lng: -117.914608},	"December 15, 1981",	"Fullerton, CA",	"Bertha Ambritz W/F/22",	"Accomplice: Ottis Toole."],
      [ {lat: 33.863822, lng: -117.508063},	"December 18, 1981",	"Corona, CA",	"Unknown W/F/17 to 21. Accomplices: Ottis Toole, Freida Powell, Frank Powell.",	"Accomplices: Ottis Toole, Freida Powell, Frank Powell."],
      [ {lat: 39.567702, lng: -76.137612},	"December 30, 1981",	"Harre De Grace, MD",	"Lisa Swope W/F/17",	"No other information available. <br>Lucas confessed and was considered <br>a suspect for a short time.","2234 Barker Ln"],
      [ {lat: 29.83279, lng: -94.989871},	"January 01, 1982",	"Harris County, TX",	"Margaret Ann Bryant W/F/18",	"Stabbed once.","9326 Hartford Valley Trail"],
      [ {lat: 30.146861, lng: -81.595404},	"January 04, 1982",	"Jacknosnville, FL",	"George Sonenberg W/M/62",	"Burned to death Toole only.","12373 Hood Landing Rd"],
      [ {lat: 39.516997, lng: -106.051451},	"January 05, 1982",	"Breckenridge, CO",	"Annette K.Sneed, Barbara Oberholtzer ",	"No information. Lucas considered a suspect in these offense.","284 Coyne Valley Rd"],
      [ {lat: 34.041279, lng: -101.772111},	"January 28, 1982",	"Hale County, TX",	"Unknown, W/F/19 to 20",	"Stabbed in chest. "],
      [ {lat: 32.605459, lng: -91.991419},	"February 01, 1982",	"Swartz, LA",	"Sherry Alford W/F/16",	"Shot twice with .32. Toole only."],
      [ {lat: 35.176356, lng: -111.630286},	"February 11, 1982",	"Flagstaff, AZ",	"Francis Capldi W/M/28",	"Kidnapped, robbed. Shot 3 times in chest. <br>Vehicle: Victim's 1979 AMC Concord.","Arizona Trail"],
      [ {lat: 30.472986, lng: -90.110942},	"February 12, 1982",	"Convington, LA",	"Roxanne Scharp W/F/16",	"Beaten, strangled. <br>Accomplice: Ottis Toole and Freida Powell.","706 W 14th Ave"],
      [ {lat: 32.153205, lng: -94.775271},	"February 15, 1982",	"Henderson, TX",	"Unknown, H/M/?",	"Strangled. Burned to death. Toole considered suspect."],
      [ {lat: 30.201838, lng: -93.135674},	"February 18, 1982",	"Lake Charles, LA",	"Catherine Martin W/F/23",	"Robbed,stabbed 15 times in chest and back with a screwdriver. Toole only."],
      [ {lat: 39.069217, lng: -77.693805},	"February 25, 1982",	"Loudoun County, VA",	"Veronica Ann Hepworth ?/?/?",	"No information. Lucas was suspect.","19942 Lincoln Rd"],
      [ {lat: 37.76732, lng: -87.144149},	"February 25, 1982",	"Owensboro, KY",	"Kandice Camfield ?/?/?",	"No information. Lucas considered a suspect at one time.","825 Gardenside Dr"],
      [ {lat: 26.199486, lng: -80.162908},	"March 01, 1982",	"Fort Lauderdale, FL",	"Debra Cooper W/F/?",	"Homicide. Ottis Toole. Toole and Lucas considered suspects.","1525 NW 56th St Hanger F"],
      [ {lat: 31.816661, lng: -106.244662},	"March 02, 1982",	"El Paso, TX",	"Delia Loera ?/?/?",	"No information. Lucas considered a suspect.","12973 Alfredo Apodaca"],
      [ {lat: 32.462375, lng: -99.765228},	"March 09, 1982",	"Abilene, TX",	"Francisca Martinez ?/?/?, Susan F.Brown ?/?/?",	"No information. Toole considered a suspect."],
      [ {lat: 32.933011, lng: -83.904842},	"March 31, 1982",	"Monroe Couty, GA",	"Ray J.Collins W/M/66",	"Robbed, shot 3 times. Toole only."],
      [ {lat: 38.560845, lng: -121.463522},	"April 05, 1982",	"Sacrament, CA",	"Larvairno Cueves H/M/30",	"Robbed, stabbed 6 times in chest. Accomplice: Ottis Toole."],
      [ {lat: 33.816709, lng: -84.471427},	"April 13, 1982",	"Atlanta, GA",	"Unknown ",	"Homicide. Toole considered suspect."],
      [ {lat: 32.749964, lng: -103.186375},	"April 17, 1982",	"Hobbs, NM",	"Barbara E.Begley W/F/17",	"Abducted, stabbed 11 times. Vehicle: 1968 Ford four-door sedan. <br>Accomplice: Ottis Toole.","3901 W Millen Dr"],
      [ {lat: 33.991233, lng: -84.326067},	"April 18, 1982",	"Fulton County, GA",	"Paulette Dion W/F/22",	"Manually strangled. Toole only.","Island Ford Pkwy"],
      [ {lat: 32.207665, lng: -101.51795},	"April 25, 1982",	"Big Spring, TX",	"Happy Howry W/M/68",	"Robbed, beaten to death with tire tool. <br>Vehicle: Victim's 1980 Chevrolet Malibu Classic. <br>Accomplice: Ottis Toole."],
      [ {lat: 31.919672, lng: -102.249494},	"April 25, 1982",	"Odessa, TX",	"Herman Junior Brooks, W/M/45",	"Stabbed 8 times. Accomplice: Toole only."],
      [ {lat: 40.852483, lng: -82.274073},	"May 12, 1982",	"Ashland, OH",	"Unidentified W/F/?",	"Killed at rest stop. Lucas confessed, <br>involvement not confirmed."],
      [ {lat: 33.785099, lng: -98.20953},	"May 22, 1982",	"Clay County, TX",	"Daniel Garcia H/M/18",	"Hit and run.","FM2847"],
      [ {lat: 39.682931, lng: -80.290925},	"May 23, 1982",	"Monogalia County, WV",	"Karen E.King W/F/24",	"Strangled. Dissapeared this date, <br>skeletal remains found 5/27/83.","Sam Fox Hill Rd"],
      [ {lat: 32.260519, lng: -101.461645},	"June 01, 1982",	"Big Spring, TX",	"William B.Hite W/M/22",	"Shot once with .25 and 6times with .38. <br>Toole confessed, stated Freida Powell present."],
      [ {lat: 30.559508, lng: -97.741695},	"June 07, 1982",	"Round Rock, TX",	"Carolyn Cervenka W/F/?",	"Accomplice: Ottis Toole. <br>Lucas confessed and was considered a suspect at one time.","3602 Spring Canyon Trail"],
      [ {lat: 37.765691, lng: -87.088531},	"June 08, 1982",	"Owensboro, KY",	"Sandra Kelems W/F/?",	"No information. Lucas considered a suspect at one time.","1638 E Parrish Ave"],
      [ {lat: 32.850473, lng: -93.570733},	"June 30, 1982",	"Bossier Parish, LA",	"Annette Estes B/F/?",	"Shot with .22. Accomplice: Ottis Toole. <br>Lucas and Toole considered suspects."],
      [ {lat: 29.930429, lng: -95.107974},	"July 04, 1982",	"Harris County, TX",	"Darlene Gonzales Garza H/F/20",	"Shot twice in back and twice in head with .22. <br>Accomplice: Ottis Toole and Freida Powell."],
      [ {lat: 32.925643, lng: -96.962818},	"July 05, 1982",	"Irving, TX",	"Unknown W/F/20",	"Shot in head. Vehicle: 1965 Ford, yellow."],
      [ {lat: 27.535869, lng: -97.703279},	"July 09, 1982",	"Kleberg County, TX",	"Armando Alvarez H/M/34",	"Stabbed with butcher knife. <br>Vehicle: Victim's 1978 Ford Granada. <br>Accomplice: Henry Lee Lucas, Freida Powell, Frank Powell."],
      [ {lat: 30.482361, lng: -81.518499},	"July 15, 1982",	"Jacksonville, FL",	"no information",	"Arson. Toole only."],
      [ {lat: 36.176921, lng: -95.881487},	"July 24, 1982",	"Tulsa, OK",	"Duane Dow W/M/26, Carles Henry Weight IV",	"Shot in posterior with .22(non-fatal). <br>Shot 4 times with .22(fatal). <br>Vehicle: small gray foreign car. Toole only."],
      [ {lat: 30.070652, lng: -95.19274},	"July 30, 1982",	"Houston, TX",	"Gilbert Guerra W/M/29",	"Toole considered a suspect."],
      [ {lat: 31.829894, lng: -94.993945},	"July 31, 1982",	"Cherokee County, TX",	"Rodney Alan Cass W/M/19",	"Strangled. Vehicle: 1965/66 Ford Galaxie, blue. <br>Accomplice: Ottis Toole, Freida Powell."],
      [ {lat: 32.592968, lng: -95.391713},	"August 06, 1982",	"Smith County, TX",	"Katherine Powell W/F/35",	"Robbed, strangled, shot with 20 gauge. <br>Vehicle: 1965/66 Ford Galaxie, blue. <br>Accomplice: Ottis Toole, Freida Powell."],
      [ {lat: 35.283256, lng: -99.652166},	"August 07, 1982",	"Sayre, OK",	"Marilyn Therault ?/?/?",	"No information. Toole considered a suspect at one time."],
      [ {lat: 32.369253, lng: -94.984168},	"August 16, 1982",	"Rusk County, TX",	"Jan Alice Hudson W/F/40",	"Robbed, stabbed 5 times. Beaten with poker. <br>Vehicle: Olds Vista Cruiser. Accomplice: Ottis Toole."],
      [ {lat: 33.123149, lng: -97.116324},	"August 24, 1982",	"Denton, TX",	"Freida Lorraine(Becky) Powell W/F/15",	"Stabbed. "],
      [ {lat: 30.654869, lng: -89.854467},	"August 28, 1982",	"St. Tammany Parish, LA",	"Kenneth Broyles W/M/52",	"Shot once in head with .38. Vehicle: 1966 Ford Fairlane, blue."],
      [ {lat: 29.356577, lng: -95.04601},	"August 28, 1982",	"Hitchcock, TX. 4am",	"Unknown W/M/45 to 50",	"Beaten, body burned. Accomplice: Ottis Toole."],
      [ {lat: 30.411099, lng: -87.219869},	"September 04, 1982",	"Pensacola, FL",	"Marcie Gillen W/F/?",	"Attempted kidnapping. Vehicle: Gold LTD or Cougar."],
      [ {lat: 35.279051, lng: -116.073293},	"September 11, 1982",	"Baker, CA",	"Unknown W/F/?",	"no information. Accomplice: Ottis Toole."],
      [ {lat: 33.819592, lng: -97.940386},	"September 16, 1982",	"Ringold, TX",	"Kate P.Rich W/F/80",	"Stabbed. Body burned."],
      [ {lat: 29.539205, lng: -98.799746},	"September 23, 1982",	"Bexar County, TX",	"Bobbie Lee Barker W/F/68, Francis Machado ?/?/?",	"Multiple stab wounds. Shot with .22."],
      [ {lat: 30.356017, lng: -95.598663},	"October 02, 1982",	"Conroe, TX",	"Gloria Stepan W/F/32",	"Stabbed in neck."],
      [ {lat: 35.206988, lng: -103.915305},	"October 06, 1982",	"Quay County, NM",	"Jean Alba W/F/35",	"No other information available."],
      [ {lat: 31.64102, lng: -84.024673},	"October 08, 1982",	"Dougherty County, GA",	"Janice Haire W/F/22",	"Robbed. Shot once with .22. Accomplice: Ottis Toole."],
      [ {lat: 31.198312, lng: -98.764625},	"October 11, 1982",	"San Saba, TX",	"Marie Clark W/F/73",	"Robbed. Beaten with hammer. Vehicle: 1960 Ford Rambler, pink and gray. <br>Accomplices: Bill Smith, Deborah Smith."],
      [ {lat: 31.950556, lng: -102.39987},	"October 23, 1982",	"Odessa, TX",	"Bobby Henry Bogard W/M/43",	"Shot once in chest. Toole only."],
      [ {lat: 30.014954, lng: -90.125714},	"October 25, 1982",	"Metairie, LA",	"Hermine Duffour W/F/82",	"Multiple stab wounds; beaten with crowbar. <br>Vehicle stolen. Toole considered a suspect."],
      [ {lat: 32.026601, lng: -102.188167},	"December 03, 1982",	"Midland, TX",	"Don Allen W/M/?",	"No infomration. Toole considered a suspect."],
      [ {lat: 35.320089, lng: -119.013242},	"December 12, 1982",	"Bakerfield, CA",	"Gayl Ann Peterson W/F/15",	"Shot twice in head with .32."],
      [ {lat: 34.26289, lng: -101.582596},	"December 19, 1982",	"Hale County, TX",	"Glenna Bailey Biggers W/F/66",	"Stabbed in abdomen with knife and in neck with 3-prong fork. <br>Accomplice: Ottis Toole."],
      [ {lat: 40.855057, lng: -74.46538},	"January 04, 1983",	"Parsipany, NJ",	"Judy Brown W/F/?",	"Shot with .410. Toole considered suspect. "],
      [ {lat: 30.298192, lng: -89.764011},	"January 15, 1983",	"Slidell, LA",	"Betica Robinson H/F/35",	"Attempted kidnapping. Vehicle: White. <br>Accomplice: Unidentified white male. "],
      [ {lat: 30.441316, lng: -84.1652},	"February 10, 1983",	"Tallahasseem FL",	"Ada Johnson W/F/19",	"Shot once in head with .22. <br>Vehicle: 1974 Ford Country Squire Station Wagon. Toole only."],
      [ {lat: 32.788364, lng: -96.99303},	"February 15, 1983",	"Irving, TX",	"Adrian Reed B/F/22",	"Stabbed, throat slashed, body mutilated. Accomplice: Ottis Toole."],
      [ {lat: 40.16878, lng: -122.241207},	"March 03, 1983",	"Red Bluff, CA",	"Rachel Ward W/F",	"No other information available. Lucas was a suspect only. "],
      [ {lat: 30.417275, lng: -95.713772},	"March 17, 1983",	"Montgomery County, TX",	"Unknown, W/F/18",	"Strangled, body burned."],
      [ {lat: 32.674405, lng: -115.854274},	"March 20, 1983",	"Sunrise Butte, CA",	"Unknown W/F/20",	"Stabbed in neck and chest. <br>Accomplice: Ottis Toole, Freida Powell and Frank Powell."],
      [ {lat: 30.204467, lng: -95.298866},	"April 18, 1983",	"Montgomery County, TX",	"Lura Domez W/F/16",	"Strangled."],
      [ {lat: 33.66841, lng: -114.628753},	"May 01, 1983",	"Blythe, CA",	"Unknown W/F/20 to 25",	"Strangled accroding to confession. <br>Actual date of death unknown."],
      [ {lat: 33.027549, lng: -96.465196},	"May 15, 1983",	"Collin County, TX",	"Jacqueline Rene Bradly B/F/15",	"Strangled. Thrown off bridge"],
      [ {lat: 32.541631, lng: -92.913869},	"May 19, 1983",	"Arcadia, LA",	"Jenell Gridley ?/?/?",	"No information. Toole considered a suspect."],
      [ {lat: 30.606421, lng: -89.899785},	"May 26, 1983",	"St. Tammany Parrish, LA",	"Ruth Ann Manguno W/F/26",	"Abducted. Shot 3 times in head. <br>Vehicle:1973 Pontiac.","80438 Noble Rd"],
      [ {lat: 31.776977, lng: -106.223376},	"May 27, 1983",	"El Paso, TX",	"Librada Apodaca H/F/72",	"Multiple blows to head with ax.","2608 Pete Sampras Pl"],
      [ {lat: 31.851631, lng: -106.466454},	"June 03, 1983",	"El Paso, TX",	"Unknown W/F/?",	"Lucas considered a suspect."],
      [ {lat: 37.808594, lng: -119.493602},	"June 28, 1983",	"Yosemite National park, CA",	"Unknown W/F/17 to 20.",	"Strangled. "],
      
];

   let markerArray = [];

   //render markers
    array.forEach((el, index) =>{
         let num = (index+1).toString();
         addMarker(el,num);
     })
 
    function addMarker(item, index) {
       var marker = new google.maps.Marker({
            position:item[0],
            map:map,
            title: index,
            animation: google.maps.Animation.DROP,
          //   icon:{url: "https://img.icons8.com/ios-filled/50/000000/pin3.png",
          //   labelOrigin: new google.maps.Point(28, 22), //label's position
          //   // scaledSize: new google.maps.Size(38,31) //marker's size
          // },
           
            label: {
                text : index,         //ラベル文字
                color: '#000000',          //ラベル文字の色
                // fontFamily: 'Architects Daughter',  //フォント 
                // fontWeight: 'bold',        //フォントの太さ 
                // fontSize: '27px',          //フォントのサイズ 
                zIndex: index,
             }    
             
            
        });
      
        markerArray.push(marker);
        console.log(marker);

        var infoWindow = new google.maps.InfoWindow({
              content:item[1]+'<br>' + item[2]+'<br>' + item[3]  +'<br>' + item[4]+'<br>'
             });
   
             //if you click marker, infowindow shows up 
        marker.addListener('click', function(){
                    infoWindow.open(map, marker);})
    }


    //if you select from selectbox, marker shows up. 
    let selectedNo = document.querySelector('#selectbox-number');
    selectedNo.addEventListener('change', ()=>{
      markerArray.forEach((marker, index)=>{
        if(selectedNo.value == "all"){
          marker.setMap(map);
        }else{
          marker.setMap(null);
        }
        if(selectedNo.value == '1-50'){
          if(index <= 49){
                   console.log(marker);
                   marker.setMap(map);
                 }else{
                   marker.setMap(null)
                 }};
         if(selectedNo.value == '51-100'){
          if(index <= 99 && index >= 50){
            marker.setMap(map);
          }else{
            marker.setMap(null);
          }};
          if(selectedNo.value == '101-150'){
          if(index <= 149 && index >= 100){
            marker.setMap(map);
          }else {
            marker.setMap(null);
          }};
          if(selectedNo.value == '151-200'){
          if(index <= 199 && index >= 150) {
            marker.setMap(map);
          }else {
            marker.setMap(null);
          } };
          if(selectedNo.value == '201-250'){ 
          if(index <= 249 && index >= 200) {
            marker.setMap(map);
          } else {
            marker.setMap(null);
          }};
          if(selectedNo.value == '251-302'){     
          if(index <= 301 && index >= 250) {
            marker.setMap(map)
          } else {
            marker.setMap(null);
          }}
      })
   
    })
    
  
    //if you click each year, each periods in the year show up.
    let years = document.querySelectorAll('.year');
     years.forEach(year => {
       year.addEventListener('click', (e)=>{
         if(e.target.parentElement == year){

           e.target.style.setProperty('--after', '100%');
        let periodsInYear = document.querySelector(`#periods-in-${year.id}`);
  
        periodsInYear.classList.toggle('show-periods');
        if(!periodsInYear.classList.contains('show-periods')){
          e.target.style.setProperty('--after', '0');
        }
      
       let children = Array.from(periodsInYear.children)
        children.map(child => {child.classList.toggle('display-block')});
        console.log(e.target.parentElement)
         }
        
       })
     })
    //show and hide information tab, toggle infotab tag
    const infoTag = document.querySelector('.information-tag');
    const infotabOpen = document.querySelector('.fa-chevron-left');
    const information = document.querySelector('.information');

    infoTag.addEventListener('click', ()=>{
      infotabOpen.classList.toggle('closed');
      information.classList.toggle('close-info');
    })

    //draw polyline for each periods
    let periods = document.querySelectorAll('.period');
    let showBtn = document.querySelectorAll('.show-btn');
    let deleteBtn = document.querySelectorAll('.delete-btn');

    //each crazy periods in array
    let periodArray = [
      {
      origin: new google.maps.LatLng(29.4502321, -98.5169623),//from
       
      destination: new google.maps.LatLng(32.013379, -81.823743), //to
      
      travelMode: google.maps.DirectionsTravelMode.DRIVING,
  },

    {
    origin: new google.maps.LatLng(38.822364, -106.1629997),//from
    destination: new google.maps.LatLng(39.088247, -120.916178), //to
    waypoints: [
        {location: new google.maps.LatLng(29.422048, -98.703615)},
        {location: new google.maps.LatLng(36.626656, -76.311527)},
    ], 
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
}, 
   {
    origin: new google.maps.LatLng(29.842205, -95.28063),//from
    destination: new google.maps.LatLng(42.379048, -87.848617), //to
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
   },

   {
    origin: new google.maps.LatLng(38.551426, -121.714433),//from
    destination: new google.maps.LatLng(29.703932, -95.563528), //to
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
   },

   {
    origin: new google.maps.LatLng(32.815008, -117.095287),//from
    destination: new google.maps.LatLng(30.190018, -97.820739), //to
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
   },

   {
    origin: new google.maps.LatLng( 47.727285, -117.48975),//from
    destination: new google.maps.LatLng(29.558482, -94.396182), //to
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
   },

   {
    origin: new google.maps.LatLng(33.739152, -105.338967),//from
    destination: new google.maps.LatLng(39.007567, -92.211009), //to
    waypoints: [
        {location: new google.maps.LatLng(40.809751, -119.799752)},
        {location: new google.maps.LatLng(32.538583, -93.662408)},
        {location: new google.maps.LatLng(46.195482, -119.204535)},
    ], 
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
}, 

 {
  origin: new google.maps.LatLng(30.356647, -97.400885),//from
  destination: new google.maps.LatLng(43.166079, -88.029238), //to
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
 },

 {
  origin: new google.maps.LatLng(30.334662, -97.724608),//from
  destination: new google.maps.LatLng(31.267582, -81.573351), //to
  waypoints: [
      {location: new google.maps.LatLng(31.063951, -85.00061)},
      {location: new google.maps.LatLng(40.847034, -98.000692)},
  ], 
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
}, 

{
  origin: new google.maps.LatLng(39.508596, -119.815145),//from
  destination: new google.maps.LatLng( 30.395821, -99.434824), //to
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
 },

 {
  origin: new google.maps.LatLng(37.649322, -122.00893),//from
  destination: new google.maps.LatLng(30.799808, -95.552756), //to
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
 },

 {
  origin: new google.maps.LatLng(29.947677, -81.3267),//from
  destination: new google.maps.LatLng(31.89369, -85.095553), //to
  waypoints: [
      {location: new google.maps.LatLng(29.595715, -95.770782)},
      {location: new google.maps.LatLng(27.811915, -97.535948)},
  ], 
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
}, 

{
  origin: new google.maps.LatLng(25.916106, -80.266097),//from
  destination: new google.maps.LatLng(29.883689, -90.112579), //to
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
 },

 {
  origin: new google.maps.LatLng(36.115374, -95.779177),//from
  destination: new google.maps.LatLng( 39.696249, -105.112875), //to
  waypoints: [
      {location: new google.maps.LatLng(39.734105, -75.515068)},
  ], 
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
}, 

{
  origin: new google.maps.LatLng(35.275057, -116.065525),//from
  destination: new google.maps.LatLng(33.11386, -96.502274), //to
  waypoints: [
      {location: new google.maps.LatLng(30.907284, -81.549445)},
  ], 
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
}, 

{
  origin: new google.maps.LatLng(39.567702, -76.137612),//from
  destination: new google.maps.LatLng(29.83279, -94.989871), //to
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
 },

 {
  origin: new google.maps.LatLng(30.146861, -81.595404),//from
  destination: new google.maps.LatLng( 39.516997, -106.051451), //to
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
 },

 {
  origin: new google.maps.LatLng(35.176356, -111.630286),//from
  destination: new google.maps.LatLng( 30.472986, -90.110942), //to
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
 },

 {
  origin: new google.maps.LatLng(39.069217, -77.693805),//from
  destination: new google.maps.LatLng(37.76732, -87.144149), //to
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
 },

 {
  origin: new google.maps.LatLng(26.199486, -80.162908),//from
  destination: new google.maps.LatLng(31.816661, -106.244662), //to
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
 },

 {
  origin: new google.maps.LatLng(32.749964, -103.186375),//from
  destination: new google.maps.LatLng(33.991233, -84.326067), //to
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
 },

 {
  origin: new google.maps.LatLng(33.785099, -98.20953),//from
  destination: new google.maps.LatLng(39.682931, -80.290925), //to
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
 },

 {
  origin: new google.maps.LatLng(30.559508, -97.741695),//from
  destination: new google.maps.LatLng(37.765691, -87.088531), //to
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
 },

 {
  origin: new google.maps.LatLng(30.606421, -89.899785),//from
  destination: new google.maps.LatLng(31.776977, -106.223376), //to
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
 },
    ]
   
    let  directionsDisplayArray = [];
    let infoWindowArray = []; 
    const durationAndDistance = document.querySelectorAll('.duration-distance');
//draw polyline
    showBtn.forEach((btn, index) => {
     
      btn.addEventListener('click', drawPolyline,  {passive: true});
    })
//delete polyline
    deleteBtn.forEach((btn, index) => {
      btn.addEventListener('click', deletePolyline,  {passive: true});
    });

    //delete polyline
    function deletePolyline(){
      let thisPeriod = this.parentElement.parentElement.id.split('-')[1]; 
      durationAndDistance.forEach(item => {
        if(item.id.split('-')[2] == thisPeriod) {
          item.classList.remove('open-result');
        }
      })
           
      periodArray.forEach((routeofThePeriod, index) =>{
     
        if(thisPeriod == index){
          // infoWindow.close(map);
         
          directionsDisplayArray.forEach((rendererObj,num) => {
            if(rendererObj.directions.request.origin.location == routeofThePeriod.origin){
            
              rendererObj.setMap(null);
              console.log(rendererObj)
            
                   //close the window of duration and distance of each legs   
                  infoWindowArray.forEach((windows, i) =>{
                   if(i == num){
                     windows.forEach(window =>{
                       console.log(window);
                      window.close();
                      
                     })
                   }
                  })
          
            }
          }
          )
        // show markers after delete evrey route
       let showMarkerAgain = directionsDisplayArray.every(el =>{
         return el.map == null;
       })
        
          if(showMarkerAgain){
           //show markers after 0.2seconds
            setTimeout(()=> {
              // set zoom level
              map.setZoom(4);
              markerArray.forEach(marker => {
                marker.setMap(map);

              });
             
            }, 200)
           
          }
   } 
          })
    }
    
    let addressArray = [];
    let dis;
		let sec;
    let hours;
    let min;
    let mile;
    
    let eachPoints;

     //draw polyline and  calculate total duration and distance of clicked period
    function drawPolyline(){
    
      //delete all markers
     markerArray.forEach(marker => {
       marker.setMap(null);
     })
     let thisPeriod = this.parentElement.parentElement.id.split('-')[1]; 
    
      //color of each routes
      let routeColor = ["red", "yellow","blue","green"," #ff9933","#99cc00","#006666", "purple","#ff6699","olive","tomato","orange", "brown","#6600ff", "violet","salmon", "#ffcc00","#009933","#cc9900","deepskyblue","goldenrod","maroon","seagreen","rosybrown"];
       periodArray.forEach((routeofThePeriod, index) =>{
       
     if(thisPeriod == index){
       directionsService = new google.maps.DirectionsService();//ルート検索オブジェクト
    
       directionsDisplay = new google.maps.DirectionsRenderer();//ルート描画
       //push directionsrenderer objects in array
       directionsDisplayArray.push(directionsDisplay);
       
    //direction service
    directionsDisplay.setMap(map);
   
    directionsDisplay.setOptions({
        suppressMarkers: false,
        suppressInfoWindows: false,
        suppressPolylines: false,
        polylineOptions: {
            strokeColor: routeColor[index], //from routecolor array
            strokeOpcaity: 0.5,
            strokeWeight: 5,
        }
    })
    


    directionsService.route( routeofThePeriod, function(result, status){
      if(status == google.maps.DirectionsStatus.OK){

           //eachPoints are legs
            eachPoints = result.routes[0].legs;
           console.log(eachPoints);
        

           //describe info in infoWindow by retrieve info from array
           let infoArray = [];
           eachPoints.forEach((leg, index) => {
             
            //display duration and distance for each legs in infowindow
            sec = leg.duration.value;
			    	dis = leg.distance.value;
         
      //calculate mile, hours, minutes 
       mile = Math.round(dis*0.00062137*10)/10;
       hours = Math.floor(sec/60/60);
       min = Math.floor(sec/60%60);
      
            let infoWindow = new google.maps.InfoWindow({
              content:`<div  style="font-family:Barlow Condensed">${mile} miles <br> ${hours} hours ${min}minutes</div>`,
              position: leg.steps[Math.floor(leg.steps.length/2)].end_location, //position is half of total of leg.steps
            });
             //push each infoWindow objects in infoArray
            infoArray.push(infoWindow);
            
            infoWindow.open(map);
        
            //if house number is same as index 5 in each array, display info in each infowindows
            array.forEach((arr,i)  => {
              
              if(leg.start_address.split(/[,]/)[0] == arr[5]){
                //display info in each infowindows
               leg.start_address = arr[1]+'<br>' + arr[2]+'<br>' + arr[3]  +'<br>' + arr[4]+'<br>';
              };
              
              //if it's last leg, it should be 'end_address'
              if(index == eachPoints.length-1){
                if(leg.end_address.split(/[,]/)[0] == arr[5]){
                  leg.end_address = arr[1]+'<br>' + arr[2]+'<br>' + arr[3]  +'<br>' + arr[4]+'<br>';
                };
              }
            })
            
           });
           //push infoArray(array of infowindow(duration and distance) of each legs) in infoWindowArray
           infoWindowArray.push(infoArray);
  
            //make infoArray empty for next routes
            infoArray = [];

      directionsDisplay.setDirections(result);
      var point = result.routes[0].legs[0];
    
			// 総距離と総時間の合計する
      var legs = result.routes[0].legs;
		
			 dis = 0;
			 sec = 0;
      
      
			legs.forEach( (leg)=> {
  
				sec += leg.duration.value;
				dis += leg.distance.value;
 
			});
      
      //calculate mile, hours, minutes 
       mile = Math.round(dis*0.00062137*10)/10;
       hours = Math.floor(sec/60/60);
       min = Math.floor(sec/60%60);
      console.log(hours,min, mile);
     

      durationAndDistance.forEach(item => {
        if(item.id.split('-')[2] == thisPeriod) {
          item.classList.add('open-result');
          item.innerHTML =  `Duration: ${hours} hours ${min} minutes<br>
          Total Distance: ${mile} miles`;
        
        } 
      })
   
      }else if(status == google.maps.DirectionsStatus.UNKNOWN_ERROR) {
        alert('A directions request could not be processed due to a server error.\
         The request may succeed if you refresh your browser and try again.')
      }
  })
        
} 

    
       })
    


  
    }


    
}


