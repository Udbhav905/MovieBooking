import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
const clerk_api_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!clerk_api_key) {
  throw new Error("Missing Clerk API Key");
}
createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={clerk_api_key}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
