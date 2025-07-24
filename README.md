# sk-la-form-errors

A lightweight helper for showing and clearing Laravel validation errors in Blade or API-based forms using JavaScript.


## 💾 Installation

```bash
npm install sk-la-form-errors


## 🚀 Usage

### Import

```js
import { formError, clearFormError } from "sk-la-form-errors";
```

### Example with Axios

```js
try {
    const response = await axios.post(form.action, formData, {
        headers: { Accept: "application/json" }
    });

    clearFormError(); // Clear errors on success

} catch (error) {
    formError(error); // Show errors from Laravel
}
```

> 💡 Make sure your input error elements have classes like `.name.sk_error` or `.email.sk_error` etc.

---

## 🎯 Features

* ✅ Supports Laravel validation format (422)
* ✅ Works with `axios`, `fetch`, and `jQuery.ajax`
* ✅ Handles array fields like `name.0`, `email.1`
* ✅ Supports custom class name for error messages
* ✅ Lightweight and easy to integrate in any Blade-based form

---

## 👨‍💻 Author

Made with ❤️ by [Shubham Sonawane](https://www.linkedin.com/in/shubham-sonawane-4a7341251/)

---

## 📄 License

MIT

