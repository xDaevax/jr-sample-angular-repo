import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { BaseComponent } from './shared/components/base-component';
import { PageService } from './shared/services/page.service';

/**
 * Primary application component that serves as the entry point for the user interface.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy {
  private _title: string;
  public get title(): string {
    return this._title;
  }

  private titleSubscription: Subscription;

  /**
   * Initializes a new instance of the AppComponent class.
   */
  constructor(private primengConfig: PrimeNGConfig, private pageService: PageService) {
    super();
    this._title = '';
    this.titleSubscription = Subscription.EMPTY;
  }

  /**
   * Performs one-time component initialization.  Invoked by the framework.
   */
  public ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.titleSubscription = this.pageService.$title.subscribe(newTitle => {
      this._title = newTitle;
      document.title = this.title;
    });
  }

  /**
   * Performs component cleanup.  Invoked by the framework.
   */
  public ngOnDestroy(): void {
    this.titleSubscription?.unsubscribe();
  }
}
