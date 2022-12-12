
const person={
    fName:"john",
    lNsame:"Doe",
    age:30,
    hobbies:["music","movies","sports"],
    address:{
        street:"50 main st",
        city:"Boston",
        state:"MA"
    }
}
console.log(person.hobbies[1]);
console.log(person.address["state"]);

const{fName,lName,age,address:{state}}=person;
console.log(age);
console.log(state);


let todos=[
    {
    id:1,
    text:"take out trash",
    isCompleted:true
},
{
    id:2,
    text:"Meeting",
    isCompleted:true
},
{
    id:3,
    text:"Dentist appt",
    isCompleted:false
}
];

console.log(todos);

// for loop
for(let i=0;i<todos.length;i++){
    console.log(todos[i].id)
}
//for Of loop
for(let val of todos){
    console.log(val.id)
}
//while loop
let i=0;
while(i<todos.length){
    console.log(todos[i].id);
    i++;
}