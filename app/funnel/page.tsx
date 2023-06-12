"use client";
import React from "react";
import 이름입력스텝 from "./components/이름입력스텝";
import 주민번호입력스텝 from "./components/주민번호입력스텝";
import 퍼널완료스텝 from "./components/퍼널완료스텝";
import useFunnel from "@/lib/useFunnel";

export default function page() {
  const [퍼널, setStep] = useFunnel([
    "이름입력",
    "주민번호입력",
    "완료",
  ] as const);

  return (
    <퍼널>
      <퍼널.Step name="이름입력">
        <이름입력스텝 />
      </퍼널.Step>

      <퍼널.Step name="주민번호입력">
        <주민번호입력스텝 />
      </퍼널.Step>

      <퍼널.Step name="완료">
        <퍼널완료스텝 />
      </퍼널.Step>
    </퍼널>
  );
}
