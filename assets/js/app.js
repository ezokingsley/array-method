const btn =document.querySelector(".btn")

btn.addEventListener("click" , ()=>{
    btn.innerHTML ="clicked";
})

// Promise function
// function addName(time, name){
//     return new Promise((resolve, reject) => {
//         if (name){
//             setTimeout(()=>{
//                 console.log (name)
//                 resolve()
//             }, time)
//         }else{
//             reject("No Such Name")
//         }
//     })
// }

// addName ( 2000, "Joel")
//     .then(() => addName(2000, " Victoria"))
//     .then(() => addName(2000, " John"))
//     .then(() => addName(2000, " Doe"))
//     .then(() => addName(2000, " Sarah"))
//     .catch((err) => console.log(err))


// Array Map

// let users = [
//     { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Singing" },
//     { firstName: "Daniel", lastName: "Longbottom", age: 16, hobby: "Football" },
//     { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Singing" }
//   ];
  
//   let singleUser = users.map((user)=>{
//     //let's add the firstname and lastname together

//     // let fullName = user.firstName + ' ' + user.lastName;
//     let fullName = `${user.firstName} ${user.lastName}`;
//     return fullName;
//   });
// //   console.log(singleUser)

//   filter and find

// let users = [
//     { firstName: "Susan", age: 14 },
//     { firstName: "Daniel", age: 16 },
//     { firstName: "Bruno", age: 56 },
//     { firstName: "Jacob", age: 15 },
//     { firstName: "Sam", age: 64 },
//     { firstName: "Dave", age: 56 },
//     { firstName: "Neils", age: 65 }
//   ];
  
//   // for young people
//   const youngPeople = users.filter((person) => {
//     return person.age <= 15;
//   });
  
// //   for senior people
//   const seniorPeople = users.filter((person) => person.age >= 50);
  
// //   console.log(seniorPeople);
// //   console.log(youngPeople);
  
//   const Bruno = users.find((person) => person.firstName === "Bruno");
  
//   console.log(Bruno);


  const insert = document.querySelector(".user")
  let user = [
    { firstName: "ezo", lastName: "Kingsley"},
    { firstName: "ezo", lastName: "Victory"},
    { firstName: "ezo", lastName: "Onos"},
    { firstName: "ezo", lastName: "Ogaga"},
    { firstName: "ezo", lastName: "God'spower"}

  ];
  
  let singleUser = user.map((user)=>{
    //let's add the firstname and lastname together

    // let fullName = user.firstName + ' ' + user.lastName;
    let fullName = `${user.firstName} ${user.lastName}`;
    return fullName;
  });
  console.log(singleUser)

  insert.innerHTML = `${singleUser}`;
