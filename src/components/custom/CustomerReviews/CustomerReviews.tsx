import SingleReviews from "./SingleReviews";

function CustomerReviews() {
  return (
    <div>
      <div className="text-center">
        <h3 className="text-3xl font-semibold">Customer Reviews</h3>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 mt-5">
        <SingleReviews />
        <SingleReviews />
        <SingleReviews />
        <SingleReviews />
        <SingleReviews />
        <SingleReviews />
      </div>
    </div>
  );
}

export default CustomerReviews;
