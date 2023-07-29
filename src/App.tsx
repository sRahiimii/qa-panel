import "./App.css";
import React from "react";
import MainLayout from "./components/MainLayout";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import AppRouter from "./Routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </div>
    </QueryClientProvider>
  );
}

export default App;
