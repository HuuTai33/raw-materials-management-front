import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RawMaterialService} from "../../../core/api/raw-material/raw-material.service";

@Component({
  selector: 'app-raw-material-detail',
  templateUrl: './raw-material-detail.component.html',
  styleUrls: ['./raw-material-detail.component.scss']
})
export class RawMaterialDetailComponent implements OnInit {

  rawmaterial: any

  constructor(private route: ActivatedRoute,
              private router: Router,
              private rawmaterialService: RawMaterialService) {
  }

  ngOnInit() {
    //TODO : Get session to check if connected

    const id = this.route.snapshot.paramMap.get('id');
    this.rawmaterialService.getRawMaterial(Number(id)).subscribe(result => {
      this.rawmaterial = result;
    }, error => {
      this.router.navigateByUrl('/rawmaterials');
    })
  }

  edit() {
    this.router.navigate(['/rawmaterials/' + this.rawmaterial.id + '/edit']);
  }

  delete() {
    this.rawmaterialService.deleteRawMaterial(this.rawmaterial.id).subscribe(result => {
      this.router.navigateByUrl('/rawmaterials');
    })
  }

}
