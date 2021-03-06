// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-orders1',
//   templateUrl: './orders1.component.html',
//   styleUrls: ['./orders1.component.scss']
// })
// export class Orders1Component {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
/***** */
import { Component,OnInit, ViewChild, TemplateRef, AfterViewInit, OnDestroy  } from '@angular/core';
import { SideNavbarService } from 'src/app/services/side-navbar.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-orders1',
  templateUrl: './orders1.component.html',
  styleUrls: ['./orders1.component.scss']
})
export class Orders1Component implements AfterViewInit, OnDestroy{

  id: number;
  
  constructor(private sideNavServ: SideNavbarService) { }
    displayBanner: boolean = true;
 
  @ViewChild('sideBarLinks', { read: TemplateRef }) sideBarLinks: TemplateRef<any>;

  ngAfterViewInit(): void {
    //this.sideNavServ.AddTemplate();
  }
  ngOnDestroy(): void {
    //this.sideNavServ.RemoveTemplate('RestMenu');
  }

  ngOnInit(): void {
  }

}

