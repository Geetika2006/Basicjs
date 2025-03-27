let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

console.log(shoppingList[shoppingList.length-1][0]);
console.log(shoppingList[shoppingList.length-1]);
shoppingList[shoppingList.length-1].push("Carrots");
console.log(shoppingList[shoppingList.length-1]);
shoppingList[shoppingList.length-1].pop();
console.log(shoppingList[shoppingList.length-1]);
console.log(shoppingList[shoppingList.length-1].splice(1,2,"Cucumbers", "Bell Peppers"));
console.log(shoppingList[shoppingList.length-1]);


let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};
console.log(student.name);
student.phone="123-456-7890";
console.log(student);
delete student.grade;
console.log(student);
student.age=21;
console.log(student);

typeofnumber=(n)=>{
    if (n>=0){
        if(n==0){
            console.log("zero"); 
        }
        else{
     console.log("Positive");
        }
    }
    
    else if (n<0){
        console.log("Negative");
    }
    else{
       console.log("number not defined")
    }
}

typeofnumber();


Grade=(n)=>{
    if (n>=90 && n<=100){
            console.log("A");   
    }
    
    else if (n>=80 && n<=89){
        console.log("B");
    }
    else if (n>=70 && n<=79){
        console.log("C");
    }
    else if (n>=60 && n<=69){
        console.log("D");
    }
    else if(n<60){
        console.log("F")
    }
   
}

Grade(779);

function Isempty(n){
    if(n){
        console.log("Truthy");
    }
    else{
        console.log("Falsy");
    }
}
let a="";
Isempty(a);