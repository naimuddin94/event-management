const Content = () => {
  return (
    <section className="bg-gray-900 pt-16 md:py-10">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light sm:text-lg text-gray-400">
          <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-white">
            Elevate Events with EventSphere
          </h2>
          <p className="mb-4">
            At Event Sphere, we understand the importance of seamless event
            execution. Our services encompass event planning, branding,
            marketing, and logistics. From venue selection and setup to
            registration management and technical support, we ensure every
            detail is meticulously handled.
          </p>
          <p>
            With a finger on the pulse of industry trends and emerging
            technologies, we deliver events that not only reflect the current
            landscape but also anticipate future shifts. Partner with us to
            elevate your presence in the gaming and tech space.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://images.unsplash.com/photo-1548061435-d56a87bdd05a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://images.unsplash.com/photo-1600320844656-a311b0477df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
