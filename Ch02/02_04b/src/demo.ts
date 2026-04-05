interface Contact extends address {
    id: number;
    name: ContactName;
    birthDate?: Date;
    status: ContactStatus;
}

interface address {
    street: string;
    city: string;
    country: string;
}

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    Pending = "pending"
}

let primaryContact: Contact = {
    id: 1,
    name: "John Doe",
    birthDate: new Date("1990-01-01"),
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
    status: ContactStatus.Active
}

type ContactName = string;