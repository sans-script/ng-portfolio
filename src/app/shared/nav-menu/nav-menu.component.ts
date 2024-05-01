import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  @Input() linkTo: string = '';

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      const hamburger = document.querySelector(".hamburger");
      const nav = document.querySelector(".nav");
      hamburger?.addEventListener("click", () => nav?.classList.toggle("active"));
    }    
 }

 ngOnInit(): void {
  // Script para rolagem suave
  if (typeof document !== 'undefined') {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId!)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  } 
 }
}
