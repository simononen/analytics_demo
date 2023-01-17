import { Component, ElementRef, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'app-distribution-number',
  templateUrl: './distribution-number.component.html',
  styleUrls: ['./distribution-number.component.scss'],
})
export class DistributionNumberComponent implements OnInit {
  tableauViz: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setUpViz();
  }

  setUpViz(): void {
    const div = this.el.nativeElement.querySelector('#number');
    const url =
      // 'https://public.tableau.com/views/Consults_16063777713890/ContractDistibutions-number?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link';
      'https://public.tableau.com/views/agric_fds/ContractDistibutions-number?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link';

    const options = {
      hideTabs: true,
      hideToolbar: false,
    };

    this.tableauViz = new tableau.Viz(div, url, options);
  }
}
