import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  template: `
    <h3>Comentarios</h3>
    <img src="https://i1.sndcdn.com/artworks-HLlqmQQ3FERlTeGb-dHzC8A-t500x500.jpg" alt="un video mas mi genet">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maxime suscipit molestiae pariatur corrupti facere numquam distinctio rerum explicabo eaque, soluta dolore quam delectus, enim aliquid optio repellendus sequi reiciendis?</p>
  `,
  styles: `
  img{
    width: 100px;
    border-radius: 50%;
  }`
})
export class CommentsComponent {

}
