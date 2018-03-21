export interface Links {
  search: string;
}

export interface WebImage {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
}

export interface ColorsWithNormalization {
  originalHex: string;
  normalizedHex: string;
}

export interface Maker {
  name: string;
  unFixedName: string;
  placeOfBirth: string;
  dateOfBirth: string;
  dateOfBirthPrecision?: any;
  dateOfDeath: string;
  dateOfDeathPrecision?: any;
  placeOfDeath: string;
  occupation: string[];
  roles: string[];
  nationality: string;
  biography?: any;
  productionPlaces: any[];
  qualification?: any;
}

export interface PrincipalMaker {
  name: string;
  unFixedName: string;
  placeOfBirth: string;
  dateOfBirth: string;
  dateOfBirthPrecision?: any;
  dateOfDeath: string;
  dateOfDeathPrecision?: any;
  placeOfDeath: string;
  occupation: string[];
  roles: string[];
  nationality: string;
  biography?: any;
  productionPlaces: string[];
  qualification: string;
}

export interface Acquisition {
  method?: any;
  date: Date;
  creditLine: string;
}

export interface Dating {
  presentingDate: string;
  sortingDate: number;
  period: number;
}

export interface Classification {
  iconClassIdentifier: string[];
  iconClassDescription: string[];
  motifs: any[];
  events: any[];
  periods: any[];
  places: any[];
  people: any[];
  objectNumbers: string[];
}

export interface Dimension {
  unit: string;
  type: string;
  part: string;
  value: string;
}

export interface Label {
  title?: any;
  makerLine?: any;
  description?: any;
  notes?: any;
  date?: any;
}

export interface ArtObject {
  links: Links;
  id: string;
  priref: string;
  objectNumber: string;
  language: string;
  title: string;
  copyrightHolder?: any;
  webImage: WebImage;
  colors: string[];
  colorsWithNormalization: ColorsWithNormalization[];
  normalizedColors: string[];
  normalized32Colors: string[];
  titles: string[];
  description: string;
  labelText?: any;
  objectTypes: string[];
  objectCollection: string[];
  makers: Maker[];
  principalMakers: PrincipalMaker[];
  plaqueDescriptionDutch?: any;
  plaqueDescriptionEnglish?: any;
  principalMaker: string;
  artistRole?: any;
  associations: any[];
  acquisition: Acquisition;
  exhibitions: any[];
  materials: string[];
  techniques: string[];
  productionPlaces: string[];
  dating: Dating;
  classification: Classification;
  hasImage: boolean;
  historicalPersons: any[];
  inscriptions: any[];
  documentation: any[];
  catRefRPK: string[];
  principalOrFirstMaker: string;
  dimensions: Dimension[];
  physicalProperties: any[];
  physicalMedium: string;
  longTitle: string;
  subTitle: string;
  scLabelLine: string;
  label: Label;
  showImage: boolean;
  location?: any;
}

export interface AdlibOverrides {
  titel?: any;
  maker?: any;
  etiketText?: any;
}

export interface ArtObjectPage {
  id: string;
  similarPages: any[];
  lang: string;
  objectNumber: string;
  tags: any[];
  plaqueDescription?: any;
  audioFile1?: any;
  audioFileLabel1?: any;
  audioFileLabel2?: any;
  createdOn: Date;
  updatedOn: Date;
  adlibOverrides: AdlibOverrides;
}

export interface ArtDetail {
  elapsedMilliseconds: number;
  artObject: ArtObject;
  artObjectPage: ArtObjectPage;
}
