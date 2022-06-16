import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page-with-module',
  templateUrl: './page-with-module.page.html',
  styleUrls: ['./page-with-module.page.scss'],
})
export class PageWithModulePage implements OnInit {

  whatAmI$ = this.activatedRoute.data.pipe(
    map(data => data.whatAmI)
  );

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
