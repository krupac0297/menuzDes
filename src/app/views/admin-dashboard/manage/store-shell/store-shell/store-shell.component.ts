import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AdminStoreDataService } from '../../../_services/admin-store-data.service';
import { empty, Observable, Subscription } from 'rxjs';
import { catchError, finalize, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { FileExtentionValidator } from 'src/app/_modules/fileupload/file-validators';
import { AlertService } from 'src/app/services/alert.service';
import { SearchQueryGeneratorComponent } from 'src/app/views/shared/components/search-query-generator/search-query-generator.component';
import { ModalService } from 'src/app/views/shared/services/modal.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserRole } from 'src/app/_models/user';
import { QueryToString } from 'src/app/_helpers/string-helpers';
import { Pagination } from 'src/app/_models/Pagination';

@Component({
  selector: 'app-store-shell',
  templateUrl: './store-shell.component.html',
  styleUrls: ['./store-shell.component.scss']
})
export class StoreShellComponent implements OnInit, AfterViewInit {
  importComplete: boolean = true;
  isAdmin: boolean = false;

  paginationData: Pagination<any>;
  stores: Array<{ store_id: number, store_name: string, status: string, first_name: string, last_name: string, date: string }>;

  constructor(private adminStoreData: AdminStoreDataService,
    private alertService: AlertService,
    private modalService: ModalService,
    private authService: AuthenticationService
  ) { }

  @ViewChild('queryGen', { read: SearchQueryGeneratorComponent }) queryGen: SearchQueryGeneratorComponent
  querySubs: Subscription;

  ngOnInit(): void {
    this.authService.getUserObject().pipe(take(1)).subscribe(user => { if (user.role === UserRole.Admin) this.isAdmin = true });
    // this.adminStoreData.storeShellAllStores().subscribe(stores => { this.stores = stores });
  }

  paginationSource = (query: { [any: string]: string }) => { this.stores = null; return this.adminStoreData.storeShellPagination(query); }

  ngAfterViewInit(): void {
    // this.querySubs = this.queryGen.query.pipe(
    //   tap(() => this.stores = null),
    //   switchMap((val) => this.adminStoreData.storeShellAllStores(val))).subscribe(
    //     stores => this.stores = stores
    //   )
  }

  handleData(paginationData: Pagination<{ store_id: number, store_name: string, status: string, first_name: string, last_name: string, date: string }>) {
    this.stores = paginationData.data; this.paginationData = paginationData;
  }

  //file upload
  validFileFormats = ['.zip'];
  csvFileValidators = [FileExtentionValidator(this.validFileFormats)];

  handleFileUpload(file: File) {
    this.importComplete = false;
    this.adminStoreData.importCSV(file).pipe(
      switchMap(() => this.adminStoreData.storeShellAllStores()
      )
    ).subscribe(stores => this.stores = stores);
  }

  handleFileError(err: string) {
    this.alertService.showNotification(err);
  }

  deleteStore(index: number) {
    this.modalService.getConfirmation({
      heading: 'Deleting store',
      dialog: 'Are you sure?',
      confirmBtn: 'Delete',
      declineBtn: 'Cancel'
    }).pipe(
      catchError(() => empty()),
      tap(() => { this.alertService.showLoader() }),
      mergeMap(() => this.adminStoreData.deleteStore(this.stores[index].store_id)),
      finalize(() => { this.alertService.hideLoader() })
    ).subscribe(
      () => { this.alertService.showNotification('Store successfully deleted'); this.stores.splice(index, 1); },
      // (errorResp) => { this.alertService.showNotification() }
    )
  }
}
