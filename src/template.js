const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>My Team</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1> My Team </h1>
    <h1 class="display-4"> ${answers.name}</h1>
    <p class="lead">I am from ${answers.role}.</p>
    <ul class="list-group">
      <li class="list-group-item">ID: ${answers.manger_ID}</li>
      <li class="list-group-item">Email: ${answers.email}</li>
      <li class="list-group-item">Office number: ${answers.office_number}</li>
      <li class="list-group-item">GitHub username: ${answers.github}</li>
      <li class="list-group-item">School: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
