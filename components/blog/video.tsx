export default function Video({
  src,
  autoPlay = true,
}: {
  src: string;
  autoPlay?: boolean;
}) {
  return (
    <video
      playsInline={autoPlay}
      autoPlay={autoPlay}
      loop={autoPlay}
      muted={autoPlay}
      controls={!autoPlay}
      className="w-full overflow-hidden rounded-2xl"
    >
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn&apos;t support embedded videos.
    </video>
  );
}
