import React from 'react';

const Prize = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 p-6 bg-gradient-to-br from-[#000000] via-[#000000] to-[#B48CDE] right-4 rounded-r-2xl">
      {/* Glassmorphic Card 1 - Text Section */}
      <div className="text-left w-full sm:w-1/2 bg-grey bg-opacity-10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6">
        <p className="text-4xl sm:text-6xl lg:text-8xl text-gray-200"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm24-567 57 57-57-57ZM290-120H120v-170l175-175L80-680l200-200 216 216 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l215 215L680-80 465-295 290-120Zm-90-80h56l392-391-57-57-391 392v56Zm420-419-29-29 57 57-28-28Z"/></svg>
          Train.
          Develop.
          <br />
          Discover.
          
        </p>
      </div>

      {/* Video Section */}
      <div className="w-full sm:w-1/2 rounded-lg p-6">
      <video
  src="/images/trophy.webm"
  loop
  autoPlay
  muted
  className="w-full rounded-lg"
>


          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Prize;