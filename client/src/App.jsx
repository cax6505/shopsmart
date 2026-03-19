import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FlashSale from "./components/FlashSale";
import TodaysForYou from "./components/TodaysForYou";
import BestSellingStore from "./components/BestSellingStore";
import Footer from "./components/Footer";
import "./hero-categories.css";
import "./products.css";

function App() {
  return (
    <div className="app-layout">
      <TopBar />
      <Header />
      <main className="main-content">
        <Hero />
        <Categories />
        <FlashSale />
        <TodaysForYou />
        <BestSellingStore />
      </main>
      <Footer />
    </div>
  );
}

export default App;
