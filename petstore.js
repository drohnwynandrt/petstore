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
            this.price="500";
            this.coat="furry"
            this.teeth="sharp"
    }
}

let bulldog = new dog("Bulldog");
allanimals.push(bulldog)
bulldog.color="Gray"
console.log(allanimals);

function showAni(){
    for (i=1;i<=allanimals.length;i++){
        document.createElement("div");
        this.id=this.type+i;
        var divParent = document.getElementById("allAni");
        divParent.appendChild(this.id);
        
    }
}

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