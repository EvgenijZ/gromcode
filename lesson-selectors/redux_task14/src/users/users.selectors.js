export const sortedUsers = (state) => state.usersList.sort((a, b) => a.age - b.age);
export const sortedFilteredUsers = (state) => state.filteredUsers.sort((a, b) => a.age - b.age);