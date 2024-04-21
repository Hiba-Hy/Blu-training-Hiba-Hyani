import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { FilterPipe } from '../../pipes/src/lib/filter.pipe';
import { FormsModule } from '@angular/forms';
import { PreRenderPipe } from '../../pipes/src/lib/preRender.pipe';
export class AppModule {}

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [CommonModule,FormsModule,FilterPipe,PreRenderPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
   
})
export class TableComponent {
  @Input()
  cellngTemplate!: TemplateRef<any>;
  @Input()
  config!: {columns: string[]; rows: any[][]; };
  searchText:string='';
    tableConfig = {
    columns: ['Firstname', 'Lastname', 'Email'],
    rows: [
      {Firstname:'Joe',Lastname: 'doe', Email:'joe@gmail.com'},
      {Firstname:'Mary',Lastname: 'moe',Email: 'mo@gmail.com'},
      {Firstname:'JUly',Lastname: 'doo', Email:'july@gmail.com'}
  
    ]};
}
