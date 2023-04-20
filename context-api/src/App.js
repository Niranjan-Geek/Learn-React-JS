import { createContext } from 'react';
import './App.css';
import ComponentA from './ComponentA';

const FirstName = createContext();
const LastName = createContext();

function App() {  
  return (
    <>
    <FirstName.Provider value="Niranjan">
      <LastName.Provider value="Prajapati">
        <ComponentA />
      </LastName.Provider>
    </FirstName.Provider>
    </>
  );
}

export default App;
export {FirstName, LastName};
