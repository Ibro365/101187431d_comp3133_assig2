import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assignment2';
  isValid = false;

  ngOnInit(): void {
    let val = localStorage.getItem('isValidUser')

    if(val != null && val == 'true'){
      this.isValid = true
    }else{
      this.isValid = false
    }
  }
}
