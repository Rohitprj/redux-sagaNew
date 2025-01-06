import { View, Text, Image, ScrollView, Button } from "react-native";
import React from "react";
import { mobiles } from "../constants/Data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/addToCart";

export default function index() {
  const data = useSelector((state) => state.reducer);
  console.warn("Warning", data);

  return (
    <View>
      <Text style={{ fontWeight: "900", fontSize: 40 }}>Mobiles</Text>
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
                  useDispatch(addToCart(item));
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
