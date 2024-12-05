export function Header() {
  return (
    <section className="flex flex-col items-start py-10 md:flex-row">
      <div className="shrink-0 w-72 my-5 md:my-0">
        <div className="flex justify-center items-center rounded-full bg-gray-900/5 size-44 ring-1 ring-inset ring-gray-900/10">
          <img
            alt="App screenshot"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="rounded-full shadow-2xl size-[158px] ring-1 ring-gray-900/10 object-cover"
          />
        </div>
      </div>
      <div>
        <h1 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Brooklyn Simmons
        </h1>
        <h2 className="text-xl/7 font-medium text-indigo-600 my-1.5">
          Senior Web Developer
        </h2>
        <p className="text-base/7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, facere
          quod culpa soluta doloremque libero repudiandae sit nemo provident aut
          repellendus quisquam fugit reprehenderit nihil praesentium beatae
          omnis voluptate deserunt.
        </p>
      </div>
    </section>
  );
}
