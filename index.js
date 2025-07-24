export const clearFormError = (className = "sk_error") => {
    try {
        const errorElements = document.querySelectorAll(`.${className}`);

        if (errorElements.length === 0) return;

        errorElements.forEach((el) => {
            el.textContent = "";
        });
    } catch (err) {
        console.error("clearFormError failed:", err);
    }
};

export const formError = (error, className = "sk_error") => {
    try {
        // Support for fetch/jQuery: error.responseJSON
        const errors =
            error?.responseJSON?.errors ||
            error?.response?.data?.errors || // ✅ Axios support
            error?.errors ||                  // fallback
            null;

        if (!errors) {
            console.warn("No validation errors found.");
            return;
        }

        // Clear existing error texts
        document.querySelectorAll(`.${className}`).forEach((el) => {
            el.textContent = "";
        });

        // Render each error
        for (const field in errors) {
            if (Object.hasOwn(errors, field)) {
                const message = errors[field][0];
                let selector;

                // Handle array fields like name.0
                if (field.includes(".")) {
                    const [baseField, index] = field.split(".");
                    selector = `.${baseField}_${index}.${className}`;
                } else {
                    selector = `.${field}.${className}`;
                }

                const el = document.querySelector(selector);
                if (el) {
                    el.textContent = message;
                    el.classList.remove("d-none");
                    el.style.color = "red";
                }
            }
        }
    } catch (err) {
        console.error("Validation error handler failed:", err);
    }
};
