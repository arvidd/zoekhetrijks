import { Component, OnInit } from "@angular/core";
import { BusService } from "../shared/bus.service";
import { ArtService } from "../shared/art.service";
import { ArtSearchResults } from "../models/art-list";

@Component({
  selector: "app-art-list",
  templateUrl: "./art-list.component.html",
  styleUrls: ["./art-list.component.css"]
})
export class ArtListComponent implements OnInit {
  loading: boolean = false;
  constructor(private busService: BusService, private artService: ArtService) {}
  pageNumber = 1;
  listOfArt: ArtSearchResults;
  searchTerm: string;
  ngOnInit() {
    this.busService.searchTerm.subscribe(searchTerm => {
      this.pageNumber = 1;
      this.searchTerm = searchTerm;
      this.search();
    });
  }

  search() {
    this.loading = true;
    this.artService.search(this.searchTerm, this.pageNumber).subscribe(data => {
      this.listOfArt = data;
      this.loading = false;
    });
  }
  pageChange(value: number) {
    this.pageNumber += value;
    this.listOfArt = undefined;
    this.search();
  }
}
