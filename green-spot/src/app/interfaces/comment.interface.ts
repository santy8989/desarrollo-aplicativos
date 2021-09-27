export interface Comment {
  UserName: string;
  comment: string;
  createdAt: number;
  idProduct?:number;
  idStore?:number;
}
