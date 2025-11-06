import { useEffect, useState } from "react";
import { ReactComponent as IndonesiaMap } from "../../../assets/indonesia.svg";

export default function MapSvgLoader({ onSelectProvince }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const paths = document.querySelectorAll("svg path");
    paths.forEach((path) => {
      path.style.cursor = "pointer";
      path.addEventListener("click", () => handleSelect(path.id));
    });

    return () => {
      paths.forEach((path) => {
        path.removeEventListener("click", () => handleSelect(path.id));
      });
    };
  }, []);

  const handleSelect = (id) => {
    setSelected(id);
    if (onSelectProvince) onSelectProvince(id);
  };

  paths.forEach((path) => {
  path.addEventListener("click", () => {
    paths.forEach((p) => (p.style.fill = "#ccc"));
    path.style.fill = "#2563eb"; // biru
    handleSelect(path.id);
  });
});


  return (
    <div className="map-container">
      <IndonesiaMap className="w-full max-w-3xl mx-auto" />
      {selected && (
        <p className="text-center mt-2 text-sm text-gray-600">
          Selected: {selected}
        </p>
      )}
    </div>
  );
}
