import {parse} from "@babel/parser"
import traverse from "@babel/traverse";
import {columns} from "../templates/columns";

const ast = parse(columns,{plugins:["typescript"]});
traverse(ast,{
    VariableDeclaration:function (path){
        console.log(path)
    }
})
