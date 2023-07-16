import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RawMaterialService} from "../../../core/api/raw-material/raw-material.service";

@Component({
  selector: 'app-raw-material-edit',
  templateUrl: './raw-material-edit.component.html',
  styleUrls: ['./raw-material-edit.component.scss']
})
export class RawMaterialEditComponent implements OnInit{

  rawmaterial: any;
  name: string = '';
  category: string = '';
  supplier: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private rawmaterialService: RawMaterialService) {
  }

  ngOnInit(): void {
    //TODO : Get session to check if connected

    const id = this.route.snapshot.paramMap.get('id');
    this.rawmaterialService.getRawMaterial(Number(id)).subscribe(result => {
      this.rawmaterial = result;
      this.name = result.name;
      this.category = result.category;
      this.supplier = result.supplier;
    }, error => {
      this.router.navigateByUrl('/rawmaterials');
    })
  }

  cancel() {
    this.router.navigate(['/rawmaterials/' + this.rawmaterial.id]);
  }

  create() {
    const params = {
      name: this.name,
      category: this.category,
      supplier: this.supplier,
      score: 0
    }
    this.rawmaterialService.updateRawMaterial(this.rawmaterial.id, params).subscribe(result => {
      this.router.navigate(['/rawmaterials/' + this.rawmaterial.id]);
    })
  }

}
