import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RawMaterialService} from "../../../core/api/raw-material/raw-material.service";

@Component({
  selector: 'app-raw-material-new',
  templateUrl: './raw-material-new.component.html',
  styleUrls: ['./raw-material-new.component.scss']
})
export class RawMaterialNewComponent implements OnInit {

  name: string = '';
  category: string = '';
  supplier: string = '';

  constructor(private router: Router,
              private rawmaterialService: RawMaterialService) {
  }

  ngOnInit(): void {
    //TODO : Get session to check if connected
  }

  cancel() {
    this.router.navigateByUrl('/rawmaterials');
  }

  create() {
    const params = {
      name: this.name,
      category: this.category,
      supplier: this.supplier,
      score: 0
    }
    this.rawmaterialService.createRawMaterial(params).subscribe(result => {
      this.router.navigateByUrl('/rawmaterials');
    })
  }

}
