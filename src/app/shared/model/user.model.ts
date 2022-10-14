export interface UserModel {
  id: number;
  name: string;
  userName: string;
  email: string;
  address: AddressModel;
  phone: string;
  website: string;
  company: CompanyModel;
}

export interface AddressModel {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoModel;
}

export interface GeoModel {
  lat: number;
  lang: number;
}

export interface CompanyModel {
  name: string;
  catchPhrase: string;
  bs: string;
}
