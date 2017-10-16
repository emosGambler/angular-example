import { Inject, Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Helper {
    
    constructor(private toastr: ToastsManager) {}

    showHideUrl(shouldHideUrl: boolean): void{
        if (shouldHideUrl) {
            this.toastr.info('Url shown');
        } else {
            this.toastr.info('Url hidden');
        }
    }
}