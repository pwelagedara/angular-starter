import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AppConfig } from './app.config'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public constructor(private titleService: Title) {
  }

  ngOnInit() {
	this.setTitle(AppConfig.TITLE);
  }

  public setTitle(newTitle: string) {
	this.titleService.setTitle(newTitle);
  }
}
