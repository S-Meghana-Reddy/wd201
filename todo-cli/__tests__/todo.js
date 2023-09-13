/* eslint-disable no-undef */
/*const db = require("../models");

describe("Todolist Test Suite", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  test("Should add new todo", async () => {
    const todoItemsCount = await db.Todo.count();
    await db.Todo.addTask({
      title: "Test todo",
      completed: false,
      dueDate: new Date(),
    });
    const newTodoItemsCount = await db.Todo.count();
    expect(newTodoItemsCount).toBe(todoItemsCount + 1);
  });
});
*/

const todoList = require("../todo");
const{all, markAsComplete, add, overdue,dueToday, dueLater} = todoList();

describe("Todolist Test Suite", () => {
    // eslint-disable-next-line no-undef
    beforeAll(() => {
        const today=new Date();
        const tomorrow = new Date(new Date().setDate(today.getDate()+1));
        expect(all.length).toBe(0);
        add(
            {
                title:"File taxes",
                dueDate:tomorrow.toISOString().slice(0,10),
                completed: false,
            }
        );
        expect(all.length).toBe(1);
    })


    test("Should add new todo", () => {
        const todoItemsCount = all.length;
        add({
            title: "Service Vehicle",
            completed: false,
            dueDate: new Date().toISOString().slice(0,10),
        });
        expect(all.length).toBe(todoItemsCount +1);
    });

    test("Should mark a todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });

    test("Should retrieve overdue item", () => {
        const today = new Date();
        const yesterday = new Date(new Date().setDate(today.getDate()-1));
        const overdueCount = overdue().length;
        add({
            title: "Submit assignment",
            completed: false,
            dueDate: yesterday.toISOString().slice(0,10),
        });
        expect(overdue().length).toBe(overdueCount + 1);
    });

    test("Should retrieve due today items", () => {
        const today = new Date();
        const dueTodayCount = dueToday().length;
        add({
            title: "Pay rent",
            completed: true,
            dueDate: today.toISOString().slice(0,10),
        });
        expect(dueToday().length).toBe(dueTodayCount+1);
    });

    test("Should retrieve due later items", () => {
        const today= new Date();
        const tomorrow = new Date(new Date().setDate(today.getDate()+1));
        const dueLaterCount = dueLater().length;
        add({
            title: "Pay electric bill",
            completed: false,
            dueDate: tomorrow.toISOString().slice(0,10),
        });
        expect(dueLater().length).toBe(dueLaterCount+1);
        console.log(all);
    });
});