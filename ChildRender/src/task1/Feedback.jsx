import { useState } from "react";

export default function Feedback() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  function handleGoodFeedback() {
    setGoodCount((prev) => prev + 1);
    console.log(goodCount);
  }
  function handleNeutralFeedback() {
    setNeutralCount((last) => last + 1);
  }
  function handleBadFeedback() {
    setBadCount((prev) => prev + 1);
  }

  const Total = goodCount + neutralCount + badCount;
  const FeedBackAvg =
    Total > 0 ? ((goodCount / Total) * 100).toFixed(1) + "%" : "0%";

  return (
    <div>
      <div className="title  flex items-center justify-center ">
        Feedback Form
      </div>
      <div className="flex items-center justify-center h-48 ">
        <div
          className="good-feedback w-25 h-10 text-white flex justify-center items-center bg-black rounded-sm p-2 m-2"
          onClick={handleGoodFeedback}
        >
          Good {}
        </div>
        <div
          className="neutral-feedback w-25 h-10 text-white flex justify-center items-center bg-black rounded-sm p-2 m-2"
          onClick={handleNeutralFeedback}
        >
          Neutral
        </div>
        <div
          className="bad-feedback w-25 h-10 text-white flex justify-center items-center bg-black rounded-sm p-2 m-2"
          onClick={handleBadFeedback}
        >
          Bad
        </div>
      </div>
      <div className="flex justify-center text-center flex-col ">
        <div className=" h-10 text-white flex justify-center items-center bg-black rounded-sm p-2 m-2">
          {Total ? `Total Feedback Count: ${Total}` : `Total Feedback Count: 0`}
        </div>

        <div className=" h-10 text-white flex justify-center items-center bg-black rounded-sm p-2 m-2">
          {goodCount ? `Good Count : ${goodCount}` : `No feedback given yet`}
        </div>
        <div className=" h-10 text-white flex justify-center items-center bg-black rounded-sm p-2 m-2">
          {neutralCount
            ? `Neutral Count : ${neutralCount}`
            : `No feedback given yet`}
        </div>
        <div className=" h-10 text-white flex justify-center items-center bg-black rounded-sm p-2 m-2">
          {badCount ? `Bad Count : ${badCount}` : `No feedback given yet`}
        </div>

        <div className=" h-10 text-white flex justify-center items-center bg-black rounded-sm p-2 m-2">
          {FeedBackAvg
            ? `Total Feedback Percentage: ${FeedBackAvg}`
            : `Total Feedback Percentage: 0`}
        </div>
      </div>
    </div>
  );
}
