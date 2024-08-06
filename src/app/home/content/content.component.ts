import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  name = input.required<string>();
  
  ngOnInit(): void {
    console.log(this.name)
  }
}
