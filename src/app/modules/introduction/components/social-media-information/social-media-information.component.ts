import {Component, Input} from '@angular/core';
import {SocialInformation} from "../../model/social-information";

@Component({
  selector: 'app-social-media-information',
  templateUrl: './social-media-information.component.html',
  styleUrls: ['./social-media-information.component.scss']
})
export class SocialMediaInformationComponent {
  @Input() socialInformation: SocialInformation[] = [];
}
