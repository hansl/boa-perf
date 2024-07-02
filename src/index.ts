import { Ajv } from "ajv";


const schema = new Ajv();

// A validate source.
const validateSource = schema.compile({
    type: "object",
    properties: {
        name: { type: "string" },
        cores: { type: "string" },
        systems: { type: "string" },
    },
    required: ["name"],
});

console.log(validateSource({ name: "test" }));
