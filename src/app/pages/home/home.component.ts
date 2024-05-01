import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener} from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
  constructor() { }
  
  toggleFullScreen(iframeId: string) {
    const element = document.getElementById(iframeId) as HTMLIFrameElement;

    if (!element) {
        console.error('Iframe com o ID especificado não foi encontrado.');
        return;
    }

    if (document.fullscreenEnabled) {
      try {
          if (element.requestFullscreen) {
              element.requestFullscreen();
          } else if ((element as any).webkitRequestFullscreen) { /* Chrome, Safari & Opera */
              (element as any).webkitRequestFullscreen();
          } else if ((element as any).msRequestFullscreen) { /* IE/Edge */
              (element as any).msRequestFullscreen();
          } else {
              console.error('Seu navegador não suporta o modo de tela cheia.');
          }
      } catch (error) {
          console.error('Erro ao tentar entrar em tela cheia:', error);
      }

        // Coloque o iframe em tela cheia
        if (element.style) {
            element.style.width = '100%';
            element.style.height = '100%';
        } else {
            console.error('O elemento não suporta estilos.');
        }
    } else {
        console.error('Seu navegador não suporta o modo de tela cheia.');
    }
  }

}

