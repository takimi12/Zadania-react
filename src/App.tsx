


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Books86 } from "./odcinek86/books";
import { BookStat } from "./odcinek86/BookStats";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BookStat />
      <Books86 />
    </QueryClientProvider>
  );
}

export default App;
