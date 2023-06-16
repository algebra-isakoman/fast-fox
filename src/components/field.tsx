import Input from "./input";

type FieldType = {
  id: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
};
const Field = ({ id, onChange, value, label }: FieldType) => {
  return (
    <>
      <div className="field">
        <label className="field__label" htmlFor={id}>
          {label ? label : id}
        </label>
        <Input name={id} value={value} onChange={onChange} />
      </div>
    </>
  );
};

export default Field;
