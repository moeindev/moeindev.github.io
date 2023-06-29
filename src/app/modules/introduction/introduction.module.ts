import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {IntroductionComponent} from './introduction.component';
import { SocialMediaInformationComponent } from './components/social-media-information/social-media-information.component';


@NgModule({
  declarations: [
    IntroductionComponent,
    SocialMediaInformationComponent
  ],
  exports: [IntroductionComponent],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class IntroductionModule {
}
