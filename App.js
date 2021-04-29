import { StatusBar } from "expo-status-bar";
import React from "react";
import Todo from "./src/Todo-App/Todo-app";
// import Calculator from "./src/Calculator/Calculator";

export default function App() {
  return (
    <>
      <Todo />
      <StatusBar style="auto" />
    </>
  );
}
