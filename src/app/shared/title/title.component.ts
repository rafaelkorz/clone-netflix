import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: any;
  @ViewChild('trailer', { static: true }) trailer: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngOnInit(): void {
  }

  playVideo() {
    this.trailer.nativeElement.play();
  }

  stopVideo() {
    this.trailer.nativeElement.currentTime = 0;
    this.trailer.nativeElement.pause();
  }

  getMuted(): boolean {
    return this.trailer.nativeElement.muted;
  }

  toggleSound() {
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted;
  }
}
