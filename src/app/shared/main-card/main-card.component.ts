import { Component } from '@angular/core';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css'
})
export class MainCardComponent {

  phrase: string = "Seja bem-vindo ao meu portfólio pessoal, um espaço dedicado à exibição de meus trabalhos, sinta-se à vontade. Sou um desenvolvedor trainee Front-End na startup DevOps, atualmente estou cursando o Bacharelado Interdisciplinar em Ciência e Tecnologia na Universidade Federal do Maranhão."; // Frase a ser animada
  currentCharacterIndex: number = 0; // Índice do caractere atual
  animationInterval: any; // Referência para o intervalo da animação
  thinkingCursorInterval: any; // Referência para o intervalo do cursor piscando
  caretElement: HTMLSpanElement | null = null; // Initialize with null. Referência para o elemento HTMLSpan com a classe "caret"

  constructor() { }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.caretElement = document.querySelector('.caret') as HTMLSpanElement;
      const text_elem = document.getElementById("typewriter_body");
      if (text_elem) {
        setTimeout(() => {
          this.typeWriterBody(text_elem); // Iniciar a animação de digitação do titulo
        }, 3000);

      }
    }
  }
  startTypingAnimation(): void {
    // Limpar o intervalo anterior, se houver
    clearInterval(this.animationInterval);

    // Criar um novo intervalo para animar a digitação
    this.animationInterval = setInterval(() => {
      this.currentCharacterIndex++;

      // Verificar se todos os caracteres foram digitados
      if (this.currentCharacterIndex === this.phrase.length) {
        clearInterval(this.animationInterval);
        //       this.caretElement?.classList.add('caret'); // Reaplicar a classe "caret"
      } else {
        // this.caretElement?.classList.remove('caret'); // Remover a classe "caret" durante a animação
      }
    }, 20); // Ajustar a velocidade da animação (em milissegundos) do paragrafo
  }

  typeWriterBody(text_elem: HTMLElement): void {
    const caret = document.getElementById("caret");
    caret?.classList.add('stop')
    let body_arr = ["Hi! My name is Alex and I'm a Font"];
    let body_delword = "Front-End Web Developer.";
    let i = 0;
    let word = body_arr[i].split("");
    let delcounter = 0;
    let finished = false;
    let endsWithWord = "Developer."

    let type = () => {
      if (word.length > 0) {
        text_elem.innerHTML += word.shift();
      }
      else if (delcounter < 4) {
        text_elem.innerText = text_elem.innerText.slice(
          0,
          text_elem.innerText.length - 1
        );
        delcounter++;

      }
      else if (!finished) {
        word = body_delword.split("");
        finished = true;
      }

      else if ((body_delword.endsWith(endsWithWord))) {
        caret?.classList.remove('stop')
        setTimeout(() => {
          this.startTypingAnimation();
        }, 2000); // Atraso para iniciar animação do paragrafo
      }
    };

    setInterval(type, 150);
  }
}
