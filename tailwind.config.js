/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: "#FFF95B",
                dark: "#141212",
            },
            spacing: {
                "clamp-w": "clamp(200px, 100vw, 768px)", // Adjust these values as needed
                "clamp-h": "clamp(300px, 100vh, 1024px)", // Adjust these values as needed
            },
        },
    },
    plugins: [],
};
