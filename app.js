const fibs=(n)=>{
    let array=[0,1,1]
    let a=1;
    let b=1;
    if(n==1){
return array=[0]
    }else if(n==2){
        return array=[0,1]
    }else if(n==0){
        return array=[]}else{
        for(let i=3;i<n;i++){
            b=a+b
            array.push(b)
            a=b-a

        }
        return array
    }
    
    
    
}





