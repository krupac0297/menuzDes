import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Pagination } from 'src/app/_models/Pagination';

@Component({
  selector: 'pagination-data',
  templateUrl: './pagination-data.component.html',
  styleUrls: ['./pagination-data.component.scss']
})
export class PaginationDataComponent<T> implements OnInit {
  @Input() source: (query: { [key: string]: string }) => Observable<Pagination<T>>;
  @Output() data = new EventEmitter<Pagination<T>>();
  @Input() foo: Pagination<T>

  constructor(private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      switchMap(q => this.source(q))
    ).subscribe(
      (p) => this.data.emit(p)
    )
  }

}
