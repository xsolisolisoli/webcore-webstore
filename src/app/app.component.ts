import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PopupComponent } from "./popup/popup.component";
import { PopupService } from './popup.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webcore-webstore';

  constructor(private popupService: PopupService) {}

  showPopup() {
    this.popupService.showToast('This is a toast message!');
  }
}