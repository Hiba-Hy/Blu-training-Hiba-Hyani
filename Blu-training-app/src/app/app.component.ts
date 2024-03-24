import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiComponent } from "../../projects/ui/src/lib/ui.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UiComponent]
})
export class AppComponent {
  title = 'Blu-training-app';
}
