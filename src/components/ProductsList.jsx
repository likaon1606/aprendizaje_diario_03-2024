import { useQuery } from "react-query";
import ProductCard from "./ProductCard";
const ProductsList = () => {
  const getProducts = async () => {
    const response = await fetch("https://peticiones.online/api/products");
    return response.json();
  };

  const { data, status } = useQuery("products", getProducts);

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  if (status === "error") {
    return <p>¡Ha ocurrido un error!</p>;
  }

  return (
    <div>
      <h2>Lista de Productos</h2>
      <div className="products">
        {data.results.map((prod) => (
          <ProductCard product={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
