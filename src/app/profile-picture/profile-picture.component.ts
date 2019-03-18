import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {
  private imageUrl: string;
  constructor() { }

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
          console.log(this.imageUrl);
        }
      };
    }
  }

}
