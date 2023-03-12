import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html', 
})
export class ContactComponent {
    @Input() name:string = ""
    @Input() value:string = ""
    @Input() icon:string = ""
}
