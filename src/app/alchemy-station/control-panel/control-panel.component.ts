import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.updatePosition();
  }

  clear() {
    // Set workstation to default state (empty slots)
  }

  updatePosition(){
    
  }

}
