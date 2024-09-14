import { connectDB } from "@/helper/db";
import { Item } from "@/models/itemModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, details, division, city, location, time, image, number } =
    await request.json();
  console.log("posting data: ", {
    name,
    details,
    division,
    city,
    location,
    time,
    image,
    number,
  });
  try {
    const item = new Item({
      name,
      details,
      division,
      city,
      location,
      time,
      image,
      number,
    });
    await connectDB();
    const createdItem = await item.save();
    return NextResponse.json(
      {
        message: "Item posted",
      },
      {
        status: 201,
      },
      {
        item: item,
      }
    );
  } catch (error) {
    console.log("Error posting item: ", error);
    return NextResponse.json(
      {
        message: "Item not added, please try again or contact us for support",
      },
      {
        status: 500,
      }
    );
  }
};
