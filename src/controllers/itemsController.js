// In-memory store for demonstration — swap with a real DB/model layer as needed
let items = [
  { id: 1, name: 'Sample item' }
];

exports.getAllItems = (req, res) => {
  res.json(items);
};

exports.getItemById = (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
};

exports.createItem = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const newItem = { id: items.length + 1, name };
  items.push(newItem);
  res.status(201).json(newItem);
};
