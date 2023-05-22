import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
interface City {
    name: string;
    code: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grievanceapp';
  public data: any;

   public  options: any;
   public  data1: any;

  public options1: any;
  public chartOptions: any;
   public  cities: City[]=[];
   public selectedCity!: City;
   public form!:FormGroup
  constructor(private fb:FormBuilder) {
    
  }
  
  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  type: 'line',
                  label: 'New Tickets',
                  borderColor: documentStyle.getPropertyValue('--green-500'),
                  borderWidth: 2,
                  fill: false,
                  tension: 0.4,
                  data: [21, 84, 24, 75, 37, 65, 34]
              },
              {
                  type: 'bar',
                  label: 'Closed Tickets',
                  backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                  data: [18, 84, 23, 75, 30, 61, 30],
                  borderColor: 'white',
                  borderWidth: 2
              },
              {
                  type: 'bar',
                  label: 'Backlog Tickets',
                  backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                  data: [41, 52, 24, 74, 23, 21, 32]
              },
              
          ]
      };
      
      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              },
              
          }
      };
      this.getDoughnut()
      this.onDropDown()
      this.onForm()
  }

  public getDoughnut():void{
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data1 = {
        labels: ['Web', 'Email', 'Chat','Phone'],
        datasets: [
            {
                data: [300, 50, 100,20],
                backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--green-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
            }
        ]
    };


    this.options1 = {
        cutout: '60%',
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        }
    };
}
  
 public onDropDown():void{
    this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
 }
 public onForm():void{
    this.form=this.fb.group({
        city:new FormControl()
    })
 }

 progressBarValue: number = 50; // Initial value

 // Function to update the progress bar value dynamically
 updateProgressBarValue(newValue: number) {
   this.progressBarValue = newValue;
 }
}
