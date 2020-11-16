// alert("as esu js faile")

console.log("As esu consoleje!");

document.write("as esu dokumente!");

var kintamojoPavadinimas = "kazkoks tekstas";
console.log(kintamojoPavadinimas);

var masyvas = ["vardas","pavarde",50,true,null]
// masyvas.pop(); //-panaikina paskutini elementa is masyvo
// masyvas.push("Nauja reiksme"); //-ideda nauja elementa i masyvo gala
// masyvas.shift(); //-panaikina pirma masyvo elementa
// masyvas.unshift(10); //prideda nauja elementa i masyvo pradzia


console.log(masyvas);
// console.log(masyvas.length);

var profile={
    firstName:"Lukas",
    lastName: "Spelveris",
    fullName: function() {
        return this.firstName +" " +this.lastName;
    },
    changeName:function(newFirstName){
        this.firstName =newFirstName;
    }
}
profile.changeName("Simonas");
console.log(profile.fullName());

var paragrapfh = document.createElement("p");
paragrapfh.innerText = "Tekstas idetas i elementa su JS";

document.body.prepend(paragrapfh);

// var outro = document.querySelector(".outro p");
// outro.style.color="red";

var button1 = document.querySelector("#change-p-color");
button1.addEventListener("click",function(){
    var outro= document.querySelector("div.outro p");
    // outro.style.color="red";

    if(outro.style.color == "red"){
        outro.style.color = "black";
    }
    else{
        outro.style.color = "red";
    }
});

document.addEventListener("keyup",function(event){
    console.log(event);
});

var button2=document.querySelector("#change-img");
button2.addEventListener("click",function(event){
    
    var image=document.querySelector("div.gallery img");
    image.setAttribute("src","http://picsum.photos/seed/"+ Math.random() +"/150");
});

var images= document.querySelectorAll("div.gallery img");

    for (var j = 0; j < images.lenght; j++){
        images[j].addEventListener("click",function(event){
            event.target.setAttribute("src","http://picsum.photos/seed/"+ Math.random() +"/150");
       });
};