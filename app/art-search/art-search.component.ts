import { Component, OnInit } from "@angular/core";
import { BusService } from "../shared/bus.service";

@Component({
  selector: "app-art-search",
  templateUrl: "./art-search.component.html",
  styleUrls: ["./art-search.component.css"]
})
export class ArtSearchComponent implements OnInit {
  constructor(private busService: BusService) {}

  ngOnInit() {}

  search(searchField: HTMLInputElement) {
    this.busService.searchTerm.next(searchField.value);
    searchField.value = "";
  }
}
