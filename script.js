let create_button = document.getElementsByClassName("create")[0];
let save_button = document.getElementsByClassName("save-btn")[0];
let list1 = document.getElementsByClassName("list1")[0];
let task = document.getElementsByClassName("task1")[0];
let popup = document.getElementsByClassName("popup")[0];
let sure = document.getElementsByClassName("yes")[0];
let not_sure = document.getElementsByClassName("no")[0];
let task_number = document.getElementsByClassName("no-list-created")[0];
let action = document.getElementsByClassName("action")[0];
let popuo_field = document.getElementsByClassName("para")[0];
let switches = document.querySelectorAll(".switch");
let input_filed = document.getElementsByClassName("input-taker")[0];

create_button.addEventListener("click", () => {
    create_button.style.display = "none";
    input_filed.style.display = "block";
});

sure.addEventListener("click", ()=>{
    if(idx == 1){
        task_number.innerText = `All task Completed`
        idx--;
        return;
    }
    idx--;
    task_number.innerText = `You have ${idx} task today`
})


let idx = 0;
// ... Your existing code ...

save_button.addEventListener("click", () => {
    let written_task = task.value;
    if (written_task<=0){
        popuo_field.innerText = "Please write something to save"
        popup.style.scale = "1";
        sure.style.display = "none";
        not_sure.innerText = "okay"

        not_sure.addEventListener("click", ()=>{
            popuo_field.innerText = "Are you sure to delete ?"
            popup.style.scale = "0";
            sure.style.display = "block";
            not_sure.innerText = "No"
        })

        return;
    }
    let taskHtml = `<p class="task2 task${idx}"> ${idx+1}) ${written_task} <button class="delete-btn"></button></p>`;
    idx++;
    task_number.innerText = `you have ${idx} task today`
    list1.innerHTML += `${taskHtml}`;
    task.value = "";
    switches.forEach((ele) => {
        ele.style.scale = "0";
        create_button.style.display = "block";
    });

    // Attach a click event listener to the delete button
    let deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
        button.style.backgroundSize = "23px";

        button.addEventListener("click", () => {
            popup.style.display = "block"; // Show the popup
            popup.style.scale = "1.1";

            // Attach click event listener to the "yes" button
            sure.addEventListener("click", () => {
                // Get the parent task element
                let taskElement = button.parentElement;

                // Remove the task element from the list1
                list1.removeChild(taskElement);

                // Hide the popup
                popup.style.scale = "0";
                sure.style.scale = "0.8"
            });

            // Attach click event listener to the "no" button
            not_sure.addEventListener("click", () => {
                // Hide the popup
                popup.style.scale = "0";
            });
        });
    });
});
