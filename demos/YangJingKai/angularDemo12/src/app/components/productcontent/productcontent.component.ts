import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productcontent',
  templateUrl: './productcontent.component.html',
  styleUrls: ['./productcontent.component.css']
})
export class ProductcontentComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      console.log(param.id);
    });
  }

}
