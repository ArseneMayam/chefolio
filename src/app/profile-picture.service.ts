import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilePictureService {

  constructor() { }
  private imageUrl: string[] = [];
  public setImageUrl(url: string ) {
    this.imageUrl.push(url);
    console.log('service p : ', this.getImageUrl);
  }
  public getImageUrl(): string {
    if (typeof this.imageUrl !== 'undefined' ){
      return this.imageUrl[0];
    }
    return '';
  }
}
