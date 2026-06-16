import { Loader } from "@googlemaps/js-api-loader";

let loaderPromise: Promise<typeof google> | null = null;

export const loadGoogleMaps = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return Promise.reject(new Error("Missing VITE_GOOGLE_MAPS_API_KEY"));
  }

  if (!loaderPromise) {
    const loader = new Loader({
      apiKey,
      version: "weekly",
      libraries: ["places"],
    });
    loaderPromise = loader.load();
  }

  return loaderPromise;
};

export const hasGoogleMapsKey = () => Boolean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
