import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  videoRef:any;
  click_button:any;
  canvas:any;
  constructor() {
    
  }
  ngOnInit():void {
    this.videoRef = document.getElementById('video');
    console.log("===",this.videoRef);
    // this.setupCamera();
  }

  setupCamera() {
    navigator.mediaDevices.getUserMedia({
      video:{width:250, height:250},
      audio:false
    }).then(stream => {
      console.log(stream);  
      this.videoRef.srcObject = stream;
      
    })
  }
  clickPhoto() {
    this.canvas = document.getElementById('canvas');
    this.click_button = document.getElementById('click-button');
    this.canvas.getContext('2d').drawImage(this.videoRef, 0, 0, this.canvas.width, this.canvas.height);
   	let image_data_url = this.canvas.toDataURL('image/jpeg');

   	// data url of the image
   	console.log(image_data_url);

  }
}
