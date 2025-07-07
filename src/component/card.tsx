import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
interface products {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
}
export default function CustomCard({
  image,
  title,
  price,
  rating,
  category,
}: products) {
  const [hover, setHover] = useState(false);
  return (
    <Card className="flex flex-col justify-center w-[300px] h-[500px] ">
      <CardAction className=" flex flex-row justify-end items-end self-end pe-3">
        <Button
          className="cursor-pointer bg-transparent border-white rounded-none hover:bg-transparent"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Heart
            fill={hover ? "#FF4F0F" : "#FFFFFF"}
            color={hover ? "#FFFFFF" : "#FF4F0F"}
          />
        </Button>
      </CardAction>
      <CardHeader className="justify-center w-auto h-[120px]">
        <img src={image} width={100} height={100} />
      </CardHeader>
      <CardTitle className="pt-6 ps-2 text-center h-[120px]">
        <span className="text-lg">{title}</span>
      </CardTitle>
      <CardContent className="h-[120px]">
        <div>
          <span className="font-bold">Price: </span>${price}
        </div>
        <div className="font-bold">⭐{rating.rate}</div>
        <div>
          <span className="font-bold">Category:</span> {category}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 content-end justify-center">
        <Button style={{ width: "240px" }}>Add to cart</Button>
      </CardFooter>
    </Card>
  );
}
