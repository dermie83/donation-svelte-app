export interface Session {
    name: string;
    _id: string;
    token: string;
  }
  
  export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    _id?: string;
  }

  export interface Lighthouse {
    firstName: string;
    lastName: string;
    office: string;
    _id: string;
  }
  
  export interface Donation {
    amount: number;
    method: string;
    lighthouse: Lighthouse | string;
    donor: User | string;
    lat: number;
    lng: number;
  }

  export interface DataSet {
    labels: string[];
    datasets: [{ values: number[] }];
  }