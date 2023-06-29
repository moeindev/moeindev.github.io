import { Component } from '@angular/core';
import { SocialInformation } from './model/social-information';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent {
  public fullName = 'Mohammad Moein Abdi';
  public jobTitle = 'Software Developer';
  public socialInformation: SocialInformation[] = [
    {
      title: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/moeindeveloper/',
    },
    {
      title: 'Github',
      icon: faGithub,
      url: 'https://github.com/moeindev',
    },
    {
      title: 'StackOverflow',
      icon: faStackOverflow,
      url: 'https://stackoverflow.com/users/8084314/moeindeveloper',
    },
    {
      title: 'Telegram',
      icon: faTelegram,
      url: 'https://t.me/notitle',
    },
    {
      title: 'Twitter',
      icon: faTwitter,
      url: 'https://twitter.com/moeindeveloper',
    },
  ];
}
