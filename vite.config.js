import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
	// ... существующий код ...
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	}
	// ... существующий код ...
})
