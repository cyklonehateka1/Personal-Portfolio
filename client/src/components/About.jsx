const About = () => {
  return (
    <div className="py-5 lg:px-80 lg:py-20  flex flex-col lg:flex-row gap-20  lg:mb-20 bg-blue-50 items-center justify-center">
      <div className="rounded-[50rem]   lg:my-auto  items-center flex bg-blue-200 relative lf:left-20">
        <img
          src="https://i.ibb.co/8D7VFg5/hero2.png"
          alt="about"
          className="w-60 lg:w-[25rem] rounded-[50rem] bg-black"
        />
      </div>
      <div className="flex flex-col lg:h-1/2 lg:w-1/2  items-center bg-white relative lg:left-20 px-20">
        <h2 className="text-2xl lg:text-6xl font-bold my-5">About Me</h2>
        <p className=" lg:ml-10 min-w-[20rem] lg:min-w-fit lg:max-w-fit max-w-[25rem] lg:text-2xl text-justify relative ">
          I'm Emmanuel Hateka a Full stack developer who is driven by solving
          problems through software engineering. I'm currently a student of
          Takoradi Technical University reading Bachelor of Technology in
          Imformation Technology. I'm that person who is committed to learning
          and finding new ways to tackle a particular problem and in so doing
          choosing the best solution out of the numerous options. I take
          interest in helping both my team members and I to develop so that
          together the team can reach its collective goal
        </p>
      </div>
    </div>
  );
};

export default About;
