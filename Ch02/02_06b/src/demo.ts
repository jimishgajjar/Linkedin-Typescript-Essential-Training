
interface Contact {
    id: number;
    name: string;
    clone(name: string): Contact;
}

function clone(source: Contact): Contact {
    return Object.assign({}, source);
}

const contactA: Contact = {
    id: 1,
    name: "John Doe",
    clone(name: string): Contact {
        return clone(this);
    }
};
const contactB = clone(contactA);
