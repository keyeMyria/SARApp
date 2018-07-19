import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/Services/api.service';
import { TokenService } from '../../../shared/Services/token.service';
import { UserService } from '../../../shared/Services/user.service';
import { AuthService } from '../../../shared/Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fileToUpload: File = null;
  form: boolean = false;
  selectedFile: File = null;
  constructor(
    private _service : ApiService,
    private Token : TokenService,
    private _user : UserService,
    private auth : AuthService
  ) { }

  public role: string = null;
  public profile = {
    name:null,
    gender:null,
    birthdate:null,
    contact:null,
    street:null,
    city:null,
    state:null,
    zip:null,
    avatar: null,
    image: null
  };

  ngOnInit() {
     // a service that observes any changes with the users data
     this.auth.currentData.subscribe(data => this.handleResponse(data));
  }

  handleResponse(data){
    this.profile.image = "http://localhost:8000/storage/images/" + data.data.avatar;
    this.profile.name = data.data.name;
    this.profile.gender = data.data.gender;
    this.profile.birthdate = data.data.birthdate;
    this.profile.contact = data.data.contact;
    this.profile.street = data.data.street;
    this.profile.city = data.data.city;
    this.profile.state = data.data.state;
    this.profile.zip = data.data.zip_code;
    this.role = data.data.role_id;
  }

  handleError(error){
    console.log(error);
  }

  onFileSelected(event, file: FileList) {
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.profile.image = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    let fd = new FormData();
    if(this.selectedFile)
    fd.append('file', this.selectedFile, this.selectedFile.name);

    fd.append('name', this.profile.name);
    fd.append('gender', this.profile.gender);
    fd.append('birthdate', this.profile.birthdate);
    fd.append('contact', this.profile.contact);
    fd.append('street', this.profile.street);
    fd.append('city', this.profile.city);
    fd.append('state', this.profile.state);
    fd.append('zip', this.profile.zip);

    if(this.role == '2')
      fd.append('role', this.role);
    else if(this.role == '3')
      fd.append('role', this.role)

    this._service.update(fd).subscribe(
      data => {
        this.handleResponseEditProfile(data);
      }
    )
  }

  handleResponseEditProfile(data) {
    this.form = false;
    alert(data.message);
  }

  showEditForm(e) {

    e.preventDefault();
    this.form = true;

  }

  cancelFormEdit() {
    this.form = false;
  }

}
