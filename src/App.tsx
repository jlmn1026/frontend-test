import { AppRoutes } from "./routes/routes";
import { AppProvider } from "./providers/app-provider";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
