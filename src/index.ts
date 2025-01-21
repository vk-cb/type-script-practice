const greet = (name:string)=>{
console.log(`hello ${name}`)
}

// illegal
const illegal = (age:number)=>{
    if(age < 18){
       console.log("You are illegeal to access this site")
    }
    else{
       console.log("You are allowed to access this site")
    }
}

const run1Second = ()=>{
    setTimeout(()=>{
        greet("Gupta")
    }, 2000)
}
illegal(10)
greet("vicky")
run1Second()