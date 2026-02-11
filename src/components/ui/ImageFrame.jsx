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
    wide: "aspect-[16/9]",
    portrait: "aspect-[3/4]",
    square: "aspect-square"
  };

  return (
    <figure className={["image-frame", className].join(" ").trim()}>
      <div className={["overflow-hidden", ratios[ratio] || ratios.landscape].join(" ")}>
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className={["h-full w-full object-cover", imgClassName].join(" ").trim()}
        />
      </div>
      {caption ? <figcaption className="image-frame-caption">{caption}</figcaption> : null}
    </figure>
  );
}
