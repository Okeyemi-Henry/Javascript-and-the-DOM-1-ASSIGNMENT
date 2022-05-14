

// 1. Design a for loop that returns an array of even numbers from 1-100
let newEven = [];
 for (i=0; i<100; i+=2){
     newEven.push(i);  
 };

 console.log(newEven);


//2. Create a function that returns even numbers between two numbers A and B.

 evenNum=(a,b)=>{

    let even =+ (a<b) || -1,i ;
    result = [];

     for(i=a; i!==b + even; i += even){
         if(+(even === 1) !==i %2){
             result.push(i);
         }
     }
     return result;
}
console.log(evenNum(1,20));


 // 3. When would you use a conditional statement? (a)when you want to reuse a set of statements multiple times (b)when you want your code to choose between multiple numbers © when you want to group data together (d) when you want to loop through a group of statements.

let answer = "b" ;
 console.log(answer);



 

//What will be the result in the console for running this code.for(let i=1; i&lt;5; i++)

//The result of the code when intiated is an Uncaught SyntaxError: Unexpected token ';' 

//Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)


let sum= (50+55);
firstFunction=()=>{
    for(i=0; i<sum; i++){
        sum += i;
    }
    return sum;
}

console.log(sum);


//Create a function with a function name printSum( ) and print the sum of two numbers.

let addTwo = (20+30);

printsum=()=>{
for( i=0; i<addTwo; i++){
    return i;
}
}
document.write(addTwo);

//Create a function that returns an array of the names of 10 of your course mates


 nameOfCmates=()=>  {
  
  nameOfCourseMates= ['oyinsola Esan',
    'Nneka Enwonwu',

    'joseph oforkaja',

    'Unyime Usen',
    
    'Anita Ozioma Ume Abai',

   'Adewunmi Adebanwo',
    
    'Folakemi George-olumoroti',

    'Maryam Kosemani',
    
    'Iyinoluwa Oludiya',
    
    'Segun Alofun'];  

    return nameOfCourseMates; 
};
console.log(nameOfCmates());

//Add an element to the end of this array [1,2,4]
let array= [1,2,4];
array.push( 5);
console.log(array);


//Remove the last element in this array [1,2,3,8]
let arr= [1,2,3,8];
arr.pop();
console.log(arr);
 

//Remove the first element in this array [23.77,80,45]

const newArray = [ 23.77,80,45];
newArray.shift();
console.log(newArray);

//Add an element to the beginning of the array []


const arry= [ [20,30,80],[10,50,55]];
arry.unshift([50,46,57]);
console.log(arry);


