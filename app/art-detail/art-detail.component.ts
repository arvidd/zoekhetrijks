import { Component, OnInit, Input } from "@angular/core";
import { ArtService } from "../shared/art.service";
import { ArtDetail } from "../models/art-detail";

@Component({
  selector: "app-art-detail",
  templateUrl: "./art-detail.component.html",
  styleUrls: ["./art-detail.component.css"]
})
export class ArtDetailComponent implements OnInit {
  details: ArtDetail;
  loading: boolean = false;
  @Input() objectId: string;
  constructor(private artService: ArtService) {}

  ngOnInit() {
    this.loading = true;
    this.artService.detail(this.objectId).subscribe(data => {
      this.details = data;
      this.loading = false;
      console.log(data);
    });
  }
}
