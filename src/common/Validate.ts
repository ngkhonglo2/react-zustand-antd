import { RuleObject } from "antd/es/form";
import { StoreValue } from "antd/es/form/interface";

export const validateEmail = (
  rule: RuleObject | any,
  value: StoreValue,
  callback: (error?: string) => void
) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value || emailRegex.test(value)) {
    callback(); // Không có lỗi
  } else {
    callback(`Vui lòng nhập địa chỉ ${rule.field} hợp lệ`); // Báo lỗi
  }
};

export const validatePhone = (
  rule: RuleObject | any,
  value: StoreValue,
  callback: (error?: string) => void
) => {
  rule
  const phoneRegex = /^[0-9]{10,11}$/; // Kiểm tra số điện thoại có 10 hoặc 11 chữ số
  if (!value || phoneRegex.test(value)) {
    callback(); // Không có lỗi
  } else {
    callback("Vui lòng nhập số điện thoại hợp lệ"); // Báo lỗi
  }
};
