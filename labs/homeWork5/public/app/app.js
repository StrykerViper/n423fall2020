var _db;
//details of document
var albumDetails = [

    {
        albumName: 'Drive',
        artistName: 'Alan Jackson',
        albumPhoto: 'https://upload.wikimedia.org/wikipedia/en/f/fe/Drivealanjackson.jpg',
        genre: 'Country'
    },
    {
        albumName: 'Good Time',
        artistName: 'Alan Jackson',
        albumPhoto: 'https://upload.wikimedia.org/wikipedia/en/8/8c/GoodTimeJackson.jpg',
        genre: 'Country'
    },
    {
        albumName: 'Let It Be Christmas',
        artistName: 'Alan Jackson',
        albumPhoto: 'https://upload.wikimedia.org/wikipedia/en/9/9d/LetItBeChristmas.jpg',
        genre: 'Country'
    },
    {
        albumName: 'Angels and Alcohol',
        artistName: 'Alan Jackson',
        albumPhoto: 'https://upload.wikimedia.org/wikipedia/en/f/fd/AngelsandAlcohol.jpg',
        genre: 'Country'
    },
    {
        albumName: "A Lot About Livin'",
        artistName: 'Alan Jackson',
        albumPhoto: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Jackson-Living.jpg',
        genre: 'Country'
    },
    {
        albumName: 'Hixtape, Vol. 1',
        artistName: 'Hardy',
        albumPhoto: 'https://hardyofficial.com/home/wp-content/uploads/2019/09/unnamed-15.jpg',
        genre: 'Country'
    },
    {
        albumName: 'A rock',
        artistName: 'Hardy',
        albumPhoto: 'https://images-na.ssl-images-amazon.com/images/I/41rfAwzFnpL.jpg',
        genre: 'Country'
    },
    {
        albumName: 'All I Want',
        artistName: 'Tim McGraw',
        albumPhoto: 'https://upload.wikimedia.org/wikipedia/en/2/24/Timalliwant.jpg',
        genre: 'Country'
    },
    {
        albumName: 'Live Like You Were Dying',
        artistName: 'Tim McGraw',
        albumPhoto: 'https://upload.wikimedia.org/wikipedia/en/8/89/Tim_McGraw_-_Live_Like_You_Were_Dying.jpg',
        genre: 'Country'
    },
    {
        albumName: 'Damn Country Music',
        artistName: 'Tim McGraw',
        albumPhoto: 'https://upload.wikimedia.org/wikipedia/en/3/35/Damn_country_music.jpg',
        genre: 'Country'
    },
    {
        albumName: 'Kamikaze',
        artistName: 'Eminem',
        albumPhoto: 'https://upload.wikimedia.org/wikipedia/en/6/62/Eminem_-_Kamikaze.jpg',
        genre: 'Rap'
    },
    {
        albumName: 'Relapse',
        artistName: 'Eminem',
        albumPhoto: 'https://upload.wikimedia.org/wikipedia/en/4/42/Relapse_%28album%29.jpg',
        genre: 'Rap'
    },
    {
        albumName: 'Recovery',
        artistName: 'Eminem',
        albumPhoto: 'https://upload.wikimedia.org/wikipedia/en/6/60/Recovery_Album_Cover.jpg',
        genre: 'Rap'
    },
    {
        albumName: 'One Long Dream',
        artistName: 'SonReal',
        albumPhoto: 'https://images-na.ssl-images-amazon.com/images/I/51HtygEZTGL._SY355_.jpg',
        genre: 'Hip Hop'
    },
    {
        albumName: 'What You See Is What You Get',
        artistName: 'Luke Combs',
        albumPhoto: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Luke_Combs_-_What_You_See_Is_What_You_Get.png',
        genre: 'Country'
    },
];

function initFirebase() {
    firebase.auth().signInAnonymously().then(function (result) {
        console.log("connected");
        _db = firebase.firestore();
    })
}
// collection albums
function initListeners() {
    $('#add').click(function () {
        for (i = 0; i < albumDetails.length; i++) {
            console.log(i);
            _db.collection('albums').add(albumDetails[i]).then(function (doc) {
                console.log('added data and here is the ref No.: ', doc.id);
            })
        }

    });
    $("#get").click(function () {
        // this gets all of them
        _db.collection("albums").get().then(function (querySnapshot) {
            querySnapshot.forEach(function () {

                $("#displayAlbums").html(`
                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[0].albumName}</h1> 
                <p>Artist: ${albumDetails[0].artistName}</p> 
                <p>Genre: ${albumDetails[0].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[0].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[1].albumName}</h1> 
                <p>Artist: ${albumDetails[1].artistName}</p> 
                <p>Genre: ${albumDetails[1].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[1].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[2].albumName}</h1> 
                <p>Artist: ${albumDetails[2].artistName}</p> 
                <p>Genre: ${albumDetails[2].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[2].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[3].albumName}</h1> 
                <p>Artist: ${albumDetails[3].artistName}</p> 
                <p>Genre: ${albumDetails[3].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[3].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[4].albumName}</h1> 
                <p>Artist: ${albumDetails[4].artistName}</p> 
                <p>Genre: ${albumDetails[4].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[4].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[5].albumName}</h1> 
                <p>Artist: ${albumDetails[5].artistName}</p> 
                <p>Genre: ${albumDetails[5].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[5].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[6].albumName}</h1> 
                <p>Artist: ${albumDetails[6].artistName}</p> 
                <p>Genre: ${albumDetails[6].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[6].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[7].albumName}</h1> 
                <p>Artist: ${albumDetails[7].artistName}</p> 
                <p>Genre: ${albumDetails[7].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[7].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[8].albumName}</h1> 
                <p>Artist: ${albumDetails[8].artistName}</p> 
                <p>Genre: ${albumDetails[8].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[8].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[9].albumName}</h1> 
                <p>Artist: ${albumDetails[9].artistName}</p> 
                <p>Genre: ${albumDetails[9].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[9].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[10].albumName}</h1> 
                <p>Artist: ${albumDetails[10].artistName}</p> 
                <p>Genre: ${albumDetails[10].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[10].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[11].albumName}</h1> 
                <p>Artist: ${albumDetails[11].artistName}</p> 
                <p>Genre: ${albumDetails[11].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[11].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[12].albumName}</h1> 
                <p>Artist: ${albumDetails[12].artistName}</p> 
                <p>Genre: ${albumDetails[12].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[12].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[13].albumName}</h1> 
                <p>Artist: ${albumDetails[13].artistName}</p> 
                <p>Genre: ${albumDetails[13].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[13].albumPhoto}">
                </div>

                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${albumDetails[14].albumName}</h1> 
                <p>Artist: ${albumDetails[14].artistName}</p> 
                <p>Genre: ${albumDetails[14].genre}</p>
                </div>
                <img class="albumImg" src="${albumDetails[14].albumPhoto}">
                </div>

             

                `);
               
            });
        });
    
    });

}
$(document).ready(function () {
    try {
        let app = firebase.app();
        initFirebase();
        initListeners();
    } catch (e) {
        console.error(e);

    }

});