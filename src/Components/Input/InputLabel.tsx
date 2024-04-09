import { Flex, Input, InputProps } from "antd";
import { InputStatus } from "antd/es/_util/statusUtils";
import { useEffect, useState } from "react";
import _ from "lodash";
interface Rule {
  required?: boolean;
  message?: string;
  minLength?: number;
  pattern?: RegExp;
  patternMessage?: string;
}

interface InputLabelProps {
  inputProps?: InputProps;
  rules?: Rule[];
  onChange: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  value: string;
  label: React.ReactNode;
}

const InputLabel = ({ inputProps, rules, onChange, value, label }: InputLabelProps) => {
  const [error, setError] = useState("");
  const [statusInput, setStatusInput] = useState<InputStatus>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue, e);
    setError("");
    // Kiểm tra các quy tắc
    if (rules) {
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        if (rule.required && !inputValue) {
          setError(rule.message || "Vui lòng nhập giá trị");
          return;
        } else if (rule.minLength && inputValue.length < rule.minLength) {
          setError(
            rule.message || `Vui lòng nhập ít nhất ${rule.minLength} ký tự`
          );
          return;
        } else if (
          rule.pattern &&
          inputValue !== "" &&
          !rule.pattern.test(inputValue)
        ) {
          setError(rule.patternMessage || "Giá trị không hợp lệ");
          return;
        } else {
          setError("");
        }
      }
    }
  };

  useEffect(() => {
    if (error) {
      setStatusInput("error");
    } else {
      setStatusInput(undefined);
    }
  }, [error]);

  return (
    <div className="mb-6">
      <Flex align="center" className="h-8">
        <label className="inline-flex after:content-['\:'] after:ms-[2px]">
          {label}
        </label>
      </Flex>
      <Input
        value={value}
        onChange={handleInputChange}
        status={statusInput}
        {...inputProps}
      />
      <div style={{ color: "red" }}>{error}</div>
    </div>
  );
};

export default InputLabel;
