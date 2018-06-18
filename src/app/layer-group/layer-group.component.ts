import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layer-group',
  templateUrl: './layer-group.component.html',
  styleUrls: ['./layer-group.component.css']
})
export class LayerGroupComponent implements OnInit {

  layers: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.layers=[];
    this.layers.push({title:'layer1',description:'layer1 for WMS server1'});
    this.layers.push({title:'layer2',description:'layer2 for WMS server1'});
    this.layers.push({title:'layer1',description:'layer1 for WMS server2'});
  }

}
