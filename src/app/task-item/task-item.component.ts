import { Component, Input, Output, EventEmitter} from '@angular/core';
import tinycolor2 from 'tinycolor2';

@Component( {
    selector: 'task-item',
    templateUrl: './task-item.component.html',
    styleUrls: [ './task-item.component.scss' ]
} )
export class TaskItemComponent {
    @Input('taskObject') task: Object;
    @Input() markAsCompleted: Function;
   
    @Output('removeTaskId') removeTaskId = new EventEmitter<string>();
    
    removeTask(id) {
        this.removeTaskId.emit(id)
    }
    isLight(color) {
        return !tinycolor2(color).isDark()
    }
    
}