import { Component } from '@angular/core';
import { ethers } from 'ethers';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example-angular-frontend';
  lastBlockNumber: number | undefined;

  counter = 0;

  constructor() {
    ethers.providers
      .getDefaultProvider('goerli')
      .getBlock('latest')
      .then((block) => {
        this.lastBlockNumber = block.number;
      });
  }

  clickMe() {
    this.counter++
  }
}
