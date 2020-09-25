function calculate(args){
    
    let result;
    if(args.op==="+"){
        result=args.n1+args.n2;
    }
    else if(args.op==="-"){
        result=args.n1-args.n2;
    }

    else{
        result="Not supported";
    }
    
    return result;
}

let args = {

    op:'-',
    n1:5,
    n2:2
}
    
calculate(args);



