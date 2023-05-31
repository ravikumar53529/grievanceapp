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
  public  dates: City[]=[]; 
  public selectedDate:any;
  public selectedCity!: City;
  public form!:FormGroup
  public data2:any;
  public options2:any;
  public chartOptions2:any;
  public newTickets:number=1;
  public newTicketsRange:number=1190;
  public closedTickets:number=1;
  public closedTicketsRange:number=1274;
  public backlogTickets:number=1;
  public backlogTicketsRange:number=590;
  constructor(private fb:FormBuilder) {
    
  }
  
  ngOnInit() {
      
      this.onGrievanceMainSec()
      this.getDoughnut()
      this.onDropDown()
      this.onForm()
      this.onBandwidthSec()
      this.onProgressBars()
      this.counter();
  }
  public onGrievanceMainSec():void{
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
  }
  public getDoughnut():void{
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data1 = {
        labels: ['Web', 'Email', 'Chat','Phone'],
        datasets: [
            {
                data: [300, 50, 100,20],
                backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--green-500'),documentStyle.getPropertyValue('--yellow-500')],
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
    this.dates = [
        { name: 'Last 7 Months'},
        { name: 'Last 1 Year' },
    ];
 }
 public onForm():void{
    this.form=this.fb.group({
        city:new FormControl()
    })
 }
 public onBandwidthSec():void{
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    this.data2 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                type: 'line',
                label: 'Incoming',
                borderColor: documentStyle.getPropertyValue('--green-500'),
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                data: [21, 84, 24, 75, 37, 65, 34]
            },
            {
                type: 'line',
                label: 'Outgoing',
                borderColor: documentStyle.getPropertyValue('--red-500'),
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                data: [16, 80, 21, 65, 31, 61, 34]
            }
        ]
    };
    
    this.options2 = {
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
    }
 }

 public onProgressBars():void{
    this.chartOptions = {
        series: [76],
        chart: {
          type: "radialBar",
          offsetY: -20
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                opacity: 0.31,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: "22px"
              }
            }
          }
        },
        fill: {
         colors:['#004E00'],
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          }
        },
        labels: ["Average Results"]
      };
      this.chartOptions2 = {
        series: [70],
        chart: {
          type: "radialBar",
          offsetY: -20
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                opacity: 0.31,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: "22px"
              }
            }
          }
        },
        fill: {
         colors:['#ff0000'],
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          }
        },
        labels: ["Average Results"]
      };
    }
    public counter():void{
        const interval = setInterval(() => {
          this.newTickets += 10;
          if (this.newTickets >= this.newTicketsRange) {
            clearInterval(interval);
          }
        }, 0.1);
        const interval2 = setInterval(() => {
          this.closedTickets += 10;
          if (this.closedTickets >= this.closedTicketsRange) {
            clearInterval(interval2);
          }
        }, 50);
         const interval3 = setInterval(() => {
            this.backlogTickets += 10;
            if (this.backlogTickets >= this.backlogTicketsRange) {
              clearInterval(interval3);
            }
          }, 50);
      }
    
public mainGraphFilter():void{
this.dates.filter((data:any)=>{
   if(this.selectedDate.name===data.name){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border'); 
    this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                type: 'line',
                label: 'New Tickets',
                borderColor: documentStyle.getPropertyValue('--green-500'),
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                data: [56, 36, 60, 67, 24, 45, 34,56, 36, 60, 67, 24]
            },
            {
                type: 'bar',
                label: 'Closed Tickets',
                backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                data: [50, 31, 56, 67, 24, 45, 34,50, 36, 54, 63, 20],
                borderColor: 'white',
                borderWidth: 2
            },
            {
                type: 'bar',
                label: 'Backlog Tickets',
                backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                data: [43, 24, 50, 61, 20, 32, 31,53, 31, 52, 64, 18]
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
   }else{
    this.onGrievanceMainSec()  
   }
})

}

}
