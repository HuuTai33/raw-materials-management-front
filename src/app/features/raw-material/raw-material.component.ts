import {Component, OnInit} from '@angular/core';
import {RawMaterialService} from "../../core/api/raw-material/raw-material.service";

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.scss']
})
export class RawMaterialComponent implements OnInit {

  rawMaterials: any[] = [];

  constructor(private rawmaterialService: RawMaterialService) {
  }

  ngOnInit(): void {
    //TODO : Get session to check if connected

    this.rawmaterialService.getRawMaterials().subscribe(result => {
      this.rawMaterials = result;
    })
  }

}
