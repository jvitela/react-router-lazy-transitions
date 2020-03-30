import React from "react";

export function ErrorPage({ error, history }) {
  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow mt-4">
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 w-full"
          role="alert"
        >
          <p className="font-bold">Critical error</p>
          <p className="mb-2">{error.message}</p>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          onClick={() => history.goBack()}
        >
          Back
        </button>
      </div>
    </div>
  );
}
