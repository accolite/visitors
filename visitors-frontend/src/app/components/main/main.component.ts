import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { accoliteLocation } from 'src/app/helpers/static-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  active: any;
  title = 'visitor-frontend';
  location: any = accoliteLocation;
  val: string = 'Bangalore';

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private auth: AuthService) {
    if (window.location.href.indexOf('?loc') > -1) {
      this.val = window.location.href.split("=")[1];
    } else {
      this.val = 'Bangalore';
      this.selectedValue(this.val)
    }
  }

  ngOnInit() {
    this.auth.subject$.subscribe((data) => this.active = data)
    console.log(window.location.href);
    if (window.location.href.indexOf('login') > -1) {
      console.log("login route")
      this.auth.subject$.next(false);
    }
    else {
      this.auth.subject$.next(true);
    }
  }

  selectedValue(selectedval: string) {
    this.val = selectedval;
    this.router.navigate([],
      {
        relativeTo: this.activatedRoute,
        queryParams: { loc: this.val },
        queryParamsHandling: 'merge',

      })
  }

}
