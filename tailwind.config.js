module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    1: '#1C1F2E',
                    2: '#161925',
                    3: '#252A41',
                    4: '#1E2757',
                },
            },
        },
    },
};
