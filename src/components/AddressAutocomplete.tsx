import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { hasGoogleMapsKey, loadGoogleMaps } from "@/lib/googleMaps";

export interface AddressComponents {
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSelectComponents?: (components: AddressComponents) => void;
  placeholder?: string;
  className?: string;
  id?: string;
}

const parseComponents = (
  place: google.maps.places.PlaceResult,
): AddressComponents => {
  const get = (type: string, useShortName = false) => {
    const match = place.address_components?.find((c) => c.types.includes(type));
    if (!match) return "";
    return useShortName ? match.short_name : match.long_name;
  };

  const streetNumber = get("street_number");
  const route = get("route");
  const subpremise = get("subpremise");
  const streetParts = [subpremise ? `${subpremise}/` : "", streetNumber, route]
    .filter(Boolean)
    .join(" ")
    .replace(" /", "/");

  return {
    street: streetParts.trim(),
    suburb: get("locality") || get("sublocality") || get("postal_town"),
    state: get("administrative_area_level_1", true),
    postcode: get("postal_code"),
    country: get("country"),
  };
};

export const AddressAutocomplete = ({
  value,
  onChange,
  onSelectComponents,
  placeholder,
  className,
  id,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeRef = useRef(onChange);
  const onSelectComponentsRef = useRef(onSelectComponents);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [ready, setReady] = useState(!hasGoogleMapsKey());

  onChangeRef.current = onChange;
  onSelectComponentsRef.current = onSelectComponents;

  useEffect(() => {
    if (!hasGoogleMapsKey() || !inputRef.current) return;

    let listener: google.maps.MapsEventListener | null = null;
    let cancelled = false;

    loadGoogleMaps()
      .then((googleMaps) => {
        if (cancelled || !inputRef.current) return;

        autocompleteRef.current = new googleMaps.maps.places.Autocomplete(inputRef.current, {
          componentRestrictions: { country: "au" },
          fields: ["formatted_address", "address_components"],
          types: ["address"],
        });

        listener = autocompleteRef.current.addListener("place_changed", () => {
          const place = autocompleteRef.current?.getPlace();
          if (place?.formatted_address) {
            onChangeRef.current(place.formatted_address);
          }
          if (place?.address_components) {
            onSelectComponentsRef.current?.(parseComponents(place));
          }
        });

        setReady(true);
      })
      .catch(() => {
        setReady(true);
      });

    return () => {
      cancelled = true;
      listener?.remove();
      autocompleteRef.current = null;
    };
  }, []);

  return (
    <Input
      ref={inputRef}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={200}
      autoComplete={hasGoogleMapsKey() ? "off" : "street-address"}
      className={cn(className, !ready && hasGoogleMapsKey() && "opacity-70")}
    />
  );
};
