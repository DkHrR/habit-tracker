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
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    habitlist.appendChild(checkbox);
    checkbox.addEventListener("change", function(){
        if (checkbox.checked) {
            habitlist.style.textDecoration = "line-through";
            console.log("habit completed:", habitName);
        }
            
        else {
            habitlist.style.textDecoration = "none";
            console.log("habit not completed:", habitName);

        }
            
});
    habits.appendChild(habitlist);


    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    habitlist.appendChild(deleteButton);
    deleteButton.addEventListener("click", function(){
        habitlist.remove();
        const  index = habitdata.indexOf(habitName);
        habitdata.splice(index, 1);
        console.log("Habit data after deletion:", habitdata);

        

    });
    


    habitform.reset();





});

habitInput.addEventListener("input", function (){
    errorMessage.textContent = "";

});
