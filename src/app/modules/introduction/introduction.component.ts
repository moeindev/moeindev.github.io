import {Component} from '@angular/core';
import {SocialInformation} from "./model/social-information";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  public fullName = 'Mohammad Moein Abdi';
  public jobTitle = 'Software Developer';
  public socialInformation: SocialInformation[] = [];
}
