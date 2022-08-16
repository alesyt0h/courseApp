import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hider(){
    const settingsPane = document.querySelector('app-settings');

    console.log(settingsPane)
    settingsPane?.classList.toggle('hidden');
  }

}
