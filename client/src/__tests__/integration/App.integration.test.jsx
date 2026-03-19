import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../../App.jsx";

describe("App — Integration Tests", () => {
  it("renders the full layout with all main components", () => {
    // We expect TopBar, Header, Hero, Categories, FlashSale, TodaysForYou, BestSellingStore, Footer to render
    render(<App />);

    // Just check the text or presence of key areas
    expect(screen.getByText(/Download shopsmart App/i)).toBeInTheDocument();
    expect(screen.getAllByText(/shopsmart/i).length).toBeGreaterThan(0);
  });

  it("renders expected sections without crashing", async () => {
    render(<App />);

    await waitFor(() => {
      // Hero section text
      expect(screen.getByText(/Limited Time Offer!/i)).toBeInTheDocument();
    });

    // Flash Sale section
    expect(screen.getByText(/Flash Sale/i)).toBeInTheDocument();
    
    // Todays For You section
    expect(screen.getByText(/Todays For You!/i)).toBeInTheDocument();
    
    // Best Selling Store section
    expect(screen.getByText(/Best Selling Store/i)).toBeInTheDocument();
  });
});
