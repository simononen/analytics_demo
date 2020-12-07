import { Component, ElementRef, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'app-marketprice',
  templateUrl: './marketprice.component.html',
  styleUrls: ['./marketprice.component.scss'],
})
export class MarketpriceComponent implements OnInit {
  tableauViz: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setUpViz();
  }

  setUpViz(): void {
    const div = this.el.nativeElement.querySelector('#marketPrice');
    const url =
      'https://public.tableau.com/views/Consults_16063777713890/MarketPrice?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link';

    const options = {
      hideTabs: true,
      hideToolbar: false,
    };

    this.tableauViz = new tableau.Viz(div, url, options);
  }
}
