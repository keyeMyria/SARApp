import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../shared/Services/api.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  constructor(

    private route: ActivatedRoute,
    private responseResetService: ApiService,
    private router: Router,

  ) { 

    this.route.queryParams.subscribe(params => {

      [

        this.form.resetToken = params['token'],
        this.form.email = params['email']

      ]

    });

  }

  public form = {

    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null

  };

  public error = [];

  public message = null;

  ngOnInit() {
  }

  onSubmit() {
    this.responseResetService.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    console.log(data);
    this.router.navigateByUrl('/login');
  }

  handleError(error){
    this.error = error.error.errors;
  }

}
