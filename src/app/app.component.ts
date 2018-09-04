import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../jokes/random.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bootcamp-todo3';

  url: string;
  joke: string;
  data: Joke;
  data$: Observable<Joke>;

  constructor(private http: HttpClient) {
    this.url = 'http://api.icndb.com/jokes/random/';

    this.http.get<Joke>(this.url).subscribe((result) => {
      this.joke = result.value.joke;
      this.data = result;
    });

    this.data$ = this.http.get<Joke>(this.url);
  }
}
