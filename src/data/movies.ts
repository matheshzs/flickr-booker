import { Movie } from "@/types/movie";
import cosmicHorizon from "@/assets/cosmic-horizon.jpg";
import shadowDetective from "@/assets/shadow-detective.jpg";
import loveInParis from "@/assets/love-in-paris.jpg";
import dragonsLegacy from "@/assets/dragons-legacy.jpg";
import comedyNight from "@/assets/comedy-night.jpg";
import hauntedManor from "@/assets/haunted-manor.jpg";

export const movies: Movie[] = [
  {
    id: 1,
    title: "Cosmic Horizon",
    poster: cosmicHorizon,
    rating: 8.5,
    genre: ["Sci-Fi", "Adventure"],
    duration: "2h 28m",
    language: "English",
    synopsis: "In a distant future, humanity's last hope rests on a crew of astronauts who must travel beyond the known universe to find a new home for mankind.",
    cast: ["Emma Stone", "Ryan Gosling", "Michael B. Jordan"],
    showtimes: [
      { id: "1a", time: "10:00 AM", theater: "Screen 1", price: 12, availableSeats: 45 },
      { id: "1b", time: "2:30 PM", theater: "Screen 1", price: 15, availableSeats: 32 },
      { id: "1c", time: "7:00 PM", theater: "IMAX", price: 20, availableSeats: 18 },
      { id: "1d", time: "9:45 PM", theater: "Screen 2", price: 12, availableSeats: 50 },
    ],
    reviews: [
      { id: "r1", author: "Sarah M.", rating: 9, comment: "Absolutely stunning visuals and a gripping story. One of the best sci-fi films in years!", date: "2024-01-15" },
      { id: "r2", author: "Mike T.", rating: 8, comment: "Great cinematography and solid performances. A must-watch on IMAX.", date: "2024-01-10" },
      { id: "r3", author: "Jessica L.", rating: 9, comment: "Mind-blowing experience! The future of cinema is here.", date: "2024-01-08" },
    ],
  },
  {
    id: 2,
    title: "Shadow Detective",
    poster: shadowDetective,
    rating: 7.8,
    genre: ["Thriller", "Mystery"],
    duration: "1h 58m",
    language: "English",
    synopsis: "A seasoned detective must solve a series of cryptic murders before time runs out, uncovering dark secrets that connect to his own past.",
    cast: ["Denzel Washington", "Jodie Comer", "Oscar Isaac"],
    showtimes: [
      { id: "2a", time: "11:30 AM", theater: "Screen 3", price: 12, availableSeats: 38 },
      { id: "2b", time: "3:15 PM", theater: "Screen 2", price: 15, availableSeats: 25 },
      { id: "2c", time: "8:00 PM", theater: "Screen 3", price: 15, availableSeats: 12 },
    ],
    reviews: [
      { id: "r4", author: "David K.", rating: 8, comment: "Edge-of-your-seat thriller with excellent plot twists. Denzel delivers as always.", date: "2024-01-12" },
      { id: "r5", author: "Amanda R.", rating: 7, comment: "Good mystery with some predictable moments, but overall enjoyable.", date: "2024-01-09" },
    ],
  },
  {
    id: 3,
    title: "Love in Paris",
    poster: loveInParis,
    rating: 8.2,
    genre: ["Romance", "Drama"],
    duration: "2h 5m",
    language: "English",
    synopsis: "Two strangers meet by chance in the City of Light and embark on a whirlwind romance that changes their lives forever.",
    cast: ["Timothée Chalamet", "Zendaya", "Florence Pugh"],
    showtimes: [
      { id: "3a", time: "12:00 PM", theater: "Screen 4", price: 12, availableSeats: 42 },
      { id: "3b", time: "4:30 PM", theater: "Screen 4", price: 15, availableSeats: 35 },
      { id: "3c", time: "7:30 PM", theater: "Screen 1", price: 15, availableSeats: 20 },
    ],
    reviews: [
      { id: "r6", author: "Emily P.", rating: 9, comment: "Beautiful romance that made me cry. Perfect date night movie!", date: "2024-01-14" },
      { id: "r7", author: "Chris B.", rating: 8, comment: "Charming and heartfelt. The chemistry between leads is amazing.", date: "2024-01-11" },
      { id: "r8", author: "Lisa H.", rating: 8, comment: "A lovely story set in a breathtaking city. Highly recommend!", date: "2024-01-07" },
    ],
  },
  {
    id: 4,
    title: "Dragon's Legacy",
    poster: dragonsLegacy,
    rating: 9.1,
    genre: ["Fantasy", "Action"],
    duration: "2h 42m",
    language: "English",
    synopsis: "An ancient prophecy awakens as a young warrior discovers they are the last descendant of dragon riders, destined to save the realm from darkness.",
    cast: ["Tom Holland", "Anya Taylor-Joy", "Idris Elba"],
    showtimes: [
      { id: "4a", time: "1:00 PM", theater: "IMAX", price: 20, availableSeats: 28 },
      { id: "4b", time: "5:00 PM", theater: "IMAX", price: 20, availableSeats: 15 },
      { id: "4c", time: "9:00 PM", theater: "Screen 1", price: 18, availableSeats: 22 },
    ],
    reviews: [
      { id: "r9", author: "Tom W.", rating: 10, comment: "Epic fantasy masterpiece! The dragon scenes are absolutely breathtaking.", date: "2024-01-13" },
      { id: "r10", author: "Rachel S.", rating: 9, comment: "Best fantasy film since Lord of the Rings. A true cinematic achievement.", date: "2024-01-10" },
      { id: "r11", author: "Kevin M.", rating: 9, comment: "Incredible world-building and action sequences. Can't wait for the sequel!", date: "2024-01-06" },
    ],
  },
  {
    id: 5,
    title: "Comedy Night Live",
    poster: comedyNight,
    rating: 7.5,
    genre: ["Comedy"],
    duration: "1h 45m",
    language: "English",
    synopsis: "A struggling comedian gets one last chance at the big time when a late-night show host gives them a shot at stardom.",
    cast: ["Kevin Hart", "Awkwafina", "John Mulaney"],
    showtimes: [
      { id: "5a", time: "11:00 AM", theater: "Screen 5", price: 10, availableSeats: 55 },
      { id: "5b", time: "3:00 PM", theater: "Screen 5", price: 12, availableSeats: 48 },
      { id: "5c", time: "6:30 PM", theater: "Screen 4", price: 12, availableSeats: 40 },
    ],
    reviews: [
      { id: "r12", author: "Mark D.", rating: 7, comment: "Had some good laughs but not Kevin Hart's best work. Still entertaining.", date: "2024-01-09" },
      { id: "r13", author: "Jennifer G.", rating: 8, comment: "Funny and uplifting! Great for a lighthearted evening.", date: "2024-01-05" },
    ],
  },
  {
    id: 6,
    title: "Haunted Manor",
    poster: hauntedManor,
    rating: 6.9,
    genre: ["Horror", "Thriller"],
    duration: "1h 52m",
    language: "English",
    synopsis: "A family moves into an old Victorian mansion, only to discover it's inhabited by vengeful spirits with a dark history.",
    cast: ["Jessica Chastain", "James McAvoy", "Lupita Nyong'o"],
    showtimes: [
      { id: "6a", time: "2:00 PM", theater: "Screen 2", price: 12, availableSeats: 30 },
      { id: "6b", time: "8:30 PM", theater: "Screen 3", price: 15, availableSeats: 18 },
      { id: "6c", time: "10:30 PM", theater: "Screen 2", price: 15, availableSeats: 25 },
    ],
    reviews: [
      { id: "r14", author: "Steven L.", rating: 7, comment: "Genuinely scary with great atmosphere. Not for the faint-hearted!", date: "2024-01-11" },
      { id: "r15", author: "Nicole F.", rating: 6, comment: "Decent horror flick with some jump scares. Expected more from the cast.", date: "2024-01-08" },
    ],
  },
];
