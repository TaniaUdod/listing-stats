# Listing Stats Service

This microservice collects and aggregates statistical data for listings using the KOA framework. It provides an HTTP API and accepts/returns requests/responses in JSON format. The statistics are maintained for two independent metrics - opening a listing and opening the phone number of the owner.

## Technologies Used

- **Node.js** for building the server.
- **Koa** is a lightweight web framework for handling HTTP requests and middleware.
- **Docker** for containerizing and deploying the application.
- **Nodemon** for automatically restarting the application during development when file changes are detected.

## Getting Started

### Running Locally

1. Clone this repository.

```bash
git clone https://github.com/TaniaUdod/listing-stats.git
```

2. Install dependencies.

```bash
npm install
```

3. Start the service.

```bash
npm start
```

### Running with Docker

1. Build the Docker image.

```bash
docker build -t listing-stats .
```

2. Run the Docker container.

```bash
  docker run -p 3000:3000 listing-stats
```

The service will be available at http://localhost:3000.

## API Endpoints

### GET /stats/:autoId

Retrieve aggregated statistics for a listing.

- **URL Parameters**

  - `autoId`: The identifier of the listing.

- **Query Parameters**

  - `type`: The type of statistics to retrieve (`listing`, `phoneNumber`, or `both`).

- **Response**
  - `200 OK`: Returns the aggregated statistics.
  - `400 Bad Request`: If the request is invalid.

### POST /stats/:autoId

Record a statistic for a listing.

- **URL Parameters**

  - `autoId`: The identifier of the listing.

- **Request Body**

  - `type`: The type of statistic to record (`listing` or `phoneNumber`).

- **Response**
  - `201 Created`: If the statistic is successfully recorded.
  - `400 Bad Request`: If the request is invalid.

## Example Requests

### GET /stats/1?type=both

```json
{
  "listing": 10,
  "phoneNumber": 5
}
```

### POST /stats/1

```json
{
  "type": "listing"
}
```
