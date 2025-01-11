import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.scss'
})
export class NewPageComponent {

  publishers = [
    {id: 'DC Comics', value:'DC - Comics'},
    {id: 'Marvel Comics', value:'Marvel - Comics'}
  ]
}
