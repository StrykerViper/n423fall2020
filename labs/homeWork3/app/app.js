//if error out restart browser. the arrays bug out for the .push im not sure why at the moment
var students = {
    Student: [
        {
        name: "bryce",
        age: "23",
        phone: "7651125512",
        email: "bstans@iu.edu",
        classes: [
           "n123",
           "n233"
       ]
    },
]
}

// console.log(students[0].name);

function getData() {
    if(!localStorage.getItem("studentInfo")){
        localStorage.setItem("studentInfo", JSON.stringify(students.Student));
    }else {
        students = JSON.parse(localStorage.getItem("studentInfo"));
    }
}


$("#addBtn").click(function(){
    for(let i=0; i < 5; i++){
        var nameData = document.getElementById('formOne').elements[0].value;
        var ageData = document.getElementById('formOne').elements[1].value;
        var phoneData = document.getElementById('formOne').elements[2].value;
        var emailData = document.getElementById('formOne').elements[3].value;
        var classesData = document.getElementById('formOne').elements[4].value;
        // console.log(nameData);
        // document.getElementById('output').innerHTML = formData[0]
        
    };
    

    students.Student.push({name: nameData, age: ageData, phone: phoneData, email: emailData, classes: [classesData]});
    localStorage.setItem('studentInfo', JSON.stringify(students));
    
   
});
$("#showStorage").click(function(){
    // console.log("click")
    let stData = JSON.parse(localStorage.getItem("studentInfo"));
    console.log(stData);
    // $("#output").html("");s
    for(let i = 0; i < students.Student.length; i++){
        $.each(stData.Student[i], function(index, value){
            $("#output").append(`<p class="info">${index}: ${value} </p>`)
        })
}
   
})
getData();