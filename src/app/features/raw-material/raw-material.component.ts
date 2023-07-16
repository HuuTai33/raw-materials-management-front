import {Component, OnInit} from '@angular/core';
import {RawMaterialService} from "../../core/api/raw-material/raw-material.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.scss']
})
export class RawMaterialComponent implements OnInit {

  rawMaterials: any[] = [];

  constructor(private router: Router,
              private rawmaterialService: RawMaterialService) {
  }

  ngOnInit(): void {
    //TODO : Get session to check if connected

    this.getRawMaterials();
  }

  getRawMaterials() {
    this.rawmaterialService.getRawMaterials().subscribe(result => {
      this.rawMaterials = result;
    })
  }

  create() {
    this.router.navigate(['/rawmaterials/new']);
  }

  detail(id: number) {
    this.router.navigate(['/rawmaterials/' + id]);
  }

  delete(id: number) {
    this.rawmaterialService.deleteRawMaterial(id).subscribe(result => {
      this.getRawMaterials();
    });
  }

}
