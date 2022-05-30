import * as styles from "./PropsTable.css";

const Td = ({ children }: any) => <td className={styles.td}>{children}</td>;
const Th = ({ children }: any) => <td className={styles.th}>{children}</td>;

type Prop = {
  name: string;
  description: string;
  defaultValue: {
    value: string;
  };
  required: boolean;
  type: {
    raw: string;
    name: string;
  };
};

const PropsTable = ({ types }: { types: Prop[] }) => {
  const props = Object.values(types);

  return (
    <table className={styles.table} cellSpacing="0">
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Description</Th>
          <Th>DefaultValue</Th>
          <Th>required</Th>
          <Th>type</Th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop) => (
          <tr key={prop.name}>
            <Td>{prop.name}</Td>
            <Td>{prop.description || "-"}</Td>
            <Td>{prop.defaultValue?.value || "-"}</Td>
            <Td>{prop.required ? "true" : "false"}</Td>
            <Td>{prop.type.raw || prop.type.name}</Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PropsTable;
