/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'aurora-a': {
                    '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                },
                'aurora-b': {
                    '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(-30px, 50px) scale(1.15)' },
                    '66%': { transform: 'translate(20px, -20px) scale(0.85)' },
                },
                'grid-float': {
                    '0%': { backgroundPosition: '0px 0px' },
                    '100%': { backgroundPosition: '-56px -56px' }, 
                },
                'bg-drift': {
                    '0%': { transform: 'scale(1.05) translate(0px, 0px)' },
                    '50%': { transform: 'scale(1.08) translate(-10px, -10px)' },
                    '100%': { transform: 'scale(1.05) translate(0px, 0px)' },
                },
                'bounce-soft': {
                    '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'},
                    '50%': { transform: 'translateY(25%)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'},
                }
            },
            animation: {
                'aurora-a': 'aurora-a 15s ease-in-out infinite',
                'aurora-b': 'aurora-b 18s ease-in-out infinite',
                'grid-float': 'grid-float 15s linear infinite',
                'bg-drift': 'bg-drift 20s ease-in-out infinite',
                'bounce-soft': 'bounce-soft 2s infinite',
            }
        },
    },
    plugins: [],
}
