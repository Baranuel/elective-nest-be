/* eslint-disable prettier/prettier */
export class BookingDto {
  id?: number;
  name: string;
  numberOfPeople: number;
  date: Date;
  phoneNumber: string;
  email: string;
  comments: string;


  constructor(name: string, numberOfPeople: number, date: Date, phoneNumber: string, email: string, comments: string, id?: number) {
    this.name = name;
    this.numberOfPeople = numberOfPeople;
    this.date = date;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.comments = comments;
    this.id = id;
  }
}
