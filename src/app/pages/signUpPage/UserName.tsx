"use client";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { TextField } from "@mui/material";
import BaseSignUp from "@/app/components/baseSingUp";
import Link from "next/link";
import { Button } from "@mui/material";

function UserName() {
  return (
    <div>
      <div>
        <BaseSignUp numberOFFields={3} label={["userName", "password"]} />
      </div>
      <div>
        <Button variant="contained" size="large">
          Next
        </Button>
      </div>
    </div>
  );
}

export default UserName;
