<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>ToDo App</h1>

<h2>Overview</h2>

<p>This is a simple ToDo application built using TypeScript, React, Express, and Recoil-like state management. The application is containerized using Docker Compose for easy deployment and development.</p>

<h2>Features</h2>

<ul>
    <li>Create, read, update, and delete tasks.</li>
    <li>Intuitive user interface with React.</li>
    <li>Server-side functionality powered by Express.</li>
    <li>Efficient state management inspired by Recoil.</li>
    <li>Containerized deployment with Docker Compose.</li>
</ul>

<h2>Prerequisites</h2>

<ul>
    <li><a href="https://www.docker.com/" target="_blank">Docker</a></li>
    <li><a href="https://docs.docker.com/compose/" target="_blank">Docker Compose</a></li>
    <li><a href="https://nodejs.org/" target="_blank">Node.js</a> and <a href="https://www.npmjs.com/" target="_blank">npm</a></li>
</ul>

<h2>Getting Started</h2>

<ol start="1">
    <li>Navigate to the project directory:</li>
</ol>

<pre><code>cd todoListServer
</code></pre>

<ol start="2">
    <li>Build and start the backend:</li>
</ol>

<pre><code>docker-compose build && docker-compose up
</code></pre>
<ol start="3">
    <li>Build and Start the frontend:</li>
</ol>

<pre><code>cd todoListReact
npm install
npm build
npm run dev
</code></pre>

<h3>Access the Application</h3>

<p>Open your browser and visit <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to use the ToDo app.</p>

<h2>Project Structure</h2>
<pre>
todo-app/
├── todoListServer/    # Express server
│   ├── src/
│   │   └── ...        # Express server files
|   ├── docker-compose.yml  # Docker Compose configuration
├── todoListReact/      # React client app
│   ├── src/
│   │   └── ...        # React components and logic


</pre>

</body>
</html>

 
