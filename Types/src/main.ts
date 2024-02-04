
type Employee = {
    name: string,
    startDate: Date;
}

interface Manager{
    name: string,
    department: string
}

type TechLead = Employee & Manager;

const t: TechLead = {
    name: "Vikram",
    startDate: new Date(),
    department: "SDE"
}

console.log(t);
