import { environment, EndPoints } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, ResponseContentType, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { timeout, catchError, map } from 'rxjs/operators';


@Injectable()
export class CommonService {

    constructor(private http: HttpClient, private httpBlob: Http) {

    }

    get(url, authenticatedUser) {
        let headers_ = this.createHeader(authenticatedUser);

        return this.http.get(`${EndPoints.domain}${EndPoints.port}${url}`, { headers: headers_, observe: 'response' })
            .pipe(timeout(20000000),
                catchError(this.handleError));
    }


    post(url, body, authenticatedUser, additionalHeaders?: HttpHeaders) {
        const bodyString = JSON.stringify(body); // Stringify payload
        let headers_ = new HttpHeaders();
        if (!additionalHeaders) {
            headers_ = this.createHeader(authenticatedUser);
        } else {
            headers_ = additionalHeaders;
            // headers_.append('observe', 'response');
        }

        // tslint:disable-next-line:max-line-length
        return this.http.post(`${EndPoints.domain}${EndPoints.port}${url}`, bodyString, { headers: headers_, observe: 'response' }) // ...using post request
            .pipe(timeout(20000000),
                catchError(this.handleError)); // ...errors if any
    }

    getPdf(url, authenticatedUser) {
        const headers_ = new Headers({
            Authorization: authenticatedUser.details.tokenType + ' ' + authenticatedUser.details.tokenValue
        });
        headers_.append('Content-Type', 'application/json');

        // tslint:disable-next-line:max-line-length
        return this.httpBlob.get(`${EndPoints.domain}${EndPoints.port}${url}`, { headers: headers_, responseType: ResponseContentType.Blob })
            .pipe(timeout(20000000),
                catchError(this.handleError),
                map(
                    (res) => {
                        return new Blob([res.blob()], { type: 'application/pdf' });
                    }));
    }

    postPdf(url, body, authenticatedUser) {
        // environment.apiURL = 'http://192.168.0.1:8081/v1';
        const bodyString = JSON.stringify(body); // Stringify payload
        const headers_ = new Headers({
            Authorization: authenticatedUser.details.tokenType + ' ' + authenticatedUser.details.tokenValue
        });
        headers_.append('Content-Type', 'application/json');

        // tslint:disable-next-line:max-line-length
        return this.httpBlob.post(`${EndPoints.domain}${EndPoints.port}${url}`, bodyString, { headers: headers_, responseType: ResponseContentType.Blob })
            .pipe(timeout(20000000),
                catchError(this.handleError),
                map(
                    (res) => {
                        return new Blob([res.blob()], { type: 'application/pdf' });
                    }));
    }

    postXls(url, body, additionalHeaders?: HttpHeaders) {

        const bodyString = JSON.stringify(body); // Stringify payload
        // ... Set content type to JSON
        let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        if (additionalHeaders) {
            headers = this.addHeaders(additionalHeaders, headers);
        }


        return this.httpBlob.post(`${EndPoints.domain}${EndPoints.port}/${url}`, body, { responseType: ResponseContentType.Blob })
            .pipe(timeout(20000000),
                catchError(this.handleError),
                map(
                    (res) => {
                        return new Blob([res.blob()], { type: 'application/vnd.ms-excel' });
                    }));
    }


    put(url, body, authenticatedUser) {
        const bodyString = JSON.stringify(body); // Stringify payload
        let headers_ = this.createHeader(authenticatedUser);
        // tslint:disable-next-line:max-line-length
        return this.http.put(`${EndPoints.domain}${EndPoints.port}${url}`, body, { headers: headers_, observe: 'response' }) // ...using put request
            .pipe(timeout(20000000),
                catchError(this.handleError)); // ...errors if any
    }

    delete(url, authenticatedUser) {
        let headers_ = this.createHeader(authenticatedUser);
        // tslint:disable-next-line:max-line-length
        return this.http.delete(`${EndPoints.domain}${EndPoints.port}${url}`, { headers: headers_, observe: 'response' }) // ...using delete request
            .pipe(timeout(20000000),
                catchError(this.handleError)); // ...errors if any
    }

    uploadCsv(url, body, authenticatedUser) {

        const headers_ = new HttpHeaders({
            Authorization: authenticatedUser.details.tokenType + ' ' + authenticatedUser.details.tokenValue
        });

        return this.http.post(`${EndPoints.domain}${EndPoints.port}${url}`, body, { headers: headers_, observe: 'response' }) // ...using post request
            .pipe(timeout(20000000),
                catchError(this.handleError)); // ...errors if any
    }

    getImage(url, authenticatedUser) {
        let headers_ = this.createHeader(authenticatedUser);

        return this.http.get(`${EndPoints.domain}${EndPoints.port}${url}`, { headers: headers_, observe: 'response', responseType: 'blob' })
            .pipe(timeout(20000000),
                catchError(this.handleError));
    }

    createHeader(authenticatedUser: any) {
        let headers_ = new HttpHeaders({
            Authorization: authenticatedUser.details.tokenType + ' ' + authenticatedUser.details.tokenValue
        });
        headers_.append('Content-Type', 'application/json');

        return headers_;
    }

    addHeaders(addHeaders: HttpHeaders, headers) {
        const list = addHeaders.keys();
        for (let i = 0; i < list.length; i++) {
            headers = headers.append(list[i], addHeaders.get(list[i]));
        }
        return headers;
    }

    handleError(error) {
        if (error.name === 'TimeoutError') {
            error = new Object({
                error: {
                    error_code: '0000',
                    identifier: null,
                    error_message: 'Loading time out',
                    description: 'Loading time out',
                    code: '0000'
                }
            });
        } else {
            return throwError(error || 'Server error');
        }
        return throwError(error);
    }

}
