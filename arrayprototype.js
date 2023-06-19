Array.prototype.double= function(f){
    let data = [];

    for (let i = 0 ; i<= this.length-1 ; i++){
        data.push(f(this[i]))
    }

    return data;
}



a= [0,11,22,33];

console.log(a.double(x=>2*x));