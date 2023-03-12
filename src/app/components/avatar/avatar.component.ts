import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: '<img src="{{avatar}}" alt="" srcset="" class="rounded-full m-auto">',
})
export class AvatarComponent {
  @Input() avatar: string = ""
}
