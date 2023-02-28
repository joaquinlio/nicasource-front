import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({
  component,
}: React.PropsWithChildren & {
  component: JSX.Element;
}) {
  const token: string | null = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;

  const jsonToken = JSON.parse(token);

  if (Date.now() > jsonToken.expiresOn) return <Navigate to="/login" />;

  return <>{component}</>;
}
