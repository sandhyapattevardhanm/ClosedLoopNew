
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) rotateZ(0deg)' 
					},
					'25%': { 
						transform: 'translateY(-25px) translateX(8px) rotateZ(1deg)' 
					},
					'50%': { 
						transform: 'translateY(-15px) translateX(-5px) rotateZ(-1deg)' 
					},
					'75%': { 
						transform: 'translateY(-30px) translateX(12px) rotateZ(0.5deg)' 
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)',
						transform: 'scale(1.05)'
					}
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'shimmer': {
					'0%': { 
						backgroundPosition: '-400% center',
						opacity: '0.8'
					},
					'50%': {
						opacity: '1'
					},
					'100%': { 
						backgroundPosition: '400% center',
						opacity: '0.8'
					}
				},
				'breathe': {
					'0%, 100%': { 
						transform: 'scale(1) rotate(0deg)',
						opacity: '0.7'
					},
					'50%': { 
						transform: 'scale(1.05) rotate(2deg)',
						opacity: '1'
					}
				},
				'orbit': {
					'0%': {
						transform: 'rotate(0deg) translateX(100px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(100px) rotate(-360deg)'
					}
				},
				'perspective-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)'
					},
					'33%': {
						transform: 'translateY(-20px) rotateX(5deg) rotateY(5deg)'
					},
					'66%': {
						transform: 'translateY(10px) rotateX(-3deg) rotateY(-3deg)'
					}
				},
				'cinematic-entrance': {
					'0%': {
						opacity: '0',
						transform: 'translateY(60px) scale(0.8) rotateX(10deg)',
						filter: 'blur(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1) rotateX(0deg)',
						filter: 'blur(0px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s cubic-bezier(0.6, 0.05, -0.01, 0.9)',
				'float': 'float 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
				'shimmer': 'shimmer 4s ease-in-out infinite',
				'breathe': 'breathe 6s ease-in-out infinite',
				'orbit': 'orbit 20s linear infinite',
				'perspective-float': 'perspective-float 10s ease-in-out infinite',
				'cinematic-entrance': 'cinematic-entrance 0.8s cubic-bezier(0.6, 0.05, -0.01, 0.9) forwards'
			},
			backdropBlur: {
				'xs': '2px',
			},
			transformStyle: {
				'preserve-3d': 'preserve-3d',
			},
			perspective: {
				'1000': '1000px',
				'1500': '1500px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
