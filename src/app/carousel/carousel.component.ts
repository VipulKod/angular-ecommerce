import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  slicedArray: Array<any> = [];
  constructor() {}

  ngOnInit(): void {
    this.batchCards(this.dummyData);
    console.log(this.slicedArray)
  }

  dummyData = [
    {
      title: 'Card-1',
    },
    {
      title: 'Card-2',
    },
    {
      title: 'Card-3',
    },
    {
      title: 'Card-4',
    },
    {
      title: 'Card-5',
    },
    {
      title: 'Card-6',
    },
  ];

  batchCards(obj) {
    let chunk = 3;
    let chunkArr;
    for (let i = 0; i < obj.length; i += chunk) {
      chunkArr = obj.slice(i, i + chunk);
      this.slicedArray.push(chunkArr);
    }
  }
}
