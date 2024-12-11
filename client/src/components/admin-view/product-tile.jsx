/* eslint-disable react/prop-types */
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2 truncate">
            {product?.title}
          </h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              <span className="text-sm mr-1 text-red-600">₫</span>
              {product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-bold">
                <span className="text-sm mr-1 text-red-600">₫</span>
                {product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
          >
            Chỉnh sửa
          </Button>
          <Button onClick={() => handleDelete(product?._id)}>Xóa</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default AdminProductTile;
