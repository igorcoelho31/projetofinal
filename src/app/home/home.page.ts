import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-trabalhos',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showMore: boolean = false;

  constructor(private router: Router){}

  toggleMoreText() {
    this.showMore = !this.showMore;
  }

  ngOnInit() {
  }

}
