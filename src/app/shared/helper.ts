import { Inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class Helper {
    
    constructor(private toastr: ToastrService) {}

    showHideUrl(shouldHideUrl: boolean): void{
        if (shouldHideUrl) {
            this.toastr.info('Url shown');
        } else {
            this.toastr.info('Url hidden');
        }
    }
}