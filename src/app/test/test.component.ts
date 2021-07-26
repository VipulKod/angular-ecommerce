import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @Output() testVariable = new EventEmitter<String>();
  userInput: string = '';

  constructor() {}

  ngOnInit(): void {}

  getUserMsg() {
    console.log(this.userInput);
  }
}
