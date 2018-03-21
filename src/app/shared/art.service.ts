import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ArtSearchResults } from "../models/art-list";
import { Observable } from "rxjs/Observable";
import { ArtDetail } from "../models/art-detail";

@Injectable()
export class ArtService {
  constructor(private httpClient: HttpClient) {}

  search(
    searchTerm: string,
    pageNumber: number = 1
  ): Observable<ArtSearchResults> {
    const url = `https://www.rijksmuseum.nl/api/nl/collection?q=${searchTerm}&p=${pageNumber}&key=${
      environment.rijksmuseumKey
    }&format=json`;
    console.log(url);
    return this.httpClient.get<ArtSearchResults>(url);
  }
  detail(objectNumber: string): Observable<ArtDetail> {
    const url = `https://www.rijksmuseum.nl/api/nl/collection/${objectNumber}?key=${
      environment.rijksmuseumKey
    }&format=json`;
    console.log(url);
    return this.httpClient.get<ArtDetail>(url);
  }
}
