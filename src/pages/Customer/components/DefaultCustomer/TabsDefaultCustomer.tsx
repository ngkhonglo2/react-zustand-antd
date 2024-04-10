import CTabs from "../../../../Components/Tabs/CTabs";
import ContactInfoInTabs from "./ContactInfoInTabs";
import TermsOfPaymentInTabs from "./TermsOfPaymentInTabs";
import BankAccountInTabs from "./BankAccountInTabs";
import OtherAddressInTabs from "./OtherAddressInTabs";
import NoteInTabs from "./NoteInTabs";

interface TabsDefaultCustomerProps {
  belongTo: string;
}

const TabsDefaultCustomer = ({ belongTo }: TabsDefaultCustomerProps) => {
  const items = [
    {
      label: `Thông tin liên hệ`,
      key: "1",
      children: <ContactInfoInTabs />,
    },
    {
      label: `Điều khoản thanh toán`,
      key: "2",
      children: <TermsOfPaymentInTabs />,
    },
    {
      label: `Tài khoản ngân hàng`,
      key: "3",
      children: <BankAccountInTabs />,
    },
    {
      label: `Địa chỉ khác`,
      key: "4",
      children: <OtherAddressInTabs />,
    },
    {
      label: `Ghi chú`,
      key: "5",
      children: <NoteInTabs />,
    },
  ];
  return <CTabs arrayItem={items} />;
};

export default TabsDefaultCustomer;
