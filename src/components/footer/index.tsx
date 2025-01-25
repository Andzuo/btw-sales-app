import React from "react";
import { Card, CardContent } from "../ui/card";

const Footer = () => {
  return (
    <footer className="flex w-full h-full justify-center items-end">
      <Card>
        <CardContent>
          <p className="">
            © {new Date().getFullYear()} Your Company. Todos os direitos
            reservados.
          </p>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
