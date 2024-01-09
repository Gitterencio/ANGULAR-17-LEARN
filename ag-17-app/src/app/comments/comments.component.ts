import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Inicio de los comentarios</h3>
    <img
      src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-dcb93e90c4e1548ffb16978a5a8d182270c872a9.jpg"
      alt="this is fine"
      srcset=""
    />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, optio
      obcaecati quo quisquam delectus qui unde perferendis laudantium quae quia
      accusantium perspiciatis eveniet dolorum nostrum commodi non? Beatae, eum
      quibusdam.
    </p>
  `,
  styles: `
  img{
    width:100%;
    height:auto;
  }`,
})
export class CommentsComponent {}
