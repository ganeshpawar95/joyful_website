// dynamic form
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Fragment } from "react";
import { Form, Input, DatePicker, Upload, Checkbox, Radio } from "antd";
import { UploadOutlined } from "@ant-design/icons";

type DYDropdownProps = {
  label_name: string;
  options: [];
};

function DYDropdown({ label_name }: DYDropdownProps) {
  return (
    <div className="mt-5 flex items-center gap-x-4">
      <h5>{label_name}:</h5>
      <Select>
        <SelectTrigger className="w-[200px] bg-white">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Small</SelectItem>
          <SelectItem value="dark">Medium</SelectItem>
          <SelectItem value="system">Large</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

function DYRadioField({
  label_name,
  name,
  options,
}: DYDropdownProps & { name: string }) {
  return (
    <Form.Item
      name={name}
      label={label_name}
      rules={[{ required: true, message: `Please select ${label_name}` }]}
    >
      <Radio.Group>
        {options?.map((opt) => (
          <Radio key={opt} value={opt}>
            {opt}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
}

function DYCheckBox({
  label_name,
  name,
  options,
}: DYDropdownProps & { name: string }) {
  return (
    <Form.Item
      name={name}
      label={label_name}
      rules={[
        { required: true, message: `Please select at least one ${label_name}` },
      ]}
    >
      <Checkbox.Group options={options} />
    </Form.Item>
  );
}

function DYDateField({ label_name, name }: DYDropdownProps & { name: string }) {
  return (
    <Form.Item
      name={name}
      label={label_name}
      rules={[{ required: true, message: `Please select ${label_name}` }]}
    >
      <DatePicker style={{ width: "300px" }} />
    </Form.Item>
  );
}

function DYSinglePhotoField({
  label_name,
  name,
}: DYDropdownProps & { name: string }) {
  return (
    <Form.Item
      name={name}
      label={label_name}
      valuePropName="fileList"
      getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
      rules={[{ required: true, message: `Please upload ${label_name}` }]}
    >
      <Upload maxCount={1} beforeUpload={() => false}>
        <button type="button">
          <UploadOutlined /> Upload
        </button>
      </Upload>
    </Form.Item>
  );
}

function DYMultiplePhotoField({
  label_name,
  name,
}: DYDropdownProps & { name: string }) {
  return (
    <Form.Item
      name={name}
      label={label_name}
      valuePropName="fileList"
      getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
    >
      <Upload multiple maxCount={8} beforeUpload={() => false}>
        <button type="button">
          <UploadOutlined /> Upload
        </button>
      </Upload>
    </Form.Item>
  );
}

function DYTextField({ label_name, name }: DYDropdownProps & { name: string }) {
  return (
    <Form.Item
      name={name}
      label={label_name}
      rules={[{ required: true, message: `Please enter ${label_name}` }]}
    >
      <Input style={{ width: "300px" }} />
    </Form.Item>
  );
}

function DYShortNoteField({
  label_name,
  name,
}: DYDropdownProps & { name: string }) {
  return (
    <Form.Item
      name={name}
      label={label_name}
      rules={[{ required: true, message: `Please enter ${label_name}` }]}
    >
      <Input.TextArea style={{ width: "300px" }} rows={4} />
    </Form.Item>
  );
}

export default function DynamicForm(props: any) {
  const { data } = props;
  console.log("data==>", data);
  return (
    <>
      {/* .sort((a: any, b: any) => a.priority - b.priority) */}
      {[...data]
        ?.sort((a: any, b: any) => a.priority - b.priority)
        .map((master: any) => (
          <Fragment>
            {master.tag == "dropdown" && (
              <DYDropdown label_name={master.name} name={master.name} />
            )}
            {master.tag == "Radio Button" && (
              <DYRadioField
                label_name={master.name}
                name={master.name}
                options={master?.tag_optional?.options}
              />
            )}
            {master.tag == "Checkbox" && (
              <DYCheckBox
                label_name={master.name}
                name={master.name}
                options={master?.tag_optional?.options}
              />
            )}
            {master.tag == "Date" && (
              <DYDateField label_name={master.name} name={master.name} />
            )}
            {master.tag == "File Upload" && (
              <DYSinglePhotoField label_name={master.name} name={master.name} />
            )}
            {master.tag == "Multi File Upload" && (
              <DYMultiplePhotoField
                label_name={master.name}
                name={master.name}
              />
            )}
            {master.tag == "Text" && (
              <DYTextField label_name={master.name} name={master.name} />
            )}
            {master.tag == "Short Note" && (
              <DYShortNoteField label_name={master.name} name={master.name} />
            )}
          </Fragment>
        ))}
    </>
  );
}
