import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductEdit from "./ProductEdit.component";

function ProductWrapper() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  return <ProductEdit editProductId={id} navigate={navigate} />;
}

export default ProductWrapper;
