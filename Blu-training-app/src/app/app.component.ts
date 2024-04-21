import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiComponent } from "../../projects/ui/src/lib/ui.component";
import { TableComponent } from '../../projects/ui/table/table.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UiComponent,TableComponent]
})
export class AppComponent {
  title = 'Blu-training-app';
 
  @ViewChild('customCellTemplate') customCellTemplate!: TemplateRef<any>;
  
 
  
}
