import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa6";
const RenderStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {/* Render full stars */}
      {Array(fullStars)
        .fill(null)
        .map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500 text-2xl" />
        ))}
      {/* Render half star */}
      {hasHalfStar && <FaStarHalf className="text-yellow-500 text-2xl" />}
      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(null)
        .map((_, index) => (
          <FaRegStar
            key={`empty-${index}`}
            className="text-gray-400 text-2xl"
          />
        ))}
    </>
  );
};

export default RenderStars;
