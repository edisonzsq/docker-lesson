# Docker Demo

## Installation

- [Docker](https://docs.docker.com/get-docker/)

## Start up

On your Terminal, change directory to the root folder, then run the following command:

```sh
docker compose up
```

By default, docker will choose to use cached data. If you need ot rebuild the image, use the `--build` flag:

```sh
docker compose up --build
```

## Backend

There are two APIs implemented:
- POST http://localhost:8008/employees
- GET http://localhost:8008/employees

The payload to create a new employees is:
```json
{
    "name":"John Doe",
    "jobTitle":"Software Engineer",
    "income":7000
}
```

You can view the data fetched from frontend after creating at least one employee.

## Frontend

Launch a browser and hit `http://localhost:3003` to see a React page.

