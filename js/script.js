Sortable.create(sortable, {
  animation: 200,
  group: {
    name: 'a',
    pull: 'clone',
    put: false
  },
  sort: false
});

Sortable.create(sortable2, {
  animation: 200,
  group: "a"
});
