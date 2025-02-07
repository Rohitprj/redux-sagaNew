import { View, Text, Image, ScrollView, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { mobiles } from "../constants/Data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/addToCart";
import { cartSelector } from "../redux/selectors/addToCart";
import { Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function index() {
  const dispatch = useDispatch();
  const [cart, setCart] = useState(0);
  const data = useSelector(cartSelector);
  console.log("WarningWarning", data);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  useEffect(() => {
    setCart(data.length);
  }, [data]);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 40 }}>Mobiles</Text>
        <Text style={{ fontWeight: "900", fontSize: 20 }}> Cart: {cart}</Text>
        <Link href={"./auth"}>
          <Octicons name="sign-in" size={24} color="black" />
        </Link>
      </View>
      <ScrollView style={{ marginBottom: 100 }}>
        {mobiles.map((item) => (
          <View
            key={item.id}
            style={{ alignItems: "center", backgroundColor: "#ccffeb" }}
          >
            <Image
              source={{ uri: item.img }}
              style={{ height: 300, width: 150 }}
            />
            <Text style={{ textAlign: "center" }}>{item.name}</Text>
            <Text style={{ textAlign: "center" }}>{item.price}</Text>
            <View style={{ marginBottom: 10 }}>
              <Button
                title="Add to cart"
                onPress={() => {
                  handleAddToCart(item);
                  // dispatch(addToCart(item));
                  // console.warn("Working", item);
                }}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
// https://api.coindesk.com/v1/bpi/currentprice.json
