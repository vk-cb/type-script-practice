interface  employee {
    name: string;
    age: number;
    salary: number;
    postition  : string;
}

const employees: employee[] = [
    { name: "vicky", age: 22, salary: 10000, postition: "intern" },
    { name: "Anand", age: 25, salary: 15000, postition: "programmer" },
    { name: "Guruu", age: 27, salary:20000, postition: "manager" },]

    function totalSalary (list:employee[]): number{
        let total = 0;
        for (let i = 0; i < list.length; i++){
            total += list[i].salary;
        }
        return total
    }

    console.log(totalSalary(employees))