import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  host: string = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<Object> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    let url = this.host + 'files/fileupload'
    return this.http.post(url, formdata);
  }

  findAll(): Observable<Object> {
    return this.http.get(this.host + 'files/findAll');
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', 'http://localhost:8080/files/upload/shared', formdata, {
      reportProgress: true,
      responseType: 'text'
    }
    );
    return this.http.request(req);
  }

}
