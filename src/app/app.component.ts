import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // constructor(private el: ElementRef) {}
  // ngOnInit(): void {
  //   const burger = this.el.nativeElement.querySelector('#burger');
  //   const menu = this.el.nativeElement.querySelector('#menu');
  //   burger.addEventListener('click', () => {
  //     if (menu.classList.contains('hidden')) {
  //       menu.classList.remove('hidden');
  //     } else {
  //       menu.classList.add('hidden');
  //     }
  //   });
  // }
}
