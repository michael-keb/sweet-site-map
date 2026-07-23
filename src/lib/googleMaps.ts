import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

let loaderPromise: Promise<typeof google> | null = null;

export const loadGoogleMaps = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return Promise.reject(new Error("Missing VITE_GOOGLE_MAPS_API_KEY"));
  }

  if (!loaderPromise) {
    setOptions({ key: apiKey, v: "weekly" });
    // Import the Places library, then resolve with the global `google` namespace
    // so callers can use `google.maps.places.*` as before.
    loaderPromise = importLibrary("places").then(() => google);
  }

  return loaderPromise;
};

export const hasGoogleMapsKey = () => Boolean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
