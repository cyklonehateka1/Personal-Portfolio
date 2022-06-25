const About = () => {
  return (
    <div className="pt-10 flex flex-col  gap-10  lg:mb-20 bg-blue-50 items-center justify-center  xl:flex-row xl:py-40">
      <div className="rounded-[50rem]   lg:my-auto  items-center flex bg-blue-200 relative lf:left-20 ">
        <img
          src="https://i.ibb.co/8D7VFg5/hero2.png"
          alt="about"
          className="w-40 sm:w-60 md:w-80 rounded-[50rem] xl:w-96 "
        />
      </div>
      <div className="flex flex-col items-center mx-10 justify-center  rounded-md pb-6 w-[300px] sm:w-[450px] md:w-[600px] md:bg-white lg:w-[900px] xl:items-start xl:pl-5 xl:relative xl:left-32 xl:h-[500px]">
        <h2 className="text-3xl  font-bold mt-3 mb-2 sm:text-4xl lg:text-5xl lg:mb-5 text-blue-900 xl:text-6xl t xl:">
          About Me
        </h2>
        <p className="  w-[280px]    text-justify relative text-sm sm:w-[420px] sm:text-lg md:w-[550px] md:text-xl lg:w-[850px] lg:text-2xl xl:text-[26px]">
          I'm Emmanuel Hateka a Full stack developer who is driven by solving
          problems through software engineering. I'm currently a student of
          Takoradi Technical University reading Bachelor of Technology in
          Imformation Technology. I'm that person who is committed to learning
          and finding new ways to tackle a particular problem and in so doing
          choosing the best solution out of the numerous options. I take
          interest in helping both my team members and I to develop so that
          together the team can reach its collective goal. A more detailed
          insight of my eductional and software engineering background and
          experience is in my resume. Click on on the button below to download
        </p>
      </div>
    </div>
  );
};

export default About;
