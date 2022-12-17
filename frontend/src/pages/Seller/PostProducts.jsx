import { Box, Button, FormLabel, Input, Textarea, useToast, Text } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { getItem } from '../../redux/localStorage';

const PostProducts = () => {
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const token = getItem("token");

  const toast = useToast();


  const postDetails = (imageUrl) => {

    if (imageUrl === undefined) {
      toast({
        title: "Please seclect an Image!",
        description: "warning",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (imageUrl.type === "image/jpeg" || imageUrl.type === "image/png" || imageUrl.type === "image/jpg") {
      const data = new FormData();
      data.append("file", imageUrl);
      data.append("upload_preset", "data-storage");
      data.append("cloud_name", "dztva4gbe");
      fetch("https://api.cloudinary.com/v1_1/dztva4gbe/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImageUrl(data.url.toString());
          // console.log(data);
          console.log(data.url.toString())
          return {
            data:data.url.toString()

          }
        })
        .catch((er) => {
          console.log(er);
        });
    } else {
      toast({
        title: "Please select an Image!",
        description: "warning",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
  };

  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log({brand: brand, description: description, imgUrl: imageUrl ,name: name, price: price});
    setBrand("");
    setDescription("")
    // setImageUrl("")
    if(!localStorage.getItem("token")){
      toast({
        title: "Login Please",
        description: "To add product, Signup as Seller",
        status: "warning",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
    }
    axios
      .post("https://glamour.onrender.com/products", {brand:brand,name: name, price: price, description:description, image_link:imageUrl, rating: rating, category: category}, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        toast({
          title: "Product added successfully...",
          description: "",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((e)=> {
        console.log("role err",e)
        toast({
          title: "Please Signup as a Seller",
          description: "",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      })
  }

  return (
    <Box w={'60%'} m={'auto'} mt={5}>
        <Text textAlign={'center'} fontFamily={'cursive'} fontSize={'3xl'}>
            Add Products
        </Text>
        <form onSubmit={handleSubmit} style={{marginTop:"20px"}}>

            <FormLabel fontSize={'2xl'}>Brand:</FormLabel>
            <Input 
              name='brand'
              value={brand}
              onChange={(e)=> setBrand(e.target.value)}
              type='text' 
              placeholder="Brand Name"
              required="required"
              mb={4} 
            />

            <FormLabel fontSize={'2xl'}>Name:</FormLabel>
            <Input 
              name='name'
              value={name}
              onChange={(e)=> setName(e.target.value)}
              type='text' 
              placeholder="Product Name"
              required="required"
              mb={4} 
            />

            <FormLabel fontSize={'2xl'}>Price:</FormLabel>
            <Input 
              name='price'
              value={price}
              onChange={(e)=> setPrice(e.target.value)}
              type='text' 
              placeholder="Price of the product"
              required="required"
              mb={4} 
            />

            <FormLabel fontSize={'2xl'}>Rating:</FormLabel>
            <Input 
              name='rating'
              value={rating}
              onChange={(e)=> setRating(e.target.value)}
              type='text' 
              placeholder="Rating of the product"
              required="required"
              mb={4} 
            />

            <FormLabel fontSize={'2xl'}>Category:</FormLabel>
            <Input 
              name='category'
              value={category}
              onChange={(e)=> setCategory(e.target.value)}
              type='text' 
              placeholder="Rating of the product"
              required="required"
              mb={4} 
            />

            <FormLabel fontSize={'2xl'}>Quantity:</FormLabel>
            <Input 
              name='quantity'
              value={quantity}
              onChange={(e)=> setQuantity(e.target.value)}
              placeholder='Write about the product' 
              type='text' 
              required="required"
              mb={4}
            />

            <FormLabel fontSize={'2xl'}>Description:</FormLabel>
            <Textarea 
              name='content'
              value={description}
              onChange={(e)=> setDescription(e.target.value)}
              placeholder='Write about the product' 
              type='text' 
              required="required"
              mb={4}
            />

            <FormLabel fontSize={'2xl'}>Add Image</FormLabel>
            <Input 
              type='file' 
              name='avatar'
              w={'250px'} 
              mb={4}
              onChange={(e)=>postDetails(e.target.files[0])}
            />

            <Button type='submit' colorScheme='teal' ml={'100px'} mb={5}>
              Add Product
            </Button>
        </form>
    </Box>
  )
}

export default PostProducts