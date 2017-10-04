import { Inject, Injectable } from '@angular/core';
import { TOASTR_TOKEN, Toastr } from './../shared/toastr.service';

@Injectable()
export class Helper {
    
    constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr) {}

    showHideUrl(shouldHideUrl: boolean): void{
        if (shouldHideUrl) {
            this.toastr.info('Url shown');
        } else {
            this.toastr.info('Url hidden');
        }
    }
}