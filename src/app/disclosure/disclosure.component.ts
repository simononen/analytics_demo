import { Component, ElementRef, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'app-disclosure',
  templateUrl: './disclosure.component.html',
  styleUrls: ['./disclosure.component.scss'],
})
export class DisclosureComponent implements OnInit {
  tableauViz: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setUpViz();
  }

  setUpViz(): void {
    const div = this.el.nativeElement.querySelector('#disclosure');
    const url =
      'https://public.tableau.com/views/Consults_16063777713890/Disclosure?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link';

    const options = {
      hideTabs: true,
      // width: '100%',
      // height: '100%',
      hideToolbar: false,

      // onFirstInteractive: function () {
      //   console.log('Run this code when the viz has finished loading.');
      // },
    };

    this.tableauViz = new tableau.Viz(div, url, options);
  }
}
