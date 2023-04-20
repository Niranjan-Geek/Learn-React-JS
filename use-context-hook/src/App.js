import { createContext } from 'react';
import A from './A';
import './App.css';

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value="Use">
        <LastName.Provider value="Context">
          <A />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export {FirstName, LastName};
