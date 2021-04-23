import { Component, OnInit } from '@angular/core';
import {gql, Apollo} from 'apollo-angular'
import { Hotel } from '../models/Hotel';

const Get_MyHotels = gql`query{
  getHotel{
    hotel_id,
    hotel_name,
    street,
    city,
    postal_code,
    price,
    email,
    user_id
  }
}`;

const Get_HotelCities = gql`query{
  getHotelByCity(city: "Montreal"){
    hotel_id,
    hotel_name,
    street,
    postal_code,
    price,
    email,
    user_id
  }
}`;



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allHotels:Hotel[] = [];
  selectedCity:string = '';

  constructor(private appllo:Apollo) { }

  ngOnInit(): void {
    this.appllo.watchQuery<any>({
      query: Get_MyHotels
    }).valueChanges
    .subscribe(({data, loading}) => {
      console.log(loading);
      this.allHotels = data.getHotel
    })
  }

  searchByCity(){
    this.appllo.watchQuery<any>({
      query: Get_HotelCities,
      variables:{
        'city': this.selectedCity
      }
    }).valueChanges
    .subscribe(({data, loading}) => {
      console.log(loading);
      this.allHotels = data.getHotelByCity
    })
  }



}
