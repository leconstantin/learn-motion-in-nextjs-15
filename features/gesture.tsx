import * as motion from "motion/react-client";

const images = [
  {
    src: "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
    caption: "Man in a suit 1",
  },
  {
    src: "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
    caption: "Man in a suit 2",
  },
  {
    src: "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
    caption: "Man in a suit 3",
  },
];
export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center justify-center min-h-screen">
      {/* FIXME: Gestures */}
      {/* whileHover, whileTap, whileDrag */}

      {/* <motion.div
        className="size-40 bg-blue-500 rounded-ful"
        // whileHover={{ scale: 1.2, cursor: "pointer", rotate: 10 }}
        // whileTap={{ scale: 0.8, backgroundColor: "orange" }}
        drag
        whileDrag={{
          scale: 1.1,
          backgroundColor: "orange",
          borderRadius: "10%",
        }}
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      /> */}

      {/* <motion.div
        initial={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.05, rotate: 3 }}
        whileTap={{ scale: 0.85 }}
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        transition={{
          type: "spring",
          stiffness: 300,
          duration: 0.5,
          ease: "easeIn",
        }}
        dragElastic={0.2}
        className="max-w-sm mx-auto bg-primary text-primary-foreground rounded-lg shadow-lg overflow-hidden cursor-pointer"
      >
        <img
          src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg"
          alt="card image"
          className="w-full h-48 object-cover"
          height={192}
        />

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Dynamic Card Titile </h2>{" "}
          <p className="text-muted-foreground mb-4">
            This is my simple and amazing card built with amazing animation
            libray
          </p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            type="button"
          >
            Learn more
          </button>
        </div>
      </motion.div> */}

      <div className="w-[80%] flex">
        {images.map((image, index) => (
          <motion.div
            key={image.caption}
            className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-auto object-cover"
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0  transition-opacity duration-300 cursor-pointer"
              whileHover={{ opacity: 1 }}
            >
              <p>{image.caption}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
