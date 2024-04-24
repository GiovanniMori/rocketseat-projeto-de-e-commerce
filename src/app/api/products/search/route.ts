import { z } from "zod";

import data from "../data.json";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { searchParams } = request.nextUrl;
  const query = z.string().parse(searchParams.get("q"));

  const product = data.products.filter((product) => {
    return product.title.toLowerCase().includes(query.toLowerCase());
  });

  return Response.json(product);
}
