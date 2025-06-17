import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Article {
  title: string;
  author: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private API_KEY = 'pub_6eb66db027694355a9c01019f5ef3ffa';
  private BASE_URL = 'https://newsdata.io/api/1/news';

  constructor(private http: HttpClient) {}

  getArticlesByAuthor(query: string): Observable<Article[]> {
    const url = `${this.BASE_URL}?apikey=${this.API_KEY}&q=${query}&language=en`;
    return this.http.get<any>(url).pipe(
      map(response =>
        (response.results || []).map((item: any) => ({
          title: item.title,
          author: item.creator?.[0] || 'Unknown',
          description: item.description || '',
        }))
      )
    );
  }
}
