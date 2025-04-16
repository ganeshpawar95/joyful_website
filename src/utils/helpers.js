function getDiscount(price, offerPrice) {
  if (price <= 0 || offerPrice < 0) return 0; // Avoid division by zero
  return ((price - offerPrice) / price) * 100;
}

function getAverageRating(reviews) {
  if (!reviews.length) return 0; // Return 0 if no reviews

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (totalRating / reviews.length).toFixed(1); // Round to 1 decimal place
}

function HtmlRenderer(htmlString) {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

export { getDiscount, getAverageRating, HtmlRenderer };
