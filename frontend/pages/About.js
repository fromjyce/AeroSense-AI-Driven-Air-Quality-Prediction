import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto w-full bg-white shadow-lg p-6 flex flex-col md:flex-row rounded-xl">
      <div className="md:w-1/2 flex flex-col justify-center p-4">
      <h2 className="text-3xl font-bold">
          <span className="questrial">About</span>
          <span className="questrial title-card"> AeroSense</span>
        </h2>
        <p className="text-lg mt-2 josefin_sans">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-around items-center gap-x-3 p-4">
        <Image
          src="/side-photo-1.png"
          alt="Image 1"
          width={300}
          height={200}
          className="rounded"
        />
        <Image
          src="/side-photo-2.png"
          alt="Image 2"
          width={300}
          height={200}
          className="rounded"
        />
        {" "}
      </div>
    </section>
  );
}
