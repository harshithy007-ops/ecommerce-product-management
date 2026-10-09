const API_URL = '/api/products';

const form = document.getElementById('productForm');
const tableBody = document.getElementById('productTableBody');
const searchInput = document.getElementById('searchInput');
const formTitle = document.getElementById('formTitle');
const cancelButton = document.getElementById('cancelEdit');

const fields = {
  id: document.getElementById('productId'),
  name: document.getElementById('name'),
  category: document.getElementById('category'),
  price: document.getElementById('price'),
  stock: document.getElementById('stock'),
  image: document.getElementById('image'),
  description: document.getElementById('description')
};

const fetchProducts = async () => {
  const response = await fetch(API_URL);
  const products = await response.json();
  renderProducts(products);
};

const renderProducts = (products) => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const searchable = `${product.name} ${product.category}`.toLowerCase();
    return searchable.includes(query);
  });

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-state">No products found</td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered
    .map(
      (product) => `
        <tr>
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>${product.category}</td>
          <td>₹${Number(product.price).toFixed(2)}</td>
          <td>${product.stock}</td>
          <td class="actions">
            <button class="edit-btn" data-id="${product.id}">Edit</button>
            <button class="delete-btn" data-id="${product.id}">Delete</button>
          </td>
        </tr>
      `
    )
    .join('');

  bindActionEvents();
};

const bindActionEvents = () => {
  document.querySelectorAll('.edit-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      const id = button.dataset.id;
      const response = await fetch(`${API_URL}/${id}`);
      const product = await response.json();

      fields.id.value = product.id;
      fields.name.value = product.name;
      fields.category.value = product.category;
      fields.price.value = product.price;
      fields.stock.value = product.stock;
      fields.image.value = product.image || '';
      fields.description.value = product.description || '';

      formTitle.textContent = 'Edit Product';
      cancelButton.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.delete-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      const id = button.dataset.id;
      const confirmed = confirm('Are you sure you want to delete this product?');
      if (!confirmed) return;

      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      const result = await response.json();
      alert(result.message);
      fetchProducts();
    });
  });
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const payload = {
    name: fields.name.value.trim(),
    category: fields.category.value.trim(),
    description: fields.description.value.trim(),
    price: Number(fields.price.value),
    stock: Number(fields.stock.value),
    image: fields.image.value.trim()
  };

  const isEdit = Boolean(fields.id.value);
  const url = isEdit ? `${API_URL}/${fields.id.value}` : API_URL;
  const method = isEdit ? 'PUT' : 'POST';

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json();

  if (!response.ok) {
    alert(result.message || 'Something went wrong');
    return;
  }

  alert(result.message || 'Product saved successfully');
  form.reset();
  resetFormState();
  fetchProducts();
});

const resetFormState = () => {
  fields.id.value = '';
  formTitle.textContent = 'Add Product';
  cancelButton.classList.add('hidden');
};

cancelButton.addEventListener('click', () => {
  resetFormState();
  form.reset();
});

searchInput.addEventListener('input', fetchProducts);

fetchProducts();
