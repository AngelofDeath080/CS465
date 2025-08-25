import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';
import { navbar } from './navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, TripListing, navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Travlr Gataways Admin!');
}
