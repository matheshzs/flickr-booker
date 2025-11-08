import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Seat } from "@/types/movie";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Booking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { movie, showtime } = location.state || {};

  const [seats, setSeats] = useState<Seat[]>(
    Array.from({ length: 80 }, (_, i) => {
      const row = String.fromCharCode(65 + Math.floor(i / 10));
      const number = (i % 10) + 1;
      const isPremium = Math.floor(i / 10) >= 3 && Math.floor(i / 10) <= 5;
      const isBooked = Math.random() > 0.7;
      
      return {
        id: `${row}${number}`,
        row,
        number,
        type: isPremium ? "premium" : "regular",
        status: isBooked ? "booked" : "available",
      };
    })
  );

  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  if (!movie || !showtime) {
    navigate("/");
    return null;
  }

  const toggleSeat = (seat: Seat) => {
    if (seat.status === "booked") return;

    const isSelected = selectedSeats.some((s) => s.id === seat.id);
    
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((s) => s.id !== seat.id));
      setSeats(seats.map((s) => 
        s.id === seat.id ? { ...s, status: "available" } : s
      ));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
      setSeats(seats.map((s) => 
        s.id === seat.id ? { ...s, status: "selected" } : s
      ));
    }
  };

  const calculateTotal = () => {
    return selectedSeats.reduce((total, seat) => {
      const seatPrice = seat.type === "premium" ? showtime.price * 1.5 : showtime.price;
      return total + seatPrice;
    }, 0);
  };

  const handleConfirmBooking = () => {
    if (selectedSeats.length === 0) {
      toast({
        title: "No seats selected",
        description: "Please select at least one seat to continue.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Confirmed!",
      description: `Successfully booked ${selectedSeats.length} seat(s) for ${movie.title}`,
    });

    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Movie
        </Button>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="mb-6 text-3xl font-bold text-foreground">Select Your Seats</h1>
            
            <div className="mb-8 rounded-lg bg-muted/30 p-4 text-center">
              <div className="mx-auto h-2 w-3/4 rounded-full bg-muted" />
              <p className="mt-2 text-sm text-muted-foreground">Screen</p>
            </div>

            <div className="mb-6 space-y-2">
              {Array.from({ length: 8 }, (_, i) => {
                const row = String.fromCharCode(65 + i);
                const rowSeats = seats.filter((s) => s.row === row);
                
                return (
                  <div key={row} className="flex items-center justify-center gap-2">
                    <span className="w-8 text-center text-sm font-semibold text-muted-foreground">
                      {row}
                    </span>
                    <div className="flex gap-2">
                      {rowSeats.map((seat) => (
                        <button
                          key={seat.id}
                          onClick={() => toggleSeat(seat)}
                          disabled={seat.status === "booked"}
                          className={`h-8 w-8 rounded-t-lg text-xs font-medium transition-all ${
                            seat.status === "booked"
                              ? "cursor-not-allowed bg-muted text-muted-foreground"
                              : seat.status === "selected"
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                              : seat.type === "premium"
                              ? "bg-accent/20 text-accent-foreground hover:bg-accent/40"
                              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          }`}
                        >
                          {seat.number}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-t-lg bg-secondary" />
                <span className="text-muted-foreground">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-t-lg bg-primary" />
                <span className="text-muted-foreground">Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-t-lg bg-accent/20" />
                <span className="text-muted-foreground">Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-t-lg bg-muted" />
                <span className="text-muted-foreground">Booked</span>
              </div>
            </div>
          </div>

          <div>
            <Card className="sticky top-24 border-border bg-card p-6">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Booking Summary</h2>
              
              <div className="mb-6 space-y-3 border-b border-border pb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Movie</p>
                  <p className="font-semibold text-foreground">{movie.title}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Showtime</p>
                  <p className="font-semibold text-foreground">{showtime.time}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Theater</p>
                  <p className="font-semibold text-foreground">{showtime.theater}</p>
                </div>
              </div>

              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Selected Seats</span>
                  <span className="font-semibold text-foreground">
                    {selectedSeats.length > 0
                      ? selectedSeats.map((s) => s.id).join(", ")
                      : "None"}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">${calculateTotal().toFixed(2)}</span>
                </div>
              </div>

              <Button
                className="w-full"
                size="lg"
                disabled={selectedSeats.length === 0}
                onClick={handleConfirmBooking}
              >
                Confirm Booking
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
