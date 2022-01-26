function song(){
    let a = " bottles of milk on the wall, "
    let b = " bottles of milk."
    let c = " Take one down and pass it around, "
    let d = " bottles of milk on the wall."
    let e = " bottle of milk on the wall, "
    let f = " bottle of milk."
    let g = "no more"
    let h = "No more"
    let i = " Go to the store and buy some more, 99"


    for (x=99 ; x>0 ; x--)
        if (x>1)
            console.log(x+a+x+b+c+(x-1)+d);
            else if (x=1)
                console.log(x+e+x+f+c+g+d);
                else (x=0) 
                    console.log(h+a+h+b+i+d);
                
    
}
song();