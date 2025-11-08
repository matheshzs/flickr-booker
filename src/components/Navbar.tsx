import { Film } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 transition-colors hover:text-primary">
          <Film className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">
            Cinema<span className="text-primary">Hub</span>
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
};
