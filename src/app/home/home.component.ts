import { Component, ElementRef, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

// export class HomeComponent {
//   constructor() {}
// }


export class HomeComponent implements OnInit{
  tableauViz: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // this.setUpViz();
  }

  setUpViz(): void {
    const div = this.el.nativeElement.querySelector('#story');
    const url = 'https://public.tableau.com/views/Energy_16215184175700/EnergyStory?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link';

    const options = {
      hideTabs: true,
      hideToolbar: false,
    };

    this.tableauViz = new tableau.Viz(div, url, options);
  }
}
