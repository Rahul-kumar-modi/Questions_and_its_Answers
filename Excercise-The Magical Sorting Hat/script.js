let employees = ["Shubham", "Rohit", "Pritam", "Aziz", "Prince", "Rakash", "Ramanagaarjuna", "Samuel", "Rabindranath"]


let staff =[]
for (const employee of employees) {
    if(employee.length < 6){
        staff.push("Web developer")
    }
    else if(employee.length > 6){
        staff.push("Designer")
    }
    else staff.push("Salesman")
}