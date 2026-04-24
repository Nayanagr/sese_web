# SESE Website

Welcome to the official website of the **Society of Environmental Science & Engineering (SESE)** at IIT Dhanbad. This website serves as the digital platform for SESE, providing insights into the society's activities, members, and events while promoting active engagement with students and professionals in the environmental science community.

## Table of Contents
- [About SESE](#about-sese)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About SESE
The **Society of Environmental Science & Engineering (SESE)** is a student-led organization at IIT Dhanbad. SESE aims to raise awareness about environmental issues and promote the study and application of environmental science and engineering principles through various events, workshops, and collaborations.

This website showcases:
- Information about the society and its mission
- Profiles of core team members
- Details about past and upcoming events
- Featured alumni and their success stories
- A dynamic blog section with updates on recent activities
- Seamless animations enhancing user experience

## Features
- **Home Page**: An engaging landing page with animations using GSAP (GreenSock Animation Platform) for a seamless and interactive experience.
- **About Section**: Detailed information about SESE and its objectives.
- **Team Section**: Profiles of the society's core team members, with photos and brief descriptions of their roles.
- **Events Section**: A dynamic section showcasing upcoming and past events with the ability for admins to add or update event information.
- **Alumni Section**: Highlighting notable alumni with their images, names, and positions.
- **Blog**: A platform for sharing updates, articles, and announcements related to environmental science and SESE activities.
- **Admin Dashboard**: Admin privileges to manage content such as events, team members, and alumni profiles.
- **Responsive Design**: Ensuring the website works seamlessly across devices.

## Tech Stack
- **Frontend**:
  - **HTML** & **CSS**
  - **Tailwind CSS**: For responsive and modern design.
  - **JavaScript**: Enhancing interactivity.
  - **Next.js**: A powerful React framework used for building the UI.
  - **GSAP**: Used for animations, providing a fluid user experience.
  
- **Backend**:
  - **Node.js**: JavaScript runtime for building the backend.
  - **Express.js**: Web framework used for routing and server-side logic.
  - **MongoDB**: NoSQL database for handling dynamic data like events and alumni profiles.
  - **Mongoose**: For MongoDB object modeling.

- **Authentication**:
  - **JWT (JSON Web Token)**: Secure user authentication and authorization.
  
## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anishiit/SESE-website.git
   cd SESE-website



2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (see [Environment Variables](#environment-variables)).

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. The website should now be running at `http://localhost:3000`.

## Environment Variables

To run this project, you will need to add the following environment variables.

### Backend (`server/.env`)
```plaintext
MONGO_URI=<your-mongodb-uri>
ACCESS_TOKEN_KEY=<your-access-token-secret>
REFRESH_TOKEN_KEY=<your-refresh-token-secret>
FRONTEND_URI=http://localhost:3000
PORT=4000
```

### Frontend (`client/.env.local`)
```plaintext
NEXT_PUBLIC_SERVERURL=http://localhost:4000
NEXT_PUBLIC_BASEURL=http://localhost:3000
```

## Installation & Deployment

This project is a monorepo containing both the frontend (`client`) and backend (`server`).

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anishiit/SESE-website.git
   cd SESE-website
   ```

2. **Install dependencies**:
   ```bash
   # Install in root (requires npm 7+)
   npm install
   ```

3. **Run the projects**:
   You will need to run both the client and server.
   - For client: `cd client && npm run dev`
   - For server: `cd server && npm run dev`

### Deployment on Vercel

To deploy this on Vercel, it is recommended to create **two separate projects**:

1. **Backend**:
   - Set **Root Directory** to `server`.
   - Set the environment variables listed above.
2. **Frontend**:
   - Set **Root Directory** to `client`.
   - Set `NEXT_PUBLIC_SERVERURL` to your deployed backend URL.

## Usage

1. **Development**: Use `npm run dev` to start the development server.
2. **Production Build**: To build the project for production:
   ```bash
   npm run build
   npm start
   ```
3. **Access Admin Dashboard**: Admins can log in to the dashboard to manage team profiles, alumni profiles, and event information.

## Contributing

Contributions to this project are welcome! If you find any bugs, have feature requests, or want to improve the codebase, feel free to submit an issue or pull request.

### Steps to contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

This `README.md` file provides a detailed overview of your SESE website project, including the tech stack, features, installation instructions, and contribution guidelines. It can serve as a good foundation, and you can adjust it as per the specific details of your project.
