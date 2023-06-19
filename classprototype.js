class B{
    constructor(b){
        this.z=b;
    }
}

class A extends B{
    constructor(x , y){
        super(y);
        this.a = x;
        
    }

    all(){
        console.log(this.a , this.z );
    }
}


let me = new A(1,2);
me.all();