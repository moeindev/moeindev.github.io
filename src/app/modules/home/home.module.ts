import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IntroductionModule } from '../introduction/introduction.module';
import { SummaryModule } from '../summary/summary.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IntroductionModule,
    SummaryModule,
    FooterModule,
  ],
})
export class HomeModule {}
