import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

   courses = [
    { "id": 1, "course": "MongoDB" },
    { "id": 2, "course": "Node" },
    { "id": 3, "course": "Angular" },
    { "id": 4, "course": "Express" },
    { "id": 5, "course": "React" },
    { "id": 6, "course": "Vue" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
