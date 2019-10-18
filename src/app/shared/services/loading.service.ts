import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable()
export class LoadingService {
    loaderEnabled= new BehaviorSubject<boolean>(false);

    constructor() {
    }

    getLoader(): Observable<boolean> {
        return this.loaderEnabled;
    }

    setLoader(loadingState): void {

        this.loaderEnabled.next(loadingState);
    }


}
