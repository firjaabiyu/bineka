import { useEffect, useRef, useState } from "react";
import svgPanZoom from "svg-pan-zoom";
import { ZoomIn, ZoomOut, RefreshCcw } from "lucide-react";
import { provinsiData } from "../../../data/provinsi_data";

export default function MapContainer({ onSelectProvince }) {
  const containerRef = useRef(null);
  const tooltipRef = useRef(null);
  const panZoomInstance = useRef(null);
  const [selectedId, setSelectedId] = useState(null);
  const isInitialized = useRef(false);

  // smooth zoom helper
  const smoothZoomPan = (targetZoom, targetPan, duration = 500) => {
    if (!panZoomInstance.current) return;
    const startZoom = panZoomInstance.current.getZoom();
    const startPan = panZoomInstance.current.getPan();
    const startTime = performance.now();

    const animate = () => {
      const now = performance.now();
      const t = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);

      panZoomInstance.current.zoom(startZoom + (targetZoom - startZoom) * ease);
      panZoomInstance.current.pan({
        x: startPan.x + (targetPan.x - startPan.x) * ease,
        y: startPan.y + (targetPan.y - startPan.y) * ease,
      });

      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const handleZoomIn = () => {
    if (!panZoomInstance.current) return;
    const newZoom = Math.min(panZoomInstance.current.getZoom() * 1.2, 10);
    smoothZoomPan(newZoom, panZoomInstance.current.getPan());
  };

  const handleZoomOut = () => {
    if (!panZoomInstance.current) return;
    const newZoom = Math.max(panZoomInstance.current.getZoom() * 0.8, 1);
    smoothZoomPan(newZoom, panZoomInstance.current.getPan());
  };

  const handleReset = () => {
    if (!panZoomInstance.current) return;
    smoothZoomPan(1, { x: 0, y: 0 });
  };

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    fetch("/images/indonesia.svg")
      .then((res) => res.text())
      .then((data) => {
        data = data.replace(/fill="[^"]*"/g, "");
        if (!containerRef.current) return;
        containerRef.current.innerHTML = data;

        const svg = containerRef.current.querySelector("svg");
        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.style.display = "block";

        const paths = svg.querySelectorAll("path");
        paths.forEach((p) => {
          p.style.fill = "#B0E63970";
          p.style.cursor = "pointer";
          p.style.transition = "fill 0.2s ease";
        });

        panZoomInstance.current = svgPanZoom(svg, {
          zoomEnabled: true,
          controlIconsEnabled: false,
          fit: true,
          center: true,
          minZoom: 1,
          maxZoom: 10,
        });

        paths.forEach((p) => {
          const id = p.id;
          const province = provinsiData[id];
          const namaProv = province ? province.nama : id;

          // hover tooltip
          p.addEventListener("mousemove", (e) => {
            if (!tooltipRef.current) return;
            tooltipRef.current.style.display = "block";
            tooltipRef.current.style.left = e.clientX + 12 + "px";
            tooltipRef.current.style.top = e.clientY + 12 + "px";
            tooltipRef.current.innerHTML = namaProv;
          });

          p.addEventListener("mouseleave", () => {
            if (!tooltipRef.current) return;
            tooltipRef.current.style.display = "none";
          });

          // click path
          p.addEventListener("click", (e) => {
            e.stopPropagation();
            paths.forEach((p2) => (p2.style.fill = "#B0E63970"));
            e.target.style.fill = "#5DAA00";
            setSelectedId(e.target.id); 
            if (onSelectProvince) onSelectProvince(e.target.id);

            const bbox = e.target.getBBox();
            const cx = bbox.x + bbox.width / 2;
            const cy = bbox.y + bbox.height / 2;
            const targetZoom = 3;
            const svgWidth = svg.clientWidth;
            const svgHeight = svg.clientHeight;

            const targetPan = {
              x: svgWidth / 2 - cx * targetZoom,
              y: svgHeight / 2 - cy * targetZoom,
            };

            smoothZoomPan(targetZoom, targetPan, 600);
          });
        });
      });
  }, [onSelectProvince]);

  return (
    <div
      className="relative w-[90%] md:w-[80%] mx-auto"
      style={{
        minHeight: "300px",
        maxHeight: "500px",
        aspectRatio: "16/9",
      }}
    >
      {/* Controls */}
      <div className="absolute top-2 left-2 flex flex-col gap-1 z-50">
        <button onClick={handleZoomIn} className="bg-white p-2 rounded shadow hover:bg-gray-100">
          <ZoomIn size={20} />
        </button>
        <button onClick={handleZoomOut} className="bg-white p-2 rounded shadow hover:bg-gray-100">
          <ZoomOut size={20} />
        </button>
        <button onClick={handleReset} className="bg-white p-2 rounded shadow hover:bg-gray-100">
          <RefreshCcw size={20} />
        </button>
      </div>

      {/* SVG Container */}
      <div
        ref={containerRef}
        className="bg-[#FAFAFA] rounded-xl shadow-md overflow-hidden w-full h-full"
      />

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        style={{
          position: "fixed",
          background: "#CF392C",
          color: "white",
          padding: "4px 8px",
          borderRadius: "6px",
          fontSize: "12px",
          pointerEvents: "none",
          display: "none",
          zIndex: 9999,
          transition: "top 0.05s, left 0.05s",
        }}
      />
    </div>
  );
}
