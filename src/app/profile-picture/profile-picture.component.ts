import { Component, OnInit } from '@angular/core';
import { ProfilePictureService } from '../profile-picture.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css'],
  providers: [ProfilePictureService]
})
export class ProfilePictureComponent implements OnInit {
  private imageUrl: string;
  constructor(private pService: ProfilePictureService) { }

  ngOnInit() {
  }
  onSelectedFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        const url: string | ArrayBuffer = reader.result;
        if (typeof url === 'string') {
          this.imageUrl = url;
          this.pService.setImageUrl(url);
          console.log(this.imageUrl);
        }
      };
    }
  }

  setImageUrl(): string {
    const serviceUrl = this.pService.getImageUrl();
    if (typeof this.imageUrl !== 'undefined' && typeof serviceUrl !== 'undefined') {
      if (this.imageUrl.length === 0 && serviceUrl.length >= 0) {
        return serviceUrl;
      }
    }
    return this.imageUrl;
  }

}
