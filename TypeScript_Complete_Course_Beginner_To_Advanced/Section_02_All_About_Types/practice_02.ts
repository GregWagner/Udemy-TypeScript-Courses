enum Types {
  national = 'national',
  academic = 'academic',
  public = 'public',
}

type Book = {
  title: string;
  pages: number;
  isbn: string;
  genres: string[];
  members: Member[];
};

type Member = {
  name: string;
  address: string;
  [key: string]: string;
};

type Library = {
  name: string;
  address: string;
  numberOfBooks: number;
  type: Types;
  books: Book[];
};

const library: Library = {
  name: 'New York Library',
  address: '24 Some Street, New York',
  numberOfBooks: 1254,
  type: Types.national,
  books: [
    {
      title: 'Harry Potter',
      pages: 756,
      isbn: '123456789',
      genres: ['fantasy', 'adventure'],
      members: [
        {
          name: 'John Doe',
          address: '123 Main Street, New York',
        },
        {
          name: 'Jane Doe',
          address: '456 Main Street, New York',
        },
      ],
    },
    {
      title: 'Lord of the Rings',
      pages: 1215,
      isbn: '987654321',
      genres: ['fantasy', 'history', 'adventure'],
      members: [
        {
          name: 'Jane Doe',
          address: '456 Main Street, New York',
          email: '5VJbH@example.com',
        },
      ],
    },
  ],
};
