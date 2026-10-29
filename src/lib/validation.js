const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function validateContact(input) {
    const errors = {};
    if (!input.name?.trim() || input.name.trim().length < 2) {
        errors.name = "Please enter your name.";
    }
    if (!input.email?.trim() || !emailPattern.test(input.email.trim())) {
        errors.email = "Please enter a valid email.";
    }
    if (input.message && input.message.length > 2000) {
        errors.message = "Message is too long.";
    }
    return errors;
}
