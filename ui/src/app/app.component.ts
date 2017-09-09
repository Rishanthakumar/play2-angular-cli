import { Component } from '@angular/core';

import { SampleService } from './shared/services/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private sampleService: SampleService) {}

  ngOnInit() {
      this.getSampleData();
  }

  public getSampleData(): void {
    this.sampleService.getHelloWorld()
      .subscribe((data: any) => {
        this.title = data;
      }, (err) => {});
  }
}
