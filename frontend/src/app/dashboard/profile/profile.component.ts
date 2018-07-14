import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/Services/api.service';

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
  ) { }

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
    this._service.getProfile().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.profile.image = "http://localhost:8000/storage/images/" + data.data.avatar;
    this.profile.name = data.data.user.name;
    this.profile.gender = data.data.gender;
    this.profile.birthdate = data.data.birthdate;
    this.profile.contact = data.data.contact;
    this.profile.street = data.data.address.street;
    this.profile.city = data.data.address.city;
    this.profile.state = data.data.address.state;
    this.profile.zip = data.data.address.zip_code;
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
    this._service.update(fd).subscribe(
      data => {
        this.handleResponseEditProfile(data);
      }
    )
  }

  handleResponseEditProfile(data) {
    this.form = false;
    alert(data.message);
    //location.reload();
  }

  showEditForm(e) {

    e.preventDefault();
    this.form = true;

  }

  cancelFormEdit() {
    this.form = false;
  }

}
