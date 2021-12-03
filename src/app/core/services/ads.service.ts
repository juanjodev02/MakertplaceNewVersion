import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ISlide} from "../../shared/types/ISlide";
import {mockSlides} from "../../../mocks/mock.data";

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor() { }

  getMainSlides(): Observable<ISlide[]> {
    return new Observable<ISlide[]>(observer => {
      observer.next(mockSlides);
    });
  }
}
