const habitform = document.getElementById("habit-form");
const habitInput = document.getElementById("habit-input");
const habits = document.getElementById("habits");
const savedHabits = localStorage.getItem("habitdata");
const habitdata = savedHabits ? JSON.parse(savedHabits) : [];
const errorMessage = document.getElementById("error-message");





function displayHabits(habit) {
      const habitlist = document.createElement("li");
    habitlist.textContent = habit.name;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = habit.completed;
    habitlist.appendChild(checkbox);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    habitlist.appendChild(deleteButton);

    deleteButton.addEventListener("click", function(){
        const index = habitdata.findIndex(item => item.name === habit.name);
        habitdata.splice(index, 1);
        habitlist.remove();
        localStorage.setItem("habitdata", JSON.stringify(habitdata));

    })

    checkbox.addEventListener("change", function(){
        const index = habitdata.findIndex(item => item.name === habit.name);

        if (checkbox.checked) {
            habitdata[index].completed = true;
            habitlist.style.textDecoration = "line-through";

        } else {
            habitdata[index].completed = false;
            habitlist.style.textDecoration = "none";

        }
        localStorage.setItem("habitdata", JSON.stringify(habitdata));

            
});
    habits.appendChild(habitlist);

}








habitform.addEventListener("submit", function(event) {
    event.preventDefault();

    const habitName = habitInput.value;
    if (habitName.trim()==="") {
        errorMessage.textContent = "Please enter a habit.";
        return;
        
    }
   habitdata.push({
    name : habitName,
    completed : false 
   });


    console.log("Habit Data:", habitdata);
    console.log("Habits:", habitName);


  


    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    habitlist.appendChild(deleteButton);
    deleteButton.addEventListener("click", function(){
        habitlist.remove();
        const  index = habitdata.findIndex(habit => habit.name === habitName  );
        habitdata.splice(index, 1);
        console.log("Habit data after deletion:", habitdata);

        

    });
    


    habitform.reset();





});

habitInput.addEventListener("input", function (){
    errorMessage.textContent = "";

});
