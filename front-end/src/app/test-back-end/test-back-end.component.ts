import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test-back-end',
  templateUrl: './test-back-end.component.html',
  styleUrl: './test-back-end.component.css'
})
export class TestBackEndComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.callApi();
  }

  callApi() {
    const apiUrl = 'users';

    console.log("ok")
    this.httpClient.get(apiUrl).subscribe(
        (response) => {
          console.log('API Response:', response);
          // Do something with the response data
        },
        (error) => {
          console.error('API Error:', error);
          // Handle the error
        }
    );
    console.log("ok2")

  }
}
