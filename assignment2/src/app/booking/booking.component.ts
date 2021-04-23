import { Component, OnInit } from '@angular/core';
import {gql, Apollo} from 'apollo-angular'
import { Booking } from '../models/Booking';

const Get_MyBookings = gql`query{
  getBookings{
    hotel_id,
    booking_date,
    booking_start,
    booking_end,
    user_id
  }
}`;

const AddBookings = gql `mutation{
  addBookings(hotel_id: 3,
  booking_date: "04-05-2021",
  booking_start: "04-06-2021",
  booking_end: "04-09-2021",
  user_id: 7){
    hotel_id
    booking_date
    booking_start
    booking_end
    user_id
  }

}`

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  allBookings:Booking[] = [];
  bookingsForm: any = {
    hotel_id: 0,
    booking_date: '',
    booking_start: '',
    booking_end: '',
    user_id: 0
  }
  constructor(private appllo:Apollo) { }

  ngOnInit(): void {
    this.appllo.watchQuery<any>({
      query: Get_MyBookings
    }).valueChanges
    .subscribe(({data, loading}) => {
      console.log(loading);
      this.allBookings = data.getBookings
    })
  }

  newBooking(){
    this.appllo.mutate<any>({
      mutation: AddBookings,
      variables: {
        hotel_id: Number(this.bookingsForm.hotel_id),
        booking_date: this.bookingsForm.booking_date,
        booking_start: this.bookingsForm.booking_start,
        booking_end: this.bookingsForm.booking_end,
        user_id: Number(this.bookingsForm.user_id)

      },
    }).subscribe(({data}) => {
      let bookings = Object.assign([], this.allBookings);
      bookings.unshift(data["addBookings"]);
      this.allBookings = bookings;
    });
  }

}
