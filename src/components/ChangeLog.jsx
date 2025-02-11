/* eslint-disable no-irregular-whitespace */
import firstImg from "../assets/firstImg.png";
import pusedo from '../assets/pseudo.svg';

const ChangeLog = () => {
  return (
    <div className="text-white mt-20 m-auto flex flex-col justify-end gap-10">
      <h1 className="font-semibold text-5xl text-center">ChangeLog</h1>

      {/* Section 1 */}
      <section className="flex gap-24 px-[10rem] pb-[10rem] bg-[#000000] relative min-h-screen">
        {/* Sticky Version Div */}
        <div className="flex flex-col gap-4 min-w-40 sticky top-10 self-start h-fit">
          <h2 className="px-4 py-1 bg-[rgba(255,97,97,0.15)] rounded-md text-[#FF6161] self-start">
            v1.48.0
          </h2>
          <p className="text-[#C2C7CA]">February 22, 2023</p>
        </div>

        {/* Content */}
        <aside className="flex flex-col gap-10">
          <h3 className="text-2xl font-semibold">
            🪄 Raycast AI Beta - Magic at Your Fingertips
          </h3>
          <img src={firstImg} alt="" className="rounded-md" />
          <p className="text-[#C2C7CA] text-xl">
            Unlock the power of AI anywhere on your Mac. Write smarter, code
            faster, answer questions quicker, and do so much more. Today,
            we&apos;re opening up early access for the next generation of
            Raycast - a productivity tool for professionals that uses AI to help
            you get more done in less time.
          </p>
          <p className="text-[#C2C7CA] text-xl">
            Sign up for our waitlist and watch this video to get a sneak peek of
            Raycast AI.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-8">💎 Improvements</h3>
            <ul className="space-y-4 ml-10">
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">
                  Pop to Root Search:
                </span>{" "}
                <span> Added 120 and 180 seconds intervals.</span>
                <img src={pusedo} alt="" className="absolute top-[50%] -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Calendar:</span> You can
                now join <span className="text-[#FF6363]">Amazon Chime</span>{" "}
                video meetings right from Raycast.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Calendar:</span> You can
                now join <span className="text-[#FF6363]">Slack Huddle</span>{" "}
                video meetings right from Raycast.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Markdown:</span> Inline
                code blocks now look nicer. Like{" "}
                <span className="text-[#FF6363] text-sm">this</span> (if you
                read this changelog in the app).
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Flight Tracker:</span>{" "}
                You can now enable/disable{" "}
                <span className="text-white font-bold">Flight Tracker</span>{" "}
                detection in settings. You can find it in{" "}
                <i>Raycast Preferences → Extensions → Calculator</i>
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Flight Tracker:</span> A
                plane icon will now be displayed to indicate a flight number was
                detected and flight data is being loaded.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-8">🐞 Fixes</h3>
            <ul className="space-y-4 ml-10">
              <li className="text-xl text-[#C2C7CA] relative">
                Fixed a bug with{" "}
                <span className="text-white font-bold">Flight Tracker</span>{" "}
                being displayed for multiplications which use the letter “x” as
                the operator.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                Fixed a bug that caused errors in the store if more than 140 extensions were
                installed.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
            </ul>
          </div>
        </aside>
      </section>
      <section className="flex gap-24 px-[10rem] pb-[10rem] bg-[#000000] relative min-h-screen">
        {/* Sticky Version Div */}
        <div className="flex flex-col gap-4 min-w-40 sticky top-10 self-start h-fit">
          <h2 className="px-4 py-1 bg-[rgba(255,97,97,0.15)] rounded-md text-[#FF6161] self-start">
            v1.48.0
          </h2>
          <p className="text-[#C2C7CA]">February 22, 2023</p>
        </div>

        {/* Content */}
        <aside className="flex flex-col gap-10">
          <h3 className="text-2xl font-semibold">
            🪄 Raycast AI Beta - Magic at Your Fingertips
          </h3>
          <img src={firstImg} alt="" className="rounded-md" />
          <p className="text-[#C2C7CA] text-xl">
            Unlock the power of AI anywhere on your Mac. Write smarter, code
            faster, answer questions quicker, and do so much more. Today,
            we&apos;re opening up early access for the next generation of
            Raycast - a productivity tool for professionals that uses AI to help
            you get more done in less time.
          </p>
          <p className="text-[#C2C7CA] text-xl">
            Sign up for our waitlist and watch this video to get a sneak peek of
            Raycast AI.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-8">💎 Improvements</h3>
            <ul className="space-y-4 ml-10">
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">
                  Pop to Root Search:
                </span>{" "}
                <span> Added 120 and 180 seconds intervals.</span>
                <img src={pusedo} alt="" className="absolute top-[50%] -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Calendar:</span> You can
                now join <span className="text-[#FF6363]">Amazon Chime</span>{" "}
                video meetings right from Raycast.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Calendar:</span> You can
                now join <span className="text-[#FF6363]">Slack Huddle</span>{" "}
                video meetings right from Raycast.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Markdown:</span> Inline
                code blocks now look nicer. Like{" "}
                <span className="text-[#FF6363] text-sm">this</span> (if you
                read this changelog in the app).
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Flight Tracker:</span>{" "}
                You can now enable/disable{" "}
                <span className="text-white font-bold">Flight Tracker</span>{" "}
                detection in settings. You can find it in{" "}
                <i>Raycast Preferences → Extensions → Calculator</i>
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Flight Tracker:</span> A
                plane icon will now be displayed to indicate a flight number was
                detected and flight data is being loaded.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-8">🐞 Fixes</h3>
            <ul className="space-y-4 ml-10">
              <li className="text-xl text-[#C2C7CA] relative">
                Fixed a bug with{" "}
                <span className="text-white font-bold">Flight Tracker</span>{" "}
                being displayed for multiplications which use the letter “x” as
                the operator.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                Fixed a bug that caused errors in the store if more than 140 extensions were
                installed.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
            </ul>
          </div>
        </aside>
      </section>
      <section className="flex gap-24 px-[10rem] pb-[10rem] bg-[#000000] relative min-h-screen">
        {/* Sticky Version Div */}
        <div className="flex flex-col gap-4 min-w-40 sticky top-10 self-start h-fit">
          <h2 className="px-4 py-1 bg-[rgba(255,97,97,0.15)] rounded-md text-[#FF6161] self-start">
            v1.48.0
          </h2>
          <p className="text-[#C2C7CA]">February 22, 2023</p>
        </div>

        {/* Content */}
        <aside className="flex flex-col gap-10">
          <h3 className="text-2xl font-semibold">
            🪄 Raycast AI Beta - Magic at Your Fingertips
          </h3>
          <img src={firstImg} alt="" className="rounded-md" />
          <p className="text-[#C2C7CA] text-xl">
            Unlock the power of AI anywhere on your Mac. Write smarter, code
            faster, answer questions quicker, and do so much more. Today,
            we&apos;re opening up early access for the next generation of
            Raycast - a productivity tool for professionals that uses AI to help
            you get more done in less time.
          </p>
          <p className="text-[#C2C7CA] text-xl">
            Sign up for our waitlist and watch this video to get a sneak peek of
            Raycast AI.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-8">💎 Improvements</h3>
            <ul className="space-y-4 ml-10">
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">
                  Pop to Root Search:
                </span>{" "}
                <span> Added 120 and 180 seconds intervals.</span>
                <img src={pusedo} alt="" className="absolute top-[50%] -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Calendar:</span> You can
                now join <span className="text-[#FF6363]">Amazon Chime</span>{" "}
                video meetings right from Raycast.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Calendar:</span> You can
                now join <span className="text-[#FF6363]">Slack Huddle</span>{" "}
                video meetings right from Raycast.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Markdown:</span> Inline
                code blocks now look nicer. Like{" "}
                <span className="text-[#FF6363] text-sm">this</span> (if you
                read this changelog in the app).
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Flight Tracker:</span>{" "}
                You can now enable/disable{" "}
                <span className="text-white font-bold">Flight Tracker</span>{" "}
                detection in settings. You can find it in{" "}
                <i>Raycast Preferences → Extensions → Calculator</i>
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                <span className="text-white font-bold">Flight Tracker:</span> A
                plane icon will now be displayed to indicate a flight number was
                detected and flight data is being loaded.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-8">🐞 Fixes</h3>
            <ul className="space-y-4 ml-10">
              <li className="text-xl text-[#C2C7CA] relative">
                Fixed a bug with{" "}
                <span className="text-white font-bold">Flight Tracker</span>{" "}
                being displayed for multiplications which use the letter “x” as
                the operator.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
              <li className="text-xl text-[#C2C7CA] relative">
                Fixed a bug that caused errors in the store if more than 140 extensions were
                installed.
                <img src={pusedo} alt="" className="absolute top-3 -left-8" />
              </li>
            </ul>
          </div>
        </aside>
      </section>

      {/* Repeat for other sections */}
    </div>
  );
};

export default ChangeLog;