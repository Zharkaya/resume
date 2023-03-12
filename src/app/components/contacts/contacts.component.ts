import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `<div class="py-4 border-b border-white">
                <app-contact name="email" 
                          value="test@test.com"
                          icon="./assets/email.svg">
                </app-contact>
                <app-contact name="phone" 
                             value="+7 (951) 159-45-78"
                             icon="./assets/phone.svg">
                </app-contact>
              </div>`, 
})
export class ContactsComponent {

}
