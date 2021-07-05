import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Cart></Cart>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </>
  );
}

export default App;
