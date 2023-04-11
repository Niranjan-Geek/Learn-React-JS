import './App.css';

function App() {

  var fullName = ["Niranjan ", "Prajapati"];
  var occupation = ["Web Designer."];
  var biodata = ["My name is ", ...fullName, ". I am a ", ...occupation]; //1.Concatination and 2.Adding elements

  var [first, ...name] = fullName; //3.Destructuring
  console.log(name);

  const nameFull = {
    fname: "Niranjan",
    lname: "Prajapati",
  };

  const employee = {
    id: 1,
    ...nameFull,
    age: 25,
    gender: "Male",
  }  //4.Combining objects

  console.log(employee);

  return (
      <>
        <h1>Spread operator</h1>
        <h5>{biodata}</h5>
        <h5>{first}</h5>
      </>    
  );
}

export default App;
