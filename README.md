# Meal Planner for Week Creation

This is a Meal Planner application that allows users to select and organize meals for each week. It is built using **React**, **Vite**, and **TailwindCSS**.

## Features
- Display meals with details such as name, cuisine, rating, and instructions.
- Select meals for each week (Week 1, Week 2, etc.).
- Ability to delete meals from the weekly selection.
- Modal for selecting weeks and saving meal selections.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation, fast development environment and build tool.
- **TailwindCSS**: A utility-first CSS framework for creating custom designs.

## Getting Started

### Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (LTS version is recommended)
- **npm** (comes with Node.js)

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/WahajAhmedIqbal/meal-planner.git
   cd meal-planner
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

This will start the application at `http://localhost:3000` (or another available port).

### Building for Production

To build the project for production, run:

```bash
npm run build
```

This will generate the production-ready files in the `dist/` folder.

### Testing

To run tests (if applicable in your app), you can use:

```bash
npm run test
```

## Folder Structure

- **src/**: Contains all the source code for the application.
  - **components/**: Contains React components such as `Card`, `Modal`, and `Hero`.
  - **App.jsx**: Main entry point for the app.
- **public/**: Contains the `index.html` and other static files.
- **tailwind.config.js**: Configuration file for TailwindCSS.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a new pull request.

## License

This project is open-source and available under the MIT License.
