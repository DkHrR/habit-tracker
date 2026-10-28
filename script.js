const habitform = document.getElementById("habit-form");
const habitInput = document.getElementById("habit-input");
const habits = document.getElementById("habits");
const habitdata = [];
const errorMessage = document.getElementById("error-message");






habitform.addEventListener("submit", function(event) {
    event.preventDefault();

    const habitName = habitInput.value;
    if (habitName.trim()==="") {
        errorMessage.textContent = "Please enter a habit.";
        return;
        
    }
    habitdata.push(habitName);
    console.log("Habit Data:", habitdata);
    console.log("Habits:", habitName);


    const habitlist = document.createElement("li");
    habitlist.textContent = habitName;
    habits.appendChild(habitlist);

    habitform.reset();





})