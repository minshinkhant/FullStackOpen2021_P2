
# Exercises 2.11.-2.14.
## 2.11: The Phonebook Step6

We continue with developing the phonebook. Store the initial state of the application in the file db.json, which should be placed in the root of the project.
```
{
  "persons":[
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
  ]
}
```

Start json-server on port 3001 and make sure that the server returns the list of people by going to the address http://localhost:3001/persons in the browser.

If you receive the following error message:

```
events.js:182
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE 0.0.0.0:3001
    at Object._errnoException (util.js:1019:11)
    at _exceptionWithHostPort (util.js:1041:20)
```

it means that port 3001 is already in use by another application, e.g. in use by an already running json-server. Close the other application, or change the port in case that doesn't work.

Modify the application such that the initial state of the data is fetched from the server using the axios-library. Complete the fetching with an Effect hook.

## 2.12* Data for countries, step1

The API https://restcountries.eu provides data for different countries in a machine-readable format, a so-called REST API.

Create an application, in which one can look at data of various countries. The application should probably get the data from the endpoint all.

The user interface is very simple. The country to be shown is found by typing a search query into the search field.

If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:

**fullstack content(image)**

If there are ten or fewer countries, but more than one, then all countries matching the query are shown:

**fullstack content(image)**

When there is only one country matching the query, then the basic data of the country, its flag and the languages spoken there, are shown:

**fullstack content(image)**

NB: It is enough that your application works for most of the countries. Some countries, like Sudan, can be hard to support, since the name of the country is part of the name of another country, South Sudan. You need not to worry about these edge cases.

WARNING create-react-app will automatically turn your project into a git-repository unless you create your application inside of an existing git repository. Most likely you do not want each of your projects to be a separate repository, so simply run the rm -rf .git command at the root of your application.

## 2.13*: Data for countries, step2

There is still a lot to do in this part, so don't get stuck on this exercise!

Improve on the application in the previous exercise, such that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country:

**fullstack content(image)**

In this exercise it is also enough that your application works for most of the countries. Countries whose name appears in the name of another country, like Sudan, can be ignored.

## 2.14*: Data for countries, step3

There is still a lot to do in this part, so don't get stuck on this exercise!

Add to the view showing the data of a single country, the weather report for the capital of that country. There are dozens of providers for weather data. I used https://weatherstack.com/.

**fullstack content(image)**

NB: In some browsers (such as Firefox) weatherstack API sends an error response, which indicates that HTTPS encryption is not supported, although the request URL starts with http://. This issue can be fixed by completing the exercise using Chrome.

NB: You need an api-key to use almost every weather service. Do not save the api-key to source control! Nor hardcode the api-key to your source code. Instead use an environment variable to save the key.

Assuming the api-key is t0p53cr3t4p1k3yv4lu3, when the application is started like so:
```
REACT_APP_API_KEY='t0p53cr3t4p1k3yv4lu3' npm start // For Linux/macOS Bash
($env:REACT_APP_API_KEY='t0p53cr3t4p1k3yv4lu3') -and (npm start) // For Windows PowerShell
set REACT_APP_API_KEY='t0p53cr3t4p1k3yv4lu3' && npm start // For Windows cmd.exe
```
you can access the value of the key from the process.env object:
```
const api_key = process.env.REACT_APP_API_KEY
// variable api_key has now the value set in startup
```
Note that if you created the application using npx create-react-app ... and you want to use a different name for your environment variable then the environment variable name must still begin with REACT_APP_. You can also use a .env file rather than defining it on the command line each time by creating a file entitled '.env' in the root of the project and adding the following.
```
# .env

REACT_APP_API_KEY=t0p53cr3t4p1k3yv4lu3
```
Note that you will need to restart the server to apply the changes.
