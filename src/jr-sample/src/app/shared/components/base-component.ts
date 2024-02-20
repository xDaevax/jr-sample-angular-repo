import { Injectable } from '@angular/core';
import { Formats } from 'src/app/localization';

/**
 * Base component class used to encapsulate common component behaviors and fields.
 */
@Injectable()
export class BaseComponent {
    protected formatting: Formats;

    /**
     * Initializes a new instance of the BaseComponent class.
     */
    constructor() {
      this.formatting = new Formats();
    }
}
