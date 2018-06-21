import { Component } from '@angular/core';


@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
    newTaskText = '';
    newTaskColor = '';
    tasks = JSON.parse(localStorage.getItem('tasks') ) || [];
    createNewTask(text, color, textError, colorError) {
        if (textError || colorError) {
            console.error(textError || colorError)
        } else {
            let newTask = {
                text: text,
                backgroundColor: color,
                completed: false,
                date: new Date(),
                id: `id-${Date.now()}-${Math.random() * 100}`
            };
            this.tasks.push(newTask);
            this.newTaskText = '';
            this.newTaskColor = '';
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
        
    }

    onRemoveTaskId(id) {
        this.tasks = this.tasks.filter(item => item.id !== id);
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
    onMarkAsCompleted(id, completed) {
        this.tasks = this.tasks.map(task => {
            if(task.id === id) {
                task.completed = completed;
            }
            return task;
        });
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
}