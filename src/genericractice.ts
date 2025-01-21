
function printElement<T>(element:string){
    console.log(element)
}

printElement("Vicky")

function printElement2(array:(string|number)[]){
    return array[3]
}

printElement2([1,2,3, "vikky"])
function printElement3<T extends string | number | undefined>(array: T[]): string | number | undefined {
    const element = array[3]; // Access the 4th element
    if (typeof element === "string") {
        return element.toLowerCase(); // Convert to lowercase if it's a string
    }
    return element; // Return as-is for numbers or undefined
}

console.log(printElement3([1, 2, 3, "vikky"])); // Output: "vikky"
console.log(printElement3([1, 2, 3, 4])); // Output: 4
console.log(printElement3([1, 2, 3]));    // Output: undefined


function getFirstElement<T>(array: T[]) {
    return array[1];
}

const el = getFirstElement<string>(["Vicky", "Anand"]);
console.log(el.toLowerCase());