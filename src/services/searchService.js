import { Subject, of, from } from "rxjs";
import { search } from "./BooksAPI";

import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError
} from "rxjs/operators";

export class SearchService {
  constructor() {
    this.searchTerm = new Subject();
  }

  search(query) {
    this.searchTerm.next(query);
  }

  doSearch(query) {
    return from(search(query));
  }

  getResults() {
    return this.searchTerm.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(query => (query ? this.doSearch(query) : of([]))),
      catchError(error => {
        console.error(error);
        return of([]);
      })
    );
  }
}
