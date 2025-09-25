import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
	 selector: 'app-root',
	  template: `<h1>Frontend</h1><div>{{message}}</div>`,
})
export class AppComponent {
	 message = 'Loading...';
	  constructor(private http: HttpClient) {
		     this.http.get('/api/hello', { responseType: 'text' })
		          .subscribe(res => this.message = res, () => this.message = 'Error');
			   }
}
