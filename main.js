// --------------------------------------------------------------
const input = document.getElementById("input");
const inpval = input.value;
var username;
var bot = 'APN BOT';
var prefix = '!';
let author = 'HttpAnand';
var gm = 'MORNING'
var gn = 'NIGHT'
var ge = 'EVENING'
var ga = 'AFTERNOON'

function log(){
  console.log(username + ':' + input.value)
}

function reset() {
  document.getElementById("input").value = document.getElementById("input").defaultValue;
}

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('btn').click();
  }
});


function askname(){
  username = prompt("Enter Name ! ")
  console.log(bot + ":" + `Hello ${username} . Welcome !`)
  alert('Press F12 key to open DevTools and open console tab to use this application .')
}

function msg(){

  if(input.value === 'Hello' || input.value === 'Hello ' || input.value === 'hello ' || input.value === 'hello' || input.value === 'hi' || input.value === 'hi ' || input.value === 'Hi ' || input.value === 'Hi'){
  console.log(bot + ":" + `Hello ${username}`);
} 
  else if(input.value === `${prefix}help`||input.value === `${prefix}help ` ){
    console.log(`\t\tHELP COMMANDS\n---------------------------\n${prefix}time - Returns current time\n${prefix}author - Returns author name\n${prefix}features - Returns bot features `)
    
  }
  else if(input.value ===  `${prefix}time`){
    k = startTime()
    console.log(bot + ":" +`Current time is ${k}`);
  }
  else if(input.value === `${prefix}features`){
    console.log(`\t\tFEATURES\n---------------------------\nRespond to greetings\nReturn current time\nRespond to commands\nMore features coming soon`)
  }
  else if(input.value === `${prefix}author`){
    console.log(bot + ":" +`Author - ${author}`)
  }
  else if(input.value.includes(gm)||input.value.includes(gm.toLowerCase())||input.value.includes('Morning')){
    console.log(bot + ":" +`Good Morning ${username}`)
  }

  else if(input.value.includes(gn)||input.value.includes(gn.toLowerCase())||input.value.includes('Night')){
    console.log(bot + ":" +`Good Night ${username}`)
  }
  
  else if(input.value.includes(ge)||input.value.includes(ge.toLowerCase())||input.value.includes('Evening')){
    console.log(bot + ":" +`Good Evening ${username}`)
  }

  else if(input.value.includes(ga)||input.value.includes(ga.toLowerCase())||input.value.includes('Afternoon')){
    console.log(bot + ":" +`Good Afternoon ${username}`)
  }

  else{
    console.log(bot + ":" + `No such command . Type ${prefix}help for commands`);
  }
  
}


function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let d = today.getDate();
  
  m = checkTime(m);
  setTimeout(startTime, 1000);
  return(h + ":" + m);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

