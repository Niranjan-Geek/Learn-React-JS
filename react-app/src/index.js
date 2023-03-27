import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ImportModule from "./ImportExport/ImportModule";
import Props from "./Props/Props";
import arrayMapMethod from "./ArrayMapMethod/ArrayMapMethod";
import './index.css';

ReactDOM.render([
  <h1>Hello!</h1>,
  <p>My Name is Niranjan Prajapati.</p>
], document.getElementById("root"));


// React Fragment
ReactDOM.render([
  <React.Fragment>
    <h2>Hello! React Fragment</h2>
    <p>My Name is Niranjan.</p>
  </React.Fragment>
], document.getElementById("root"));


// Challange #1 Create a Simple Web App on Top 5 Netflix Series List Using JSX
ReactDOM.render(
  <>
  <h2>#1 Challenge Create a Simple Web App on Top 5 Netflix Series List Using JSX</h2>
    <h3>Netflix Series</h3>
    <h4>Top 5 Netflix Series List</h4>
    <ol>
      <li>The Snow Girl.</li>
      <li>The Great British Baking Show: The Professionals.</li>
      <li>Survivor.</li>
      <li>Lockwood & Co.</li>
      <li>On My Block: Freeridge.</li>
    </ol>
  </>, document.getElementById("root2"));


//JSX Expression
const myName = "Niranjan Prajapati";
const designation = "Web Designer";
ReactDOM.render(
  <>
    <h2>JSX Expression</h2>
    <h3>My Name is {myName}</h3>
    <h4>{myName} is a {designation}.</h4>
  </>, document.getElementById("jsxexpression"));


//Template literals
const fname = "NIRANJAN";
const lname = "PRAJAPATI";
ReactDOM.render(
  <>
    <h2>Template Literals</h2>
    <h3>My first name is {`${fname} & my last name is ${lname}`}</h3>
  </>, document.getElementById("template_literals"));


// Challenge #2: Display Current Date and Time in JSX
const fullname = "Niranjan R. Prajapati";
const currentDate = new Date();
ReactDOM.render(
  <>
    <h2>#2 Challange Display Current Date and Time in JSX</h2> 
    <h3>{`My self ${fullname}.`}</h3>
    <h4>Today's date is {`${currentDate.toDateString()}`}</h4>
    <h4>Current time is {`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}s`}</h4>
  </>,document.getElementById("challenge2") 
);


// JSX Attribute
const attrName = "JSX Attributes";
const img1 = "https://picsum.photos/id/237/500/300";
const link = "https://google.com";

ReactDOM.render(
  <>
  <h2 contentEditable="true">{attrName}</h2>
  <a href={link} title="Image">
    <img src={img1} width="500" height="300" alt="Dog" />
  </a>
  </>,document.getElementById("jsx_attributes")
);
 

// CSS Styling & Importing CSS File & Use Google Fonts
const cssStyle = "CSS Styles";
const cssImg = "https://picsum.photos/seed/picsum/1000/800";

ReactDOM.render(
  <>
  <div className="box">
    <h2 className="title">{cssStyle}</h2>
    <img src={cssImg} width="500" height="400" alt="Nature" />
  </div>
  </>,document.getElementById("css_styling")
);


//Internal CSS & Inline CSS Styling
const inlineCSSObject = {
    color : "#094895",
    textTransform: "uppercase"
};

ReactDOM.render(
  <>
  <h2 style={{
    color: "#00ff00",
    fontWeight: "bold"
  }}>Inline CSS Styling</h2>
  <h4 style={inlineCSSObject}>Inline CSS Style with Object</h4>
  </>,document.getElementById("inline_css_styling")
);


//React Components  
ReactDOM.render(
  <>
    <App />
  </>,document.getElementById("components")
);


//Import & Export Modules
ReactDOM.render(
  <>
    <ImportModule />
  </>,document.getElementById("import_export_module")
);

// Props, Array Map & Fat Arrow Function
ReactDOM.render(
  <>
    <Props />
  </>,document.getElementById("props")
);

// Array Map Method
ReactDOM.render(
  <>
    <h2>Array Map Method</h2>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Designation</th>
        </tr>
      </thead>
      <tbody>
        {arrayMapMethod}
      </tbody>
    </table>
  </>,document.getElementById("array_map_method")
);