type Employee = {
    name : string,
    startDate: Date
}

type Manager = {
    name : string,
    department: string
}

type TeamLead =Employee & Manager;

const teamLeader : TeamLead = {
    name: "vicky",
    startDate: new Date(),
    department: "IT"
}


console.log(teamLeader)