import {Component} from '@angular/core';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    title : string;
    todos : string[];

    constructor(){
        this.title = "Hello todo!";
        this.todos = ["Learn JS", "Learn ES6", "Learn Angular 2"];
    }

    addToDo(input : string){
        console.log("Yes! " + input);
        this.todos.push(input);
    }
}
