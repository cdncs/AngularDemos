import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showSide(){
    var dom = document.getElementById("aside");
    dom.style.transform="translate(0, 0)";
  }

  hiddenSide(){
    var dom = document.getElementById("aside");
    dom.style.transform="translate(100%, 0)";
  }

}
