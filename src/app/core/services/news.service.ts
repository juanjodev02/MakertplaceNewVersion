import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {News} from "../models/news.model";
import {mockNews} from "../../../mocks/mock.data";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  public getNews(count?: number): Observable<News[]> {
    return new Observable<News[]>((observer) => {
      observer.next(mockNews.slice(0, count));
    });
  }
}
