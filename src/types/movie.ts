export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  genre: string[];
  duration: string;
  language: string;
  synopsis: string;
  cast: string[];
  showtimes: Showtime[];
  reviews: Review[];
}

export interface Showtime {
  id: string;
  time: string;
  theater: string;
  price: number;
  availableSeats: number;
}

export interface Seat {
  id: string;
  row: string;
  number: number;
  type: 'regular' | 'premium';
  status: 'available' | 'selected' | 'booked';
}

export interface Booking {
  movieId: number;
  showtime: Showtime;
  seats: Seat[];
  totalPrice: number;
}
