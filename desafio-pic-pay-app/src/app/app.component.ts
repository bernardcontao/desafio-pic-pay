import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // isLoading: Observable<boolean>;

  // constructor(
  //   private isLoadingService: IsLoadingService,
  //   private router: Router,
  // ) { }

  // ngOnInit() {
  //   this.isLoading = this.isLoadingService.isLoading$();

  //   this.router.events
  //     .pipe(
  //       filter(
  //         event =>
  //           event instanceof NavigationStart ||
  //           event instanceof NavigationEnd ||
  //           event instanceof NavigationCancel ||
  //           event instanceof NavigationError,
  //       ),
  //     )
  //     .subscribe(event => {
  //       // If it's the start of navigation, `add()` a loading indicator
  //       if (event instanceof NavigationStart) {
  //         this.isLoadingService.add();
  //         return;
  //       }

  //       // Else navigation has ended, so `remove()` a loading indicator
  //       this.isLoadingService.remove();
  //     });
  // }
  title = 'desafio-pic-pay-app';
}