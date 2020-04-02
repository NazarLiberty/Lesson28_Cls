class Circle {
    constructor() {
        this._radius = 3.14;
    }
    get radius() {
        return this._radius;
    }
    set radius(newRadius) {
        this._radius = newRadius;
    }
    get diameter() {
        let res = this._radius / (2 * Math.PI) * 2;
        return res.toFixed(1);
    }
    area() {
        let res = Math.PI * (this._radius * this._radius);
        return res.toFixed(1)
    }
    length() {
        let res = 2 * Math.PI * this._radius;
        return res.toFixed(2)
    }
}
let circle = new Circle;
let circleOutput = function (obj) {
    let res = "";
    for (i in obj) {
        res += `${i} - ${obj[i]} cm`
    }
    return res;
}
alert(circleOutput(circle))
circle.radius = +prompt("Type new radius value");
alert(circleOutput(circle))
alert(`Diameter ${circle.diameter} cm`)
alert(`Area ${circle.area()} cm`)
alert(`length is ${circle.length()} cm`)

class Marker {
    constructor(color, percentOfInk) {
        this.color = color;
        this.percentOfInk = percentOfInk;
    }
    print(text) {
        if (text == null) return alert("Empty text")
        for (let i = 0; i < text.length; i++) {

            this.percentOfInk -= 0.5
            if (this.percentOfInk == 0) {
                let outOfInk = ""
                for (let j = 0; j <= i; j++) outOfInk += text[j];
                return document.write(`Out of ink! I can write only <h3 style="color:${this.color}"> ${outOfInk} </h3>`)
            }
        }
        return document.write(`<h3 style="color:${this.color}"> ${text} <h3>`)
    }
}
class MarkerRefill extends Marker {
    refill(num) {
        let _percentOfInk = this.percentOfInk;
        _percentOfInk += num;
        if (_percentOfInk > 100) return alert("Invalid value")
        else this.percentOfInk = _percentOfInk;
    }
}

let marker = new MarkerRefill("green", 55)
do {
    alert(`Ink - ${marker.percentOfInk}%`);
    marker.print(prompt("Type text to draw"))
    let userChoice = confirm(`You have - ${marker.percentOfInk}% Ink left, continue?`);
    if (userChoice === false) break;
} while (true);
marker.refill(+prompt(`Your marker ink status - ${marker.percentOfInk}%, how much % you want to fill (Max 100%)`))
alert(`Ink - ${marker.percentOfInk}%`);

class Employee {
    constructor(name, salary, job) {
        this.name = name;
        this.salary = salary;
        this.job = job;
    }
}

class EmpTable {
    constructor(arr) {
        this.employeeList = arr;
    }
    getHtml() {
        let html = `<table border="2px">
<tr><th> Our friendly bank info </th></tr>`;
        let output = "";
        let keyRes = ""
        for (let i = 0; i < this.employeeList.length; i++) {
            for (let key in this.employeeList[i]) {
                keyRes += ` ${key} - ${this.employeeList[i][key]} | `
            }
            output += ` <tr><td> ${keyRes} </td></tr> `;
            keyRes = "";
        }
        html += `${output} </table>`
        document.write(html)
    }
}

alert("Please type employeeTable.getHtml() to see result")
let employee1 = new Employee("Sarah", 30000, "Bankeer")
let employee2 = new Employee("Pip", 30000, "Guard")
let employee3 = new Employee("Lil", 30000, "Back-ender")
let employee4 = new Employee("Genry", 30000, "Front-ender")
let employee5 = new Employee("Pardon", 30000, "Operator")
let employee6 = new Employee("John", 30000, "Director")

employers = [employee1, employee2, employee3, employee4, employee5, employee6]
let employeeTable = new EmpTable(employers);
