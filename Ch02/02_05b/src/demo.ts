
interface Contact {
    id: number;
    name: string;
}

interface UserContact<TExternalId> {
    id: number;
    name: string;
    email: string;
    loadExternalId(): Task<TExternalId>;
}

function clone<T1, T2 extends T1>(source: T1): T2 {
    return Object.apply({}, source);
}

const contactA: Contact = {
    id: 1,
    name: "John Doe",
};
const contactB = clone<Contact, UserContact>(contactA);

const dateRange = {
    start: Date.now(),
    end: Date.now()
};
const dateRangeCopy = clone(dateRange);