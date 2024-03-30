import { useQuery } from "react-query";
import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductsList = () => {
  const [page, setPage] = useState(1);

  const getProducts = async ({ queryKey }) => {
    const response = await fetch(
      `https://peticiones.online/api/products?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, status } = useQuery(["products", page], getProducts);

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  if (status === "error") {
    return <p>¡Ha ocurrido un error!</p>;
  }

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      <div>
        <button onClick={() => setPage(page - 1)}>Anterior</button>
        <button onClick={() => setPage(page + 1)}>Siguiente</button>
      </div>
      <div className="products">
        {data.results.map((prod) => (
          <ProductCard key={prod._id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
