# NestJS Video CRUD API 🎥

This is a CRUD (Create, Read, Update, Delete) API for managing videos. It is built using the NestJS framework and uses Prisma as the database ORM. Additionally, Swagger has been integrated to provide a user-friendly interface for testing the API endpoints. Postman was used for testing the endpoints. 🚀

This project was developed as a part of the [FullCycle Pre-immersion](https://www.youtube.com/watch?v=74Rks96yaAY), a series of video tutorials available on YouTube. 📺

## Getting Started 🛠️

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 🚧

### Prerequisites 📋

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine. 📦
- Docker installed to run the PostgreSQL database in a container. 🐳

### Installation 📥

1. Clone the repository:

   ```bash
   git clone https://github.com/GusDev0258/nestjs.git
   ```

2. Change into the project directory:

   ```bash
   cd nestjs
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the PostgreSQL database in a Docker container:

   ```bash
   docker compose up
   ```

### Configuration ⚙️

1. Create a `.env` file in the root directory based on the provided `.env.example`. Update the database connection URL and other necessary configurations.

2. Create a PostgreSQL database for the application and update the `.env` file with the database credentials.

### Database Migration 🗃️

Run the following commands to create and apply database migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

### Running the Application ▶️

To start the NestJS application, run:

```bash
npm run start:dev
```

This will start the application in development mode. You can access the Swagger API documentation at `http://localhost:3000/api/docs`. 📝

### Swagger API Documentation 📚

Swagger has been integrated into the project to provide interactive API documentation. You can explore and test the API endpoints by visiting `http://localhost:3000/api/docs` in your web browser. 🧐

### Postman for Endpoint Testing 🧪

You can use Postman for testing the API endpoints. Import the provided Postman collection to quickly get started with testing. 📦

## Usage 📝

You can use this API to perform CRUD operations on videos. Here are the available endpoints:

- `GET /videos`: Get a list of all videos.
- `GET /videos/:id`: Get a specific video by ID.
- `POST /videos`: Create a new video.
- `PATCH /videos/:id`: Update a video by ID.
- `DELETE /videos/:id`: Delete a video by ID.

## Contributing 🤝

Contributions are welcome! Please feel free to open an issue or submit a pull request for any improvements or features you'd like to add. 🙌

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 📜

## Acknowledgments 🙏

- [NestJS](https://nestjs.com/) 🦉
- [Prisma](https://www.prisma.io/) 🐢
- [Swagger](https://swagger.io/) 🐾
- [FullCycle Pre-immersion](https://www.youtube.com/watch?v=74Rks96yaAY) 🌟
- [Postman](https://www.postman.com/) 💌

---

Happy coding! 🚀🎉
