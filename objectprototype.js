let a = {
    x:1,
    f:function(c ,d){
        console.log(this.x , c ,d);
    }
}


let b = {
    x:2 
}

a.f.bind(b , 1  , 3)();