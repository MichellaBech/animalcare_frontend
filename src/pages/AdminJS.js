<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Page</title>
</head>
<body>
  <div id="app"></div> <!-- En container til vores dynamiske indhold -->
  <script src="app.js"></script>
</body>
</html>

// Funktion til Admin-siden
function Admin() {
  const container = document.createElement("div"); // Opret en div som root

  // Tilføj overskrift
  const heading = document.createElement("h2");
  heading.textContent = "Welcome to the Admin Page";
  container.appendChild(heading);

  // Tilføj en besked direkte (uden AdminComponent)
  const message = document.createElement("p");
  message.textContent = "You have admin privileges."; // Eksempeltekst
  container.appendChild(message);

  return container; // Returner hele admin-sektionen
}

// Render funktionen til at tilføje Admin-siden til DOM'en
function render() {
  const app = document.getElementById("app"); // Find root-elementet i HTML
  const adminPage = Admin(); // Opret Admin-siden
  app.appendChild(adminPage); // Tilføj Admin-siden til root
}

// Kør render-funktionen for at vise Admin-siden
render();
