import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import { mock } from "../templates/mock";
import generate from "@babel/generator";

const ast = parse(mock, { sourceType: "module", plugins: ["typescript"] });
traverse(ast, {
  ObjectExpression(path) {
    replaceRequestUrl(`Post /api/logout`);

    function replaceRequestUrl(url: string) {
      if (t.isObjectExpression(path.node)) {
        const properties = path.node.properties;
        properties.forEach((property) => {
          if (t.isObjectProperty(property)) {
            const key = property.key;
            if (t.isStringLiteral(key)) {
              key.value = url;
            }
          }
        });
      }
    }
  },
});
generate(ast).code;
