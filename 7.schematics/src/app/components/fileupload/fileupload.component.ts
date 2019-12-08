import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FileuploadService } from 'src/app/service/fileupload.service';

@Component({
  selector: 'fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  selectedFile:File;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,private fileService:FileuploadService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.form = this.fb.group({
      fileupload: ['']
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file:File = event.target.files[0];
      this.selectedFile=file;
      reader.readAsDataURL(file);
      let result:any=reader.result;
      console.log(reader,event,result,result.split(',')[1]);

      reader.onload = () => {
        this.form.get('fileupload').setValue({
          filename: file.name,
          filetype: file.type,
          value: result.split(',')[1]
        })
      };
    }
  }

  onSubmit() {
    this.loading = true;

    this.fileService.uploadFile(this.selectedFile).subscribe((response:any)=>{
      alert('success');
      this.loading=false;
    },
    error=>{
      alert('error');
      this.loading=false;
    });
    
    /* const formModel = this.form.value;    
    setTimeout(() => {
      console.log(formModel);
      alert('done!');
      this.loading = false;
    }, 1000); */
  }

  clearFile() {
    this.form.get('fileupload').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  /*onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('name', this.form.get('name').value);
    input.append('avatar', this.form.get('avatar').value);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      alert('done!');
      this.loading = false;
    }, 1000);
  }*/

}
