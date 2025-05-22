import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./shared/services/ThemeProvider.tsx";
import { QueryProvider } from "./shared/services/QueryClientProvider.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<QueryProvider>
				<App />
				<Toaster
					toastOptions={{
						classNames: {
							success:
								"flex font-[gellix] !text-base items-center text-black p-2 rounded-md",
							error:
								"flex font-[gellix] !text-base items-center text-black p-2 rounded-md",
						},
					}}
				/>
			</QueryProvider>
		</ThemeProvider>
	</StrictMode>
);
