//#1 создать класс и метод getSalary
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}

const worker1 = new Worker('michail', 'bulgakov', 23, 31);
console.log(worker1);
console.log(worker1.getSalary());

//#2 сделать все свойства приватными, а для их чтения сделать методы-геттеры

//#3 для свойств rate & days сделать методы-сеттеры

