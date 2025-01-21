type stringOrNumber = string | number;

function add(a: stringOrNumber, b: stringOrNumber) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

const res = add("Vicky", "Gupta");
console.log(res);

function identifyId(id:stringOrNumber){
    console.log(id)
}

identifyId("abc")
identifyId(1234)