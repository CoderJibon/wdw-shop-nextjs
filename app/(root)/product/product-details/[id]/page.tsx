import { singleProduct } from "@/Requests/Requests";

export default async function productPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const getPD = await singleProduct(id);
  return <div></div>;
}
