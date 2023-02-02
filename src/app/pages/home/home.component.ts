import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/pages/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any
constructor(private formService: FormService) {
  this.getData();
  console.log(this.data);

}

  ngOnInit(): void {


  }

  getData() {
    this.formService.getCommunities().subscribe((result: any) => (this.data = result));
   }
}
