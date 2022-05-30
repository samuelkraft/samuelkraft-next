import { parse as docgen } from "react-docgen-typescript";
import lodash from "lodash";
const { keyBy, mapValues } = lodash;
export const getTypes = (pathname: string) => {
  const types = docgen(pathname, {
    shouldExtractValuesFromUnion: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
  });

  const typesByDisplayName = keyBy(types, "displayName");
  const parsedTypes = mapValues(typesByDisplayName, (component) =>
    mapValues(component.props || {}, (prop) => ({
      name: prop.name,
      description: prop.description,
      defaultValue: prop.defaultValue,
      required: prop.required,
      type: prop.type,
    }))
  );
  return parsedTypes;
};
