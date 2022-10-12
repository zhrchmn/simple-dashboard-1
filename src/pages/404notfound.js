import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-whiste">
      <div className="max-auto max-w-screen-xl">
        <div className="max-w-screen-sm text-center">
          <h1 className="text-5xl">404</h1>
          <p className="text-3xl">
            the page that you are looking for is not found
          </p>
          <Link to={"/"} className="text-2xl">
            back to home page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
