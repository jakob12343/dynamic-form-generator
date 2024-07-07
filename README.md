
---

# Dynamic Form Generator

This project demonstrates how to dynamically generate a form in React using a simple JSON configuration.

## Features

- Dynamic form generation based on JSON configuration
- Supports text, email, password, and other input types
- Simple UI with labels and placeholders

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.22.x)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/jakob12343/Dynamic_form.git
   cd dynamic-form-generator
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

## Running the Application

1. **Start the development server:**
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```

2. **Open your browser** and go to `http://localhost:3000`.

## Project Structure

```
dynamic-form-generator/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── DynamicForm.js
│   │   └── MyForm.js
│   ├── App.js
│   ├── index.js
│   └── DynamicForm.css
├── package.json
└── README.md
```

## Components

### DynamicForm.js

- Takes `Values` prop and generates form fields based on JSON configuration.

### MyForm.js

- Defines JSON configuration for form fields and passes it to `DynamicForm`.

### Example JSON Configuration

```jsx
const signupFormConfig = [
  { placeholder: 'Enter your username', type: 'text' },
  { placeholder: 'Enter your email address', type: 'email' },
  { placeholder: 'Enter your password', type: 'password' },
  { placeholder: 'Confirm your password', type: 'password' }
];
```

### Adding New Fields

To add new fields, update the JSON configuration in `MyForm.js`. For example:

```jsx
const signupFormConfig = [
  { placeholder: 'Enter your username', type: 'text' },
  { placeholder: 'Enter your email address', type: 'email' },
  { placeholder: 'Enter your password', type: 'password' },
  { placeholder: 'Confirm your password', type: 'password' },
  { placeholder: 'Enter your phone number', type: 'tel' }  // New field added
];
```

## Styling

- Basic styling is in `DynamicForm.css`.
- Customize the styling as needed.

## Contributing

- Contributions are welcome!
- Open an issue or submit a pull request for improvements or bug fixes.

## License

- Licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

# dynamic-form-generator
