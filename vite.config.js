import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  let basePath = './'; // Default base path for development

  // Check if it's production
  if (mode === 'production') {
    basePath = './'; // Set your production base path here
  }

  // You can add more logic if needed for other environments like staging, testing, etc.

  return {
    plugins: [react()],
    base: basePath, // Apply the appropriate base path based on mode
  };
});
