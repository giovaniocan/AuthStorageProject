import { AuthProvider } from './src/context/Auth';
import { Router } from './src/routes/router';

export default function App() {
  return (
   <AuthProvider>
    <Router />
   </AuthProvider>
  );
}
