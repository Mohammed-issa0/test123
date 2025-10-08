import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  	    primary: "#302C6D",
        secondary: "#F08C21",
        accent: "#E6E8F0",
		grayy:{
			light:"#484861",
			dark: "white"
		 } ,
		gray1: "#9E9E9E",
        darkBg: "#181A2A",
        lightBg: "#f5f5f5",
  			
  		},
  		
  		
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
