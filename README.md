# Angular CRUD application with JSON server

## Development server with JSON server as the backend

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

Run `npm run server` or `json-server --watch ./src/assets/mock-data/countries.json --port 8000` to start the JSON server


AFter the jsonserver is running goto  src\app\service\country.service.ts and change the baseUrl to `http://localhost:8000/post`
#   C r u d 
 
 