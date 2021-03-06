export interface User {
  id: number | null;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: Company;
  address: Address;
}

type Company = Record<'name' | 'catchPhrase' | 'bs', string>;
type Geo = Record<'lat' | 'lng', string>;
type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
