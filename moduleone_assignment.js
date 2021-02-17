// Instruction 1.
//Object Literal.

const coffee = {
    // The Array
    customerName : "Customer",
    drinkType : ["coffee","expresso","latte"],
    drizzle : ["drizzle","no drizzle"],
    coffeeSize : ["small", "tall", "grande","venti"],
    whippedCream : ["whipped cream", "no whipped cream"],
    sweetener : ["sweetener", "no sweetener"],
    coldFoam : ["cold foam", "no cold foam"],
    dairy : ["cream","2% milk","almond milk","no milk"],
//Instruction 2. 
    

    order : function(){
    alert(this.customerName +' You said you would like a ' + this.coffeeSize[0] + '' + this.drinkType[1] + ' with ' + this.drizzle[0] +
    ' and ' + this.whippedCream[0] + ' along with ' + this.sweetener[0] + '' + this.coldFoam + '' + this.dairy[1]);
    },

};


// Instruction 3.
//Object literal 2.
const friendCoffee = {
    //Second set of arrays
    customerSecond : "Chris",
    drinkSecond : "Dark Roast",
    coffeeSecond : "grande",
    dairySecond : "one milk"
};
//Friend console log
console.log(friendCoffee.customerSecond + ' would like a '+ friendCoffee.coffeeSecond + '' +
friendCoffee.drinkSecond + ' With ' + friendCoffee.dairySecond);
