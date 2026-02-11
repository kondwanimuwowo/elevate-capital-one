import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion.js";

export default function ImageFrame({
  src,
  alt,
  ratio = "landscape",
  caption,
  className = "",
  imgClassName = "",
  priority = false
}) {
  const ratios = {
    landscape: "aspect-[4/3]",
    portrait: "aspect-square"
  };

  return (
    <motion.figure {...fadeUp(0)} className={["image-frame", className].join(" ").trim()} transition={{ duration: 0.3 }}>
      <div className={["overflow-hidden", ratios[ratio] || ratios.landscape].join(" ")}>
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className={["h-full w-full object-cover", imgClassName].join(" ").trim()}
        />
      </div>
      {caption ? <figcaption className="image-frame-caption">{caption}</figcaption> : null}
    </motion.figure>
  );
}
