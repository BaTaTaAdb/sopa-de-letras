# Word Search
Developed by **João Nuno** and **Pedro Elias**.
To easily access our word search, play on the website [https://batataadb.github.io/sopa-de-letras/](https://batataadb.github.io/sopa-de-letras/). 
If you want to run the game locally, follow the instructions presented here.


## Installation Instructions


### Prerequisites

Make sure you have [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/), and [python](https://www.python.org/downloads/) installed on your machine.

1. **Clone the Repository:**

```bash
git clone https://github.com/BaTaTaAdb/sopa-de-letras.git
cd sopa-de-letras
```

2. **Dependency Installation:**
   Go to the frontend directory and execute the following command to install the dependencies present in `package.json`:

```bash
cd frontend
npm install
```

3. **Backend Configuration:**
   (Make sure you have all the necessary packages to run Flask)

```bash
# Access the backend directory and execute (instructions for Linux)
cd backend
python -m venv venv

.\venv\Scripts\activate.bat
python -m pip install -r requirements.txt


4. **Application Execution:**

- Start the backend ([Flask](https://flask.palletsprojects.com/en/2.3.x/)):

```bash
cd backend
python app.py (start Flask) # Starts the server in development version
```

- Then, start the frontend (React):

```bash
cd frontend
npm install
npm start # Starts the server in development version
```

- **OR** Build the frontend (React):

```bash
npm run build
npm install -g serve
serve -s build # Serves the server already in its production version
```

- Use a WSGI server for the backend (Unicorn):

```bash
gunicorn -w 4 -b 0.0.0.0:25590 app:app
```

After completing these steps, the application should be running in your local environment!

## License

This project is licensed under the MIT license - see the [LICENSE](LICENSE) file for more details.

---
## Technologies Used

**Frontend:**

- [React](https://pt-br.react.dev)
- [TailwindCSS](https://tailwindcss.com/)

**Backend:**

- [Flask](https://flask.palletsprojects.com/en/2.3.x/)
