import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../shared/contact.model';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  loading: boolean = false;
  newContact: Contact;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.loading = true;
    const formValues = Object.assign({}, form.value);

    const contact: Contact = {
      name: `${formValues.firstName} ${formValues.lastName}`,
      address: formValues.address,
      phone: `${formValues.areaCode} ${formValues.prefix}-${formValues.lineNumber}`,
      photoUrl: formValues.photo
    }

    this.apiService.post('contacts', contact)
      .subscribe( (data) => {
        form.reset();
        this.loading = false;
        this.newContact = data;
      })
  }

}
