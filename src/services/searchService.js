import { Observable, Subject } from "rxjs";
import { serach } from "./BooksAPI";

export class SearchService {
  constructor() {
    this.searchTerm = new Subject();
  }

  search(term) {
    this.searchTerm.next(term.value);
  }

  doSearch(term) {
    return Observable.fromPromise(search(term));
  }

  getResults() {
    return this.searchTerm
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(term => (term ? this.doSearch(term) : Observable.of([])))
      .catch(error => {
        console.error(error);
        return Observable.of([]);
      });
  }
}
