import { MovieCard } from "@/components/MovieCard";
import { movies } from "@/data/movies";
import { Film } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <Film className="h-12 w-12 text-primary" />
            <h1 className="text-5xl font-bold text-foreground md:text-6xl">
              Cinema<span className="text-primary">Hub</span>
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Book your favorite movies with the best seats at the best prices
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Now Showing</h2>
          <p className="text-muted-foreground">Latest movies in theaters</p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <div key={movie.id} className="animate-fade-in">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
