"use client";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { TextField } from "@mui/material";
import BaseSignUp from "@/app/components/baseSingUp";

function UserName() {
  return (
    <div>
      <BaseSignUp numberOFFields={3} label={["userName", "password"]} />
    </div>
  );
}

export default UserName;
