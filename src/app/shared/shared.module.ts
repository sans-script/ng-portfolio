import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWindowComponent } from './content-window/content-window.component';
import { MainCardComponent } from './main-card/main-card.component';
import { BannerComponent } from './banner/banner.component';
import { CubeComponent } from './cube/cube.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { IframeComponent } from './iframe/iframe.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentWindowComponent,
    MainCardComponent,
    BannerComponent,
    CubeComponent,
    NavMenuComponent,
    FooterComponent,
    IframeComponent
  ],exports:[
    ContentWindowComponent,
    MainCardComponent,
    BannerComponent,
    CubeComponent,
    NavMenuComponent,
    FooterComponent,
    IframeComponent
  ]
})
export class SharedModule { }
