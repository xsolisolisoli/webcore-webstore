import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PopupComponent } from "./popup/popup.component";
import { PopupService } from './popupservice.service';
import { StorepageComponent } from "./storepage/storepage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PopupComponent, StorepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webcore-webstore';

  constructor(@Inject(PopupService) private popupService: PopupService) {}

  showPopup() {
    this.popupService.showToast('This is a toast message!');
  }
}