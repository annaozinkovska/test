export { departmentsSalary, departmentsQuantity, totalSalary }


function totalSalary(employees) {
    let total = 0;
    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }

    return total;
}

function departmentsQuantity(employees) {
    const allDepart = [];

    for (let i = 0; i < employees.length; i++) {
        if (!allDepart.includes(employees[i].department)) {
            allDepart.push(employees[i].department);
        }
    }

    return allDepart.length;
}
function departmentsSalary(employees) {
    const result = {};
    
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department in result) {
            result[employees[i].department] += employees[i].salary;
        } else {
            result[employees[i].department] = employees[i].salary;
        }
    }

    return result;
}
