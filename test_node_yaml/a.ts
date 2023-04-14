import fs from "fs";
import YAML from "yaml";


let buffer = fs.readFileSync('obj.yaml', 'utf8');
let config = YAML.parse(buffer);
console.log(config);

var serverBase = {
    host: "ihaiu.com",
    name: "爱海游"
};

var obj = {
    name:"zf",
    age: 18,
    city:{
        code:"123",
        adder:"Shang Hai",
        court:"China"
    },
    laungs:[
        {name:"C#", id: 1},
        {name:"JavaScript", id: 2},
        {name:"TypeScript", id: 3},
    ],
    books: [
        [1, "C#"],
        [2, "JS"],
        [3, "TS"]
    ],
    "复杂的 key": "啦 啦 啦 啦 啦 啦",
    companies: [
        { id: 1, name: 'company1', price: '200W' },
        { id: 2, name: 'company2', price: '500W' }
      ],
      
    languages: [ 'Ruby', 'Perl', 'Python' ],
    websites: {
        YAML: 'yaml.org',
        Ruby: 'ruby-lang.org',
        Python: 'python.org',
        Perl: 'use.perl.org'
    },
    boolean: [ true, false ],
    float: [ 3.14, 685230.15 ],
    int: [ 123, '0b1010_0111_0100_1010_1110' ],
    '': { nodeName: 'node', parent: null },
    string: [ '哈哈', 'Hello world', 'newline newline2' ],
    date: [ '2018-02-17' ],
    datetime: [ '2018-02-17T15:02:31+08:00' ],
    serverBase: serverBase,
    server1:{
        port: 8080,
        serverBase
    },
    server2:{
        port: 9090,
        base:serverBase
    },
    // fun:function(){return 1},
    // reg: /test/
};

var ymalStr = YAML.stringify(obj);
// console.log(ymalStr);
fs.writeFileSync('a.yaml',ymalStr);