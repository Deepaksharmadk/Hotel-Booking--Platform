import express, { Request, Response } from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import Hotel from "../model/hotel.model";
import { body } from "express-validator";
import { HotelType } from "../shared/types";

export const myHotel = async (req: Request, res: Response) => {
  try {
    const imageFile = req.files as Express.Multer.File[];
    const newHotel: HotelType = req.body;
    const uploadPromises = imageFile.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      let dataURI = `data:${image.mimetype};base64,${b64}`;
      const res = await cloudinary.v2.uploader.upload(dataURI);
      console.log(res);
      return res.url;
    });
    const imageUrls = await Promise.all(uploadPromises);
    console.log(imageUrls);
    newHotel.imageUrls = imageUrls;
    newHotel.lastUpdated = new Date();
    newHotel.userId = req.userId;
    const hotel = new Hotel(newHotel);
    await hotel.save();
    res.status(201).json({ message: "Hotel created successfully", hotel });
  } catch (error) {
    console.log("error creating hotel", error);
    res.status(500).json({ message: "Error creating hotel" });
  }
};
