import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  languageList = [
    { "key": "spanish", "value": "Español" },
    { "key": "english", "value": "Inglés" },
    { "key": "french", "value": "Francés" }
  ];

  courseList = [
    { "key": "third", "value": "3º de infantil" },
    { "key": "fourth", "value": "4º de infantil" },
    { "key": "fifth", "value": "5º de infantil" }
  ];

  styleGuide = {
    caretClass: 'caret',
    selectBoxClass: 'dropdown-wrapper',
    selectMenuClass: 'dropdown',
    optionsClass: 'option'
  };

  displayKey = "value";


  constructor() { }

  ngOnInit(): void {
  }

  hider(){
    const settingsPane = document.querySelector('app-settings');

    settingsPane?.classList.toggle('hidden');
  }

  settingsSaved(){
    const div = document.createElement('div');
    div.innerHTML = 'Cambios guardados';
    div.classList.add('popup');

    const titleGroup = document.querySelector('.settings-container .title-group');

    titleGroup?.after(div);

    setTimeout(() => {
      this.hider();
      div.remove();
    }, 1000);
  }

}
