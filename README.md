
---

# Dynamic Form Generator

Welcome to the Dynamic Form Generator! This React app dynamically generates forms based on a simple JSON configuration. It includes validation for required fields and displays error messages if any required fields are left empty.

## Features

- Dynamically generates form fields based on JSON configuration
- Supports various input types such as text, email, and password
- Validates required fields and displays error messages



## Getting Started

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/jakob12343/dynamic-form-generator.git
   cd dynamic-form-generator
   ```

2. **Install dependencies:**

   Using npm:
   ```sh
   npm install
   ```

   Using yarn:
   ```sh
   yarn install
   ```

### Running the Application

1. **Start the development server:**

   Using npm:
   ```sh
   npm start
   ```

   Using yarn:
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

## How It Works

### `MyForm.js`

This component sets up the JSON configuration for the form fields and handles form submission.

- **State Management**: Manages form configuration and submitted data.
- **Form Submission**: Handles form submission and logs submitted data for debugging.

### `DynamicForm.js`

This component renders the form fields based on the provided configuration and handles validation.

- **Form Rendering**: Dynamically generates form fields.
- **Validation**: Checks if required fields are filled out and displays error messages if not.

### Example JSON Configuration

```jsx
const signupFormConfig = [
  { placeholder: 'Enter your username', type: 'text', required: true },
  { placeholder: 'Enter your email address', type: 'email', required: true },
  { placeholder: 'Enter your password', type: 'password', required: true },
  { placeholder: 'Confirm your password', type: 'password', required: true }
];
```

## Adding New Fields

To add new fields, update the JSON configuration in `MyForm.js`. For example:

```jsx
const signupFormConfig = [
  { placeholder: 'Enter your username', type: 'text', required: true },
  { placeholder: 'Enter your email address', type: 'email', required: true },
  { placeholder: 'Enter your password', type: 'password', required: true },
  { placeholder: 'Confirm your password', type: 'password', required: true },
  { placeholder: 'Enter your phone number', type: 'tel', required: false }  // New field added
];
```

## Styling

Basic styling is provided in `DynamicForm.css`. Feel free to customize it as needed.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
## link For The Demo 
https://dynamic-form-generator-pied.vercel.app/

---

Thank you for checking out the Dynamic Form Generator project! If you have any questions or need further assistance, feel free to reach out.

Happy coding!

---

