import { Movie } from "@/types/movie";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className="group cursor-pointer overflow-hidden border-border bg-card transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex flex-wrap gap-2">
            {movie.genre.map((g) => (
              <Badge key={g} variant="secondary" className="text-xs">
                {g}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold text-foreground line-clamp-1">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold text-foreground">{movie.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{movie.duration}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
