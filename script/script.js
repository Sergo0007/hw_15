 const formNode = document.querySelector("#userForm");
 const forms = [];

 formNode.addEventListener("submit",(event) =>{
    event.preventDefault();
    const {firstName,lastName,age} = event.target;
    const form = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value
    }
    forms.push(form);
    rerender();
    event.target.reset();
 });

 function createForm(firstName,lastName,age){
    const userForm = document.createElement('div');
    const firstNameNode = document.createElement("p");
    const lastNameNode = document.createElement("p");
    const ageNode = document.createElement("p");

    firstNameNode.innerText = firstName;
    lastNameNode.innerText = lastName;
    ageNode.innerText = age;
     userForm.classList.add("item")
    userForm.append(firstNameNode,lastNameNode,ageNode);

    const bgColors ={firstName:"#1abc9c",lastName:"#f39c12",age:"#d35400"};

    
    userForm.style.backgroundColor =  bgColors.firstName;
    firstNameNode.style.backgroundColor = bgColors.firstName;

    lastNameNode.style.backgroundColor = bgColors.lastName;

    ageNode.style.backgroundColor = bgColors.age;
      

    return userForm;
 } 

 function rerender(){
    const userForm = document.querySelector("#userList");
    userForm.innerText = '';
    forms.forEach(({firstName,lastName,age}) => userForm.append(createForm(firstName,lastName,age)));

 }
 