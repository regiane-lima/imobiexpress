import Header from "./components/cabeçalho/Header"
import Global from "./components/styles/Global"
import Banner from "./components/banner";
import Index from "./pages/Home/Index";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Index />
      <Footer/>
      <Global />
    </div>
  );
}

export default App;
