interface Illegal {
    age: number;
    message: string;
}

function illega(age: number): Illegal {
    if (age < 18) {
        return {
            age: age,
            message: "You are illegal to access this site"
        };
    } else {
        return {
            age: age,
            message: "You are allowed to access this site"
        };
    }
}

const result = illega(17);
console.log(result); // Output: "You are illegal to access this site"