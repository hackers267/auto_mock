import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import { mock } from "../templates/mock";

const ast = parse(mock, { sourceType: "module", plugins: ["typescript"] });
traverse(ast, {
  ObjectExpression(path) {
    if (t.isObjectExpression(path.node)) {
      console.log(path.node.properties);
    }
  },
});
