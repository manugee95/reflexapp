function FeedbackStats({fstat}) {
  //Calculating Average Rating
  const average = fstat.reduce((acc, cur)=>{
    return acc + cur.rating
  }, 0) / fstat.length

  return (
    <div className="feedstats">
        <h4>{fstat.length} Reviews</h4>
        <h4 className="avg">Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats