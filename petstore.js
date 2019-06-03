var allanimals=[];
class animal{
    constructor(type){
        this.type=type; 
        this.color="various"; 
        this.price="various";
    }
}

class dog extends animal{
    constructor(type){
        super(type);
            this.pet="dog"
            this.price="500";
            this.coat="Furry"
            this.teeth="Sharp"
    }
}

class bunny extends animal{
    constructor(type){
        super(type);
            this.pet="bunny"
            this.price="250";
            this.coat="Furry"
            this.teeth="Sharp"
            this.size="Small"
    }
}

class cat extends animal{
    constructor(type){
        super(type);
            this.pet="cat"
            this.price="1";
            this.coat="Furry"
            this.teeth="Sharp"
    }
}

for (i=0; i<=2; i++){
    let bulldog = new dog("Bulldog");
    allanimals.push(bulldog)
    bulldog.color="White"
    bulldog.id="bulldog"+i;
    bulldog.img='bulldogimage.jpg';
}

for (i=0; i<=3; i++){
    let germanShepherd = new dog("German Shepherd");
    allanimals.push(germanShepherd)
    germanShepherd.color="Brown and Black"
    germanShepherd.id="germanShepherd"+i;
    germanShepherd.img='germanshepherdimage.jpg';
}


for (i=0; i<=3; i++){
    let brownBunny = new bunny("Brown Bunny");
    allanimals.push(brownBunny)
    brownBunny.color="Brown"
    brownBunny.id="brownBunny"+i;
    brownBunny.img='brownbunnyimage.jpg';
}

for (i=0; i<=2; i++){
    let grayCat = new cat("Gray Cat");
    allanimals.push(grayCat)
    grayCat.color="Gray"
    grayCat.id="grayCat"+i;
    grayCat.img='graycatimage.jpg';
}


window.onload=showAni();
function showAni(){


    for (i=0;i<allanimals.length;i++){ 
        var animalSize=allanimals[i].size;
        switch (animalSize){
        case undefined: 
            animalSize="";
        break;
        default: animalSize= "<br />Size: " + allanimals[i].size;
        }
        var newDiv = document.createElement("div");
        newDiv.id=allanimals[i].type+i;
        newDiv.className="animaldiv ";
        newDiv.className+=allanimals[i].pet;
        var divParent = document.getElementById("allAni");
        divParent.appendChild(newDiv); 
        newDiv.innerHTML = "<p><img height='200' width='200' src=' "+ allanimals[i].img + "'></p><br />"+"<p><b>"+ allanimals[i].type +"</b>" + "<br />Price: €" + allanimals[i].price + "<br />Teeth: " +allanimals[i].teeth+"<br />Color: " +allanimals[i].color+animalSize+"</p>";
    }
}


function filterAni(){
    var selFil = document.getElementById("filterAni").value;
    myDivs = document.getElementsByClassName("animaldiv");

    for (var allAni of myDivs) allAni.style.display="none"; 
if (selFil == selFil ){
    myFil = document.getElementsByClassName(selFil);
 for (var myFilter of myFil)myFilter.style.display="flex";
}
}

// stap 1 maak alle divs onzichtbaar, sstap 2 maak alle bunny zichtbaar , 3 maak de geselecteerde zichtbaar

/*for (i=1; i<=3; i++){
    let dog = new animal("Dog");
    allanimals.push(dog)
        dog.price="500";
        dog.coat="fur";
        dog.legs="4";
        dog.teeth="sharp fangs";
        dog.id="dog"+i;
}

for (i=1; i<=4; i++){
    let bunny = new animal("Bunny");
    allanimals.push(bunny)
        bunny.price="200";
        bunny.coat="fur";
        bunny.legs="4";
        bunny.teeth="sharp and long";
        bunny.id="bunny"+i;
}
console.log(allanimals);

*/