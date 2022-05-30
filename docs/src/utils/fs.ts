import glo from "glob";
const { glob } = glo;
import path from "path";

type Paths = string[];

export const getComponentPaths = (): Paths => {
  return glob.sync("../design-system/src/components/**/*.docs.mdx", {
    cwd: process.cwd(),
    absolute: true,
  });
};

export const getComponentName = (pathname: string) => {
  const componentName = path.basename(pathname, ".mdx");
  return componentName.replace(path.extname(componentName), "");
};

export const getDocPaths = (): Paths => {
  return glob.sync("./src/content/**/*.mdx", {
    cwd: process.cwd(),
    absolute: true,
  });
};

export const getDocName = (pathname: string) => {
  const docName = path.basename(pathname, ".mdx");
  return docName.replace(path.extname(docName), "");
};
