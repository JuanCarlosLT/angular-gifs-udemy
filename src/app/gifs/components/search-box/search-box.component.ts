import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput') tagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService,
  ) { }

  // serchTage(newTag: string): void {
  //   console.log('newTag: ', newTag)
  // }
  serchTage(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.serchTag(newTag);
    this.tagInput.nativeElement.value = '';

  }
}
