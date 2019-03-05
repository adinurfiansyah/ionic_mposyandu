import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as Highcharts from 'highcharts';

/**
 * Generated class for the ViewgraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
HighchartsMore(Highcharts);
@IonicPage()
@Component({
  selector: 'page-viewgraph',
  templateUrl: 'viewgraph.html',
})

export class ViewgraphPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let data = this.navParams.get('data');
    let val = this.navParams.get('val');
    console.log(val);
    if (data.gender == 'L') {
      var data_red = [
            [0, 2.1, 5.0],
            [1, 2.9, 6.6],
            [2, 3.8, 8.0],
            [3, 4.4, 9.0],
            [4, 4.9, 9.7],
            [5, 5.3, 10.4],
            [6, 5.7, 10.9],
            [7, 5.9, 11.4],
            [8, 6.2, 11.9],
            [9, 6.4, 12.3],
            [10, 6.6, 12.7],
            [11, 6.8, 13.0],
            [12, 6.9, 13.3],
            [13, 7.1, 13.7],
            [14, 7.2, 14.0],
            [15, 7.4, 14.3],
            [16, 7.5, 14.6],
            [17, 7.7, 14.9],
            [18, 7.8, 15.3],
            [19, 8.0, 15.6],
            [20, 8.1, 15.9],
            [21, 8.2, 16.2],
            [22, 8.4, 16.5],
            [23, 8.5, 16.8],
            [24, 8.6, 17.1],
            [25, 8.8, 17.5],
            [26, 8.9, 17.8],
            [27, 9.0, 18.1],
            [28, 9.1, 18.4],
            [29, 9.2, 18.7],
            [30, 9.4, 19.0],
            [31, 9.5, 19.3],
            [32, 9.6, 19.6],
            [33, 9.7, 19.9],
            [34, 9.8, 20.2],
            [35, 9.9, 20.4],
            [36, 10.0, 20.7],
            [37, 10.1, 21.0],
            [38, 10.2, 21.3],
            [39, 10.3, 21.6],
            [40, 10.4, 21.9],
 			      [41, 10.5, 22.1],
            [42, 10.6, 22.4],
            [43, 10.7, 22.7],
            [44, 10.8, 23.0],
            [45, 10.9, 23.3],
            [46, 11.0, 23.6],
            [47, 11.1, 23.9],
            [48, 11.2, 24.2],
            [49, 11.3, 24.5],
            [50, 11.4, 24.8],
            [51, 11.5, 25.1],
            [52, 11.6, 25.4],
            [53, 11.7, 25.7],
            [54, 11.8, 26.0],
            [55, 11.9, 26.3],
            [56, 12.0, 26.6],
            [57, 12.1, 26.9],
            [58, 12.2, 27.2],
            [59, 12.3, 27.5],
            [60, 12.4, 27.8],
        ],
        data_orange = [
            [0, 2.5, 4.4],
            [1, 3.4, 5.8],
            [2, 4.3, 7.1],
            [3, 5.0, 8.0],
            [4, 5.6, 8.7],
            [5, 6.0, 9.3],
            [6, 6.4, 9.8],
            [7, 6.7, 10.3],
            [8, 6.9, 10.7],
            [9, 7.1, 11.0],
            [10, 7.4, 11.4],
            [11, 7.6, 11.7],
            [12, 7.7, 12.0],
            [13, 7.9, 12.3],
            [14, 8.1, 12.6],
            [15, 8.3, 12.8],
            [16, 8.4, 13.1],
            [17, 8.6, 13.4],
            [18, 8.8, 13.7],
            [19, 8.9, 13.9],
            [20, 9.1, 14.2],
            [21, 9.2, 14.5],
            [22, 9.4, 14.7],
            [23, 9.5, 15.0],
            [24, 9.7, 15.3],
            [25, 9.8, 15.5],
            [26, 10.0, 15.8],
            [27, 10.1, 16.1],
            [28, 10.2, 16.3],
            [29, 10.4, 16.6],
            [30, 10.5, 16.9],
            [31, 10.7, 17.1],
            [32, 10.8, 17.4],
            [33, 10.9, 17.6],
            [34, 11.0, 17.8],
            [35, 11.2, 18.1],
            [36, 11.3, 18.3],
            [37, 11.4, 18.6],
            [38, 11.5, 18.8],
            [39, 11.6, 19.0],
            [40, 11.8, 19.3],
 			      [41, 11.9, 19.5],
            [42, 12.0, 19.7],
            [43, 12.1, 20.0],
            [44, 12.2, 20.2],
            [45, 12.4, 20.5],
            [46, 12.5, 20.7],
            [47, 12.6, 20.9],
            [48, 12.7, 21.2],
            [49, 12.8, 21.4],
            [50, 12.9, 21.7],
            [51, 13.1, 21.9],
            [52, 13.2, 22.2],
            [53, 13.3, 22.4],
            [54, 13.4, 22.7],
            [55, 13.5, 22.9],
            [56, 13.6, 23.2],
            [57, 13.7, 23.4],
            [58, 13.8, 23.7],
            [59, 14.0, 23.9],
            [60, 14.1, 24.2],
        ],
        data_yellow = [
            [0, 2.9, 3.9],
            [1, 3.9, 5.1],
            [2, 4.9, 6.3],
            [3, 5.7, 7.2],
            [4, 6.2, 7.8],
            [5, 6.7, 8.4],
            [6, 7.1, 8.8],
            [7, 7.4, 9.2],
            [8, 7.7, 9.6],
            [9, 8.0, 9.9],
            [10, 8.2, 10.2],
            [11, 8.4, 10.5],
            [12, 8.6, 10.8],
            [13, 8.8, 11.0],
            [14, 9.0, 11.3],
            [15, 9.2, 11.5],
            [16, 9.4, 11.7],
            [17, 9.6, 12.0],
            [18, 9.8, 12.2],
            [19, 10.0, 12.5],
            [20, 10.1, 12.7],
            [21, 10.3, 12.9],
            [22, 10.5, 13.2],
            [23, 10.7, 13.4],
            [24, 10.8, 13.6],
            [25, 11.0, 13.9],
            [26, 11.2, 14.1],
            [27, 11.3, 14.3],
            [28, 11.5, 14.5],
            [29, 11.7, 14.8],
            [30, 11.8, 15.0],
            [31, 12.0, 15.2],
            [32, 12.1, 15.4],
            [33, 12.3, 15.6],
            [34, 12.4, 15.8],
            [35, 12.6, 16.0],
            [36, 12.7, 16.2],
            [37, 12.9, 16.4],
            [38, 13.0, 16.6],
            [39, 13.1, 16.8],
            [40, 13.3, 17.0],
 			      [41, 13.4, 17.2],
            [42, 13.6, 17.4],
            [43, 13.7, 17.6],
            [44, 13.8, 17.8],
            [45, 14.0, 18.0],
            [46, 14.1, 18.2],
            [47, 14.3, 18.4],
            [48, 14.4, 18.6],
            [49, 14.5, 18.8],
            [50, 14.7, 19.0],
            [51, 14.8, 19.2],
            [52, 15.0, 19.4],
            [53, 15.1, 19.6],
            [54, 15.2, 19.8],
            [55, 15.4, 20.0],
            [56, 15.5, 20.2],
            [57, 15.6, 20.4],
            [58, 15.8, 20.6],
            [59, 15.9, 20.8],
            [60, 16.0, 21.0],
        ];
        var newTanggal;
        let x;
        let y = [];
        let z = [];
        for (var i = 0; i < val.length; i++) {
          let tanggal = val[i].tanggal;
          newTanggal = tanggal;
          x = newTanggal.split('-');
          z[i] = x.indexOf(x[i])
          y[i] = [parseFloat((z[i])), parseFloat(val[i].berat)];
        }
        var d = y;
        console.log(d);
        Highcharts.chart('container', {
          title: {
              text: 'Berat Badan menurut Umur (L)'
          },

          xAxis: {
              type: 'linear',
              minRange: 60,
              title: {
                  text: "Usia"
              },
              allowDecimals: false
          },

          yAxis: {
              min: 0,
              max: 30,
              title: {
                  text: "Kilogram"
              }
          },
          legend: {},
          tooltip: {
              valueSuffix: ' Kg'
          },
          series: [{
                  name: 'Berat Badan',
                  data: d,
                  zIndex: 5,
                  color: 'black',
                  connectNulls: true,
              },

              {
                  name: 'Gizi Buruk',
                  data: data_red,
                  type: 'arearange',
                  lineWidth: 0,
                  color: '#ffff00',
                  fillOpacity: 0.9,
                  zIndex: 0,
                  marker: {
                      enabled: false
                  },
                  enableMouseTracking: false
              },

              {
                  name: 'Gizi Kurang',
                  data: data_orange,
                  type: 'arearange',
                  lineWidth: 0,
                  color: 'lime',
                  fillOpacity: 0.3,
                  zIndex: 1,
                  marker: {
                      enabled: false
                  },
                  enableMouseTracking: false
              },

              {
                  name: 'Gizi Baik',
                  data: data_yellow,
                  type: 'arearange',
                  lineWidth: 0,
                  color: 'green',
                  fillOpacity: 0.3,
                  zIndex: 2,
                  marker: {
                      enabled: false
                  },
                  enableMouseTracking: false
              }
          ]
      });



    }
  }

}
