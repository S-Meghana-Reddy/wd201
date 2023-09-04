const todoList =  require('../todo');

const {all, markAsComplete, add, overdues, dueToday,dueLater } = todoList();

describe("Todolist Test Suite", () => {
    beforeAll(() => {
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toISOString().slice(0, 10)
            }
        );
    })
    test("Should add new todo", () => {
        const todoItemsCount = all.length;
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toISOString().slice(0, 10)
            }
        );
        expect(all.length).toBe(todoItemsCount + 1);
    });
    test("Should mark a todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
    test("Should retrieve overdue items", () => {
        for (let i = 0; i < all.length; i++) {
            expect(all[i].overdues < new Date().toISOString().slice(0, 10)).toBe(false);
           //expect(overdue() > dueDate).toBe(true)
        }
    })
    test("Should retrieve due today items", () => {
        for (let i = 0; i < all.length; i++) {
            expect(all[i].dueDate === new Date().toISOString().slice(0, 10)).toBe(true);
        }
    })
    test("Should retrieve due later items", () => {
        for (let i = 0; i < all.length; i++) {
            expect((all[i].dueLater) < new Date().toISOString().slice(0, 10)).toBe(false);
        }
    })
})