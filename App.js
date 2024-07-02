const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "child1",
         {},
          [React.createElement("h1",{},"Im h1"), React.createElement("h2",{},"Im h2")]),
          React.createElement(
            "child2",
             {},
              [React.createElement("h1",{},"Im h1"), React.createElement("h2",{},"Im h2")])]
);
    const heading = React.createElement(
        "h1",
         {id:"heading"},
          "Hello World from React");
    
    
const root = ReactDOM.createRoot(document.getElementById("root"));
    
console.log(heading);
root.render(parent);
