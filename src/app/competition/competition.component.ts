import { Component, ElementRef, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
})
export class CompetitionComponent implements OnInit {
  tableauViz: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setUpViz();
  }

  setUpViz(): void {
    const div = this.el.nativeElement.querySelector('#competition');
    const url =
      'https://public.tableau.com/views/Consults_16063777713890/OpenCompetition?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link';

    const options = {
      hideTabs: true,
      hideToolbar: false,
    };

    this.tableauViz = new tableau.Viz(div, url, options);
  }
}
