import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-back-end',
  templateUrl: './test-back-end.component.html',
  styleUrl: './test-back-end.component.css'
})
export class TestBackEndComponent {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.callApi();
  }

  callApi() {
    const apiUrl = 'http://localhost:3000/api/your-endpoint'; // Replace with your API endpoint

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
  }
}
