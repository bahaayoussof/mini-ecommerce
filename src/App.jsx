import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { FavoritesProvider } from "./context/FavoriteContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <Header />
        <FavoritesProvider>
          <Dashboard />
        </FavoritesProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
