import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FilterPipe } from '../../pipes/src/lib/filter.pipe';
import { FormControl, FormsModule } from '@angular/forms';
export class AppModule {}

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [CommonModule,FormsModule,FilterPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
   
})
export class TableComponent {
  searchTermFirst = "";
  searchTermLast= "";
  searchTermEmail = "";
  @Input()
  config!: { columns: string[]; rows: any[]; };
  tableConfig = {
    columns: ['Firstname', 'Lastname', 'Email'],
    rows: [
      { Firstname: 'Joe', Lastname: 'Doe', Email: 'joe@gmail.com' },
      { Firstname: 'Mary', Lastname: 'Moe', Email: 'mary@gmail.com' },
      { Firstname: 'July', Lastname: 'Doo', Email: 'july@gmail.com' }
    ]
  };

}
