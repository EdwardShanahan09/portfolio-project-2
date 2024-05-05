import LogoDark from "../../assets/icons/logo-dark.svg";

const Hero = () => {
  return (
    <div className="font-regular flex flex-col justify-center items-center text-right">
      <div>
        <img className="mb-8" src={LogoDark} alt="My Task List Logo" />
      </div>

      <h1 className="font-bold text-5xl mb-4">My Task List</h1>
      <p className="text-base text-center text-balance">
        Streamline your day, one task at a time with My Task List.
      </p>
    </div>
  );
};

export default Hero;
