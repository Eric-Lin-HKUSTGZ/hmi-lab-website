type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

type Props = {
  items: MediaItem[];
};

// function isVideo(src: string) {
//   return src.toLowerCase().endsWith(".mp4") || src.toLowerCase().endsWith(".webm");
// }

// function getVideoMime(src: string) {
//   if (src.toLowerCase().endsWith(".webm")) return "video/webm";
//   return "video/mp4";
// }

export default function MediaGallery({ items }: Props) {
  if (!items.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, idx) => {
        // const video = item.type === "video" || isVideo(item.src);
        const src = encodeURI(item.src);
        return (
          <div key={`${item.src}-${idx}`} className="overflow-hidden rounded-lg border border-ink-100/80 bg-white">
            {/* Video rendering is intentionally disabled per requirement. */}
            {/* {video ? (
              <video className="h-full w-full" controls preload="metadata" playsInline>
                <source src={src} type={getVideoMime(item.src)} />
                Your browser does not support the video tag.
              </video>
            ) : ( */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="h-full w-full object-cover" src={src} alt={item.alt ?? ""} />
            {/* )} */}
          </div>
        );
      })}
    </div>
  );
}
