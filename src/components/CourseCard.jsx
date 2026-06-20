import Button from "./Button";

function CourseCard({
  title = "Default",
  buttonText = "CheckItOut",
  imageurl,
}) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow">
      <img
        className="w-full h-48 object-cover"
        src={imageurl}
        alt="Sample image"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          iste cum repellendus, maiores quasi expedita?
        </p>
        <Button buttonText={buttonText} />
      </div>
    </div>
  );
}
export default CourseCard;
