const todoList =  require('../todo');

const {all, markAsComplete, add, overdue, dueToday,dueLater } = todoList();

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
    });
    test("Should retrieve overdue todo", () => {
       /*const tod = new Date();
        const yester = new Date(tod);
        yester.setDate(tod.getDate() - 1);
        const ystr = yester.toISOString().split("T")[0];
        const odu = overdue().length;
        add({
          title: "Submit assignment",
          dueDate: ystr,
          completed: false,
        });
    
        expect(overdue().length).toBe(odu + 1);
        */
        var dateToday = new Date()
        const today = dateToday
        const yesterday =
  new Date(new Date().setDate(dateToday.getDate() - 1))
        
        const tomorrow = 
        new Date(new Date().setDate(dateToday.getDate() + 1))
        const todoitemscount = all.length
        const overDueCount = overdue().length
        add({ title: 'Submit assignment', dueDate: yesterday.toLocaleDateString("en-CA"), completed: false })
        expect(overdue().length).toBe(overDueCount + 1)
    });
    test("Should retrieve dueDate todo", () => {
       /* const today = new Date();
        const todaystr = today.toISOString().split("T")[0];
        const dtd = dueToday().length;

        add({
            title: "Pay rent",
            dueDate: todaystr,
            completed: true,
          });
         expect(dueToday().length).toBe(dtd+ 1);  
         */
         var dateToday = new Date()
         const today = dateToday
         const yesterday =
   new Date(new Date().setDate(dateToday.getDate() - 1))
         
         const tomorrow = 
         new Date(new Date().setDate(dateToday.getDate() + 1))
         const todoitemscount = all.length
 
             const dueTodayCount = dueToday().length
             add({ title: 'Service Vehicle', dueDate: today.toLocaleDateString("en-CA"), completed: false })
             expect(dueToday().length).toBe(dueTodayCount + 1)
        });
    test("Should retrieve dueLater todo", () => {
        /*const tod = new Date();
        const tom = new Date(tod);
        tom.setDate(tod.getDate()+1);

        const tomstr = tom.toISOString().split("T")[0];
        const dldd = dueLater().length;
    add({
      title: "Pay electric bill",
      dueDate: tomstr,
      completed: false,
    });
    expect(dueLater().length).toBe(dldd+1);
    });
    */
    var dateToday = new Date()
    const today = dateToday
    const yesterday =
new Date(new Date().setDate(dateToday.getDate() - 1))
    
    const tomorrow = 
    new Date(new Date().setDate(dateToday.getDate() + 1))
    const todoitemscount = all.length
        const dueLaterCount = dueLater().length
        add({ title: 'File taxes', dueDate: tomorrow.toLocaleDateString("en-CA"), completed: false })
        expect(dueLater().length).toBe(dueLaterCount + 1)
});
        
});