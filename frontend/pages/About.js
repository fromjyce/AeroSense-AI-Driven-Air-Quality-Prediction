export default function About() {
  return (
    <div className="about-section flex justify-between items-center gap-8 p-8">
      <div className="text-content flex-1">
        <h2 className="text-3xl font-bold">
          <span className="questrial">About</span>
          <span className="questrial title-card"> AeroSense</span>
        </h2>
        <p className="text-lg josefin_sans leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        </p>
      </div>
      <div className="image-content flex flex-row gap-4 flex-1 items-end">
        <img
          src="/side-photo-1.png"
          alt="BuzzOn Earth"
          className="w-full max-w-[300px]"
        />
        <img
          src="/side-photo-2.png"
          alt="Intel"
          className="w-full max-w-[300px]"
        />
      </div>
    </div>
  );
}
