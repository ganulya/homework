////#1 создать класс и метод getSalary
//class Worker {
//    constructor(name, surname, rate, days) {
//        this.name = name;
//        this.surname = surname;
//        this.rate = rate;
//        this.days = days;
//    }
//    getSalary() {
//        return this.rate * this.days;
//    }
//}
//
//const worker1 = new Worker('michail', 'bulgakov', 23, 31);
//console.log(worker1);
//console.log(worker1.getSalary());

////#2 сделать все свойства приватными, а для их чтения сделать методы-геттеры
//class Work {
//    
//    #rate = 40;
//    
//    get rate() {
//        return this.#rate;
//    }
//    
//    constructor (days) {
//        this.days = days;
//    }
//    
//    getSalary() {
//        return this.#rate * this.days;
//    }
//}
//
//class Worker extends Work {
//    constructor (name, surname, days) {
//        super(days);
//        this.name = name;
//        this surname = surname;
//    }
//}
//
//const worker1 = new Worker ('Mikhail', 'H', 22);
//worker1.getSalary();
//console.log(worker1.getSalary());

































