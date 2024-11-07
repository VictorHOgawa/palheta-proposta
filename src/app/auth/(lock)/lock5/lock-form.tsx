"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import avatar from "@/public/images/avatar/avatar-7.jpg";
import { useState } from "react";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Icon } from "@iconify/react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { SiteLogo } from "@/src/components/svg";
import { useMediaQuery } from "@/src/hooks/use-media-query";
const LockForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");
  const togglePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <Link href="/dashboard" className="inline-block">
          <SiteLogo className="h-10 w-10 2xl:h-14 2xl:w-14 text-primary" />
        </Link>
      </div>
      <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900 text-center">
        Lock Screen
      </div>
      <div className="2xl:text-lg text-base text-default-600 mt-2 leading-6 text-center">
        Enter the information you entered while registering.
      </div>
      <div className="mt-6 flex justify-center">
        <Avatar className="h-[72px] w-[72px]">
          <AvatarImage src={avatar.src} alt="" />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-center mt-4 text-xl font-medium text-default-900">
        Karthikeya Marupthy
      </div>
      <form className="mt-7">
        <Label htmlFor="password" className="mb-2 font-medium text-default-600">
          Password
        </Label>
        <div className="relative">
          <Input
            type={passwordType}
            id="password"
            size={!isDesktop2xl ? "xl" : "lg"}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
            onClick={togglePasswordType}
          >
            {passwordType === "password" ? (
              <Icon icon="heroicons:eye" className="w-5 h-5 text-default-400" />
            ) : (
              <Icon
                icon="heroicons:eye-slash"
                className="w-5 h-5 text-default-400"
              />
            )}
          </div>
        </div>

        <div className="mt-6">
          <Button className="w-full" size={!isDesktop2xl ? "lg" : "md"}>
            {" "}
            Sign In{" "}
          </Button>
        </div>
      </form>
      <div className="mt-8 text-center text-base font-medium text-default-600">
        Not you? Return{" "}
        <Link href="/auth/login5" className="text-primary">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default LockForm;
