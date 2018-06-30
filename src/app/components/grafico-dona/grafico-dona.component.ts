import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {
  
  @Input() grafico: any;
  
  
  // Doughnut
   public doughnutChartLabels: string[];
   public doughnutChartData: number[];
   public doughnutChartType: string ;
  constructor() { }

  ngOnInit() {

    this.doughnutChartLabels = this.grafico.labels;
    this.doughnutChartData = this.grafico.data;
    this.doughnutChartType = this.grafico.type;

  }

}
