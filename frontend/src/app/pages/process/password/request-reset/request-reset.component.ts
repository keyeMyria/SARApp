import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared/Services/api.service';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  constructor(
    private requestResetService: ApiService,
    private progress: NgProgress
  ) { }

  public form = {
    email: null
  };

  public error = null;
  public message = null;

  ngOnInit() {
  }

  onSubmit() {
    this.progress.start();
    this.requestResetService.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.form.email = null;
    alert(data);
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
