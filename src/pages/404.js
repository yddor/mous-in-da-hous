import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <>
      <pre className="text-white">
        Not found.
        <br />
        <Link to="/">Go home</Link>.
      </pre>
    </>
  );
};

export default NotFoundPage;
