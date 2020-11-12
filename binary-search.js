function binarySearch(compare) {
  return function search(
    sortedArray = [],
    needle,
    start = 0,
    end = sortedArray.length - 1
  ) {
    if (start > end) return null;
    const middle = Math.floor((start + end) / 2);
    switch (compare(sortedArray[middle], needle)) {
      case 0:
        return sortedArray[middle];
      case 1:
        return search(sortedArray, needle, start, middle - 1);
      case -1:
        return search(sortedArray, needle, middle + 1, end);
    }
  };
};

const compareUser = ({ id: id1 }, { id: id2 }) =>
  id1 === id2 ? 0 : id1 > id2 ? 1 : -1;

const findUserById = binarySearch(compareUser);

const users = [
  { id: 5, username: "Javad" },
  { id: 10, username: "Vlad" },
  { id: 3, username: "Leroy" },
  { id: 18, username: "Stefan" },
  { id: 4, username: "Hossein" },
  { id: 9, username: "Abe" },
];

const sortedUsersById = users.sort(compareUser);

console.log(sortedUsersById);

const user = findUserById(sortedUsersById, { id: 4 });

console.log(user);
