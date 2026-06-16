import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { hasGoogleMapsKey, loadGoogleMaps } from "@/lib/googleMaps";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  id?: string;
}

export const AddressAutocomplete = ({
  value,
  onChange,
  placeholder,
  className,
  id,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeRef = useRef(onChange);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [ready, setReady] = useState(!hasGoogleMapsKey());

  onChangeRef.current = onChange;

  useEffect(() => {
    if (!hasGoogleMapsKey() || !inputRef.current) return;

    let listener: google.maps.MapsEventListener | null = null;
    let cancelled = false;

    loadGoogleMaps()
      .then((googleMaps) => {
        if (cancelled || !inputRef.current) return;

        autocompleteRef.current = new googleMaps.maps.places.Autocomplete(inputRef.current, {
          componentRestrictions: { country: "au" },
          fields: ["formatted_address"],
          types: ["address"],
        });

        listener = autocompleteRef.current.addListener("place_changed", () => {
          const place = autocompleteRef.current?.getPlace();
          if (place?.formatted_address) {
            onChangeRef.current(place.formatted_address);
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
