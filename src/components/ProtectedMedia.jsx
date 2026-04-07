import { useEffect, useState } from "react";

function prevent(e) {
  e.preventDefault();
}

export default function ProtectedMedia({
  src,
  type = "image",
  alt = "",
  className = "",
  objectFit = "cover",
}) {
  const [blobUrl, setBlobUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let revoke = null;

    fetch(src)
      .then((r) => r.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        revoke = url;
        setBlobUrl(url);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    return () => {
      if (revoke) URL.revokeObjectURL(revoke);
    };
  }, [src]);

  return (
    <div
      className={`protected-media relative select-none overflow-hidden ${className}`}
      onContextMenu={prevent}
      onDragStart={prevent}
    >
      {loading && (
        <div className="absolute inset-0 shimmer rounded-xl bg-[#e8ddd4]/40" />
      )}

      {blobUrl &&
        (type === "video" ? (
          <video
            src={blobUrl}
            className="pointer-events-none h-full w-full"
            style={{ objectFit, WebkitUserDrag: "none" }}
            draggable={false}
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            playsInline
            onContextMenu={prevent}
          />
        ) : (
          <img
            src={blobUrl}
            alt={alt}
            className="pointer-events-none h-full w-full"
            style={{ objectFit, WebkitUserDrag: "none" }}
            draggable={false}
            loading="lazy"
          />
        ))}

      <div
        className="absolute inset-0 z-10"
        onContextMenu={prevent}
        onDragStart={prevent}
      />
    </div>
  );
}
