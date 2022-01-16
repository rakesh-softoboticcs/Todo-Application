import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todos';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[]=[];
  inputTodo:string="";
  

  constructor() { }

  ngOnInit(): void {
    
    this.todos=[
  {
    content:"First todo",
    completed:false
  },
  {
    content:"Second todo",
    completed:false
  }
      
    ]
  }

  toggleDone (id:number) {
    this.todos.map((data, i) => {
      if (i === id) data.completed = !data.completed;
      return data;
    })
  }

  

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v,i)=>i!==id);
  }

  editTodo(i:number): void
  {
    let title = this.todos[i].content;
    let result=prompt("Edit Todo Title",title);
    if(result!==null && result!=="")
    {
        this.todos[i].content=result;
    }
  }

  addTodo () {
    if(this.inputTodo!==null && this.inputTodo!=="")
    {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
    }
    else{
      alert("Field cannot be empty")
    }

   
   

    this.inputTodo = "";
  }
}
