// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask: function() {
      this.complete = true;
    }
  }
  return task;
}


const task0 = newTask("Clean Cat Litter", 'Crumbs'); // task 0
const task1 = newTask("Do Laundry",'Billy'); // task 1

task0.logState(); // Clean Cat Litter has not been completed
task0.completeTask();
task0.logState(); // Clean Cat Litter has been completed
