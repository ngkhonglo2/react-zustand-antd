import { Input, InputProps } from "antd";
import { useState } from "react";

interface Rule {
  required?: boolean;
  message?: string;
  minLength?: number;
  pattern?: RegExp;
  patternMessage?: string;
}

interface CInputProps {
  inputProps?: InputProps;
  rules?: Rule[]
  onChange: (value: string) => void;
  value: string;
}

const CInput = ({ inputProps, rules, onChange, value }: CInputProps) => {
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    // Kiểm tra các quy tắc
    if (rules) {
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        if (rule.required && !inputValue) {
          setError(rule.message || 'Vui lòng nhập giá trị');
          return;
        } else if (rule.minLength && inputValue.length < rule.minLength) {
          setError(rule.message || `Vui lòng nhập ít nhất ${rule.minLength} ký tự`);
          return;
        } else if (rule.pattern && !rule.pattern.test(inputValue)) {
          setError(rule.patternMessage || 'Giá trị không hợp lệ');
          return;
        } else {
          setError('');
        }
      }
    }
  };
  
  return (
    <div>
      <Input
        value={value}
        onChange={handleInputChange}
        {...inputProps}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default CInput;
