import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CONSTANTS as SCROLL } from 'src/app/constant/scroll.constant';
import { SectionService } from 'src/app/service/section/section.service';

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
  @ViewChild("divInformation") divInformation: ElementRef;

  private videoPlayer: HTMLVideoElement;


  @ViewChild('videoPlayer')
  set mainVideoEl(el: ElementRef) {
    this.videoPlayer = el.nativeElement;
  }

  private currentSection: string = "";

  constructor(private sectionService: SectionService) {
    this.setSections();
    this.setScroller();
  }

  ngOnInit(): void {
    let mute: any = setTimeout(() => {
      if (typeof this.videoPlayer !== "undefined") {
        this.videoPlayer.play();
        this.videoPlayer.muted = true;
      } else {
        mute();
      }
    }, 0);
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

  public getInformationSection(): ElementRef {
    return this.divInformation;
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
      "clients": this.getClientsSection.bind(this),
      "information": this.getInformationSection.bind(this)
    };
    this.sectionService.setSections(sections);
  }

  public setScroller(): void {
    this.sectionService.setScroller(this.scroller.bind(this));
  }

  // private changeSection(section: Object): boolean {
  //   let changed: boolean = section["name"] != this.currentSection;
  //   this.currentSection = section["name"];
  //   return changed;
  // }

  // private determineScrolledSection(scrolled: number): void {
  //   let section: string = Object.keys(SCROLL).filter(range => {
  //     let nums: number[] = range.split("-").map(num => {
  //       return parseFloat(num);
  //     });
  //     return scrolled >= nums[0] && scrolled <= nums[1];
  //   })[0];
  //   let changed: boolean = this.changeSection(SCROLL[section]);
  //   if (changed) {
  //     // this.sectionService.getCurrentSection();
  //     this.sectionService.scrollTo("work");
  //   }
  // }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event) {
  //   let scroller: any = event.target['scrollingElement'];
  //   this.determineScrolledSection(scroller.scrollTop);
  // }

}
