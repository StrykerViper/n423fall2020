var _db;
//list of album details to upload to firebase
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
        _db.collection("albums").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id}  ${doc.data().artistName}`);
                // displays albums
                $("#displayAlbums").append(`
                <div class="outputWrap"> 
                <div class="albumInfo">
                <h1>${doc.data().albumName}</h1> 
                <p>Artist: ${doc.data().artistName}</p> 
                <p>Genre: ${doc.data().genre}</p>
                </div>
                <img class="albumImg" src="${doc.data().albumPhoto}">
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