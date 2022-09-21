/***** ამოიღეთ user ცვლადის სტუდენტის სტატუსი; *****/
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};
console.log(user.studentstatus);


/*****  შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი(for da while ციკლით) *****/

const arr = ['summer','winter',1,2,5,'5','150','coding','javascript'];

// for
for(let i = 0; i < arr.length; i += 1){
    console.log(arr[i]);
}
// for of
for (const variable of arr) {
    console.log(variable);
}
// while
let i = 0
while (i < arr.length) {
    console.log(arr[i])
    i++
}

/****** შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.*******/ 

let nums = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for(let index = 0; index < nums.length; index++){
    nums[index] > 5 ? console.log(nums[index]) : console.log("<<");
}


/*********** 
თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  
Hello;
თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;
***********/

let user2 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if(user2.age < 18 || user2.studentstatus == 'active'){
    console.log('hello');
} else if (user2.name == 'levani'){
    console.log('hello levani');
} else if (user2.age < 25 || user2.studentstatus == 'active'){
    console.log('hello world');
} else {
    console.log('error');
}


/**** გამოიტანეთ მარტო სრტინგები *****/
let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];

for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if(typeof element === 'string'){
        console.log(element);
    }
}


/****  მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები: *****/

let numArray = [ 
    [2, -3, 5, 10], 
    [25, -24, -11, 100] , 
    [-6, -7, 10] 
];

for (let i of numArray) {
    for (const j of i) {
        console.log(j);
    }
}


/******* 
ამოიღეთ მარტო ლუწი რიცხვები
ამოიღეთ კენტი რიცხვები 
*******/

let numbers = [2,3,5,10,25,24,11,100,6,7,10];
for (let nums of numbers) {

    nums % 2 == 0 ? console.log('ლუწი' + ' ' + nums) : console.log('კენტი' + ' ' + nums);

}


/**** Კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true ******/

let usersArr = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for(let i = 0; i < usersArr.length; i++){
    if(usersArr[i].status == true){
        console.log(usersArr[i]);
    }
}