const About = () => {
  return (
    <div className="py-5 lg:px-80 lg:py-20  flex flex-col lg:flex-row gap-20  lg:mb-20 bg-blue-50 items-center">
      <div className="rounded-[50rem]   lg:my-auto  items-center flex bg-blue-200 ">
        <img
          src="https://i.ibb.co/8D7VFg5/hero2.png"
          alt="about"
          className="w-60 lg:w-[25rem] rounded-[50rem]"
        />
      </div>
      <div className="flex flex-col h-1/2 w-1/2  items-start">
        <h2 className="text-2xl lg:text-6xl font-bold">About Me</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default About;
