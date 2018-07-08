import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../shared/Services/api.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  public form = {
    token: null,
    email: null
  };

  constructor(

    private route : ActivatedRoute,
    private router : Router,
    private __apiService : ApiService
  ) { 

    this.route.queryParams.subscribe(params => {

      [

        this.form.token = params['token'],
        this.form.email = params['email']

      ]

    });
  }

  public error = null;

  ngOnInit() {

    this.__apiService.verifyEmail(this.form).subscribe(

      data => this.handleResponse(data),
      error => this.handleError(error)

    );

  }

  handleResponse(data) {
    console.log(data);
    let _router = this.router;
    _router.navigateByUrl('/login');

  }

  handleError(error){
    console.log(error);
    this.error = error.error.error;
    let _router = this.router;
    _router.navigateByUrl('/login');

  }

}
