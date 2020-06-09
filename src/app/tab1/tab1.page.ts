import { Observable } from 'rxjs';
import { BibleService } from './../api/bible.service';
import { Component } from '@angular/core';






@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',

  styleUrls: ['tab1.page.scss']


})
export class Tab1Page {

  slideOpts = {
    initialSlide: 0,
    speed: 600,
    autoplay:true
    
  };

  constructor (public bibleservice: BibleService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.bibleservice.listar().subscribe(data=> {console.log (data)
  },error => console.log(error)
  )

}

}
