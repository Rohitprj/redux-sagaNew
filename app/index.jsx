import { View, Text, Image, ScrollView, Button, Alert } from "react-native";
import React from "react";

export default function index() {
  const mobiles = [
    {
      id: 1,
      name: "Samsung",
      price: "1,30,000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_ePQhD5vqHmFUHUI4IQu67PkCxh7AGanHA&s",
    },
    {
      id: 2,
      name: "Iphone",
      price: "2,30,000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_ePQhD5vqHmFUHUI4IQu67PkCxh7AGanHA&s",
    },
    {
      id: 3,
      name: "Oppo",
      price: "30,000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_ePQhD5vqHmFUHUI4IQu67PkCxh7AGanHA&s",
    },
    {
      id: 4,
      name: "Oneplus",
      price: "50,000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_ePQhD5vqHmFUHUI4IQu67PkCxh7AGanHA&s",
    },
  ];
  return (
    <View>
      <Text style={{ fontWeight: "900", fontSize: 40 }}>Mobiles</Text>
      <ScrollView>
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
                  console.warn("Working");
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
