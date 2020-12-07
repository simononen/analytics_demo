import { Component, ElementRef, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'app-distrbution-value',
  templateUrl: './distrbution-value.component.html',
  styleUrls: ['./distrbution-value.component.scss'],
})
export class DistrbutionValueComponent implements OnInit {
  tableauViz: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setUpViz();
  }

  setUpViz(): void {
    const div = this.el.nativeElement.querySelector('#value');
    const url =
      'https://public.tableau.com/views/Consults_16063777713890/ContractDistibutions-value?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link';

    const options = {
      hideTabs: true,
      hideToolbar: false,
    };

    this.tableauViz = new tableau.Viz(div, url, options);
  }
}
