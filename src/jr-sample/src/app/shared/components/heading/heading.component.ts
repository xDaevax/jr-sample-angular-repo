import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component';

/**
 * Component used to render a page heading.
 */
@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent extends BaseComponent implements OnInit {
  @Input()
  public headingText: string;

  /**
   * Initializes a new instance of the HeadingComponent class.
   */
  constructor() {
    super();
    this.headingText = '';
  }

  /**
   * Performs one-time component initialization.
   */
  public ngOnInit(): void {
    if (this.headingText === '') {
      this.headingText = 'Heading';
    }
  }
}
