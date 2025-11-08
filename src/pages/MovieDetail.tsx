import { useParams, useNavigate } from "react-router-dom";
import { movies } from "@/data/movies";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Clock, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Showtime } from "@/types/movie";

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === Number(id));
  const [selectedShowtime, setSelectedShowtime] = useState<Showtime | null>(null);

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-muted-foreground">Movie not found</p>
      </div>
    );
  }

  const handleBooking = () => {
    if (selectedShowtime) {
      navigate(`/booking/${movie.id}`, { state: { movie, showtime: selectedShowtime } });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-4"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="container mx-auto -mt-32 px-4 pb-12">
        <div className="relative z-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              {movie.title}
            </h1>
            
            <div className="mb-6 flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span className="text-lg font-semibold text-foreground">{movie.rating}/10</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{movie.duration}</span>
              </div>
              <span>{movie.language}</span>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {movie.genre.map((g) => (
                <Badge key={g} variant="outline" className="border-primary text-primary">
                  {g}
                </Badge>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-bold text-foreground">Synopsis</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {movie.synopsis}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-bold text-foreground">Cast</h2>
              <div className="flex flex-wrap gap-2">
                {movie.cast.map((actor) => (
                  <Badge key={actor} variant="secondary" className="px-4 py-2">
                    {actor}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">User Reviews</h2>
              <div className="space-y-4">
                {movie.reviews.map((review) => (
                  <Card key={review.id} className="border-border bg-card p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-foreground">{review.author}</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span className="font-semibold text-foreground">{review.rating}/10</span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="sticky top-24 border-border bg-card p-6">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Select Showtime</h2>
              <div className="space-y-3">
                {movie.showtimes.map((showtime) => (
                  <Button
                    key={showtime.id}
                    variant={selectedShowtime?.id === showtime.id ? "default" : "outline"}
                    className="w-full justify-between"
                    onClick={() => setSelectedShowtime(showtime)}
                  >
                    <div className="text-left">
                      <div className="font-semibold">{showtime.time}</div>
                      <div className="text-xs opacity-80">{showtime.theater}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${showtime.price}</div>
                      <div className="text-xs opacity-80">
                        {showtime.availableSeats} seats
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
              <Button
                className="mt-6 w-full"
                size="lg"
                disabled={!selectedShowtime}
                onClick={handleBooking}
              >
                Continue to Seat Selection
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
