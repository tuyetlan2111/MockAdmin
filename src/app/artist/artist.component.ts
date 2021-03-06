import { Component, OnInit,ViewChild,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {



  
  artist:any = [];
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  @ViewChild('dataTable') table;
  dataTable: any;
  ngOnInit() {
    this.getArtist();
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

  getArtist(){
    this.artist = [];
    this.rest.getArtist().subscribe((data: {}) => {
      this.artist = data;
      console.log(data);
    });
  }

  delete(id) {
    this.rest.deleteArtist(id)
      .subscribe(res => {
          this.getArtist();
        }, (err) => {
          console.log(err);
        }
      );
  }

  


}
