// Const
const API_URL = "https://your-api-or-json-file"; 

 // Arrow function + Template literal
const renderProfile = ({ name, age, hobbies }) => `
  <h1>${name}</h1>
  <p>Age ${age}</p>
  <p>${hobbies.join(", ")}</p>
`;

 // Async/await + Fetch
const loadProfile = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    document.querySelector(".module-1-text").innerHTML = renderProfile(data);
  } catch (error) {
    console.error("Could not load profile:", error);
  }
};

loadProfile();