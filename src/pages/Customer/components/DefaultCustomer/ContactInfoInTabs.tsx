import { Col, Row } from "antd";
import InputForm from "../../../../Components/Input/InputForm";
import InputNumberForm from "../../../../Components/Input/InputNumerForm";
import DatePickerForm from "../../../../Components/Input/DatePickerForm";

interface ContactInfoInTabsProps {
  belongTo: string;
}

const ContactInfoInTabs = ({ belongTo }: ContactInfoInTabsProps) => {
  return (
    <>
      {belongTo === "organize" ? (
        <Row gutter={32}>
          <Col span={12}>
            <div className="mb-3 text-base font-semibold">
              Thông tin liên hệ
            </div>
            <Row className="flex flex-col">
              <InputForm
                name="contact_person"
                inputProps={{ placeholder: "Họ và tên" }}
              />
              <InputForm
                name="email_person"
                inputProps={{ placeholder: "Email" }}
              />
              <Col span={12}>
                <InputNumberForm
                  name="phone_person"
                  inputProps={{ placeholder: "Số điện thoại" }}
                />
              </Col>
            </Row>

            <div className="mb-3 text-base font-semibold">Đại diện theo PL</div>
            <InputForm
              name="legal_representation"
              inputProps={{ placeholder: "Đại diện theo PL" }}
            />
          </Col>
          <Col span={12}>
            <div className="mb-3 text-base font-semibold">
              Người nhận hóa đơn điện tử
            </div>
            <Row className="flex flex-col">
              <InputForm
                name="bill_recipient"
                inputProps={{ placeholder: "Họ và tên" }}
              />
              <InputForm
                name="email_bill_recipient"
                inputProps={{
                  placeholder: `Email (Ngăn cách nhiều email bởi dấu phẩy ";")`,
                }}
              />
              <Col span={12}>
                <InputNumberForm
                  name="phone_bill_recipient"
                  inputProps={{ placeholder: "Số điện thoại" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <Row gutter={32}>
          <Col span={12}>
            <div className="mb-3 text-base font-semibold">
              Thông tin liên hệ
            </div>
            <Row className="flex flex-col">
              <InputForm
                name="email_person"
                inputProps={{ placeholder: "Email" }}
              />
              <Col span={12}>
                <InputNumberForm
                  name="phone_person"
                  inputProps={{ placeholder: "Điện thoại di động" }}
                />
              </Col>
              <Col span={12}>
                <InputNumberForm
                  name="landline_phone_person"
                  inputProps={{ placeholder: "Điện thoại cố định" }}
                />
              </Col>
            </Row>

            <div className="mb-3 text-base font-semibold">Đại diện theo PL</div>
            <InputForm
              name="legal_representation"
              inputProps={{ placeholder: "Đại diện theo PL" }}
            />
          </Col>
          <Col span={12}>
            <div className="mb-3 text-base font-semibold">
              Người nhận hóa đơn điện tử
            </div>
            <Row className="flex flex-col">
              <Col span={12}>
                <InputNumberForm
                  name="id_card"
                  inputProps={{ placeholder: "Số CMND/Thẻ căn cước", min: 0}}
                />
              </Col>
              <Col span={12}>
                <DatePickerForm
                  name="date_range"
                  dateProps={{ placeholder: "Ngày cấp" }}
                />
              </Col>
              <InputForm
                name="issued_by"
                inputProps={{
                  placeholder: `Nơi cấp`,
                }}
              />
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ContactInfoInTabs;
