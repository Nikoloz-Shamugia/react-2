// 1. მიიღეთ მომხმარებლების სია https://jsonplaceholder.typicode.com/users-დან
// და ამოიღეთ მხოლოდ მომხმარებლის სახელები მასივში.
const request = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const namesArr = []

        data.forEach(user => {
            const names = user.name;
            namesArr.push(names)
        });
        console.log(namesArr)
    } catch (error) {
        console.log(error);
    }
};

request();

// 2. შექმენით კლასი Car,რომელშიც აღწერილი იქნება:მოდელის, კომპანია,
// და წელი. შექმენით ამ კლასში ფუნქცია getCarDetails, რომელიც აბრუნებს
// მანქანის დეტალების შემაჯამებელ სტრიქონს.

class car {
    constructor(model , company , year){
        this.model = model
        this.company = company
        this.year = year
    }

    getCarDetails(){
        return console.log(`this car is ${this.company} ${this.model} and it was built in ${this.year}`)
    }
}
const carModel = new car('rav 4' , "toyota" , 2021)
carModel.getCarDetails()

// 3.ამ პოსტების API-დან https://jsonplaceholder.typicode.com/posts
// შექმენით კლასის პოსტი თვისებების ID,
// სათაური და ტექსტი. შექმენით Post ობიექტების მასივი მოტანილი მონაცემების საფუძველზე.
const getInfo = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        class Post {
            constructor(id, title, text) {
                this.id = id;
                this.title = title;
                this.text = text;
            }

            getPostsDetails() {
                const postArr = [this.id, this.title, this.text];
                return postArr;
            }
        }
        const postDetailsArray = [];
        data.forEach(post => {
            const postObject = new Post(post.id, post.title, post.body);
            postDetailsArray.push(postObject.getPostsDetails());
        });
        console.log(postDetailsArray);
    } catch (error) {
        console.log(error);
    }
}
getInfo();
// 4. შექმენით ობიექტი,რომელიც შედგება სახელებისა და ასაკს მასივის გათვალისწინებით,
// გაფილტრეთ და დააბრუნეთ ახალი მასივი 18 წელზე უფროსი ასაკის პირების ობიექტებით,
//გამოიყენეთ filter მეთოდი!!
const objArr = [
    {
        name : 'niko' ,
        age : 14
    },
    {
        name : 'lasha' ,
        age : 19
    },
    {
        name : 'mamuka', 
        age : 39
    }
]
const filteredUsers = objArr.filter((user) => user.age > 18)
console.log(filteredUsers)

// 5.ამ Todo API-დან https://jsonplaceholder.typicode.com/todos,
// შექმენით კლასი Todo,რომელშიც აღწერილი მექნება: ID, title და completed. 
// შემდეგ გაფილტრეთ მხოლოდ დასრულებული სამუშაოები Todo ობიექტების მასივში.
const toDoResponse = async ()=> {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json()
        const filteredData = data.filter((user) => user.completed == true)
        console.log(filteredData)
    }
    catch(error){
        console.log(error)
    }
}
toDoResponse()