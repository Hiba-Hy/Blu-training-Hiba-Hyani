import { Component } from '@angular/core';

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
    users : any[]= [
    {
      "userid":1,
      "Firstname":"Joe",
      "Lastname":"Doe",
      "Email":"jo@gmail.com "  
    },
    {
      "userid":2,
      "Firstname":"Mary",
      "Lastname":"Moe",
      "Email":"mo@gmail.com "  
    },{
      "userid":3,
      "Firstname":"July",
      "Lastname":"doo",
      "Email":"julygmail.com "  
    }

  ]

}
