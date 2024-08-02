"use client";
import React from "react";

type Props = { error: any; reset: any };

function error({ error, reset }: Props) {
  return (
    <div>
      <div>error with : {error.message}</div>
      <p>Hadle by error.tsx</p>
    </div>
  );
}

export default error;
