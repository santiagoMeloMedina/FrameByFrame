import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SectionService } from 'src/app/service/section/section.service';
import { LanguageService } from 'src/app/service/configuration/language/language.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  @ViewChild("divFront") divFront: ElementRef;
  @ViewChild("divAbout") divAbout: ElementRef;
  @ViewChild("divWork") divWork: ElementRef;
  @ViewChild("divContact") divContact: ElementRef;
  @ViewChild("divClients") divClients: ElementRef;

  private videoPlayer: ElementRef;

  private currentSection: string = "";

  constructor(private sectionService: SectionService, 
              public language: LanguageService) {
    this.setSections();
    this.setScroller();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  public setVideoPlayer(video: ElementRef): void {
    this.videoPlayer = video;
    this.videoPlayer['play']();
    this.videoPlayer['muted'] = true;
  }

  public getFrontSection(): ElementRef {
    return this.divFront;
  }

  public getAboutSection(): ElementRef {
    return this.divAbout;
  }

  public getWorkSection(): ElementRef {
    return this.divWork;
  }

  public getContactSection(): ElementRef {
    return this.divContact;
  }

  public getClientsSection(): ElementRef {
    return this.divClients;
  }

  public scroller(distance: number): void {
    window.scrollTo(0, distance);
  }

  private setSections(): void {
    let sections: any = {
      "front": this.getFrontSection.bind(this),
      "about": this.getAboutSection.bind(this),
      "work": this.getWorkSection.bind(this),
      "contact": this.getContactSection.bind(this),
      "clients": this.getClientsSection.bind(this)
    };
    this.sectionService.setSections(sections);
  }

  public setScroller(): void {
    this.sectionService.setScroller(this.scroller.bind(this));
  }
  
}
