import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetApiComponent } from './component/get-api/get-api.component';
import { core } from '@angular/compiler';
import { PostApiComponent } from './component/post-api/post-api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GetApiComponent,PostApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice3';
}
