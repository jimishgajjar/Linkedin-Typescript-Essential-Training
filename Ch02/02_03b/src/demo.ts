interface Contact extends address {
    id: number;
    name: ContactName;
    birthDate?: Date;
}

interface address {
    street: string;
    city: string;
    country: string;
}

let primaryContact: Contact = {
    id: 1,
    name: "John Doe",
    birthDate: new Date("1990-01-01"),
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
}

type ContactName = string;