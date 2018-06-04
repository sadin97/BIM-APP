import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'AcademyApp';
  arr = ["a", "b", "c"];
  show = false;

  changeTitle(event)
  {
    if(event == "academy")
    {
      this.title = event;
    }
  }

  ngOnInit()
  {
    console.log("Aplikacija je inicijalizirana.");
  }

  ngOnDestroy()
  {
    console.log("Aplikacija je destroyana.");
    debugger;
  }
}
