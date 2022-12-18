let num=parseInt (prompt("Enter the number"));

for (let i=2; i<=num; i++){
    let pr=true;       
    for(let j=2; j<=i; j++){
        if(i%j==0 && j != i){
       
        pr=false;
    }
    }
    if(pr==true){
    document.write( "the number is prime"+ i +"<br>")
    }
}