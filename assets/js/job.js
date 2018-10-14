if (document.querySelector('#button')) {
  document.querySelector('#button').addEventListener('click', () => {
    const userName = document.querySelector('#user-name');
    const user = userName.value;

    localStorage.setItem('userName', user);
    console.log(localStorage.getItem('userName'));
  });
}


window.onload = function() {
  if (document.querySelector('#name-display')) {
    const nameDisplay = document.querySelector('#name-display');
    nameDisplay.textContent = localStorage.getItem('userName');
  }
}




// const userName = document.querySelector('#name');
//
// const user = []
//
// user.push(userName.value)
//
//
//
//
// //step 0 declare where the data is
// const database='../database/data.json'
//
// //step 1 get the data from the json filter
// var myJobs = database;
// var myObj = JSON.parse(myJobs);
// document.querySelector("").innerHTML = myObj;
//
// //step 2 show the data


//step 3 loop through the data for each job Object


//step 4 render each job object in the html


//step 5 add input to html


//step 6 update data based on input


//step 7 push updated data into database


//step 8 repeat 1-8
