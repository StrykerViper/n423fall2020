var MODEL = (function(){
    var _db;
    var data;
    function initFireBase(){
        
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                var email = user.email;
                var uid = user.uid;
                console.log("user" , email, uid);
                $("#nav nav .linkWrap").html(`
                <a class="links" id="home" href="#">Home</a>
                <a class="links" id="yourISO" href="#">Your ISO</a>
                <a class="links" id="logOut" href="#">Log Out</a>
                `);
                _db = firebase.firestore();
            }else{
                console.log("no user")
                $("#nav nav .linkWrap").html(`
                <a class="links" id="login" href="#">Home</a>
                <a class="links" id="login" href="#">Your ISO</a>
                <a class="links" id="login" href="#">Login</a>
                `);
                
               
            }
            
        });
      
    };

    
    
    //Sign up user with email and password
    
    function userSignUp(eMail, pWord){
        firebase.auth().createUserWithEmailAndPassword(eMail,pWord).then((result) => {
            alert("User Created");
            console.log(result.user.uid);

        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = errror.message;
            console.log(`error code ${errorCode} Error message ${errorMessage}`);
        })
    }

    //logout user
    function logOutUser(){
        firebase
            .auth()
            .signOut()
            .then(() => {
            console.log("User Has Signed Out");
            alert("User Has Signed Out");
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = errror.message;
        console.log(`error code ${errorCode} Error message ${errorMessage}`);
      });
    }

    //log in
    function loginUser(eMail, pWord){
        firebase
        .auth()
        .signInWithEmailAndPassword(eMail, pWord)
        .then(() => {
        console.log("User has Signed In");
        alert("User Has Signed In");
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(`error code ${errorCode} Error message ${errorMessage}`);
      });

    }


    //delete item
    function deleteItem(docID){
        _db.collection("items")
        .doc(`${docID}`)
        .delete()
        .then(function() {
            alert("Deleted Item");

        })
    }

    //edit item
    function editItem(editedData){
        console.log(docID);
        console.log(editedData);
        _db.collection("items")
        .doc(`${docID}`)
        .set(editedData)
        .then(function(doc){
            alert("Edit Confirmed")
        }).catch(function(error){
            alert("error", error);
        });

    };

    //add item
    function addItem(itemData){
        _db.collection("items")
        .add(itemData)
        .then(function (doc) {
            alert("Added item");
        })
    }

    function categoryChoice(id){
         $("#content #gridWrap").html(`<p></p>`);
        _db.collection("items")
        .where("category", "==",`${id}`)
        .get()
        .then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                console.log(doc.id, "==", doc.data());
                data = doc.data();
               
                $("#content #gridWrap").append(`
                <div id="${doc.id}" onclick="viewClick(id)" class="gridItem">
                    <img class="homeImg" src="${data.url}" alt="">
                    <div class="bottomDetail">
                        <p>${data.name}</p>
                        <p>$${data.price}</p>
                    </div>
                </div>
                `
            )
            })
        })
    }
    var _getView = function (viewName){
        $.get(`views/${viewName}.html`, function (home){
            // console.log(`${viewName}`);
            $("#content").html(home);

        });
        
        //if view if yourISO then display items
        if(viewName == "yourISO"){
            console.log("yourISO page");
            _db.collection("items").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log(doc.id);
                    data = doc.data()
                    $("#content #gridWrap").append(`<div class="gridItem">
                    <img class="itemImg" src="${data.url}" alt="">
                    <div class="bottomDetail">
                        <div class="nameContainer">
                        <p>${data.name}</p>
                            <i id="${doc.id}" class="fa fa-pencil-square-o" onclick="editButton(id)"></i>
                        </div>
                        <div class="priceContainer">
                            <p>$${data.price}</p>
                            <i id="${doc.id}" class="fa fa-trash" onclick="deleteItemBtn(id)"></i>
                        </div>
                    </div>
                </div>`)
                });
            });
        }
        if(viewName == "home"){
            console.log("home");
            _db.collection("items").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log(doc.id);
                    data = doc.data()
                    $("#content #gridWrap")
                    .append(
                    `<div id="${doc.id}" onclick="viewClick(id)" class="gridItem">
                    <img class="homeImg" src="${data.url}" alt="">
                    <div class="bottomDetail">
                        <p>${data.name}</p>
                        <p>$${data.price}</p>
                    </div>
                </div>`
                )
                });
            });
        }
        if(viewName == "details"){
            _db.collection("items").doc(`${docID}`).get().then(function (querySnapshot){
                data = querySnapshot.data();
                    $("#content #itemWrap").html(`
                    <img src="${data.url}" alt="">
                    <div class="bottomDetailDiv">
                        <div class="itemNamePrice">
                            <p>${data.name}</p>
                            <p>$${data.price}</p>
                        </div>
                        <div class="descDiv">
                            <p>${data.desc}
                            </p>
                        </div>
                        <button class="emailOfferBtn">Email Offer</button>
                    </div>
                    `)
                });
            
        }
    };
    return {
        initFireBase,
        userSignUp,
        logOutUser,
        loginUser,
        addItem,
        deleteItem,
        editItem,
        categoryChoice,
        getView: _getView,
        // homeItems,
        
    }
})();