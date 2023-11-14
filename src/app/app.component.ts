import {
  AfterRenderPhase,
  ChangeDetectorRef,
  Component,
  afterNextRender,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-ssr';
  test = 'Initial';
  constructor(private cdr: ChangeDetectorRef) {
    afterNextRender(
      () => {
        setTimeout(() => {
          this.test = 'sadfasdfadf';
          this.cdr.detectChanges();
        }, 4000);
      },
      { phase: AfterRenderPhase.Read },
    );
  }
}
