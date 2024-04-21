function check (num) {
    try {
        if(isNaN(num)){
            throw "error";
            
        }else{
            console.log('valid number');
        }
    } catch (error) {
        console.log(error);
    }
} 
// check(4);

function check2 (num1, num2){
    try{
        console.log(`number 2 : ${num2}`);
        if(num2 === 0){
            throw "2nd number is 0";
        }else{
            console.log("2nd number is not 0.")
        }
    }catch(err){
        console.log(err);
    }
    
}

class Person {
    constructor(name,age,country){
        this.name = name;
        this.age = age;
        this.country = country
    }
    display(){
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Country : ${this.country}`);
    }
    
}

let p1 = new Person("Saniya",21,"India");

// check2(2,0);
// check2(1,2);
// p1.display();

class Shape {
    calcArea(){
    }
}

class Circle extends Shape {
    calcArea(radius){
        console.log("Area of Circle: ",3.14*radius*radius);
    }
}

class Triangle extends Shape {
    calcArea(height, base){
        console.log("Area of traingle: ",0.5*base*height);
    }
}

c = new Circle();
t = new Triangle();
// c.calcArea(10);
// t.calcArea(5,3);