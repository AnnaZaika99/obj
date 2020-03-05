var city1 = new Object();
var city1 = {
    name1 : "Kyiv",
    population1 : 10000000,
    
    get Name(){
        return this.name1;
    }
};
for( var key in city1){
    console.log(city1[key]);
}

var city2 = new Object();
var city2 = {
    name2 : 'Lviv',
    population2 : 10000000,

    get Name(){
        return this.name2;
    }
};
for( var key in city2){
    console.log(city2[key]);
}

