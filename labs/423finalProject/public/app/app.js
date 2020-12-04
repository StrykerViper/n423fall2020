function initListeners(){
    $("#nav").on("click", "a",function (e){
        var btnID = this.id;
        console.log(btnID);
        MODEL.getView(btnID);
        
    });
    
};

//cancel button sends you to the home page
function cancelBtn(id){
    btnID = id;
    console.log(btnID)
    MODEL.getView(btnID);
}

//takes you to the add page 
function addPageBtn(id){
    btnID = id
    console.log(btnID);
    // console.log("click")
    MODEL.getView(btnID)

}
//takes you to detail page of item
function viewClick(id){
    docID = id;
    btnID = "details";
    console.log(docID);
    MODEL.getView(btnID);

}
function catHomeSearch(id){
    console.log(id);
    MODEL.categoryChoice(id);
}

//takes the doc id and passes it to the edit page
function editButton(id) {
    docID = id;
    btnID = "edit";
    console.log(docID);
    MODEL.getView(btnID);
    // MODEL.ItemEditPage(docID);
}
//send doc id to delete function
function deleteItemBtn(id){
    docID = id;
    console.log(docID);
    MODEL.deleteItem(docID);
}

function initSite(){
    $.get("views/nav.html", function (nav) {
        $("#nav").html(nav);
        initListeners();
        
    });
    $.get("views/login.html", function (data) {
        $("#content").html(data);
        console.log("login")
        
    })
    
    
    //Sign up usrer
    $("#content").on("click", "#submitSignUpBtn", function(e){
        e.preventDefault();
        let eMail = $("#eMail").val();
        let pWord = $("#pWord").val();

        MODEL.userSignUp(eMail,pWord);
    })

    //log out user
    $("#nav").on("click", "#logOut", function (e){
        e.preventDefault();
        console.log("logout click")
        MODEL.logOutUser();
    })

    //login user
    $("#content").on("click", "#submitLoginBtn", function(e){
        e.preventDefault();
        let eMail = $("#email").val();
        let pWord = $("#pass").val();
        console.log("login", eMail, pWord);
        MODEL.loginUser(eMail, pWord);

    })
    //add btn
    $("#content").on("click", "#addBtn", function (){
        
        const itemData = $("#addForm")
        .serializeArray()
        .reduce((obj, item) => ({ ...obj, ...{ [item.name]: item.value } }), {});;
        console.log(itemData);
        MODEL.addItem(itemData);
    })
    //get edited data
    $("#content").on("click", "#editConfirm", function (){
        console.log("edit confirm btn");
        const editedData = $("#editForm")
        .serializeArray()
        .reduce((obj, item) => ({ ...obj, ...{ [item.name]: item.value } }), {});
        
        console.log(editedData);
        MODEL.editItem(editedData)
    })
}

$(document).ready(function () {
    initSite();
    MODEL.initFireBase();
    
    console.log("init site")
})