/* eslint-disable no-irregular-whitespace */
import firstImg from "../assets/firstImg.png";

const ChangeLog = () => {
  return (
    <div className="text-white mt-20 w-[75%] m-auto">
      <h1 className="font-semibold text-5xl text-center">ChangeLog</h1>
      <section className="flex gap-24 p-10">
        <div className="flex flex-col gap-4">
          <h2 className="px-4 py-1 bg-[rgba(255,97,97,0.15)] rounded-md text-[#FF6161] self-start">
            v1.48.0
          </h2>
          <p className="text-[#C2C7CA]">February 22, 2023</p>
        </div>
        <aside className="flex flex-col gap-10">
          <h3 className="text-2xl font-semibold">
            🪄 Raycast AI Beta - Magic at Your Fingertips
          </h3>
          <img src={firstImg} alt="" className="rounded-md" />
          <p className="text-[#C2C7CA]">
            Unlock the power of AI anywhere on your Mac. Write smarter, code
            faster, answer questions quicker, and do so much more. Today, we&apos;re
            opening up early access for the next generation of Raycast - a
            productivity tool for professionals that uses AI to help you get
            more done in less time.
          </p>
          <p className="text-[#C2C7CA]">
          Sign up for our waitlist and watch this
          video to get a sneak peek of Raycast AI.
          </p>
          <div>
            <h3 className="text-xl font-semibold">💎 Improvements</h3>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ChangeLog;
