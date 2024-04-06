import { RuleObject } from "antd/es/form";
import { StoreValue } from "antd/es/form/interface";
import { emailRegex, phoneRegex } from "./Regex";

export const validateEmail = (
  rule: RuleObject | any,
  value: StoreValue,
  callback: (error?: string) => void
) => {
  rule
  if (!value || emailRegex.test(value)) {
    callback(); // Không có lỗi
  } else {
    callback(`Vui lòng nhập địa chỉ email hợp lệ`); // Báo lỗi
  }
};

export const validatePhone = (
  rule: RuleObject | any,
  value: StoreValue,
  callback: (error?: string) => void
) => {
  rule
  if (!value || phoneRegex.test(value)) {
    callback(); // Không có lỗi
  } else {
    callback("Vui lòng nhập số điện thoại hợp lệ"); // Báo lỗi
  }
};
