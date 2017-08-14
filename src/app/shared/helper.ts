import * as toastr from 'toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class Helper {

    showHideUrl(shouldHideUrl: boolean): void{
        if (shouldHideUrl) {
            toastr.info('Url shown');
        } else {
            toastr.info('Url hidden');
        }
    }
}