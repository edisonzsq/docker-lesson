# Docker Demo

## Installation

- [Docker](https://docs.docker.com/get-docker/)

## Start up

This is a MERN stack demo.

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

## How to enable volume binding

The default file used for docker compose is [docker-compose.yml](./docker-compose.yml). This file does not include volume binding configuration.

A separate file that include volume binding can be found at [docker-compose-with-binding.yml](./docker-compose-with-binding.yml).

When we bind the host's directory to the container's, any code change in the host will be reflected in the container. This way, you do not have to rebuild the container everytime when there is a code change.

To enable the binding, simply rename the existing `docker-compose.yml` to something else and rename `docker-compose-with-bind.yml` to `docker-compose.yml`.

In both `yml` files, the mongodb container is always binded. This explains the appearance of `mongodb_data_container` when the container is launched.