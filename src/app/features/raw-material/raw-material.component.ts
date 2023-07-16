import {Component, OnInit} from '@angular/core';
import {RawMaterialService} from "../../core/api/raw-material/raw-material.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.scss']
})
export class RawMaterialComponent implements OnInit {

  rawMaterials: any[] = [];
  currentPage: number = 1;
  prevPage: number = 0;
  nextPage: number = 0;
  totalPages: number = 1;
  searchName: string = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private rawmaterialService: RawMaterialService) {
  }

  ngOnInit(): void {
    //TODO : Get session to check if connected

    this.route.queryParams.subscribe(params => {
      this.searchName = params['name'];
      this.getRawMaterials(this.currentPage, this.searchName);
    });
  }

  getRawMaterials(page: number, name: string) {
    this.currentPage = page;
    this.rawmaterialService.getRawMaterials(page, name).subscribe(result => {
      this.rawMaterials = result.rawmaterials;
      this.currentPage = result.page.page
      this.prevPage = result.page.prev
      this.nextPage = result.page.next
      this.totalPages = result.page.pages
    })
  }

  search() {
    this.router.navigateByUrl('/rawmaterials?name=' + this.searchName);
  }

  create() {
    this.router.navigate(['/rawmaterials/new']);
  }

  detail(id: number) {
    this.router.navigate(['/rawmaterials/' + id]);
  }

  delete(id: number) {
    this.rawmaterialService.deleteRawMaterial(id).subscribe(result => {
      this.getRawMaterials(1, this.searchName);
    });
  }

}
