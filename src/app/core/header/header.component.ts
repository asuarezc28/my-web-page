import { Component, OnInit } from '@angular/core';
import { AppUrls } from 'src/app/configs/app-urls.config';
import { Link } from '../models/link.model'
import { Icons } from 'src/app/configs/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  links: Link[] = [];


  constructor() { }

  ngOnInit() {
    this.links.push(new Link('Home', AppUrls.AppHome, Icons.Home));
    this.links.push(
      new Link(
        'About me',
        AppUrls.AppAboutMe,
        Icons.AboutMe
      )
    );
    this.links.push(new Link('Portfolio', AppUrls.AppPortfolio, Icons.Portfolio));
    this.links.push(new Link('Experience', AppUrls.AppExperience,  Icons.Experience));
  }
}

