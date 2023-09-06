class Calculator{
    add(x,y){
     return x+y;
    }
    subtract(x,y){
        return x-y;
    }
    multiply(x,y){
        if(-x*-y || x*y){
            return x*y;
        }
        if(-x*y || x*-y){
            return -(x*y);
        }
        if(x===0 || y===0){
            return 0;
    }
}
    divide(x,y){
        if(y===0){
            throw new Error("Number can't divide by zero");
    }else{
        return x/y;
    }

}
}
module.exports = Calculator;