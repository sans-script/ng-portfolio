import { Component, ElementRef, HostListener, inject, Input, OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  standalone: true,
  imports: [],
  templateUrl: './iframe.component.html',
  styleUrl: './iframe.component.css'
})
export class IframeComponent{
  @Input() description: string = '';
  @Input() url: string = '';
  @Input() iframeid: string = '';
  scroll:string = 'no'
  trustedUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener('document:fullscreenchange')
  onFullScreenChange() {
    if (!document.fullscreenElement) {
      const elements = document.querySelectorAll('iframe');
      const totalElements = elements.length;
      elements.forEach((element: HTMLIFrameElement, index: number) => {
        if (index !== totalElements - 1) {
          element.style.height = '400px';
          element.setAttribute('scrolling', 'no');
        }
      });
    }
  }
  
  

  ngOnInit() {
    if (this.url) {
      this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
  }

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
            this.scroll = 'yes'
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
