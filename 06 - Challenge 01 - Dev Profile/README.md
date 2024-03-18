# React Card Component

The Card component is a reusable React component designed to display a profile card with avatar, name, introduction, and skills list.

## Component Structure

The Card component is composed of several sub-components:

- **Avatar:** Displays the profile image.
- **Intro:** Displays the name and introduction text.
- **SkillList:** Displays a list of skills with their corresponding emoji level.

## Component Props

The Card component accepts a single prop `profile`, which should be an object containing the following properties:

- `image`: URL of the profile image.
- `name`: Name of the profile owner.
- `intro`: Introduction text of the profile owner.
- `skills`: An array of skills objects, each containing `name`, `level` (index to emojiData array), and `color` properties.

## Usage

To use this component, follow these steps:

1. **Installation**: Import the `Card` component and its associated CSS file into your React project.

```jsx
import React from "react";
import Card from "./Card";
import "./Card.css";
import emojiData from "./emojiData.js";
```

2. **Usage**: Incorporate the `Card` component into your application to display user profiles.

```jsx
const profileData = {
  image: "profile.jpg",
  name: "John Doe",
  intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  skills: [
    { name: "React", level: 0, color: "#61DBFB" },
    { name: "JavaScript", level: 1, color: "#F7DF1E" },
    // Add more skills as needed
  ],
};

<Card profile={profileData} />;
```

3. **Customization**: Modify the CSS or component logic as needed to suit your project requirements.

## How to run

- Clone the project to your local machine.
- Open Terminal or Command Prompt.
- Navigate to the project directory.
- Run the command npm start to start the development server.
- Open http://localhost:3000 in your browser to view the component.

## Contributing

Contributions are welcome! Here's how you can contribute:

- Fork the repository.
- Create a new branch (`git checkout -b feature/your-feature`).
- Make your changes.
- Commit your changes (`git commit -am 'Add some feature'`).
- Push to the branch (`git push origin feature/your-feature`).
- Create a new Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

This component is created and maintained by [Farhan Shahid](https://github.com/FSKhan19). Feel free to contribute, report issues, or suggest improvements.
