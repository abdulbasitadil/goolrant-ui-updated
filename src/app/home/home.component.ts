import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isMobile: boolean = false;
  cellCount = 3;
  url: any;

  constructor(
    private router: Router,
    public breakpointObserver: BreakpointObserver
    ) {}

  ngOnInit(): void {
    this.url = this.router.url;
    this.breakpointObserver
    .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.HandsetLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.Medium,
        Breakpoints.TabletPortrait,
        Breakpoints.TabletLandscape
    ])
    .subscribe((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall] || state.breakpoints[Breakpoints.Small]) {
            this.isMobile = true;
            this.cellCount = 1;
            console.log( 'Matches XSmall viewport');
        } else {
            this.isMobile = false;
            this.cellCount = 3;
        }
    });
  }

  contact() {
    this.router.navigate(["/contact-us"]);
  }
}
