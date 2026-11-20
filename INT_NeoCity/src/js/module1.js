// Const
const API_URL = "https://catfact.ninja/fact?max_length=120";
const factElement = document.querySelector("#cat-fact");

// Let
let isLoading = true;

// Arrow function + Template literal
const renderFact = ({ fact }) => `
    Did you know that...
    
    ${fact}
    `;

// Async/await + Fetch
const loadFact = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    factElement.textContent = renderFact(data);
    // console.log(data);
  }
  catch (error) {
    console.error("Error:", error);
    factElement.textContent = "Could not load a fact.";
  }
  finally {
    isLoading = false;
  }
};

loadFact();


